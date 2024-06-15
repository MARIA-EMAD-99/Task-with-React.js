import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import Details from './components/details/Details';
import NotFound from './components/notfound/NotFound';
import CartContextProvider from "./context/cartcontext";
import Beauty from './components/categories/Beauty';
import Fragrances from './components/categories/Fragrances';
import Furniture from './components/categories/Furniture';
import Groceries from './components/categories/Groceries';
import ProductsByPrice from './components/price/ProductsByPrice';

function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Navigate to={'home'} /> },
        { path: 'home', element:  <Home />  },
        { path: 'cart', element:  <Cart /> },
        { path: 'products', element:  <Products/>  },
        { path: 'details/:id', element:  <Details/>  },
        { path: 'beauty', element:  <Beauty/>  },
        { path: 'fragrances', element:  <Fragrances/>  },
        { path: 'furniture', element:  <Furniture/>  },
        { path: 'groceries', element:  <Groceries/>  },
        { path: 'price', element:  <ProductsByPrice/>  },
        { path: '*', element: <NotFound /> },
      ]
    }
  ]);

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
