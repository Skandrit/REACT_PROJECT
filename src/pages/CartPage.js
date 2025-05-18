import { Link } from "react-router-dom";

function CartPage({ cart, onRemoveFromCart }) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0); // Убрана лишняя скобка

    return (
        <div className="App">
            <h1>Корзина</h1>
            {cart.length === 0 ? (
                <div>
                    <p>Корзина пуста</p>
                    <Link to="/" className="nav-link">Вернуться к покупкам</Link>
                </div>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Цена: {item.price} руб.</p>
                            <p>Количество: {item.quantity}</p>
                            <p>Сумма: {item.price * item.quantity} руб.</p>
                            <button onClick={() => onRemoveFromCart(item.id)}>
                                Удалить
                            </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Общая сумма: {total} руб.</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;