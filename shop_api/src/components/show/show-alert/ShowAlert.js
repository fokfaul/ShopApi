import './ShowAlert.css';
import {useEffect, useContext} from 'react';
import {CartContext} from '../../cart/cart-context/CartContext';

export default function ShowAlert() {
    const cart = useContext(CartContext);

    useEffect(() => {
        const timeoutId = setTimeout(cart.hideAlert, 2000);
        return () => clearTimeout(timeoutId);
    }, [cart.showAlert]);

    return (
        <div className="show-alert">{cart.showAlert}</div>
    );
}