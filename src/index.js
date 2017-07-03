require('./scss/index.scss');
import React, { Component } from 'react';
import { render } from 'react-dom';
import Settings from './pages/Builder/Builder';

render(
  <Settings/>,
  document.getElementById('root')
);
