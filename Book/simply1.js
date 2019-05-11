var methodsDefined = require('./mmm');
console.log("Started executing :"+methodsDefined.now)
console.log(methodsDefined.add(3,5));
setTimeout( () => {
    console.log("Current time:"+methodsDefined.now);
}, 5000);