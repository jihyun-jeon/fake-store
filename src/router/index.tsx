import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import MyPage from '@/pages/MyPage'
import ProductList from '@/pages/ProductList'
import Signup from '@/pages/Signup'
import WishList from '@/pages/WishList'
import { ROUTES } from '@/contants/path'

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.PRODUCTS.DEFAULT, element: <ProductList /> },
      { path: ROUTES.MY_PAGE, element: <MyPage /> },
      { path: ROUTES.WISHLIST, element: <WishList /> },
      { path: ROUTES.LOGIN, element: <Login /> },
      { path: ROUTES.SIGNUP, element: <Signup /> },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
