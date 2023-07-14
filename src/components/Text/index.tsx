import { ComponentPropsWithoutRef } from "react"
import styled, { CSSProperties } from "styled-components"


interface Props extends ComponentPropsWithoutRef<'span'> {
  color?: string
}

export const Text = ({ color = '#2d2d2d', children, ...props }: Props) => {
  const TextComponent = styled.span`
    color: ${color};
    font-weight: 400;
    font-size: 18px;
  `

  return (
    <TextComponent {...props}>
      {children}
    </TextComponent>
  )
}