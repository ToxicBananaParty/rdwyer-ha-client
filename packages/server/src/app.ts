async function init() {
    console.log("Hello, World!");
    await sleep(1000);
    console.log("Hello, World After Waiting!");
  }
  
  function sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

init();