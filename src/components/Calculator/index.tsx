/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import './styles.scss';
import { useState } from 'react';

import { isValidExpression,calculate } from '../../utils/calculator';

//Soma:
//1. Guardar o primeiro numero inteiro escolhido
//2. Guardar o sinal de soma
//3. Guardar o segundo numero inteiro escolhido
//4. Ao selecionar o botao de igual, somar os dois inteiros


export function Calculator() {
  const [expression, setExpression] = useState("");

 const handleSetExpression = (candidateText: string) => {
    if(isValidExpression(expression, candidateText)) {
      const newExpression = `${expression}${candidateText}`;

      setExpression(newExpression);
    }
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = calculate(expression);

    setExpression(result);
  }

  const onClear = () => {
    setExpression("");
  }

  return (
    <div>
      <h1 className="title">JV Calculator 3</h1>
      <form className="calculator-container" onSubmit={onSubmit}>
        <input disabled className="input-numbers" data-testid="input" value={expression}/>
        <div className="buttons">
          <div className="buttons-operators">
            <div className="button-column">
              <button type="button" onClick={() => handleSetExpression("7")} className="button" data-testid="7">
                7
              </button>
              <button type="button" onClick={() => handleSetExpression("4")} className="button" data-testid="4">
                4
              </button>
              <button type="button" onClick={() => handleSetExpression("1")} className="button" data-testid="1">
                1
              </button>
              <button type="button" onClick={() => handleSetExpression(",")} className="button" data-testid=",">
                ,
              </button>
            </div>
            <div className="button-column">
              <button type="button" onClick={() => handleSetExpression("8")} className="button" data-testid="8">
                8
              </button>
              <button type="button" onClick={() => handleSetExpression("5")} className="button" data-testid="5">
                5
              </button>
              <button type="button" onClick={() => handleSetExpression("2")} className="button" data-testid="2">
                2
              </button>
              <button type="button" onClick={() => handleSetExpression("0")} className="button" data-testid="0">
                0
              </button>
            </div>
            <div className="button-column">
              <button type="button" onClick={() => handleSetExpression("9")} className="button" data-testid="9">
                9
              </button>
              <button type="button" onClick={() => handleSetExpression("6")} className="button" data-testid="6">
                6
              </button>
              <button type="button" onClick={() => handleSetExpression("3")} className="button" data-testid="3">
                3
              </button>
              <button className="button" type="button" onClick={() => handleSetExpression("/")} data-testid="/">
                /
              </button>
            </div>
            <div className="button-column">
              <button type="button" onClick={() => handleSetExpression("DEL")} className="button del" data-testid="delete-button">
                DEL
              </button>
              <button className="button" type="button" onClick={() => handleSetExpression("+")} data-testid="add-button">
                +
              </button>
              <button className="button" type="button" onClick={() => handleSetExpression("-")} data-testid="subtract-button">
                -
              </button>
              <button className="button" type="button" onClick={() => handleSetExpression("x")} data-testid="multiply-button">
                x
              </button>
            </div>
          </div>
          <div className="button-controllers">
            <button type="button" onClick={onClear} className="reset" data-testid="reset-button" >
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
