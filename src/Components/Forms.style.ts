import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: auto;
  gap: 10px;
`

const TitleH2 = styled.h2`
  text-align: start;
`

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 400px;
`

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

export { FormContainer, TitleH2, Input, Form, SubmitButton, CheckboxContainer }
