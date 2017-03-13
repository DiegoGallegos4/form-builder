import React, {PropTypes} from 'react';
//File input
export const FileInput = ({
  accept, 
  name, 
  label, 
  onChange, 
  labelOn,
  labelClasses='',
  inputContainerClasses='',
  id=''
})  => (
  <div className='form-group'>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <input className='form-control' type='file' onChange={onChange} name={name} accept={accept}/>
    </div>
  </div>
)
