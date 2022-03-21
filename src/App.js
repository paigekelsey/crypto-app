import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Switch, Route, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Layout, Typography, Space } from "antd"
// eslint-disable-next-line no-unused-vars
import {Navbar} from './components'
import './App.css'

const App = () => {
  return (
<div className = 'app'>
    <div className = "navbar">
<Navbar/>
    </div>
    <div className = 'main'>

    </div>
    <div className="footer">

    </div>
</div>
  )
}

export default App