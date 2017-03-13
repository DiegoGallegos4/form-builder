import React, { PropTypes} from 'react';

const TableHeader = ({fields}) => (
  <thead>
    <tr>
      {
        fields.map( (field, i) => 
          <th id={field.name} key={i}>{field.label}</th>
        )}
    </tr>
  </thead>
)

TableHeader.propTypes = {
  fields: PropTypes.array.isRequired
};

export default TableHeader