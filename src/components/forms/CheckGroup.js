import React from 'react'

export default function DropMenu() {
  const { groupName, label, options, onChange } = this.props;
  return (
    <div className="form-field">
      <label>
        <h5>{label}</h5>
      </label>
      {options.map(option =>
        <p>
          <label>
            <input
              name={groupName}
              type="radio"
              value={option.checkboxValue}
              checked={option.checked === true}
              onChange={onChange}
            />
          </label>
        </p>)}
    </div>
  )
}
