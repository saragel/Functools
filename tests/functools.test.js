import {map, filter, reduce, max, min, bubblesort} from "../src/functools.js"

describe("Testeo de Map", ()=>{
  test("map: 1,2,3 (+1) -> 2,3,4", ()=>{
    expect( map([1,2,3], el=>el+1) ).toStrictEqual([2,3,4])
  });

  test("map: 2,2,2 (*3) -> 6,6,6", ()=>{
    expect( map([2,2,2], el=>el*3) ).toStrictEqual([6,6,6])
  });
});

describe("Testeo de Filter", ()=>{
  test("filter: 1,2,3 (>1) -> 2,3", ()=>{
    expect( filter([1,2,3], el=>el>1) ).toStrictEqual([2,3])
  });

  test("filter: 2,5,1 (>3) -> 5", ()=>{
    expect( filter([2,5,1], el=>el>3) ).toStrictEqual([5])
  });
});

describe("Testeo de Reduce", ()=>{
  test("reduce: 1,2,3 (a+b) 0 -> 6",()=>{
    expect( reduce([1,2,3], (a,b)=>a+b, 0) ).toBe(6)
  });
  test("reduce: 1,2,3 (a*b) 1 -> 6",()=>{
    expect( reduce([1,2,3], (a,b)=>a*b, 1) ).toBe(6)
  });

})

describe ("Testeo de Max", ()=>{
  test ("max of: 1, 2, 3, 60, 8 -> 60", ()=>{

    expect( max([1,2,3,60,8]) ).toBe(60);

  })
});

describe ("Testeo de Min", ()=>{
  test ("min of: 1, 2, 3, 60, 8 -> 60", ()=>{
    expect( min([1,2,3,60,8]) ).toBe(1);
  })
});

/* describe ("Testeo de Sort", ()=>{
  test ("min of: 1, 2, 3, 60, 8 -> 1, 2, 3, 8, 60", ()=>{
    expect ( sort([1, 2, 3, 60, 8]) ).toBe ([1, 2, 3, 8, 60]);
  })
}); */

describe ("Testeo de Bubblesort", ()=>{
  test ("sort: 55, 68, 7, 9 -> 7, 9, 55, 68", ()=>{
    expect ( bubblesort([55, 68, 7, 9])) .toStrictEqual ([68, 55, 9, 7]);
  })
});