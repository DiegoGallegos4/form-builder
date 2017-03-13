import React, {PropTypes} from 'react';
//Checkbox
export const Checkbox = ({
  value='', 
  label, 
  labelOn, 
  name,
  labelClasses='',
  inputContainerClasses='',
  onChange=()=>null,
  disabled=false,
  id=''
}) => (
  <div className='form-group'>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <input 
        type='checkbox' 
        value={value}  
        onChange={onChange}
        name={name} 
        checked={value} 
        disabled={disabled}
      />
    </div>
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func
};
