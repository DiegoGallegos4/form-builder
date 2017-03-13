import React, {PropTypes} from 'react';
import {Typeahead} from 'react-typeahead';
import '../css/typeahead.css';

export const TypeaheadInput = ({
  options, 
  value, 
  label, 
  onChange, 
  labelOn,
  onKeyUp, 
  labelClasses='',
  inputContainerClasses='',
  containerClassNames='',
  disabled=false,
  renderButton= () => undefined,
  id=''
}) => (
  <div className={`form-group ${containerClassNames}`}>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <Typeahead
        initialValue={value}
        value={value}
        onOptionSelected={onChange}
        inputProps={{value}}
        onKeyUp={onKeyUp}
        options={options}
        maxVisible={10}
        disabled={disabled}
        customClasses={{
          input: "form-control",
          results: "list__container",
          listItem: "list__item"
        }}
      />
      {renderButton()}
    </div>
  </div>
);


TypeaheadInput.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onKeyUp: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  labelClasses: PropTypes.string,
  inputContainerClasses: PropTypes.string,
  disabled: PropTypes.bool,
  renderButton: PropTypes.func
}; 