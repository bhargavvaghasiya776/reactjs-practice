import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CORE_CONCEPTS} from './data.js'
import Card from './Card.jsx'

const reactDesc = ['Test1','Test2','Test3']

function  getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}


function CoreComponent(props) {
  return (
    <li>
     <img src={props.img} alt={props.title} />
     <h3>{props.title}</h3>
     <p>{props.description}</p>
    </li>
  );
}

function App() {
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card />
      <section id="core-concepts"  >
        <h2>Core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=> <CoreComponent {...conceptItem} />)}
          
        </ul>
      </section>
      <p className="read-the-docs">
        {reactDesc[getRandomInt(2)]} Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
