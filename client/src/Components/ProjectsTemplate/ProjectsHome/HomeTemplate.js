import React from 'react'
import './HomeTemplate.css'

function HomeTemplate({homepagePic, title}) {
  return (
    <div className="container">
      {/* <div className="header"><span className="first"></span><span className="second"></span><span className="third"></span></div> */}
      <img src={homepagePic}/>
      <h3 className='title'>{title}</h3>
    </div>
  )
}

export default HomeTemplate 
