import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Calc() {
  let [value1, setValue1] = useState('');
  let [symbol, setSymbol] = useState('');
  let [value2, setValue2] = useState('');
  let [currentInput, setCurrentInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  
  const handleClearButtonClick = () => {
    setValue1('');
    setSymbol('');
    setValue2('');
    setCurrentInput('');
  };
  
  const handleDeleteButtonClick = () => {
    if(/[\/\-\+x]/.test(currentInput)){
      setCurrentInput('');
    }else{
      setCurrentInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  const handleButtonClick = (input: string) => {

    if(/\d/.test(input)){
      console.log(input);
      if(value1 == '' && symbol == ''){
        setCurrentInput((prevInput) => prevInput + input);
      }else{
        if(currentInput != '' && !/\d/.test(currentInput)){
          setCurrentInput('');
        }
        setCurrentInput((prevInput) => prevInput + input);
      }
    }else{
      if(/[\/\-\+x]/.test(input)){
        console.log(input);
        if(value1 == '' && symbol == '' && currentInput != ''){
          setValue1(currentInput);
          setSymbol(input);
          setCurrentInput(input);
        }else if(/[\/\-\+x]/.test(currentInput)){
          setSymbol(input);
          setCurrentInput(input);
        }else {
          value2 = currentInput;
          setCurrentInput('');
          switch(symbol){
            case 'x':
              value1 = (parseInt(value1) * parseInt(value2)).toString();
              break;
            case '/':
              value1 = (parseInt(value1) / parseInt(value2)).toString();
              break;
            case '+':
              value1 = (parseInt(value1) + parseInt(value2)).toString();
              break;
            case '-':
              value1 = (parseInt(value1) - parseInt(value2)).toString();
              break;
          }
          setValue1(value1);
          if(history.length === 0){
            setHistory([value1]);
          }else{
            setHistory(current => [...current, value1]);
          }
          setCurrentInput(input);
          setSymbol(input);
          console.log(value1);
        }
      }else if(input === '='){
        console.log(input);
        if(/[\/\-\+x]/.test(input)){
          value2 = currentInput;
        }
        setCurrentInput('');
        switch(symbol){
          case 'x':
            value1 = (parseInt(value1) * parseInt(value2)).toString();
            break;
          case '/':
            value1 = (parseInt(value1) / parseInt(value2)).toString();
            break;
          case '+':
            value1 = (parseInt(value1) + parseInt(value2)).toString();
            break;
          case '-':
            value1 = (parseInt(value1) - parseInt(value2)).toString();
            break;
        }
        setCurrentInput(value1);
        if(history.length === 0){
          setHistory([value1]);
        }else if(history.length > 0){
          setHistory(current => [...current, value1]);
        }
      }
    }
  };

  let redirect= useNavigate();

  return (
    <div className="App">
      <div className="calc-cont">
        <div className="display">
          <textarea className="disp history" id="history" value={history.join('\n')} readOnly />
          <input type="text" className="disp current" id="current" value={currentInput} readOnly />
        </div>
        <div className="buttons">
          <div className="top">
            <div className="cleft">
              <div className="row">
                <button type="button" onClick={handleClearButtonClick} className="graybut">
                  C
                </button>
                <button type="button" onClick={handleDeleteButtonClick} className="graybut">
                  Del
                </button>
                <button type="button" onClick={() => {redirect('/Support')}} id="help" className="browbut">
                  ?
                </button>
              </div>
              <div className="row">
                <button type="button" onClick={() => handleButtonClick('1')} id="one" className="graybut">
                  1
                </button>
                <button type="button" onClick={() => handleButtonClick('2')} id="two" className="graybut">
                  2
                </button>
                <button type="button" onClick={() => handleButtonClick('3')} id="three" className="graybut">
                  3
                </button>
              </div>
              <div className="row">
                <button type="button" onClick={() => handleButtonClick('4')} id="four" className="graybut">
                  4
                </button>
                <button type="button" onClick={() => handleButtonClick('5')} id="five" className="graybut">
                  5
                </button>
                <button type="button" onClick={() => handleButtonClick('6')} id="six" className="graybut">
                  6
                </button>
              </div>
              <div className="row">
                <button type="button" onClick={() => handleButtonClick('7')} id="seven" className="graybut">
                  7
                </button>
                <button type="button" onClick={() => handleButtonClick('8')} id="eight" className="graybut">
                  8
                </button>
                <button type="button" onClick={() => handleButtonClick('9')} id="nine" className="graybut">
                  9
                </button>
              </div>
            </div>
            <div className="cright">
              <button type="button" onClick={() => handleButtonClick('/')} id="divide" className="yelbut">
                /
              </button>
              <button type="button" onClick={() => handleButtonClick('x')} id="multiply" className="yelbut">
                x
              </button>
              <button type="button" onClick={() => handleButtonClick('-')} id="minus" className="yelbut">
                -
              </button>
              <button type="button" onClick={() => handleButtonClick('+')} id="add" className="yelbut">
                +
              </button>
            </div>
          </div>
          <div className="bottom">
            <button type="button" onClick={() => handleButtonClick('0')} id="zero" className="graybut">
              0
            </button>
            <button type="button" onClick={() => handleButtonClick('=')} id="equal" className="yelbut">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
