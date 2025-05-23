export default function ShopCard({ product }) {
    return (
        <div className="shop-card">
            <h2 className="shop-card__name">{product.name}</h2>
            <p className="shop-card__color">{product.color}</p>
            <img className="shop-card__img" src={product.img} alt={product.name}/>
            <div className="shop-card__footer">
                <span className="shop-card__price">${product.price}</span>
                <button className="shop-card__btn">ADD TO CART</button>
            </div>
        </div>
    );
}