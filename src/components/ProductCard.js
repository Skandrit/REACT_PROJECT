function ProductCard({ id, name, description, price, img, onAddToCart }) {
    return(
        <div className="card">
            <div className="image">
                <img src={img} alt={name}></img>
            </div>
            <p className="name">{name}</p>
            <p className="price">{price} руб.</p>
            <p className="description">{description}</p>
            <button className="dotaButton" onClick={() => onAddToCart(id)}>
                Добавить в корзину
            </button>
        </div>
    );
}

export default ProductCard;