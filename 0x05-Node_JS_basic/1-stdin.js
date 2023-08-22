// message to be printed
const message = "Welcome to Holberton School, what is your name? \n";

// print message to terminal
process.stdout.write(message);

// read user input
process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name !== null) {
        console.log(`Your name is: ${name}`);
    }
});

// closing the process
process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});