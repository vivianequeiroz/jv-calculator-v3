/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import './styles.scss';
import { useEffect, useState } from 'react';

import { isValidExpression,calculate } from '../../utils/calculator';
import { config } from '../../config';
import { decodeParseDweet } from '../../utils/parser';
import { dweetClient } from '../../services/dweetClient';

//Soma:
//1. Guardar o primeiro numero inteiro escolhido
//2. Guardar o sinal de soma
//3. Guardar o segundo numero inteiro escolhido
//4. Ao selecionar o botao de igual, somar os dois inteiros


export function Calculator() {
  const dweetThing = config.services.dweet.streamName;

  const [expression, setExpression] = useState("");

 const handleSetExpression = async (candidateText: string) => {
    if(isValidExpression(expression, candidateText)) {
      const newExpression = `${expression}${candidateText}`;

      setExpression(newExpression);
      try{
        await dweetClient.createDweet(newExpression);
      } catch(error: any) {
        console.error('cannot create into dweetio');
        console.log(error.message);
      }
    }
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = calculate(expression);

    setExpression(result);
    try{
      await dweetClient.createDweet(result);
    } catch(error: any) {
      console.error('cannot create into dweetio');
      console.log(error.message);
    }
  }

  const onClear = () => {
    setExpression("");
  }

  const onDelete = () => {
    const newExpression = expression.slice(0, -1);

    setExpression(newExpression);
  }


  useEffect(() => {
    try{
    const { dweetio } = window;

    dweetio.get_latest_dweet_for(dweetThing, function (err, dweet) {
      if (err) {
        console.error(err);
        alert('Ocorreu um erro ao recuperar a última expressão.');
      }

      const lastDweet = dweet[0];

      if (lastDweet.content.expression) {
        const { expression } = lastDweet.content;

        setExpression(decodeParseDweet(expression));
      }
    });

    dweetio.listen_for(dweetThing, function (dweet) {
      const { expression } = dweet.content;

      setExpression(decodeParseDweet(expression));
    });

    () => dweetio.stop_listening_for(dweetThing);
  } catch (error) {
    console.error('cannot connect into dweetio');
  }
  }, [dweetThing, setExpression]);

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
              <button type="button" onClick={onDelete} className="button del" data-testid="delete-button">
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
