// import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'
import { List } from './ImageGallery.styled'

// function ImageGallery({ images }) {
//   console.log(images)
//   //   const { imgs } = this.props
//   return (
//     // <ul className="ImageGallery">
//     //   {/* {images.map((img) => (
//     //     <ImageGalleryItem key={img.id} item={img} />
//     //   ))} */}
//     //   Набор li с изображениями{images}
//     //   <li></li>
//     // </ul>
//     <div>
//       <p>{images}</p>
//     </div>
//   )
// }

// export default ImageGallery

import React, { Component } from 'react'

export default class ImageGallery extends Component {
  //   state = {
  //     newImage: null,
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.images !== this.props.images) {
  //       fetch(
  //         `https://pixabay.com/api/?q=${this.props.images}&page=1&key=21790462-d81f7d941fc30814a1e9b910b&image_type=photo&orientation=horizontal&per_page=5`,
  //       )
  //         .then((r) => r.json())
  //         .then((newImage) => this.setState({ newImage }))
  //     }
  //   }

  render() {
    // console.log(this.state.newImage)
    return (
      <List>
        {this.props.searchQuery &&
          this.props.searchQuery.hits.map((img) => (
            <ImageGalleryItem key={img.id} card={img} />
          ))}
      </List>
      //   <div>
      //     <p>{this.props.images}</p>
      //   </div>
    )
  }
}
