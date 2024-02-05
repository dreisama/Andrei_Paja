import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import PageComponent from './Components/PageComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <PageComponent/>
  </React.StrictMode>,
)
