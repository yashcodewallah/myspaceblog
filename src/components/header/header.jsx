import React from 'react'
import "./header.css"
import Backimg from "./background.jpg"
export default function header() {
  return (
    <div className='header'>
<div className='headertitle'>
    <div className='headertitlesm'>My SPACE</div>
    <div className='headertitlelg'>Blog</div>
</div>
<img className='header-img' src={Backimg} alt=''></img>

    </div>
  )
}
