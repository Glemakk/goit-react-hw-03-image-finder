// import React from 'react'

import React, { Component } from 'react'
import { toast } from 'react-toastify'
import {
  Header,
  Form,
  SearchButton,
  SearchFormButtonLabel,
  Input,
} from './Searchbar.styled'

export default class Searchbar extends Component {
  state = {
    img: '',
  }

  handleChange = ({ currentTarget }) => {
    const value = currentTarget.value
    // const name = currentTarget.name

    this.setState({
      img: value.toLowerCase(),
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { img } = this.state
    const { onSubmit } = this.props
    // const notify = () => toast('Tap text for searching')

    if (img.trim() === '') {
      toast.warning('Tap some word for searching!')
      //   alert('Tap text for searching')
      return
    }
    onSubmit(img)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({ img: '' })
  }

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchButton>

          <Input
            type="text"
            name="img"
            value={this.state.img}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    )
  }
}

// function Searchbar({ onSubmit }) {
//   return (
//     <header className="Searchbar">
//       <form className="SearchForm" onSubmit={onSubmit}>
//         <button type="submit" className="SearchForm-button">
//           <span className="SearchForm-button-label">Search</span>
//         </button>

//         <input
//           className="SearchForm-input"
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   )
// }

// export default Searchbar
