import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BooksList extends Component {
  //   ►


  render() {

    const { books } = this.props
    const options = ['currentlyReading', 'wantToRead', 'read'];


    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            {options.map((bookShelf) => (
              <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter(bookS => bookS.shelf === bookShelf).map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style=
                              {{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.subtitle}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

      </div>

    )
  }


}

export default BooksList
