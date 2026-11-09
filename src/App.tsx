import type { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './Components/ui/Header/Header.component'
import Footer from './Components/ui/Footer/Footer.component'
import LoginForm from './Components/LoginForm'
import CreateAccountForm from './Components/CreateAccountForm'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/create-account' element={<CreateAccountForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
