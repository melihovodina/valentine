import React, { useState } from 'react'
import './App.css';

const Main = () => {
  const [fontSize, setFontSize] = useState(2);
  const [image, setImage] = useState('quest');
  const [index, setIndex] = useState(0)
  let arr = ["No", "Are u sure?", "Maybe u think a little?", "Please!", "I love you!", "It's true!", "U don't love me?", "CLICK YES!", "That's so sad", "("]
  const [text, setText] = useState(arr[index]);
  const [question, setQusetion] = useState('Will u be my valentine?')
  const [op, setOp] = useState(1);

  const Yes = () => {
    setImage('answer')
    setQusetion('I love u!')
    setOp(0);
  }

  const No = () => {
    setFontSize(fontSize+0.5);
    if(index !== 9) {
      let newIndex = index + 1;
      setIndex(newIndex);
      setText(arr[newIndex]);
    }
  }

  return (
    <div className='main'>
      <h1 className='question'>
        {question}
      </h1>
      <img src={`${image}.gif`} className="gif1" />
      <div className='buttons'>      
        <button className='yes'
        onClick={Yes} 
        style={{fontSize: `${fontSize}rem`, opacity: `${op}`}}>
          Yes
        </button>
        <button className='no' onClick={No} style={{opacity: `${op}`}}>{text}</button>
      </div>
    </div>
  )
}

export default Main
