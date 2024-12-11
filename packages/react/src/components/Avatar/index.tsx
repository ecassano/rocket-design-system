import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

// eslint-disable-next-line prettier/prettier
export interface AvatarProps extends ComponentProps<typeof AvatarImage> { }

const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

export { Avatar }
