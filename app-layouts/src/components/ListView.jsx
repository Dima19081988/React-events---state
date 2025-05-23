import ShopItem from "./ShopItem";

export default function ListView({ items }) {
    return (
        <div className="list-view">
            {items.map((product, idx) => (
                <ShopItem product={product} key={idx}/>
            ))}
        </div>
    );
}