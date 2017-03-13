import React, {Component} from 'react';
import TableHeader from './form_table/table_header.js';
import TableBody from './form_table/table_body.js';
import Table from './form_table/table.js';
import Summary from './form_table/summary.js';
import zipObject from 'lodash/zipObject';
import map from 'lodash/map'

class FormItems extends Component{
  valueSelector(field, e){
    let value = e;
    if(field.elt.name == 'Checkbox')
      value = e.target.checked;

    if(field.elt.name == 'DateTimeInput' || field.elt.name == 'DateInput' || field.elt.name == 'SelectAsync')
      value = e;

    if(field.elt.name == 'SelectInput' || field.elt.name == 'TextArea' || field.elt.name == 'TextInput')
      value = e.target.value;

    if(field.elt.name == 'SelectReact')
      value = field.multi ? e : e.value;

    if(field.elt.name == 'TypeaheadBootstrap')
      if(e.constructor == Array)
        value = e.length > 0 ? e[0][field.labelKey] : '';
      else
        value = e
    
    return value;
  }


  render(){
    const { form, rows, loadOptions, subtotal, onAdd, actions } = this.props;
    const fieldNames = form.fields.map(f => f.name);
    return(
      <div>
        <Table>
          <TableHeader fields={form.fields}/>
          <TableBody 
            fields={form.fields}
            rows={rows} 
            actions={actions}
            buttons={form.buttons}
            loadOptions={loadOptions}
            valueSelector={this.valueSelector}
          />
          <tfoot>
            <tr>
              <td colSpan={form.fields.length}>
                <a onClick={() => onAdd(zipObject(fieldNames, map(fieldNames, ()=>'')))}>
                  Add new 
                </a>
              </td>
            </tr>
          </tfoot>
        </Table>
        {this.props.children}
      </div>
    )
  }
};

export default FormItems;