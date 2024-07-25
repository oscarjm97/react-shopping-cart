import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';
import '../styles/Cart.css';

function CartItem({ thumbnail, price, title, quantity, addToCart, removeFromCart }) {
    return (
        <li>
            <img src={thumbnail} alt={title} />

            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>Qty: {quantity}</small>
                <button onClick={addToCart}>+</button>
				<button onClick={removeFromCart}>-</button>
            </footer>
        </li>
    );
}

export function Cart() {
    const cartCheckboxId = useId();
    const { cart, addToCart, removeFromCart, clearCart } = useCart();

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            addToCart={() => addToCart(item)}
                            removeFromCart={() => removeFromCart(item)}
                            {...item}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
}
