import { loginWithGoogle } from '../config/auth/authLogin'
import {
  FormContainer,
  TitleH2,
  Input,
  Form,
  SubmitButton
} from './Forms.style'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: unknown) => {
    alert(data)
  }

  return (
    <FormContainer>
      <TitleH2>Login</TitleH2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='email'
          placeholder='Email'
          {...register('email', { required: 'Email is required' })}
        />
        {/* {formErrors.email && <p>{formErrors.email.message}</p>} */}

        <Input
          type='password'
          placeholder='Password'
          {...register('password', { required: 'Password is required' })}
        />
        {/* {formErrors.password && <p>{formErrors.password.message}</p>} */}

        <SubmitButton type='submit'>Login</SubmitButton>
        <SubmitButton type='button' onClick={loginWithGoogle}>
          Login with Google
        </SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default LoginForm
