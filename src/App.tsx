import { useState } from 'react';
import HexInput from './components/HexInput';
import './styles/App.scss';

const getRanHex = (): string[] => {
  const result: string[] = [];
  const hexRef: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  for (let i = 0; i < 6; i++) result.push(hexRef[Math.floor(Math.random() * 16)]);
  return result;
};

function App() {
  const [rootColor, ] = useState(getRanHex());
  const [numberOfCorrectChars, setNumberOfCorrectChars] = useState(0);

  if (numberOfCorrectChars == 6) {
    alert('You win');
  }
  
  return (
    <div className="background" style={{ backgroundColor: '#' + rootColor.join('') }}>
      <h1>HexGuesser</h1>
      <div className="inputs">
        {
        rootColor.map((hexChar, index) => (
          <HexInput 
            key={index} 
            hexChar={hexChar}
            numberOfCorrectChars={numberOfCorrectChars}
            countCorrectChar={setNumberOfCorrectChars}/>
        ))
        }
      
      </div>
    </div>
  );
}

export default App;
