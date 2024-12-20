import { ROUTES } from '@/contants/path'
import { Link } from 'react-router-dom'

const productNav = [
  { label: '베스트', to: ROUTES.PRODUCTS.BEST },
  { label: '세일', to: ROUTES.PRODUCTS.SALE },
  { label: '여성', to: ROUTES.PRODUCTS.WOMEN },
  { label: '남성', to: ROUTES.PRODUCTS.MEN },
  { label: '키즈', to: ROUTES.PRODUCTS.KIDS },
]

const userNav = [
  { label: '마이페이지', to: ROUTES.MY_PAGE },
  { label: '위시리스트', to: ROUTES.WISHLIST },
  { label: '장바구니', to: ROUTES.CART },
  { label: '로그인', to: ROUTES.LOGIN },
]

export default function Header() {
  return (
    <header className="flex w-full border-b-4 px-5">
      <Link to="/" className="mr-5">
        Logo
      </Link>
      <section className="flex w-full justify-between">
        <nav>
          {productNav.map((nav) => (
            <Link key={nav.to} to={nav.to} className="mr-5">
              {nav.label}
            </Link>
          ))}
        </nav>
        <nav>
          {userNav.map((nav) => (
            <Link key={nav.to} to={nav.to} className="mr-5">
              {nav.label}
            </Link>
          ))}
        </nav>
      </section>
    </header>
  )
}
