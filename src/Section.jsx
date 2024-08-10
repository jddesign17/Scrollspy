import React from 'react'
import './App.css'
const Section = () => {


    const sectiondata = [
        {
            id:'section1',
            label:'Home',
            back:'red'
        },
        {
            id:'section2',
            label:'About',
            back:'blue'
        },
        {
            id:'section3',
            label:'Services',
            back:'pink'
        }
    ]

  return (
    <div>
        {
        sectiondata.map((item)=>(
            <div style={{width:'100%',height:'100vh',backgroundColor:item.back}} className='center' id={item.id}>
                <h2 style={{fontSize:'30px'}}>{item.label}</h2>
            </div>
        ))
    }
    </div>
  )
}

export default Section