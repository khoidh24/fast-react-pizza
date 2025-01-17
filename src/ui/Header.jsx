import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/users/Username'

const Header = () => {
  return (
    <header className='flex items-center justify-between border-b border-stone-500 bg-yellow-500 p-4 uppercase'>
      <Link to='/' className=' tracking-widest'>
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  )
}

export default Header
