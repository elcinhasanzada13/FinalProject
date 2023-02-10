import React from 'react'

const Mode = ({modedata,setModedata}) => {
    const setColor =()=>{
        setModedata(modedata === 'bg-light'?localStorage.setItem('mode','bg-dark'):localStorage.setItem('mode','bg-light'));
        setModedata(modedata === 'bg-light'?'bg-dark':'bg-light');
    }

  return (
    <div>
        <button onClick={setColor} className='mode ms-2'>{modedata === "bg-light"?"☀️":"🌙"}</button>
    </div>
  )
}

export default Mode