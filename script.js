// (IIFE) Immediately Invoked Function Expression

// const runOneTime = function () {
//   console.log("вы больше никогда не увидите вызов этой функции 0");
// }

// runOneTime();
// runOneTime();

(function () {
  console.log("вы больше никогда не увидите вызов этой функции 1");
})();

( () => {
  console.log("вы больше никогда не увидите вызов этой стрелочной функции 2");
}
)();