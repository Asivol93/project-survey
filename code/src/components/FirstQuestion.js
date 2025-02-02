import React from 'react'

//User name input
export const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
}) => {
  return (
    <div className='step-container'>
      <progress
        className='progress-bar'
        id='survey'
        value='1'
        max='6'
      ></progress>
      <h2 className='survey-text'>Find a game based on your profile</h2>
      <label htmlFor='nameInput'>
        <h3>What's your first name?</h3>
      </label>
      <input
        id='nameInput'
        type='text'
        value={nameInput}
        onChange={onNameInputChange}
        placeholder='Your name..'
      />
      <button onClick={onStepChange}>Next question</button>
    </div>
  )
}
