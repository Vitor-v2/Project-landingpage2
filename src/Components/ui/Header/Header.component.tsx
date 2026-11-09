import { Link } from 'react-router-dom'
import './header.style.css'
import { IoCartOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <div className='header-container'>
      <Link className='header-title' to='/'>
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 2L2 7L12 12L22 7L12 2Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2 17L12 22L22 17'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2 12L12 17L22 12'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <h2 className='header-items'>CLUB CLOTHING</h2>
      </Link>
      <div className='header-items'>
        <div className='header-item'>
          <p>Explorar</p>
        </div>
        <Link to='/login' className='header-item'>
          Login
        </Link>
        <Link to='/create-account' className='header-item'>
          <p>Criar conta</p>
        </Link>
        <div className='header-item'>
          <IoCartOutline size='2rem' />
          <p>Carrinho</p>
        </div>
      </div>
    </div>
  )
}

export default Header
