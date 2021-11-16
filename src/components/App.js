import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';

import Header from './Header';
import CreateLink from './CreateLink';
import LinkList from './LinkList';
import Login from './Login';

function App() {
  return (
    <div className='center w85'>
      <Header/>
      <div className='ph3 pv1 background-gray'>
        <Routes>
          <Route exact path='/' element={<LinkList />} />
          <Route exact path='/create' element={<CreateLink />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
