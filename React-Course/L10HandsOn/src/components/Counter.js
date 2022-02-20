import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, countInDe, onCountInDe, amountToChange, inputtedNumber, changeAmountToCount }) => {

    return (
      <div>
        <div>
          <button onClick={onCountInDe}><button onClick={onDecrement} > - </button></button>
          <span>&nbsp;{count}&nbsp;</span>
          <button onClick={onCountInDe}><button onClick={onIncrement} > + </button></button>
          <br />
          <p>Times the increment / decrement button have been clicked:<span>{countInDe}</span></p>
          <input type='number' onChange={event => amountToChange(event.target.value)} value={inputtedNumber}/>
          <button onClick={changeAmountToCount}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;
