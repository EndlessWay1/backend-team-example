async function test(){
    return 1;
}

f().then(alert);

async function waitForSomething(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000)
    });

    const result = await promise;
    alert(result); //"Done!"
}

waitForSomething();
