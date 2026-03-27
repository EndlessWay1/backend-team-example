function getUser(callback){
    console.log('Waiting...');

    setTimeout(() => {
        callback({id: 1, name: "Alice"});
    }, 8000);
}

getUser((user) => {
    console.log(user);
});