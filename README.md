#Form Builder

Is a component that generates a form using predefined input elements. The input elements available are: 

- TextInput
- Checkbox
- TextArea
- FileInput
- SelectInput
- [SelectReact](https://github.com/JedWatson/react-select)
- [SelectAsync](https://github.com/JedWatson/react-select)
- [DateInput](https://github.com/Hacker0x01/react-datepicker)
- [DateTimeInput](https://github.com/YouCanBookMe/react-datetime)
- [TimeInput](http://react-component.github.io/time-picker/)
- [TypeaheadBootstrap](https://github.com/ericgio/react-bootstrap-typeahead)

##Form Builder Items

Form builder for line items. Some usage examples would be purchase orders, work orders and invoices where there is a main table and an items table related to it(hasMany relationships)

## TODOS

- [ ] Unit tests (Jest)
- [ ] Continuous Integration (Circle Ci)
- [ ] Extend for custom inputs
- [ ] Documentation for FormBuilderItems 

###Props

It receives the following props:

| Prop | Default Value | Description |
|------|---------------|-------------|
| value| Empty String | value of the controlled input|
| label| Empty String | label of the input|
| labelOn| False Boolean | flag to show label|
| name|  Empty String | html name attribute |
| labelClasses| Empty String | classes of label tag|
| inputContainerClasses | Empty  String | classes of div containing input|
| onChange | Callback Function | callback that modifies value|
| disabled | False Boolean | flag that disables input interaction|
| options | Empty Array | on select inputs, array of all options that can be selected|
| multiple | False Boolean | on select inputs, enables multiple selection|
| placeholder | Empty String | placeholder html attribute |
| inputAttributes | Empty Object | key-value pairs of input attributes (e.g placeholder, type, number)

###Form Configuration File

This is an array of fields and its props that will be passed FormBuilder.

Fields array example:
```javascript
const fields = [
  {
    name: 'code',
    elt: Inputs.TextInput,
    label: 'Code',
    labelOn: true,
    labelClasses: 'col-sm-3',
    inputContainerClasses: 'col-sm-6'
    inputAttributes: {
      type: 'number',
      step: 0.1
    }
  },
  {
    name: 'description',
    elt: Inputs.TextArea,
    label: 'Description',
    labelOn: true,
    labelClasses: 'col-sm-3',
    inputContainerClasses: 'col-sm-6'
  }
];
```

####FormBuilder with React:

```javascript
import React from 'react';
import {render} from 'react-dom'
import update from 'immutability-helper';
import FormBuilder from 'form_builder';

class Item extends React.Component{
    constructor(props){
        this.state = {
            form: {
                code: '',
                description: ''
            } // must have a form key
        }
    }

    onChange(field, value){
        this.setState({
          header: update(this.state.form,{
            $merge:{
              [field]: value
            }
          })
        });
    }

    render(){
        return (
            <FormBuilder
                fields={fields}
                form={this.state}
                formClasses='form-horizontal'
                onChange={this.onChange.bind(this)}
            />
        )
    }
}

render(
  <Item/>,
  document.getElementById('root')
)
```

####FormBuilder with React and Redux:

```javascript
import React from 'react';
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux';
import {bindActionCreators, createStore} from 'redux'
import * as itemActions from './actions/item_actions.js'
import rootReducer from './reducers/index.js';
import FormBuilder from 'form_builder';

// Set up form
const FormBuilderRedux = connect(
  state => state, 
  dispatch => ({actions: bindActionCreators(itemActions, dispatch)})
)(FormBuilder);

class Item extends React.Component{
    render(){
      return(
        <FormBuilderRedux
            fields={fields}
            formName='item'
            formClasses='form-horizontal'
            onChange='update'
        />
      )
    }
}

// Configure Store
const store = createStore(
    rootReducer,
);

//Render Component
render(
  <Provider store={store}>
    <Items/>
  </Provider>, 
  document.getElementById('root')
);

```

Item Actions (item_actions.js)

```javascript
export const update = (name, value) =>({
  type: 'FORM_UPDATE_VALUE',
  name, 
  value
});
```

Reducer (item_reducer.js)
```javascript
const initialState={
    item:{
        form:{
            code: '',
            description: ''
        }
    }
};

const item = (state=initialState.item, action) => {
  switch(action.type){
    case 'FORM_UPDATE_VALUE':
      return {
        ...state,
        form: {
            ...state.form
            [action.name]: action.value
        }
      }

    default:
      return state;
  }
}

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  item
})

export default rootReducer;
```

Redux: dispatch -> action -> reducer -> update state