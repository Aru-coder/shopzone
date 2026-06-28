#  ShopZone - E-Commerce SPA

A modern Single Page Application (SPA) built with **React**, **React Router**, and **Context API**. This project demonstrates client-side routing, global state management, protected routes, and persistent shopping cart functionality.

##  Live Demo

**Live URL:** (Add your Vercel deployment link here)

**GitHub Repository:** (Add your GitHub repository link here)

##  Features

###  Phase 1 - Routing

- Home Page
- Shop Page
- Contact Page
- Dynamic Product Details Page
- Client-side Routing using React Router
- Dynamic URLs using `useParams()`

###  Phase 2 - Global State Management

- Context API
- Add to Cart
- Remove from Cart
- Quantity Management
- Dynamic Cart Badge
- Cart Total Calculation
- Persistent Navbar

###  Phase 3 - Authentication & Protection

- Guest Login
- Protected Checkout Route
- Route Guard using ProtectedRoute
- Cart saved using localStorage
- Login state saved using localStorage

##  Tech Stack

- React
- React Router DOM
- Context API
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

##  Folder Structure
shopzone/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   └── Checkout.jsx
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── vercel.json
├── Prompts.md
├── package.json
└── README.md

##  API Used

DummyJSON Products API
https://dummyjson.com/products

##  Available Routes

| Route | Description |
| / | Home Page |
| /shop | Product Listing |
| /product/:id | Product Details |
| /cart | Shopping Cart |
| /contact | Contact Form |
| /login | Guest Login |
| /checkout | Protected Checkout |

## Project Features

- Responsive Design
- Product Listing
- Dynamic Product Details
- Shopping Cart
- Context API
- Protected Routes
- Local Storage
- Guest Authentication
- Dynamic Cart Badge

## Learning Outcomes

This project helped in understanding:

- React Components
- React Hooks
- React Router
- Context API
- State Management
- Protected Routes
- Local Storage
- API Integration
- Single Page Applications (SPA)

##  Author

Anushka 

Sprint 6 Project - ShopZone SPA

