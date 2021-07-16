import React from 'react'
import { LoadMoreButton } from './Button.styled'
import PropTypes from 'prop-types'

// async function onClickButtonMore(callback) {
//   const response = await callback();

//   if (response) {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     })
//   }
// }

function Button({ text, onClick, page }) {
  if (page > 1) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      {text}
    </LoadMoreButton>
  )
}

Button.defaultProps = {
  onClick: () => null,
}
Button.propType = {
  onClick: PropTypes.func,
}
export default Button
