import React from 'react'

export default function Dropdown() {
  const options = this.props.options;
  return (
    <select onChange={this.props.onChange}>
      {options.map(option => <option value={option.name}>{option.value}</option>)}
    </select>
  )
}
