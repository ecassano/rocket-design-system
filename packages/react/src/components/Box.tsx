import { ComponentProps } from '@stitches/react'
import { ElementType } from 'react'
import { styled } from '../styles'

const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

// eslint-disable-next-line prettier/prettier
interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

export { Box }
export type { BoxProps }
