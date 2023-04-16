import React, { useState } from 'react'

const options = {
  Happy: [
    { value: '', label: '' },
    { value: 'relaxed', label: 'Relaxed' },
    { value: 'elated', label: 'Elated' },
    { value: 'confident', label: 'Confident' },
    { value: 'creative', label: 'Creative' },
    { value: 'unstoppable', label: 'Unstoppable' },
  ],
  Neutral: [
    { value: '', label: '' },
    { value: 'bored', label: 'Bored' },
    { value: 'unfazed', label: 'Unfazed' },
    { value: 'unfocused', label: 'Unfocused' },
    { value: 'satisfied', label: 'Satisfied' },
    { value: 'determined', label: 'Determined' },
  ],
  Sad: [
    { value: '', label: '' },
    { value: 'depressed', label: 'Depressed' },
    { value: 'gloomy', label: 'Gloomy' },
    { value: 'overwhelmed', label: 'Overwhelmed' },
    { value: 'grumpy', label: 'Grumpy' },
    { value: 'worried', label: 'Worried' },
  ],
}

export function MoodPage() {
  const [selectedMood, setSelectedMood] = useState('Neutral')
  const [selectedOptions, setSelectedOptions] = useState(options.Neutral)
  const [selectedFeeling, setSelectedFeeling] = useState('')

  const isRadioSelected = value => selectedMood === value
  const handleRadioClick = e => {
    setSelectedMood(e.currentTarget.value)
    setSelectedOptions(options[e.currentTarget.value])
  }

  function handleSelectDropdown(e) {
    setSelectedFeeling(e.target.value)
  }

  function submitMood(e) {
    const object = {
      mood: selectedMood,
      feeling: selectedFeeling,
    }
    return object
  }

  return (
    <div id={'mood-page-container'}>
      <h1>Mood Tracker</h1>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          😊 Happy:
          <input
            type="radio"
            name="radio button general mood"
            value="Happy"
            checked={isRadioSelected('Happy')}
            onChange={handleRadioClick}
          />
        </label>

        <label>
          😐 Neutral:
          <input
            type="radio"
            name="radio button general mood"
            value="Neutral"
            checked={isRadioSelected('Neutral')}
            onChange={handleRadioClick}
          />
        </label>

        <label>
          😔 Sad:
          <input
            type="radio"
            name="radio button general mood"
            value="Sad"
            checked={isRadioSelected('Sad')}
            onChange={handleRadioClick}
          />
        </label>
      </div>

      <form id="make_checkbox_select">
        <select name="make" onChange={e => handleSelectDropdown(e)} required>
          {selectedOptions.map(opt => {
            return <option value={opt.value}>{opt.label}</option>
          })}
        </select>
      </form>

      <button onClick={submitMood()}>
        Submit
      </button>

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
