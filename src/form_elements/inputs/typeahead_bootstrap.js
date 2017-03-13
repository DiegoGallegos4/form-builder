import React, {PropTypes} from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';

export const TypeaheadBootstrap = ({
  options, 
  value='', 
  label, 
  onChange, 
  labelOn,
  labelKey,
  labelClasses='',
  inputContainerClasses='',
  containerClassNames='',
  disabled=false,
  renderButton= () => undefined,
  onInputChange,
  id=''
}) => (
  <div className={`form-group ${containerClassNames}`}>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <Typeahead
        value={value}
        onChange={onChange}
        options={options}
        disabled={disabled}
        labelKey={labelKey}
        onInputChange={onInputChange}
      />
      {renderButton()}
    </div>
  </div>
);


TypeaheadBootstrap.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelClasses: PropTypes.string,
  inputContainerClasses: PropTypes.string,
  disabled: PropTypes.bool,
  renderButton: PropTypes.func
}; 

