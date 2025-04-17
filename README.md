# OtterFox Shop - Angular E-commerce Project

![OtterFox Logo](https://cdn-icons-png.flaticon.com/512/2611/2611879.png)

An Angular e-commerce application that allows users to browse products, filter by categories, search for specific items, and manage a shopping cart.

## Features

- **Product Catalog:** Browse and search through products
- **Category Filtering:** Filter products by category (clothing, shoes, accessories, jewelry)
- **Search Functionality:** Search products by name
- **Shopping Cart:** Add, remove items, and view total price
- **Responsive Design:** Works on mobile and desktop devices

## Installation and Setup

1. Clone the repository:
```
git clone https://github.com/Nikita3301/shop-otterfox-angular.git
cd shop-otterfox-angular
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`
## Live Demo

Experience the application without installation:

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-badge-id/deploy-status)](https://shop-otterfox.netlify.app/)

* View and interact with the full application 
* Test all features in real-time
* No login required to browse products

Access the demo: [https://shop-otterfox.netlify.app/](https://shop-otterfox.netlify.app/)

## Technologies Used

- Angular 15
- TypeScript
- RxJS
- Bootstrap 5
- ng-bootstrap
- Font Awesome
- Local Storage for cart persistence

## Project Structure

```
shop_otterfox/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cart/         # Cart component
│   │   │   ├── header/       # Header with search and cart icon
│   │   │   ├── product/      # Product listing and filtering
│   │   ├── service/
│   │   │   ├── api.service.ts    # Product data fetching
│   │   │   ├── cart.service.ts   # Cart management
│   │   ├── shared/
│   │   │   ├── filter.pipe.ts    # Filter pipe for search
│   ├── assets/               # Static assets
│   ├── environments/         # Environment configuration
```
