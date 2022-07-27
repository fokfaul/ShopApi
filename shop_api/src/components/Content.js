import {useContext} from 'react';
import CartIcon from './cart/cart-icon/CartIcon';
import CartList from './cart/cart-list/CartList';
import ShopList from './shop/ShopList';
import ShowAlert from './show/show-alert/ShowAlert';
import {CartContext} from './cart/cart-context/CartContext';

export default function Content() {
    const cart = useContext(CartContext);
    return (
        <main className="container">
            <CartIcon />
            {cart.showAlert && <ShowAlert />}
            <ShopList />
            {cart.showItems && <CartList />}
        </main>
    );
}