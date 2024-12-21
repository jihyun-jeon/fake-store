import { useParams } from 'react-router-dom'

export default function ProductList() {
  const { category } = useParams()

  return <div>ProductList {category}</div>
}
