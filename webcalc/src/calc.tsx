import './style.css';

function calc() {


  const handleButtonClick = (value) => {
    setCurrentInput((prevInput) => prevInput + value);
  };

  return (
    <div className="App">
      <div className="calc-cont">
      <div className="display">
        <input type="text" className="disp history" id="History0"/>
        <input type="text" className="disp current" id="current"/>
      </div>
      <div className="buttons">
        <div className="top">
          <div className="cleft">
            <div className="row">
              <button type="button" id="clear" className="graybut">
                C
              </button>
              <button type="button" id="delete" className="graybut">
                Del
              </button>
              <button type="button" id="help" className="browbut">
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
            <button type="button" onClick={() => handleButtonClick('')} id="divide" className="yelbut">
              /
            </button>
            <button type="button" onClick={() => handleButtonClick('')} id="multiply" className="yelbut">
              x
            </button>
            <button type="button" onClick={() => handleButtonClick('')} id="minus" className="yelbut">
              -
            </button>
            <button type="button" onClick={() => handleButtonClick('')} id="add" className="yelbut">
              +
            </button>
          </div>
        </div>
        <div className="bottom">
          <button type="button" onClick={() => handleButtonClick('0')} id="zero" className="graybut">
            0
          </button>
          <button type="button" id="equal" className="yelbut">
            =
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default calc;
