import React, {PropTypes} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export const SelectAsync= ({
  name, 
  value, 
  label, 
  labelOn, 
  loadOptions, 
  onChange, 
  minimumInput, 
  labelKey,
  cache,
  labelClasses='',
  inputContainerClasses='',
  multi,
  simpleValue,
  id=''
}) => (
  <div className='form-group'>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <Select.Async
        name={name}
        value={value}
        loadOptions={loadOptions}
        onChange={onChange}
        minimumInput={minimumInput}
        labelKey={labelKey}
        cache={cache}
        multi={multi}
        simpleValue={simpleValue}
      />
    </div>
  </div>
);

SelectAsync.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  loadOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  minimumInput: PropTypes.number,
    multi: PropTypes.bool,
    simpleValue: PropTypes.bool
};
