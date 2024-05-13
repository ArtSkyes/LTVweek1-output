import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Books/Home';
import Book from './pages/Books/Book';
import BookList from './pages/Books/BookList';
import NewBook from './pages/Books/NewBook';
import NotFound from './pages/Books/NotFound';
import BookLayout from './pages/Books/BookLayout';

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <li>
              </li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/books/new">Add New Book</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/books' element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path=':id' element={<Book />} />
            <Route path='new' element={<NewBook />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;