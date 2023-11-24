import './style.css';

function calc() {
  

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
              <button type="submit" id="clear" className="graybut">
                C
              </button>
              <button type="submit" id="delete" className="graybut">
                Del
              </button>
              <button type="submit" id="help" className="browbut">
                ?
              </button>
            </div>
            <div className="row">
              <button type="submit" id="one" className="graybut">
                1
              </button>
              <button type="submit" id="two" className="graybut">
                2
              </button>
              <button type="submit" id="three" className="graybut">
                3
              </button>
            </div>
            <div className="row">
              <button type="submit" id="four" className="graybut">
                4
              </button>
              <button type="submit" id="five" className="graybut">
                5
              </button>
              <button type="submit" id="six" className="graybut">
                6
              </button>
            </div>
            <div className="row">
              <button type="submit" id="seven" className="graybut">
                7
              </button>
              <button type="submit" id="eight" className="graybut">
                8
              </button>
              <button type="submit" id="nine" className="graybut">
                9
              </button>
            </div>
          </div>
          <div className="cright">
            <button type="submit" id="divide" className="yelbut">
              /
            </button>
            <button type="submit" id="multiply" className="yelbut">
              x
            </button>
            <button type="submit" id="minus" className="yelbut">
              -
            </button>
            <button type="submit" id="add" className="yelbut">
              +
            </button>
          </div>
        </div>
        <div className="bottom">
          <button type="submit" id="zero" className="graybut">
            0
          </button>
          <button type="submit" id="equal" className="yelbut">
            =
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default calc;
