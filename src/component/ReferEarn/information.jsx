import React from 'react'

const Information = (props) => {
  return (
    <div>
        <div className='information'>
                    <img src={props.img}/>
                    <p>{props.text}</p>
                </div>
    </div>
  )
}

export default Information