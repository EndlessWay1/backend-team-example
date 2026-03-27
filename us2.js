const aPromise = new Promise((resolve, reject) => {
	// We call resolve(...) when what we are doing asynchronously was successful, and
  // reject(...) when it failed.
  try {
  	const delayTime = 10000;
  	
    console.log(`Please wait for ${delayTime / 1000} secs...`);
  	
    // In this example, we use setTimeout(...) to simulate async code.
    setTimeout(() => {
  		resolve("Success!");
	  }, delayTime);
    
  } catch (err) {
  	reject(err);
  }
});


aPromise
  .then((successMessage) => {
    // Variable `successMessage` is whatever we passed in the resolve(...) function above.
    console.log(`Yay! ${successMessage}`);
  })
  .catch((error) => {
  	console.log(`Error! ${error}`);
  });