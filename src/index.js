import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import $ from 'jquery';
$(document).ready(function () {
  irArriba();
}); //Hacia arriba

function irArriba() {
  $('.ir-arriba').click(function () {
    $('body,html').animate({ scrollTop: '0px' }, 1000);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(600);
    } else {
      $('.ir-arriba').slideUp(600);
    }
  });
  $('.ir-abajo').click(function () {
    $('body,html').animate({ scrollTop: '1000px' }, 1000);
  });
}
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
