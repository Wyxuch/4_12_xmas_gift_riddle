import './App.css';
import bg from "./bg.jpg";
import { useState } from "react";

function App() {
  const QA = [
      {
          q: 'Numer linii tramwajowej przejeżdżającej w Gdańsku przez: Legionów, Podwale Grodzkie, Podwale Przedmiejskie, Lenartowicza, Nowotną:',
          a: 8,
          n: 8,
      },
      {
          q: 'Częśc GTA znana z misji ze zdalnie sterowanym samochodzikiem:',
          a: 3,
          n: 3,
      },
      {
          q: 'Cyfra dziesiątek największej liczby pierwszej poznanej przed erą elektroniki:',
          a: 2,
          n: 2,
      }
  ]

  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [qIndex, setQIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [tip, setTip] = useState(false)

  const handleAnswer = () => {
    if(Number(inputValue) === QA[qIndex].a) {
        if((qIndex + 1) > (QA.length - 1)) {
            setFinished(true)
        } else {
            setInputValue('')
            setQIndex(qIndex + 1)
        }
    } else {
        setTip(true)
    }
  }

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`, backgroundSize: '25%'}}>
        <div id='main'>
            {!started && (
                <>
                    <h2>Odpowiedz na pytania i zgadij swój kod do sejfu!</h2>
                    <button onClick={() => setStarted(true)}>Start</button>
                </>
            )}
            {(started && !finished) && (
                <>
                    <h2>{QA[qIndex].q}</h2>
                    <input type='text' placeholder="Odpowiedź" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onSelect={() => setTip(false)}/>
                    {tip && <p>Zła odpowiedź :(</p>}
                    <button onClick={handleAnswer}>Sprawdź odpowiedź</button>
                </>
            )}
            {finished && (
                <>
                    <h2>Gratki! Pełny kod to:</h2>
                    <h1>832</h1>
                </>
            )}
        </div>
    </div>
  );
}

export default App;
