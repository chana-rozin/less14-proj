import React from 'react'

function Search({setData, searchMethod}) {

    const search = (ev)=>{
        ev.preventDefault();
        console.log(ev.target.value);
        setData(prev=>searchMethod(prev, ev.target.value));
    }

  return (
    <input 
    type='Text'
    onBlur={search}></input>
  )
}

export default Search