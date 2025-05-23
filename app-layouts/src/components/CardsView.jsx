import ShopCard from "./ShopCard";

export default function({ cards }) {
    return (
        <div className="cards-view">
            {cards.map((product, idx) => (
                <ShopCard product={product} key={idx}/>
            ))}
        </div>
    );
}