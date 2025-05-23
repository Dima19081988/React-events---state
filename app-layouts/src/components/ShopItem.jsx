export default function ShopItem({ product }) {
    return (
        <div className="shop-item">
            <img className="shop-item__img" src={product.img} alt={product.name}/>
            <span className="shop-item__name">{product.name}</span>
            <span className="shop-item__color">{product.color}</span>
            <span className="shop-item__price">${product.price}</span>
            <button className="shop-item__btn">ADD TO CART</button>
        </div>
    );
}