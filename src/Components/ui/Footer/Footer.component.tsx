import './footer.styles.css'

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer-title'>
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
        <h4 className='header-items'>
          CLUB <br />
          CLOTHING
        </h4>
      </div>
      <div className='item-container'>
        <h3>Início</h3>
        <p>Home</p>
      </div>
      <div className='item-container'>
        <h3>Sobre-nós</h3>
        <p>Informações da empresa</p>
        <p>Empresa</p>
        <p>Contato</p>
        <p>Blog</p>
      </div>
      <div className='item-container'>
        <h3>Suporte</h3>
        <p>FAQ</p>
        <p>Telefones</p>
        <p>Chat</p>
      </div>
    </div>
  )
}

export default Footer
