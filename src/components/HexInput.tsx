import { useState } from 'react';
import '../styles/hexInput.scss';

interface Props {
  key: number;
  hexChar: string;
  numberOfCorrectChars: number;
  countCorrectChar: (n: number) => void;
}

function HexInputs(props: Props) {
  
  const [isCharValid, setIsCharValid] = useState(true);
  const [isCharCorrect, setisCharCorrect] = useState(false);
  const allowedChars: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  const checkChar = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!allowedChars.includes(e.target.value) && e.target.value != '') setIsCharValid(false);
    else if (!isCharValid) setIsCharValid(true);
    
    if (e.target.value == props.hexChar) { 
      setisCharCorrect(true);
      props.countCorrectChar(props.numberOfCorrectChars + 1);
    }
  };

  return (
    <> 
       <input 
        className={'hexInput' + (isCharValid ? '' : ' wrongChar')}
        type="text" 
        maxLength={1}
        onInput={checkChar}
        disabled={isCharCorrect}
        />
    </>
  );

}

export default HexInputs;