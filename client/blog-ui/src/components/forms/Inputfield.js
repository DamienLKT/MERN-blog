import React from 'react'

const inputfield = ({htmlfor,title,type,name,id, required=false}) =>  {
  return (
    <div className="form-group pb-3">
        <label htmlFor={htmlfor}>{title}:</label>
        {required?
        (<input className="form-control"  type={type} name={name} id={id} required></input>)
        :(<input className="form-control"  type={type} name={name} id={id}></input>)}
    </div>
  )
}

export default inputfield
