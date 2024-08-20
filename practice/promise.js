const pro = new Promise((resolve, reject) => {
    resolve();
    return console.log('hello');
})

pro.then(() => {
    console.log('then is called');
})