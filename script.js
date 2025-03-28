// функция Принимающая collback функцию

const removeSpaces = function (text) {
  return text.replace(/ /g, '').toLowerCase();
}

const upperFirstWorld = function (text) {
  const [first, ...others] = text.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// функция высшего порядка
const  converter = function (str, func) {
  console.log(`оригинал Первый аргумент-0 ${str}`);
  
  console.log(`Конвертор-1: ${func(str)}`);


  console.log(`Конвертор-2: ${func.name}`);
  
  
}


converter('Клопы тут', upperFirstWorld); 

converter('JavaScript is awesome', removeSpaces);


// Передача колбека в функцию 
const twice = num => console.log(num * 2);
[1,2,3 ].forEach(twice);
