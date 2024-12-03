 import React, { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import "./App.css"
import CvPreview from './components/CvPreview'
 function App() {
  const [generalInfo, setGeneralInfo] =  useState({})
  console.log("xxxxxxx",generalInfo.name)
   return (
     <div className='app'>
      <GeneralInfo onSubmit={(data)=> setGeneralInfo(data)} /> 
      <CvPreview  generalInfo={generalInfo} /> 
     </div>
   )
 }
 
 export default App