import React, {PropTypes} from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

export const Time = ({
  value, 
  label, 
  onChange, 
  labelOn,
  labelClasses='',
  inputContainerClasses='',
  id='',
  other={}
}) => (
  <div className='form-group'>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <TimePicker
        value={value}
        onChange={onChange} 
        {...other}
      />
    </div>
  </div>
);

Time.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelOn: PropTypes.bool
}; 