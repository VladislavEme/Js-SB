// Напишите функцию filter в object-array-filter.js, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов. Пример использования:
// let objects = [
//  { name: 'Василий', surname: 'Васильев' },
//  { name: 'Иван', surname: 'Иванов' },
//  { name: 'Пётр', surname: 'Петров' }
//  ]
//  let result = filter(objects, 'name', 'Иван');
//  /*
//  Результат выполнения должен быть:
//  [
//  { name: 'Иван', surname: 'Иванов' }
//  ]
//  */
// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции.

const array = [
  { id: 1, name: "Name 1" },
  { id: 2, name: "Name 2" },
  { id: 3, name: "Name 3" },
  { id: 22, name: "Name 2" },
];

function filter(arrObject, property, meaning) {
  let newObjects = [];
  for (let arr in arrObject) {
    if (property in arrObject[arr]) {
      if (arrObject[arr][property] === meaning) {
        newObjects.push(arrObject[arr]);
      }
    }
  }
  return newObjects;
}
// console.log(filter(array, "name", "Name 2"));
export default filter;



//Вариант Макса
// function objectsSorter(obj, key, volume) {
//   let result = [];
//   for (let i of obj) {
//     let entries = Object.entries(i);
//     for (let [a, b] of entries) {
//       if (a === key && b === volume) {
//         result.push(Object.assign({}, i));
//       }
//     }
//   }
//   return result;
// }

// // console.log(objectsSorter(array, "name", "Name 2"));

// export default objectsSorter;

//2 Способ вывода результата через новый массив в консоль (не проходит тестирование)
// function filter(arrObject, property, meaning) {
//   let newObjects = [];
//   for (let arr in arrObject) {
//     if (property in arrObject[arr]) {
//       if (arrObject[arr][property] === meaning) {
//         newObjects.push(arrObject[arr]);
//       }
//     }
//   }
//   if (newObjects.length === 0) {
//     console.log("Нет результатов");
//   } else {
//     return console.log(newObjects);
//   }
// }
// filter(array, "id", 2);

// export default filter;

// 1 Свособ вывода объекта в консоль. Даже если id указан типом стринг (не проходит тестирование)
// function filter(obj, property, meaning) {
//   for (let arr in obj) {
//     // if (typeof obj[arr][property] != typeof meaning) {
//     //   meaning = Number(meaning);
//     // }
//     if (property in obj[arr]) {
//       if (obj[arr][property] === meaning) {
//         console.log(obj[arr]);
//       }
//     }
//   }
// }
// // filter(array, "id", 2);
