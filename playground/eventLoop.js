// Javascript can emulate concurrency despite being a single threaded language. This
// allows for non-blocking code behavior. This emulation is achieved through event-loops/

console.log("I'm learning about");
 
for (let idx=0; idx < 999999999; idx++) {}
 
// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");


// In this example, through the event loop we are simulating concurrency using setTimeout(). Line 16 will log to the console before line 15 runs. 
console.log("I’m learning about");
setTimeout(() => { console.log("Event Loop");}, 2000);
console.log("the");

// Q: What is the event-loop? A system for handling code execution.
const eventLoop = {
    1: "Memory Heap",
    2: "Call Stack",
    3: "Event Queue",
    4: "Event Loop",
    5: "Node or Web APIs"
}

// The Event Loop can be summarized as: when code is executed, it is handled by the heap and 
// call stack, which interact with Node and Web APIs. Those APIs enable concurrency and pass 
// asynchronous messages back to the stack via an event queue. The event queue’s interaction with 
// the call stack is managed by an event loop. All together, those parts maintain the order of code execution 
// when we run asynchronous functions.