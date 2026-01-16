# Ecommerce - Next.js Shopping Application

A modern, lightweight ecommerce application built with Next.js featuring product browsing, wishlist management, and shopping cart functionality.

## Features

- 🛍️ **Product Browsing** - Browse featured products on the home page
- ❤️ **Wishlist Management** - Add/remove products to your wishlist
- 🛒 **Shopping Cart** - Add products to cart with quantity management
- 💰 **Order Summary** - View total amount and item count
- 🌙 **Dark Mode** - Built-in dark theme support
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 💾 **Local Storage** - Cart and wishlist data persists across sessions

## Tech Stack

- **Framework**: Next.js 15+
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
│   ├── page.js                 # Home page with product listing
│   ├── [id]/page.jsx          # Product details page
│   ├── cart/page.jsx          # Shopping cart page
│   ├── wishlist/page.jsx      # Wishlist page
│   ├── about/page.jsx         # About page
│   ├── contact/page.jsx       # Contact page
│   ├── layout.js              # Root layout with theme provider
│   └── globals.css            # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.js          # Navigation header
│   │   └── Footer.js          # Footer component
│   ├── ThemeToggle/
│   │   └── ThemeToggle.js     # Dark/Light mode toggle
│   └── ui/                    # shadcn/ui components
├── hooks/
│   ├── use-cart.js            # Cart state management hook
│   ├── use-wishlist.js        # Wishlist state management hook
│   └── use-mobile.js          # Mobile detection hook
├── lib/
│   └── utils.js               # Utility functions
└── public/
    └── products.json          # Static product data
```

## Getting Started

### Prerequisites

- Node.js 18+ 
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

Products are stored in `public/products.json` with the following structure:

```json
{
  "id": 1,
  "name": "Product Name",
  "price": 99.99,
  "category": "Electronics",
  "description": "Product description",
  "image": "image-filename.svg",
  "rating": 4.5,
  "reviews": 128,
  "inStock": true
}
```

## Customization

### Adding New Products
Edit `public/products.json` and add new product objects following the structure above.

### Styling
- Modify Tailwind CSS classes in component files
- Update global styles in `src/app/globals.css`
- Configure theme in `src/app/layout.js`

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
- Image optimization with Next.js Image component
- CSS optimization with Tailwind
- Efficient state management with React hooks

## Troubleshooting

### Data Not Persisting
- Check if localStorage is enabled in your browser
- Clear browser cache and try again

### Products Not Loading
- Verify `public/products.json` exists and is valid JSON
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

**Created with ❤️ using Next.js and Tailwind CSS**
