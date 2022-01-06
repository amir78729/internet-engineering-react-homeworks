import logo from './logo.svg';
import './App.css';
import { Question1Component } from './components/Question1/Question1';
import { Question2Component } from './components/Question2/Question2';
import { Question3Component } from './components/Question3/Question3';
import { Question4Component } from './components/Question4/Question4';
import { useState } from 'react';
import { ChangePageButton } from './components/other/ChangePageButton/ChangePageButton';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  return (
    <div className='App-container'>
      <ChangePageButton isNext={false} onClick={() => setQuestionNumber(questionNumber - 1)} hidden={questionNumber === 1} />
      <div className="App">
        {questionNumber === 1 && <Question1Component />}
        {questionNumber === 2 && <Question2Component />}
        {questionNumber === 3 && <Question3Component />}
        {questionNumber === 4 && <Question4Component />}
      </div>
      <ChangePageButton isNext onClick={() => setQuestionNumber(questionNumber + 1)} hidden={questionNumber === 4}/>
    </div>
  );
}

export default App;
