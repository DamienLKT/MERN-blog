import React from 'react'

const inputfield = ({htmlfor,title,type,name,id}) =>  {
  return (
    <div className="form-group pb-3">
        <label htmlFor={htmlfor}>{title}:</label>
        <input className="form-control"  type={type} name={name} id={id} required></input>
    </div>
  )
}

export default inputfield
