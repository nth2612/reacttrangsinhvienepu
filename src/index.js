import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import './index.css';
import Content from './Content';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div id="shadow">
        <div id="main_container">
            <div style={{paddingTop: '5px'}}></div>
            <div id="middle_box"></div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    </div>
);