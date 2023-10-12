import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'



export default function Home() {

  return (
    <main>
      <h1>emirhan was here</h1>
      <Link href="/users">Click Me!</Link>
      <ProductCard/>
    </main>
  )
}
