import React, {PropTypes} from 'react';

export const TextInput = ({
  name, 
  value, 
  label, 
  placeholder, 
  onChange, 
  labelOn, 
  disabled,
  labelClasses='',
  inputContainerClasses='',
  id='',
  other={}
}) => (
  <div className='form-group'>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <input 
        name={name}
        className='form-control' 
        type='text' 
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        {...other}
      />
    </div>
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelOn: PropTypes.bool,
  disabled: PropTypes.bool,
  labelClasses: PropTypes.string,
  inputContainerClasses: PropTypes.string
};