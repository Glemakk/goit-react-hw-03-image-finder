import React from 'react'
import { LoadMoreButton } from './Button.styled'

function Button({ text, onClick }) {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      {text}
    </LoadMoreButton>
  )
}

export default Button
