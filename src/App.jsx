import { useEffect, useState } from 'react'

import axios from 'axios'

import './App.css'

import Header from './components/Header/Header'
import InputBox from './components/InputBox/InputBox'
import AboutWord from './components/AboutWord/AboutWord'
import NotFound from './components/NotFound/NotFound'

function App() {

  const [word, setWord] = useState("")

  const [data, setData] = useState(null)

  const [response, setResponse] = useState(null)

  const [isLight, setIsLight] = useState(true)

  useEffect(() => {
    if (word.trim() !== "") {
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`)
      .then(response => {
        setData(response.data)
        setResponse(response)
        console.log(response)
      }).catch((err) => {
        setData(err)
        console.log(err)
      })
    }
  }, [word])

  return (
    <>
      <Header isLight={isLight} setIsLight={setIsLight} />
      <InputBox isLight={isLight} setWord={setWord} />
      {response?.status === 200 && data?.status !== 404 && <AboutWord fetchData={data}/>}
      {data?.status === 404 && <NotFound/>}
    </>
  )
}

export default App
