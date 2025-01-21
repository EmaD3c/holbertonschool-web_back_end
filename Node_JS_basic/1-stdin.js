console.log("Welcome to Holberton School, what is your name?");
  
process.stdin.on('data', data => { 
  console.log(`Your name is: ${data.toString()}`);
  process.stdin.end();
});

// fin du programme
process.stdin.on('end', () => {
  console.log("This important software is now closing\n");
});
