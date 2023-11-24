import React, { useState } from 'react';
import './style.css';

function Calc() {
  const [value1, setValue1] = useState('');
  const [symbol, setSymbol] = useState('');
  const [value2, setValue2] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value: string) => {
    setCurrentInput((prevInput) => prevInput + value);
  };

  const handleClearButtonClick = () => {
    setValue1('');
    setSymbol('');
    setValue2('');
    setCurrentInput('');
  };

  const handleDeleteButtonClick = () => {
    setCurrentInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleSymbolButtonClick = (newSymbol: React.SetStateAction<string>) => {
    if (value1 !== '' && symbol === '' && /[0-9]$/.test(currentInput)) {
      setSymbol(newSymbol);
      setCurrentInput((prevInput) => setValue1(prevInput));
    }
  };

  const handleEqualButtonClick = () => {
    try {
      if (value1 !== '' && symbol !== '' && /[0-9]$/.test(currentInput)) {
        setValue2(currentInput.replace(value1 + symbol, ''));
        const result = eval(`${value1} ${symbol} ${value2}`);
        setHistory((prevHistory) => [...prevHistory, `${value1} ${symbol} ${value2} = ${result}`]);
        setValue1(result.toString());
        setSymbol('');
        setValue2('');
        setCurrentInput(result.toString());
      }
    } catch (error) {
      setCurrentInput('Error');
    }
  };

  const [showHelpModal, setShowHelpModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    description: '',
  });

  // Helper function to check if all required fields are filled
  const areRequiredFieldsFilled = () => {
    return formData.firstName !== '' && formData.lastName !== '' && formData.email !== '' && formData.category !== '';
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setShowHelpModal(false);
  };

  const showHelp = () => {
    setShowHelpModal(true);
  };

  const closeHelpModal = () => {
    setShowHelpModal(false);
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="App">
      <div className="calc-cont">
        <div className="display">
          <input type="text" className="disp history" id="history" value={history.join('\n')} readOnly />
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
                <button type="button" onClick={showHelp}  id="help" className="browbut">
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
              <button type="button" onClick={() => handleSymbolButtonClick('/')} id="divide" className="yelbut">
                /
              </button>
              <button type="button" onClick={() => handleSymbolButtonClick('x')} id="multiply" className="yelbut">
                x
              </button>
              <button type="button" onClick={() => handleSymbolButtonClick('-')} id="minus" className="yelbut">
                -
              </button>
              <button type="button" onClick={() => handleSymbolButtonClick('+')} id="add" className="yelbut">
                +
              </button>
            </div>
          </div>
          <div className="bottom">
            <button type="button" onClick={() => handleButtonClick('0')} id="zero" className="graybut">
              0
            </button>
            <button type="button" onClick={handleEqualButtonClick}  id="equal" className="yelbut">
              =
            </button>
          </div>
        </div>
      </div>

      {showHelpModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeHelpModal}>&times;</span>
            <p className='title'>Support Ticket Form</p>

            <form onSubmit={handleFormSubmit}>
              <div className='cont'>
                <div className='popleft'>
                  <div className='rows'>
                    <div className='column'>
                      <p className='formtex' >First Name</p>
                      <input type="text" name="firstName" className='formtext' value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div className='column'>
                      <p className='formtex' >Last Name</p>
                      <input type="text" name="lastName" className='formtext'  value={formData.lastName} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <p className='formtex' >Email</p>
                  <input type="email" name="email" className='formtext'  value={formData.email} onChange={handleInputChange} required />
                  
                  <p className='formtex' >Category</p>
                  <div className='box'>
                    <div className='column'>
                      <div className='rows'>
                        <input type="radio" name="category" value="general" onChange={handleInputChange} required />
                        <p className='formte' >General</p>
                      </div>
                      <div className='rows'>
                        <input type="radio" name="category" value="bug" onChange={handleInputChange} required />
                        <p className='formte' >Bug</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='popright'>
                  <p className='formtex' >Description</p>
                  <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
                </div>
              </div>
              <button className='send' type="submit" disabled={!areRequiredFieldsFilled()}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calc;
