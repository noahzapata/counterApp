import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(1);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    if (count === 10) {
      return setAlert('número demasiado alto');
    }
    if (count === 0) {
      return setAlert('número demasiado bajo');
    }
    return setAlert('');
  }, [count]);

  const buttonsArr = [
    {
      content: '+',
      operation() {
        if (count < 10) {
          setCount(count + 1);
        }
      },
    },
    {
      content: '-',
      operation() {
        if (count > 0) {
          setCount(count - 1);
        }
      },
    },
  ];

  return (
    <div className='App'>
      <h1>Couter App</h1>
      <Counter>{count}</Counter>
      {buttonsArr.map(({ content, operation }) => {
        return (
          <Button key={content} operation={operation}>
            {content}
          </Button>
        );
      })}
      <p>{alert}</p>
    </div>
  );
}

export default App;
