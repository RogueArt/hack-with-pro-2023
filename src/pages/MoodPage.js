import React, { useState } from 'react'
import "./MoodPage.css"

export function MoodPage() {
    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('Neutral');
    const isRadioSelected = (value ) => selectedRadioBtn == value;
    const handleRadioClick = (e) => setSelectedRadioBtn(e.currentTarget.value);

    const optionsHappy = [
        { value: "relaxed", label: "Relaxed" },
        { value: "elated", label: "Elated" },
        { value: "confident", label: "Confident" },
        { value: "creative", label: "Creative" },
        { value: "unstoppable", label: "Unstoppable" }
    ]

    const optionsNeutral = [
        { value: "relaxed", label: "Relaxed" },
        { value: "unfazed", label: "Unfazed" },
        { value: "unfocused", label: "Unfocused" },
        { value: "satisfied", label: "Satisfied" },
        { value: "determined", label: "Determined" }
    ]

    const optionsSad = [
        { value: "depressed", label: "Depressed" },
        { value: "gloomy", label: "Gloomy" },
        { value: "overwhelmed", label: "Overwhelmed" },
        { value: "grumpy", label: "Grumpy" },
        { value: "worried", label: "Worried" }
    ]

    return (
        <div id={'mood-page-container'}>
            <p>Good, Neutral, Sad</p>
            <input 
                type= "radio"
                name = "radio button general mood"
                value = "Happy"
                checked = {
                    isRadioSelected("Happy")
                }
                onChange = {handleRadioClick}
            />
            <input 
                type= "radio"
                name = "radio button general mood"
                value = "Neutral"
                checked = {
                    isRadioSelected("Neutral")
                }
                onChange = {handleRadioClick}
            />
            <input 
                type= "radio"
                name = "radio button general mood"
                value = "Sad"
                checked = {
                    isRadioSelected("Sad")
                }
                onChange = {handleRadioClick}
            />
        
        <h1>Checkbox select</h1>

        <form id="make_checkbox_select">

        <select name="make">
            <option data-count="2" value="relaxed">Relaxed</option>
            <option data-count="23" value="elated">Elated</option>
            <option data-count="433" value="confident">Confident</option>
            <option data-count="45" value="creative">Creative</option>
            <option data-count="476" value="unstoppable">Unstoppable</option>
            <option data-count="78" value="Dodge">Dodge</option>
            <option data-count="123" value="Fiat">Fiat</option>
            <option data-count="32" value="Ford">Ford</option>
            <option data-count="3" value="Honda">Honda</option>
            <option data-count="342" value="Hyundai">Hyundai</option>
            <option data-count="45" value="Isuzu">Isuzu</option>
            <option data-count="653" value="Jaguar">Jaguar</option>
            <option data-count="3" value="Jeep">Jeep</option>
            <option data-count="23" value="Kia">Kia</option>
            <option data-count="5656" value="Lamborghini">Lamborghini</option>
            <option data-count="2133" value="Land Rover">Land Rover</option>
            
        </select>
        
        <input type="submit" />
        
        </form>
    
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

        

            $(function()
            {
                var mySelectCheckbox = new checkbox_select(
                {
                    selector : "#make_checkbox_select",
                    selected_translation : "selectat",
                    all_translation : "Toate marcile",
                    not_found : "Nici unul gasit",

                    // Event during initialization
                    onApply : function(e)
                    {
                        alert("Custom Event: " + e.selected);
                    }
                });
        
            });
                 */}
        



        </div>
    )
}
