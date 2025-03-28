const greet = function (greetingText) {
  return function (name) {
    console.log(`${greetingText}, ${name}`);
  };
};


 const hi = greet('hello');


 hi('John'); // hello, John
 hi('Jane'); // hello, Jane
 hi('Doe'); // hello, Doe



 const arrowFunction = (greetingText) => (name) => {
  console.log(`${greetingText}, ${name}`);
};


arrowFunction('John'); // hello, John
arrowFunction('Jane'); // hello, Jane

const hey = arrowFunction('hello-1');
hey('John'); // hello-1, John
