import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import People from './People';
import Navbar from './Navbar';
import Apis from './Apis';
import Effect from './Effect';
import Movie from './Movie';
import { Provider } from 'react-redux';
import store from './Store.js';
import Count from './Count.jsx';
import Reg from './Reg.jsx';
import Log from './Log.jsx';
import Detailmovie from './Detailmovie.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/app" element={<App/>}/>
        <Route path="/people" element={<People/>} /> 
        <Route path="/api" element={<Apis/>} />
        <Route path="/effect" element={<Effect/>} /> 
        <Route path="/count" element={<Count/>} />
        <Route path="/reg" element={<Reg/>} />
        <Route path="/log" element={<Log/>} />
      </Route>
      <Route path="/movie" element={<Movie/>} />
      <Route path='/view/:id' element={<Detailmovie/>}/>
    </Routes>  
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
