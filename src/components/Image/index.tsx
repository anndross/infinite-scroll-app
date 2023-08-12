import { ComponentPropsWithoutRef } from "react"
import styled from "styled-components"

type Props = ComponentPropsWithoutRef<'img'>

export const Image = ({ ...props }: Props) => {
  const ImageComponent = styled.img`
    width: 100%;
    cursor: pointer;
    @media (max-width: 600px) {
    pointer-events: none;
  }
  `

  return <ImageComponent {...props} />
}