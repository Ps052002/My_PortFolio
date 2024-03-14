import React from 'react'
import './App.css'
import style from '../CSSModule/para.module.css'
import Photo from '../assets/mypic.jpg'
export default function Img() {
  return (
    <div>
        <img src={Photo} className={`{style.Img} img-fluid`} alt="..."/>
        
    </div>
  )
}
