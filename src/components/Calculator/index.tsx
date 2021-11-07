/* eslint-disable prettier/prettier */
import './styles.scss';

export function Calculator() {
  return (
    <div>
      <h1 className="title">JV Calculator 3</h1>
      <form className="calculator-container">
        <input className="input-numbers" />
        <div className="buttons">
          <div className="buttons-operators">
            <div className="button-column">
              <button type="button" className="button" data-testid="7">
                7
              </button>
              <button type="button" className="button" data-testid="4">
                4
              </button>
              <button type="button" className="button" data-testid="1">
                1
              </button>
              <button type="button" className="button" data-testid=",">
                ,
              </button>
            </div>
            <div className="button-column">
              <button type="button" className="button" data-testid="8">
                8
              </button>
              <button type="button" className="button" data-testid="5">
                5
              </button>
              <button type="button" className="button" data-testid="2">
                2
              </button>
              <button type="button" className="button" data-testid="0">
                0
              </button>
            </div>
            <div className="button-column">
              <button type="button" className="button" data-testid="9">
                9
              </button>
              <button type="button" className="button" data-testid="6">
                6
              </button>
              <button type="button" className="button" data-testid="3">
                3
              </button>
              <button className="button" type="button" data-testid="/">
                /
              </button>
            </div>
            <div className="button-column">
              <button type="button" className="button del" data-testid="delete-button">
                DEL
              </button>
              <button className="button" type="button" data-testid="add-button">
                +
              </button>
              <button className="button" type="button" data-testid="subtract-button">
                -
              </button>
              <button className="button" type="button" data-testid="multiply-button">
                x
              </button>
            </div>
          </div>
          <div className="button-controllers">
            <button type="button" className="reset">
              RESET
            </button>
            <button type="submit" className="result" data-testid="result-button">
              =
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
