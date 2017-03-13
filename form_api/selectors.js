const selectorItems = data => {
  return data.map(elt =>{
    elt.label = elt.codigo + ' ' + elt.descripcion;
    elt.value = elt.id;
    return elt;
  });
};

const selectorCustomers = data => {
  return data.map(elt =>{
    elt.label = elt.first_name + ' ' + elt.last_name;
    elt.value = elt.id;
    return elt;
  });
};

const selectorClasses = data => {
  return data.map(elt =>{
    elt.label = elt.name;
    elt.value = elt.id;
    return elt;
  });
};

const selectorDepartments = data => {
  return data.result.models.map(elt =>{
    elt.label = elt.nombre;
    elt.value = elt.id;
    return elt;
  });
};

const selectorVendors = data => {
  return data.map(elt =>{
    elt.label = elt.name;
    elt.value = elt.id;
    return elt;
  });
};

const selectorEmployees = data => {
  return data.result.models.map(elt => {
    elt.label = elt.nombre + ' ' + elt.apellido;
    elt.value = elt.id;
    return elt;
  });
};

const selectorEmployee = data => {
  const d = data.results.map(elt => {
    elt.label = elt.nombre;
    elt.value = elt.id;
    return elt;
  });
  return d;
};


const selectorUsers = data => {
    return data.map(elt =>{
    elt.label = elt.full_name;
    elt.value = elt.id;
    return elt;
  });
};

const selectorGeneric = data => {
    return data.map(elt =>{
    elt.label = elt.name;
    elt.value = elt.id;
    return elt;
  });
};

const selectorAccount = data => {
    return data.map(elt =>{
    elt.label = elt.description;
    elt.value = elt.id;
    return elt;
  });
};

/**
 *  Adds fields so select input can display it
 *  @param object data: data received from api request
 *  @return array: returns data modified with label and id fields
 */
const selectorMeasurement = data => {
    return data.data.map(elt =>{
        elt.label = `${elt.name} (${elt.abbreviation})` ;
        elt.value = elt.id;
        return elt;
    });
};

// ===============APIs================
const apis = {
  items: {
    selector: selectorItems,
    url: 'http://test.almacenes.panoramalife.com/api/items/items',
  },
  customers: {
    selector: selectorCustomers,
    url: '/api/entity',
  },
  classes: {
    selector: selectorClasses,
    url: 'http://test.erp.panoramalife.com/api/cost-center'
  },
  departments: {
    selector: selectorDepartments,
    url: 'http://test.hrm.panoramalife.com/api/departamento/departamentos'
  },
  employees: {
    selector: selectorEmployees,
    url: 'http://test.hrm.panoramalife.com/api/empleado/empleados'
  },
  users: {
    selector: selectorUsers,
    url: '/api/users'
  },
  employee: {
    selector: selectorEmployee,
    url: 'http://test.hrm.panoramalife.com/empleado/empleado-list'
  },
  vendors: {
    selector: selectorGeneric,
    url: 'http://test.erp.panoramalife.com/api/vendor'
  },
  accounts: {
    selector: selectorAccount,
    url: 'http://test.erp.panoramalife.com/api/account'
  },
  itemTypes: {
    selector: selectorGeneric,
    url: '/api/item-type'
  },
  measurements: {
      selector: selectorMeasurement,
      url: '/api/measurement-unit'
  }
};

export default apis;


