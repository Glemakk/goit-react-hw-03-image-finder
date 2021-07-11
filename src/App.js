import { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
// import 'react-toastify/dist/ReactToastify.css'
// const axios = require('axios')

export default class App extends Component {
  state = {
    image: '',
    newImage: null,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.image !== this.state.image) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.image}&page=1&key=21790462-d81f7d941fc30814a1e9b910b&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then((r) => r.json())
        .then((newImage) => this.setState({ newImage }))
      //   console.log(this.state.newImage)
    }
  }

  onFormSubmit = (image) => {
    this.setState({ image })
    // this.setState({ img })
  }
  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery
          //   images={this.state.image}
          searchQuery={this.state.newImage}
        />
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    )
  }
}

{
  /* //     {this.state.loading && <div>Загружаем...</div>}
      //     {this.state.images && (
      //       <div>{this.state.images.hits[0].largeImageURL}</div>
      //     )} */
}
