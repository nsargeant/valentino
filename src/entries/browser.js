// Styles
import './browser.scss';

// JS

import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../presentations/browser/main/main';
// import Redux, {createStore, combineReducers} from 'redux';

let hasRendered = false;

const bindRootToDOM = () => {

  let elBody = document.querySelector('body'),
      elMain = document.createElement('main');

  elBody.append(elMain);
}

const bindMainToRoot = () => {
  ReactDOM.render(
    <Main />,
    document.querySelector('main')
  );
};

const render = () => {
  if(!hasRendered) {
    hasRendered = true;
    bindRootToDOM();
    bindMainToRoot(); 
  }
}

document.onreadystatechange = render;
