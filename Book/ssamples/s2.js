// process.argv.forEach((val, ind, arg) => {
//     console.log('process.argv['+ind+']='+val);
// });

for(i=0; i<process.argv.length; i++)
    console.log('process.argv['+i+']='+ process.argv[i]);

console.log("Filename :"+ __filename+" Directory :"+__dirname);