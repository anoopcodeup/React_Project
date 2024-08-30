import React from 'react'

function Inputbox({labeling,value,currencyoption}) {
  return (
    <>
    {/* <h1>InputBox</h1> */}
    <div className="container flex bg-blue-200 p-3">
      <div className="left w-1/2 flex flex-col"> 
        <label htmlFor="inpt" className='text-start mb-2'>{labeling}</label>
        <input type="number" id='inpt'value={value}/>
      </div>
      <div className="right w-1/2 flex flex-col items-end">
        <p className='mb-3'>
          Currency Type
        </p>
        <select className='w-1/2' id="">
        {
          currencyoption.map((currentvalue) => {
            <option key={currentvalue} value={currentvalue}>{currentvalue}</option>
          })
        }
        </select>
      </div>
    </div>
    </>
  )
}

export default Inputbox
