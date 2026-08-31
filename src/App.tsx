import type { FunctionComponent } from 'react'

interface typeAbacate {
  abacate: string
}

const Teste: FunctionComponent<typeAbacate> = ({ abacate }) => {
  const teste: string = abacate
  return <h1>{teste}</h1>
}

export default Teste
