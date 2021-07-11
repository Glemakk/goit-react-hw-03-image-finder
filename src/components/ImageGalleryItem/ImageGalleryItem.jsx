import React from 'react'
import { Item, ItemImg } from './ImageGalleryItem.styled'

function ImageGalleryItem({ card }) {
  return (
    <Item>
      <ItemImg src={card.webformatURL} alt={card.tags} />
    </Item>
  )
}

export default ImageGalleryItem
