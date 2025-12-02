import './App.css'
import React, {useState} from "react";
import FruitOrder from "./components/FruitOrder.jsx";
import ActionButton from "./components/ActionButton.jsx";
import OrderForm from "./components/OrderForm.jsx";

function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);

    function resetAllFruit() {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitOrder
                fruitName="Aardbeien 🍓"
                fruitCounter={strawberryCounter}
                setFruitCounter={setStrawberryCounter}
            />
            <FruitOrder
                fruitName="Bananen 🍌"
                fruitCounter={bananaCounter}
                setFruitCounter={setBananaCounter}
            />
            <FruitOrder
                fruitName="Appels 🍏"
                fruitCounter={appleCounter}
                setFruitCounter={setAppleCounter}
            />
            <FruitOrder
                fruitName="Kiwi's 🥝"
                fruitCounter={kiwiCounter}
                setFruitCounter={setKiwiCounter}
            />
            <ActionButton
                buttonName="Reset"
                handleClick={resetAllFruit}
            />
            <article>
            <OrderForm
                name
            />
            </article>
        </>
    )
}

export default App
