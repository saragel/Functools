const functools = require("../src/functools")

describe("Testeo de Map", ()=>{
  test("map: 1,2,3 (+1) -> 2,3,4", ()=>{
    expect( functools.map([1,2,3], el=>el+1) ).toStrictEqual([2,3,4])
  });

  test("map: 2,2,2 (*3) -> 6,6,6", ()=>{
    expect( functools.map([2,2,2], el=>el*3) ).toStrictEqual([6,6,6])
  });
});



describe("Testeo de Filter", ()=>{
  test("filter: 1,2,3 (>1) -> 2,3", ()=>{
    expect( functools.filter([1,2,3], el=>el>1) ).toStrictEqual([2,3])
  });

  test("filter: 2,5,1 (>3) -> 5", ()=>{
    expect( functools.filter([2,5,1], el=>el>3) ).toStrictEqual([5])
  });
});


describe("Testeo de Reduce", ()=>{
  test("reduce: 1,2,3 (a+b) 0 -> 6",()=>{
    expect( functools.reduce([1,2,3], (a,b)=>a+b, 0) ).toBe(6)
  });
  test("reduce: 1,2,3 (a*b) 1 -> 6",()=>{
    expect( functools.reduce([1,2,3], (a,b)=>a*b, 1) ).toBe(6)
  });

})
