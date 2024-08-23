import React from 'react';

import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { Footer } from './layout/NavBarAndFooter/Footer';
import { HomePage } from './layout/HomePage/HomePage';
import { SearchBooksPage } from './layout/SearchBookPage/SearchBooksPage';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { BookCheckOutPage } from './layout/BookCheckOurPage/BookCheckOutPage';



export const App = () => (
  <div className='d-flex flex-column min-vh-100'>
    <NavBar />
    <div className='flex-grow-1'>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/search'>
          <SearchBooksPage />
        </Route>
        <Route path='/checkout/:bookId'>
          <BookCheckOutPage/>
        </Route>
      </Switch>
    </div>
    <Footer />
  </div>
)


