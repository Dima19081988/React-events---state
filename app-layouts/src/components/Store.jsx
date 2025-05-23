import { useState } from "react";
import IconSwitch from "./IconSwitch";
import Cardsview from "./Cardsview";
import ListView from "./ListView";

export default function Store({ products }) {
    const [view, setView] = useState('cards');

    const handleSwitch = () => {
        setView(view === 'cards' ? 'list' : 'cards');
    };

    return (
        <div className="store">
            <div className="store-switcher">
                <IconSwitch
                icon={view === 'cards' ? 'view_list' : 'view_module'}
                onSwitch={handleSwitch}
                />
            </div>
            {view === 'cards' 
                ? <Cardsview cards={products} />
                : <ListView items={products} />}
        </div>
    );
}