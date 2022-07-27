import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/Content';
import {CartContextProvider} from './components/cart/cart-context/CartContext';

export default function App() {
    return (
        <CartContextProvider>
            <Header/>
            <Content/>
            <Footer/>
        </CartContextProvider>
    );
}