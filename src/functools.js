function map(col, f){
  let res = [];
  for(let i = 0; i < col.length; i++){
    res[i] = f(col[i]);
  }
  return res;
}

function filter(col, f){
  let res = [];
  for(let i = 0; i < col.length; i++){
    if(f(col[i])){
      res.push(col[i]);
    }
  }
  return res;
}

function reduce(col, f, val0){
  let result = val0;
  for(let i = 0; i < col.length; i++){
    result = f(result, col[i]);
  }
  return result;
}

export {map, filter, reduce}
