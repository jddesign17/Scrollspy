import React, { useEffect, useState } from 'react'
import Section from './Section'
import Navbar from './Navbar'
const App = () => {


  const [currentsection,setcurrentsection] = useState('')

  const handleScroll = ()=>{
    
      const sectionoffset = document.querySelectorAll('div[id^="section"]')
      let newsection = ''

      sectionoffset.forEach((section)=>{
        const rect = section.getBoundingClientRect()
        if(rect.top <=0 )
        {
            newsection = section.id
        }

        if(currentsection != newsection)
        {
          setcurrentsection(newsection)
        }
      })
      

  }


  useEffect(()=>{

    window.addEventListener('scroll',handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[])


  return (
    <div>
      <Navbar currentsection={currentsection}/>
      <Section/>
    </div>
  )
}

export default App