import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Course from './Course.jsx'
import Hero from './assets/react.svg'
import Node from './assets/Node.svg'
import Python from'./assets/python.png'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Course name="React js Course" price="$2000" img={Hero}/>
    <Course name="Node js Course" price="$2500" img={Node}/>
    <Course name="Python" price="$5000"img={Python}/>
  </StrictMode>,
)
