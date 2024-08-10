import React from 'react'

const Navbar = ({currentsection}) => {
  return (
    <div style={{position:'fixed',padding:'20px',background:'white',width:'100%',display:'flex',justifyContent:'space-between'}}>
          <div>
            <h2>Scroll Spy</h2>
          </div>

          <div style={{display:'flex',}}>
            <a href={`#section1`} style={{textDecoration:'none',marginInline:'20px', color:currentsection ===  'section1'?'red':'black'}}>Home</a>
            <a href={`#section2`}  style={{textDecoration:'none',marginInline:'20px', color:currentsection === 'section2'?'red':'black' }}>About</a>
            <a href={`#section3`}  style={{textDecoration:'none',marginInline:'20px', color:currentsection === 'section3'?'red':'black' }}>Services</a>

          </div>
    </div>
  )
}

export default Navbar
