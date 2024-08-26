async function init() {
  console.log('Hello, World!');
  await sleep(1000);
  console.log('Hello, World After Waiting!');
}

function sleep(ms: number) {
  const x = 'Hello';
  let y = 'Hello!';

  y += x;
  console.log(y);

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

init();
