import React, { useState, useEffect } from 'react'
import './App.css';
import FlipMove from 'react-flip-move';
import {data, colors} from './shared';

// y6AsZZLvFEUAJDnYogpg

function App() {
  const [update, setupdate] = useState(true)

  useEffect(() => {
    setTimeout(function () { setupdate(!update) }, 3000);
  }, [update]);
  return (
    <div className="App">
      <FlipMove staggerDelayBy={150}
        appearAnimation="accordionVertical"
        enterAnimation="fade"
        leaveAnimation="fade">
        {data.map((article) => (
          <li style={{ background: colors[Math.round(Math.random() * 4)] }} key={article.userID || update}><span>{article.displayName} - {Math.round(Math.random() * 15000000)}</span></li>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
