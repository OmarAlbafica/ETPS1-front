import React from 'react'

export default function Input(props) {
  const { icon, onChange, type, name, label, extraClass } = props;
  if (icon !== undefined || icon !== null) {
    return (
      <div className="input-field col s12">

        <i className="material-icons prefix">{icon}</i>
        <input
          className={`validate ${extraClass}`}
          type={type}
          name={name}
          id={name}
          required
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    )
  } else {
    return (
      <div className="input-field col s12">
        <input
          className={`validate ${extraClass}`}
          type={type}
          name={name}
          id={name}
          required
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    )
  }
}
