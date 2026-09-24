import './header.style.css'
import { IoCartOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-title'>
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
      </div>
      <div className='header-items'>
        <div className='header-item'>Explorar</div>
        <div className='header-item'>Login</div>
        <div className='header-item'>Criar conta</div>
        <div className='header-item'>
          <IoCartOutline size='2rem' />
          Carrinho
        </div>
      </div>
    </div>
  )
}

export default Header
