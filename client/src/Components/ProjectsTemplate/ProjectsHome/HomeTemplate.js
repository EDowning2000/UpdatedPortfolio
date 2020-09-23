import React from 'react'
import './HomeTemplate.css'

function HomeTemplate({homepagePic, title}) {
  return (
    <div className="container">
      <img src={homepagePic}/>
      <h3 className='title'>{title}</h3>
    </div>
  )
}

export default HomeTemplate 