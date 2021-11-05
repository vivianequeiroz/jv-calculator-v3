import './styles.scss';

export function Calculator() {
  return (
    <form className="calculator-container">
      <input className="input-numbers" />
      <div className="buttons">
        <div className="buttons-operators">
          <div className="button-column">
            <button type="button" className="button">
              7
            </button>
            <button type="button" className="button">
              4
            </button>
            <button type="button" className="button">
              1
            </button>
            <button type="button" className="button">
              ,
            </button>
          </div>
          <div className="button-column">
            <button type="button" className="button">
              8
            </button>
            <button type="button" className="button">
              5
            </button>
            <button type="button" className="button">
              2
            </button>
            <button type="button" className="button">
              0
            </button>
          </div>
          <div className="button-column">
            <button type="button" className="button">
              9
            </button>
            <button type="button" className="button">
              6
            </button>
            <button type="button" className="button">
              3
            </button>
            <button className="button" type="button">
              /
            </button>
          </div>
          <div className="button-column">
            <button type="button" className="button del">
              DEL
            </button>
            <button className="button" type="button">
              +
            </button>
            <button className="button" type="button">
              -
            </button>
            <button className="button" type="button">
              x
            </button>
          </div>
        </div>
        <div className="button-controllers">
          <button type="button" className="reset">
            RESET
          </button>
          <button type="submit" className="result">
            =
          </button>
        </div>
      </div>
    </form>
  );
}

export default Calculator;
