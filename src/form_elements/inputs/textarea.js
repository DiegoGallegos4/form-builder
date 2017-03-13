import React, {PropTypes} from 'react';

export const TextArea = ({
  name, 
  value, 
  label, 
  placeholder, 
  rows, 
  onChange, 
  labelOn, 
  disabled,
  labelClasses='',
  inputContainerClasses='',
  id=''
}) => (
  <div className='form-group'>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label}</label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <textarea 
        className='form-control'
        name={name} 
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        >
      </textarea>
    </div>
  </div>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  labelClasses: PropTypes.string,
  inputContainerClasses: PropTypes.string
}; 
