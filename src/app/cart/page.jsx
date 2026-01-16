'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart, isLoaded } = useCart()

    if (!isLoaded) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <div className='text-lg font-semibold'>Loading cart...</div>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <div className='py-12'>
                <h1 className='text-4xl font-bold mb-8'>Shopping Cart</h1>
                <div className='flex flex-col items-center justify-center min-h-96 gap-4'>
                    <div className='text-6xl mb-4'>🛒</div>
                    <div className='text-2xl font-semibold text-gray-700 dark:text-gray-300'>
                        Your cart is empty
                    </div>
                    <p className='text-gray-600 dark:text-gray-400 mb-6'>
                        Add some products to your cart to get started!
                    </p>
                    <Link href='/'>
                        <Button className='bg-blue-600 hover:bg-blue-700'>
                            Continue Shopping
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='py-12'>
            <h1 className='text-4xl font-bold mb-8'>Shopping Cart</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* Products List */}
                <div className='lg:col-span-2'>
                    <div className='bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden'>
                        {cart.map((product) => (
                            <div
                                key={product.id}
                                className='p-6 border-b dark:border-gray-700 flex gap-4 items-start'
                            >
                                {/* Image */}
                                <div className='w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center flex-shrink-0'>
                                    <img
                                        src={`/${product.image}`}
                                        alt={product.name}
                                        className='h-20 w-20 object-contain'
                                    />
                                </div>

                                {/* Details */}
                                <div className='flex-1'>
                                    <h3 className='font-semibold text-lg text-gray-900 dark:text-white mb-1'>
                                        {product.name}
                                    </h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
                                        {product.category}
                                    </p>
                                    <p className='text-lg font-bold text-gray-900 dark:text-white'>
                                        ${product.price}
                                    </p>
                                </div>

                                {/* Quantity and Actions */}
                                <div className='flex flex-col items-end gap-3'>
                                    <div className='flex items-center gap-2'>
                                        <button
                                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                            className='px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600'
                                        >
                                            −
                                        </button>
                                        <span className='w-8 text-center font-semibold'>
                                            {product.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                            className='px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600'
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className='font-bold text-gray-900 dark:text-white'>
                                        ${(product.price * product.quantity).toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => removeFromCart(product.id)}
                                        className='text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300'
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary */}
                <div className='lg:col-span-1'>
                    <div className='bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md p-6 sticky top-20'>
                        <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
                            Order Summary
                        </h2>

                        <div className='space-y-4 mb-6 border-b dark:border-gray-700 pb-6'>
                            <div className='flex justify-between text-gray-600 dark:text-gray-400'>
                                <span>Items ({cart.length})</span>
                            </div>
                            <div className='flex justify-between font-bold text-lg text-gray-900 dark:text-white'>
                                <span>Total:</span>
                                <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <Link href='/' className='block'>
                                <Button className='w-full bg-blue-600 hover:bg-blue-700'>
                                    Continue Shopping
                                </Button>
                            </Link>
                            <button
                                onClick={() => {
                                    if (confirm('Proceed to checkout?')) {
                                        alert('Checkout not implemented yet')
                                    }
                                }}
                                className='w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold'
                            >
                                Checkout
                            </button>
                            <button
                                onClick={() => {
                                    if (confirm('Clear your cart?')) {
                                        clearCart()
                                    }
                                }}
                                className='w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold'
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage