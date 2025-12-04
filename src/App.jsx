import './App.css'
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import FruitOrder from "./components/FruitOrder.jsx";
import ActionButton from "./components/Buttons/ActionButton.jsx";
import OrderForm from "./components/OrderForm.jsx";
import SmallTextField from "./components/FormComponents/SmallTextField.jsx";
import DropDownField from "./components/FormComponents/DropDownField.jsx";
import SingleOptionButton from "./components/Buttons/SingleOptionButton.jsx";
import LargeTextField from "./components/FormComponents/LargeTextField.jsx";

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
    const [textName, setTextName] = useState('');
    const [textLastName, setTextLastName] = useState('');
    const [textAge, setTextAge] = useState('');
    const [textZipcode, setTextZipcode] = useState('');

    const [selectedDelivery, setSelectedDelivery] = useState(false);

    const handleChangeDay = () => {
        setSelectedDelivery("Day");
    };

    const handleChangeNight = () => {
        setSelectedDelivery("Night");
    };

    const [selectedTerms, toggleSelectedTerms] = useState(false);

    function toggleTerms() {
        toggleSelectedTerms(!selectedTerms)
    }

    const [textComment, setTextComment] = useState('');

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
                textValue={textName}
                setTextValue={setTextName}
            />

            <SmallTextField
                fieldName="Last name"
                fieldData="last-name"
                fieldType="text"
                textValue={textLastName}
                setTextValue={setTextLastName}
            />

            <SmallTextField
                fieldName="Age"
                fieldData="age"
                fieldType="number"
                textValue={textAge}
                setTextValue={setTextAge}
            />

            <SmallTextField
                fieldName="Zipcode"
                fieldData="zipcode"
                fieldType="text"
                textValue={textZipcode}
                setTextValue={setTextZipcode}
            />

            <DropDownField
                fieldName="Delivery interval"
                fieldData="delivery-interval"
                fieldOptions={["Iedere week", "Om de week", "Iedere maand"]}
            />
            <form>
            <SingleOptionButton
                fieldName="Moment of delivery"
                fieldOption="Day"
                fieldType="radio"
                fieldSelection={selectedDelivery}
                setFieldSelection={setSelectedDelivery}
                handleClick={handleChangeDay}
            />
                <SingleOptionButton
                    fieldName="Moment of delivery"
                    fieldOption="Night"
                    fieldType="radio"
                    fieldSelection={selectedDelivery}
                    setFieldSelection={setSelectedDelivery}
                    handleClick={handleChangeNight}
                />
            </form>

            <LargeTextField
                fieldName="Additional info"
                fieldData="additional-comments"
                sizeInRows="10"
                textValue={textComment}
                setTextValue={setTextComment}
            />

            <SingleOptionButton
                fieldName="Terms&Conditions"
                fieldOption="Do you accept our Terms and Conditions"
                fieldType="checkbox"
                fieldSelection={selectedTerms}
                setFieldSelection={toggleSelectedTerms}
                handleClick={toggleTerms}
            />

            <ActionButton
                type="button"
                buttonName="send"
            />

        </>
    )
}

export default App
