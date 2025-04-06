// (IIFE) Immediately Invoked Function Expression

const runOneTime = function () {
  console.log("вы больше никогда не увидите вызов этой функции");
}

// runOneTime();
// runOneTime();

(function () {
  console.log("вы больше никогда не увидите вызов этой функции");
})();