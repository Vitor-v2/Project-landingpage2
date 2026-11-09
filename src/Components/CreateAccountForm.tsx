import { useForm } from 'react-hook-form'
import {
  FormContainer,
  Input,
  Form,
  SubmitButton,
  CheckboxContainer
} from './Forms.style'

const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data))
  }

  return (
    <FormContainer>
      <h2>Create New Account</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          placeholder='Name'
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}

        <Input
          type='text'
          placeholder='Last Name'
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <span>This field is required</span>}

        <Input
          type='text'
          placeholder='Address'
          {...register('address', { required: true })}
        />
        {errors.address && <span></span>}

        <CheckboxContainer>
          <input
            type='checkbox'
            {...register('policies', { required: true })}
          />
          <label>I agree to the policies</label>
        </CheckboxContainer>
        {errors.policies && <span>You must agree to the policies</span>}

        <SubmitButton type='submit'>Create Account</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default CreateAccountForm
