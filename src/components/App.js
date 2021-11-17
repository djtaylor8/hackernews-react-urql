import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '../styles/App.css';

import Header from './Header';
import CreateLink from './CreateLink';
import LinkList from './LinkList';
import Login from './Login';
import Search from './Search';

function App() {
  return (
    <div className='center w85'>
      <Header/>
      <div className='ph3 pv1 background-gray'>
        <Routes>
          <Route exact path='/' element={<Navigate replace to='/new/1' />}/>
          <Route exact path='/top' element={<LinkList />} />
          <Route exact path='new/:page' element={<LinkList />} />
          <Route exact path='/create' element={<CreateLink />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/search' element={<Search /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
