// В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля. Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'. Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».
// Для проверки запустите код с разными вариантами надёжных и ненадёжных паролей. Примеры корректный паролей:
// 1234-
// 4321_
// qaz-xsw
// _zxd
// Примеры некорректных паролей:
// _-a
// qaz
// _-3
// 123456789
// Пароль является надёжным, когда в нём есть хотя бы 4 символа, среди которых есть хотя бы один из символов «-», «_».
// Код корректно выводит сообщение в зависимости от значения переменной password.
console.log("Задание 1:");

let password = "22-a";

if (password.length > 3 && (password.includes("-") || password.includes("_"))) {
  console.log("Пароль надежный");
} else {
  console.log("Пароль ненадежный");
}

// В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.
// Для любых имени и фамилии в любом регистре должны выводиться такие же имя и фамилия, но первая буква у них большая, а все остальные — маленькие.
// Код корректно выводит все сообщения в зависимости от значения переменных name и surname.
// Для получения куска строки можно воспользоваться конструкцией str.substr(from, length), где str — название переменной с исходной строкой, вместо from подставляется номер символа, после которого нужно взять кусок (0, если нужно брать с начала строки, 1 — после первого символа и т.д.), а вместо length — количество символов. При этом length можно опустить, если нужно взять всю оставшуюся строку. Конструкцию можно присвоить переменной, с которой потом можно работать как с обычной строкой. Для преобразования букв строки к верхнему регистру можно воспользоваться конструкцией str.toUpperCase(), а к нижнему — str.toLowerCase(). Результат аналогично можно присвоить переменной.
console.log("Задание 2:");

let nm = "ИваН";
let surname = "васЬкИн";

let newName = nm.charAt(0).toUpperCase() + nm.substr(1).toLowerCase();
let newSurName =
  surname.charAt(0).toUpperCase() + surname.substr(1).toLowerCase();

console.log(newName);
newName === nm
  ? console.log("Имя осталось без изменений")
  : console.log("Имя было преобразовано");

console.log(newSurName);
newSurName === surname
  ? console.log("Фамилия осталась без изменений")
  : console.log("Фамилия была преобразована");