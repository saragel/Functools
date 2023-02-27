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

function max (arr) {
  let val = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (val < arr[i]) {
      val = arr[i];
    }
  }
  return val;
}

function min (arr) {
  let val = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (val > arr[i]) {
      val = arr[i];
    }
  }
  return val;
}

/* function sort (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>numero anterior del array)
    arr.push(gdghgo);
  }
  return arr;
} */

function bubblesort (arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length-1-j; i++) { //-1 para q compare con el anterior, -j para que no compruebe más veces las parejas que están ordenadas
      if ( arr[i] < arr[i+1] ) {
        let temp = arr[i];
        arr[i] = arr [i+1];
        arr[i+1] = temp // muta el array en vez de hacer una copia ordenada
      }
    }
  }
  return arr;
}

export {map, filter, reduce, max, min, bubblesort}