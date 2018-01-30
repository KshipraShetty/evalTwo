firstFun = first();

secondFun = firstFun.then(value => second(value));
secondFun.then(console.log);
