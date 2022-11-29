// implementation of map function in Typescript

function map<U, T>(array: U[], transform:(item: U) => T) {
    const result = new Array<T>();
    array.forEach((item) => {
        result.push(transform(item));
    });
    return result;
  }
  const result1 = [1, 2, 3, 4].map((items) => items * 2);
  console.log(result1);
  
  
  // implementation of filter function in Typescript
  
  function filter<U, T>(array: U[], predicate: (item: U) => T) {
    const result = new Array<U>();
    array.forEach((item) => {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
  }
  const result2 = [1, 2, 3, 4].filter((items) => items % 2 == 0);
  console.log(result2);
  
  
  // implementation of filter function in Typescript
  
  function reduce<U,T>(items: U[], accumulator:(accumulated: U ,currentItem: U ,index:number , items: U[])=> U, initialValue:U) {
    let accumulated = initialValue;
    let index = 0;
    items.forEach((currentItem) => {
        accumulated = accumulator(accumulated, currentItem, index, items);
        index += 1;
    });
    return accumulated;
  }
  const result3 = [1, 2, 3, 4].reduce((accumulated, currentItem) => {
    return accumulated + currentItem;
  }, 0);
  console.log(result3);