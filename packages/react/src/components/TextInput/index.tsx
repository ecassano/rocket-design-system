import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

export { TextInput }
