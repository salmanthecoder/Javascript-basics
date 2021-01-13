console.log('salman');

setTimeout(function(){
console.log('saifi');
},);

let i=0;
while (i < 50) {
  console.log('while' + i);
  i++;
}

new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
    
    console.log('final');
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});





for(j=0; j < 50; j++){
console.log('for' + j);
}
console.log('hero');
