const animateSpinner = (seconds) => {
  const cursor = ['|', '/', '-', '\\'];
  let delayTime = 100;
  let animationFrame = 0;
  
  while (delayTime <= (seconds * 1000)) {
    if(animationFrame > cursor.length - 1) {
      animationFrame = 0;
    }

    const cursorAnimation = cursor[animationFrame++];
    
    setTimeout(() => {
      process.stdout.write(`\r${cursorAnimation}   `);
    }, delayTime);
    
    delayTime += 200;
  }

  setTimeout(() => {
    process.stdout.write(`\r \n`);
  }, delayTime);
};

animateSpinner(3);