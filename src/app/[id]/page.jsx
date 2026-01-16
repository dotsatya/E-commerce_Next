'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { useWishlist } from '@/hooks/use-wishlist'

const ProductDetailsPage = () => {
  const params = useParams()
  const productId = params.id
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { addToCart, isLoaded: cartLoaded } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist, isLoaded: wishlistLoaded } = useWishlist()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/products.json')
        const products = await response.json()
        const foundProduct = products.find((p) => p.id === parseInt(productId))

        if (foundProduct) {
          setProduct(foundProduct)
        } else {
          setError('Product not found')
        }
      } catch (err) {
        console.error('Failed to fetch product:', err)
        setError('Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    if (productId) {
      fetchProduct()
    }
  }, [productId])

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-lg font-semibold'>Loading...</div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
        <div className='text-2xl font-bold text-red-600'>
          {error || 'Product not found'}
        </div>
        <Link href='/'>
          <Button className='bg-blue-600 hover:bg-blue-700'>
            Back Home
          </Button>
        </Link>
      </div>
    )
  }

  const handleWishlist = () => {
    if (wishlistLoaded) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id)
      } else {
        addToWishlist(product)
      }
    }
  }

  return (
    <div className='py-12'>
      <Link href='/' className='mb-6 inline-block'>
        <Button variant='outline'>← Back</Button>
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md p-8'>
        {/* Product Image Section */}
        <div className='flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg'>
          <img
            src={`/${product.image}`}
            alt={product.name}
            className='h-64 w-64 object-contain'
          />
        </div>

        {/* Product Details Section */}
        <div className='flex flex-col justify-start'>
          <div className='mb-6'>
            <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-2'>
              {product.name}
            </h1>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded'>
                {product.category}
              </span>
              {!product.inStock && (
                <span className='text-sm px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded'>
                  Out of Stock
                </span>
              )}
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl font-bold text-yellow-500'>★ {product.rating}</span>
              <span className='text-gray-600 dark:text-gray-400'>
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price Section */}
          <div className='mb-6 pb-6 border-b dark:border-gray-700'>
            <p className='text-gray-600 dark:text-gray-400 text-sm mb-2'>Price</p>
            <p className='text-5xl font-bold text-gray-900 dark:text-white'>
              ${product.price}
            </p>
          </div>

          {/* Description Section */}
          <div className='mb-8'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
              About This Product
            </h3>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              {product.description}
            </p>
          </div>

          {/* Stock and CTA Section */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <span className='font-semibold text-gray-900 dark:text-white'>
                Availability:
              </span>
              <span
                className={`font-semibold ${product.inStock
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                  }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className='flex gap-4 pt-4'>
              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                className='flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded font-semibold'
              >
                {product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
              </button>
              <button
                onClick={handleWishlist}
                disabled={!wishlistLoaded}
                className={`flex-1 py-3 rounded font-semibold transition-colors ${wishlistLoaded && isInWishlist(product.id)
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                  }`}
              >
                {wishlistLoaded && isInWishlist(product.id) ? '❤️ In Wishlist' : '🤍 Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
