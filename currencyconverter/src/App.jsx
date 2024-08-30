import { useState } from 'react'
import './App.css'
import Inputbox from "./components/Inputbox"
import useCurrencyInfo from './customhooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(10)
  const [convertedamount, setConvertedAmount] = useState(0)
  const [to, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")

  let currencyObject = useCurrencyInfo(to)
  

  return (
    <>
    <Inputbox value={amount} labeling="From" currencyoption={currencyObject}></Inputbox>
    {/* <Inputbox></Inputbox> */}
    </>
  )
}

export default App
