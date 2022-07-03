function  cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.findIndex((item) => item.hash === hash);
    if ((objectInCache !== -1)) {
      console.log("Из кэша: " + cache[objectInCache].value);
      return ("Из кэша: " + cache[objectInCache].value);
    }
    
    let result = func(...args);
    cache.push({
      "hash": hash,
      "value": result
    });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}

const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3); 



function debounceDecoratorNew(func, ms) {
  let timerId;
  
  function wrapper(...args) {
    if (timerId === null) {
      func(...args);
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), ms);
    }
  }
  return wrapper;
}


const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); 
setTimeout(upgradedSendSignal, 300); 
setTimeout(upgradedSendSignal, 900); 
setTimeout(upgradedSendSignal, 1200);
setTimeout(upgradedSendSignal, 2300); 
setTimeout(upgradedSendSignal, 4400);
setTimeout(upgradedSendSignal, 4500);



function debounceDecorator2(func) {
  let timerId;

  function wrapper(...args) {
    if (timerId === null) {
      func(...args);
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), ms);
    }
    wrapper.count.push(args);
    return func.call(this, ...args);
  }
  wrapper.count = [];
  return wrapper;
}

const sum = (a, b) => a + b;
const sumSpied = debounceDecorator2(sum);
sumSpied(100, 200);
sumSpied(1, 3);
console.log(sumSpied.count)