import apis from './selectors.js';

/**
 * Fetches options from api using query params and a callback used to process the requested data
 * @param string url 
 * @param object query: query params
 * @param function cb: callback to process data
 * @returns Promise fetching data from server
 */
const getOptions = (url, query, cb) => {
  let encodedParams = '';
  for(let queryParam in query) encodedParams += `${queryParam}=${query[queryParam]}&`
  let headers = new Headers();
  headers.append('access_token', document.getElementById('access_token').innerHTML);

  return fetch(`${url}?${encodedParams}`,{headers})
    .then( response  => response.json() )
    .then( data => ({options: cb(data) }) );
};

// 1. Create selector (selector.js)
// 2. Create entry on apis object with url and selector keys (selector.js)
// 3. Add entry to loadOptions object and refer to it on form 
export const loadOptions = {
  items: (input,cb) => getOptions(apis.items.url, null, apis.items.selector),
  customers: (input,cb) => getOptions(apis.customers.url, null, apis.customers.selector),
  classes: (input,cb) => getOptions(apis.classes.url, null, apis.classes.selector),
  departments: (input,cb) => getOptions(apis.departments.url, null, apis.departments.selector),
  vendors: (input,cb) => getOptions(apis.vendors.url, null, apis.vendors.selector),
  employees: (input,cb) => getOptions(apis.employees.url, null, apis.employees.selector),
  employee: (input,cb) => getOptions(apis.employee.url, {q: input}, apis.employee.selector),
  users: (input,cb) => getOptions(apis.users.url, null, apis.users.selector),
  assets: (input,cb) => getOptions(apis.accounts.url, {childs: 1, type: 5}, apis.accounts.selector),
  income: (input,cb) => getOptions(apis.accounts.url, {childs: 1, type: 1}, apis.accounts.selector),
  expense: (input,cb) => getOptions(apis.accounts.url, {childs: 1, type: 2}, apis.accounts.selector),
  itemTypes: (input,cb) => getOptions(apis.itemTypes.url, null,apis.itemTypes.selector),
  measurements: (input,cb) => getOptions(apis.measurements.url, null,apis.measurements.selector),
};
