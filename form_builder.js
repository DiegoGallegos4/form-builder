import React, { Component, PropTypes } from 'react';
/**
 * name: input name attribute
 * elt: name of component
 * label: label
 * labelOn: display label
 * labelClasses: label classes
 * inputContainerClasses: container's input classes
 * options: name of key in options object (for select inputs)
 * rows: for textarea,
 * accept: for file input
 * onChange: update or onChange fn. Value :
 *    Text, Select, TextArea -> e.target.value
 *    Date, DateTime -> value
 *    SelectAsync, SelectReact -> value.value
 *    Checkbox -> e.target.checked
 */

const noop = () => undefined

export default class FormBuilder extends Component{
  valueSelector(field, e){
    let value = e;
    if(field.elt.name == 'Checkbox')
      value = e.target.checked;

    if(field.elt.name == 'DateTimeInput' || field.elt.name == 'DateInput')
      value = e;

    if(field.elt.name == 'SelectInput' || field.elt.name == 'TextArea' || field.elt.name == 'TextInput')
      value = e.target.value;

    if(field.elt.name == 'SelectAsync' || field.elt.name == 'SelectReact'){
      value = field.multi ? e : e.value;
    }

    if(field.elt.name == 'TypeaheadBootstrap')
      if(e.constructor == Array)
        value = e.length > 0 ? e[0][field.labelKey] : '';
      else
        value = e
    
    return value;
  }
  /**
   * formName: Redux
   * actions: Redux
   * onChange: string
   * 
   * form: React
   * onChange: function
   */
  render(){
    const {fields, actions, formName, formClasses, onChange, form} = this.props
    const onChangeCallback = typeof onChange == 'function' ? onChange : actions[onChange]
    const data = typeof form == 'object' ? form : this.props[formName];
    return(
      <form className={`${formClasses}`}>
        {
          fields.map((field, k) => 
            /Typeahead/.test(field.elt.name) ? 
              <field.elt
                key={k}
                onChange={
                  e => onChangeCallback(
                    field.name, 
                    this.valueSelector(field, e)
                  )
                }
                value={data.form[field.name]}
                options={data.hasOwnProperty('options') ? data.options[field.list] : []}
                onInputChange={
                  e => onChangeCallback(
                    field.name, 
                    this.valueSelector(field, e)
                  )
                }
                {...field}
                other={field.inputAttributes}
              /> :
              <field.elt
                key={k}
                onChange={
                  e => onChangeCallback(
                    field.name, 
                    this.valueSelector(field, e)
                  )
                }
                value={data.form[field.name]}
                checked={data.form[field.name]}
                options={data.hasOwnProperty('options') ? data.options[field.list] : []}
                {...field}
                other={field.inputAttributes}
              />
          )
        }
      </form>
    )
  }
}

FormBuilder.propTypes = {
  fields: PropTypes.array.isRequired,
  actions: PropTypes.object,
  formName: PropTypes.string,
  formClasses: PropTypes.string,
  onChange: PropTypes.any.isRequired
}