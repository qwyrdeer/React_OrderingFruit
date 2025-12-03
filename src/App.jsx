import './App.css'
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import FruitOrder from "./components/FruitOrder.jsx";
import ActionButton from "./components/Buttons/ActionButton.jsx";
import OrderForm from "./components/OrderForm.jsx";
import SmallTextField from "./components/FormComponents/SmallTextField.jsx";
import DropDownField from "./components/FormComponents/DropDownField.jsx";
import RadioButton from "./components/FormComponents/RadioButton.jsx";

function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);

    function resetAllCounters() {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    // function handleClick() {
    //
    // }

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
                handleClick={resetAllCounters}
            />

            <OrderForm

            />

            <SmallTextField
                fieldName="First name"
                fieldData="first-name"
                fieldType="text"
            />

            <SmallTextField
                fieldName="Last name"
                fieldData="last-name"
                fieldType="text"
            />

            <SmallTextField
                fieldName="Age"
                fieldData="age"
                fieldType="number"
            />

            <SmallTextField
                fieldName="Zipcode"
                fieldData="zipcode"
                fieldType="text"
            />

            <DropDownField
                fieldName="Delivery interval"
                fieldData="delivery-interval"
                fieldOptions={["Iedere week", "Om de week", "Iedere maand"]
            }
            />

            <RadioButton
                fieldName="Moment of delivery"
                fieldData="delivery-moment"
                fieldOptions={["Day", "Evening"]}
            />

            <ActionButton
                type="button"
                buttonName="send"
                // className=""
            />

        </>
    )
}

export default App
