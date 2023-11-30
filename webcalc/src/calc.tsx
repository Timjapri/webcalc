import React, { useState } from 'react';
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

  const [showHelpModal, setShowHelpModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    description: '',
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [ticketNumber, setTicketNumber] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    const randomTicketNumber = Math.floor(1000 + Math.random() * 9000).toString();

    setTicketNumber(randomTicketNumber);
    setFormSubmitted(true);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      category: '',
      description: '',
    });
    setSubmitDisabled(true);
  };

  const showHelp = () => {
    setShowHelpModal(true);
  };

  const closeHelpModal = () => {
    setShowHelpModal(false);
    setFormSubmitted(false);
    setTicketNumber('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      category: '',
      description: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: type === 'radio' ? value : value }));

    const isCategoryFilled = formData.category.trim() !== '';

    const areFilled =
      isCategoryFilled &&
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '';

    setSubmitDisabled(!areFilled);
  };

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
                <button type="button" onClick={showHelp} id="help" className="browbut">
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

      {showHelpModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeHelpModal}>
              &times;
            </span>
            <p className='title'>Support Ticket Form</p>
            {formSubmitted ? (
              <div className='thanks'>
                <p className='thx'>Thank you for sending us your report, we will track the problem now</p>
                <p className='ticket'><strong className='th'>Your ticket number is:</strong> {ticketNumber}</p>
              </div>
            ) : (
              <div>
                <form onSubmit={handleFormSubmit}>
                  <div className='cont'>
                    <div className='popleft'>
                      <div className='rows'>
                        <div className='column'>
                          <p className='formtex'>First Name <strong>*</strong></p>
                          <input type="text" name="firstName" className='formtext' value={formData.firstName} onChange={handleInputChange} required />
                        </div>
                        <div className='column'>
                          <p className='formtex'>Last Name <strong>*</strong></p>
                          <input type="text" name="lastName" className='formtext' value={formData.lastName} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <p className='formtex'>Email <strong>*</strong></p>
                      <input type="email" name="email" className='formtext' value={formData.email} onChange={handleInputChange} required />

                      <p className='formtex'>Category <strong>*</strong></p>
                      <div className='box'>
                        <div className='column'>
                          <div className='rows'>
                            <input type="radio" name="category" value="general" onChange={handleInputChange} required />
                            <p className='formte'>General</p>
                          </div>
                          <div className='rows'>
                            <input type="radio" name="category" value="bug" onChange={handleInputChange} required />
                            <p className='formte'>Bug</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='popright'>
                      <p className='formtex'>Description <strong className='ds'>Optional</strong></p>
                      <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                  <button className='send' type="submit" disabled={submitDisabled}>
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Calc;
