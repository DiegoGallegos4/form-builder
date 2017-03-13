const roundToFour = (num) => {    
  return +(Math.round(num + "e+4")  + "e-4");
}
/**
 * Calculates the current item's and overall table's total
 * @param  object currentItem state's item to be modified
 * @param  string qty: the items's new quantity.
 * @return array: containing the current new total and total of all the table.
 */
export const calculateTotal = (currentItem, total, qty, costField) => {
    let newQty = parseFloat(qty) || 0.0;
    let currentItemTotal = roundToFour( newQty * parseFloat(currentItem[costField] || 0.0));
    let newTotal = roundToFour(total + currentItemTotal - (currentItem.total || 0.0));
    return [currentItemTotal, newTotal];
}

/**
 * Process lists to add value and label. Assumption: data is received as object with data key.
 * @param  array lists response data
 * @param  array urls  urls fetched with value and label info
 * @return array lists with value and label info set
 */
export const processLists = (lists, urls) => {
  return lists.map((list,idx)=> {
    if(urls[idx].type == 'array no data')
      return list.map(l => l[urls[idx].label]);

    if(urls[idx].type == 'array')
      return list.data.map(l => l[urls[idx].label]);

    if(urls[idx].type === 'reg')
      list.data.forEach(l =>{
        l.label = l[urls[idx].label];
        l.value = l[urls[idx].value];
      });
    else
      list.forEach(l =>{
        l.label = l[urls[idx].label];
        l.value = l[urls[idx].value];
      });
    return list;
  });
}
