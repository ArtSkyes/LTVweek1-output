import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const BookLayout = () => {
    return (
        <div className='text-red-500 mt-5'>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            <Outlet context={{ hello: "World" }} />
        </div>
    )
}

export default BookLayout;