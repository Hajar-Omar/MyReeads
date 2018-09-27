import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './booksList';
import SearchBook from './searchBook';


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    console.log(BooksAPI.getAll())
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => {
    BooksAPI.getAll().then(books => this.setState({ books }))
  })
}


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksList books={this.state.books}/>
        )} />
        <Route path="/search" render={() => (
          <SearchBook books={this.state.books} onUpdateShelf={this.updateShelf}  />
        )} />
      </div>
    )
  }
}

export default BooksApp
