//import React from 'react';
import './App.module.scss';
import Header from './Header/Header.jsx';
import Nav from './Nav/Nav.jsx';
import Body from './Body/Body.jsx';
import Footer from './Footer/Footer.jsx';


const App = () => {
    return  (
        <div > 
            <Header/>
            <Nav/>
            <Body/>
            <Footer/>
        </div>
    );
}
export default App;