import React, { PropTypes } from 'react';
/**
 * Table Body Component
 * @param  array fields           form line items configuration array
 * @param  array rows             form line items rows
 * @param  object actions         contains all actions available (updateItems, onChange, onRemove ...)
 * @param  array buttons          buttons array
 * @param  function loadOptions   async callbacks for async inputs
 * @param  function valueSelector 
 * @param  
 */
const TableBody = ({
  fields, 
  rows, 
  actions={},
  buttons=[], 
  loadOptions,
  valueSelector
}) => (
  <tbody>
    {
      rows.length > 0 ? 
        rows.map( (row,index) => 
          <tr key={index}>
            {
              fields.map( (field,idx) => 
                <td key={idx} >
                  <field.elt 
                    onChange={
                      e => actions[field.handleOnChange || 'updateItems'](
                        field.name, 
                        valueSelector(field, e),
                        index
                      )
                    }
                    value={row[field.name]}
                    checked={row[field.name]}
                    loadOptions={loadOptions[field.optionsCallback]}
                    id={`${field.id || field.name}-${index}`}
                    other={field.inputAttributes}
                  />
                </td>
              )
            }
            <td style={{display: 'flex', alignItems: 'center', height: '45px'}}>
              {
                buttons.map( (button,i) => 
                  <div key={i} style={{margin: 5}}>
                    <a onClick={() => actions[button.action](index)}>
                      <span className={button.icon}></span>
                    </a>
                  </div> 
                )
              }
            </td>
          </tr>
        ) : 
        <tr>
          <td colSpan={`${fields.length}`}>
            No hay datos
          </td>
        </tr> 
    }
  </tbody>
);

TableBody.propTypes = {
  fields: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default TableBody;