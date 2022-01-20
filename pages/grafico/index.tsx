import React, { Component,useState, useEffect } from 'react';
import { App } from './App';
import ReactDOM from 'react-dom'


  function tick() {
        if (typeof (document) !== "undefined") {
          ReactDOM.render(    
          <React.StrictMode>
            <App />
          </React.StrictMode>
          , document.getElementById('root'));
        }
  }

  class Grafico extends React.Component {
    componentDidMount() {
      tick();
    }
    render() {
      return <h1>Hello</h1>;
    }
  }