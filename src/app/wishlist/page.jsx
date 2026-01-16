'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useWishlist } from '@/hooks/use-wishlist'

const WishlistPage = () => {
    const { wishlist, removeFromWishlist, clearWishlist, isLoaded } = useWishlist()

    if (!isLoaded) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <div className='text-lg font-semibold'>Loading wishlist...</div>
            </div>
        )
    }

    if (wishlist.length === 0) {
        return (
            <div className='py-12'>
                <h1 className='text-4xl font-bold mb-8'>My Wishlist</h1>
                <div className='flex flex-col items-center justify-center min-h-96 gap-4'>
                    <div className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                        Your wishlist is empty
                    </div>
                    <p className='text-gray-600 dark:text-gray-400 mb-6'>
                        Start adding your favorite products to your wishlist!
                    </p>
                    <Link href='/'>
                        <Button className='bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'>
                            Browse Products
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='py-12'>
            <div className='flex items-center justify-between mb-8'>
                <div>
                    <h1 className='text-4xl font-bold mb-2'>My Wishlist</h1>
                    <p className='text-gray-600 dark:text-gray-400'>
                        You have {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in your wishlist
                    </p>
                </div>
                {wishlist.length > 0 && (
                    <button
                        onClick={() => {
                            if (confirm('Are you sure you want to clear your wishlist?')) {
                                clearWishlist()
                            }
                        }}
                        className='text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-semibold'
                    >
                        Clear Wishlist
                    </button>
                )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {wishlist.map((product) => (
                    <div
                        key={product.id}
                        className='border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-[#1a1a1a] dark:border-gray-700'
                    >
                        {/* Product Image */}
                        <div className='h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center'>
                            <img
                                src={`/${product.image}`}
                                alt={product.name}
                                className='h-32 w-32 object-contain'
                            />
                        </div>

                        {/* Product Info */}
                        <div className='p-4'>
                            <div className='flex items-start justify-between mb-2'>
                                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                    {product.name}
                                </h3>
                                {!product.inStock && (
                                    <span className='text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-2 py-1 rounded'>
                                        Out of Stock
                                    </span>
                                )}
                            </div>

                            <p className='text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2'>
                                {product.description}
                            </p>

                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-sm text-gray-500 dark:text-gray-400'>
                                    {product.category}
                                </span>
                                <span className='text-yellow-500 text-sm font-semibold'>
                                    ★ {product.rating} ({product.reviews})
                                </span>
                            </div>

                            <div className='flex items-center justify-between gap-2'>
                                <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                                    ${product.price}
                                </span>
                                <div className='flex gap-2'>
                                    <button
                                        onClick={() => removeFromWishlist(product.id)}
                                        className='px-3 py-2 rounded bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white transition-colors'
                                        title='Remove from wishlist'
                                    >
                                        ❌
                                    </button>
                                    <Link href={`/projects/${product.id}`}>
                                        <Button className='bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'>
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-12 pt-8 border-t dark:border-gray-700'>
                <Link href='/projects'>
                    <Button
                        variant='outline'
                        className='dark:border-gray-600'
                    >
                        ← Continue Shopping
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default WishlistPage