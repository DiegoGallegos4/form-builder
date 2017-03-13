import React, {PropTypes} from 'react';

export const SelectInput = ({
  name, 
  value, 
  label, 
  options=[], 
  defaultOption, 
  onChange, 
  labelOn,
  labelClasses='',
  inputContainerClasses='',
  multiple,
  id=''
}) => (
  <div className='form-group'>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <select name={name} className='form-control' value={value} onChange={onChange}>
        <option value=''>{defaultOption}</option>
        {options.map( option => 
          <option key={Math.random() * 1000} value={option.value}>{option.label}</option>
        )}
      </select>
    </div>
  </div>
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.string
};