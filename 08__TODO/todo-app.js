//функция разметки заголовка
function createAppTitle(title) {
  let appTitle = document.createElement("h2");
  appTitle.innerHTML = title;
  return appTitle;
}
//функция разметки инпута и кнопки
function createTodoItemForm() {
  let form = document.createElement("form");
  let input = document.createElement("input");
  let buttonWrapper = document.createElement("div");
  let button = document.createElement("button");

  form.classList.add("input-group", "mb-3");
  input.classList.add("form-control");
  input.placeholder = "Введите название нового дела";
  buttonWrapper.classList.add("input-group-append");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Добавить дело";

  buttonWrapper.append(button);
  form.append(input);
  form.append(buttonWrapper);

  return {
    form,
    input,
    button,
  };
}
//функция разметки списка
function createTodoList() {
  let list = document.createElement("ul");
  list.classList.add("list-group");
  return list;
}
//добавление разметки элементов списка
function createTodoItem(name) {
  let item = document.createElement("li");
  //помещаем кнопки в див для стилизации
  let buttonGroup = document.createElement("div");
  let doneButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  //задаем стили для элемента списка
  item.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  item.textContent = name;

  buttonGroup.classList.add("btn-group", "btn-group-sm");
  doneButton.classList.add("btn", "btn-success");
  doneButton.textContent = "Готово";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.textContent = "Удалить";

  //вкладываем кнопки в див для стилизации
  buttonGroup.append(doneButton);
  buttonGroup.append(deleteButton);
  item.append(buttonGroup);

  //возвращаем для доступа к самому элементы и кнопкам, чтобы обрабатывать событитя
  return {
    item,
    doneButton,
    deleteButton,
  };
}

function eventDoneDelete(addItem) {
  addItem.doneButton.addEventListener("click", function () {
    addItem.item.classList.toggle("list-group-item-success");
  });
  addItem.deleteButton.addEventListener("click", function () {
    if (confirm("Вы уверены?")) {
      addItem.item.remove();
    }
  });
}
//дела по-умолчанию
let myTodo = [
  { name: "Проснуться", done: true },
  { name: "Позавтракать", done: false },
  { name: "Сходить в школу", done: false },
  { name: "Сделать уроки", done: false },
];

let momTodo = [
  { name: "Позавтракать", done: false },
  { name: "Собрать сына в школу", done: true },
  { name: "Сдать отчет", done: true },
  { name: "Сделать уборку", done: false },
];

let dadTodo = [
  { name: "Проснуться в 5 утра", done: true },
  { name: "Починить холодильник", done: false },
  { name: "Заправить автомобиль", done: true },
  { name: "Скосить траву", done: false },
];

//события для кнопки "Готово" и "Удалить".
//Аргумент - разным способом добавленное дело(по-умолчанию или инпут)

function createTodoApp(container, title = "Список дел", personalList = false) {
  //Добавление заголовка, инпута, кнопки
  let todoAppTitle = createAppTitle(title);
  let todoItemForm = createTodoItemForm();
  let todoList = createTodoList();

  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);

  //при загрузке приложения кнопка неактивна
  todoItemForm.button.setAttribute("disabled", "disabled");

  localStorage.getItem("my");


  // localStorage.getItem("my");
  // localStorage.setItem("my", JSON.stringify(myTodo));

  // localStorage.getItem("my");
  // let newTodoAdd = JSON.stringify({
  //   name: todoItemForm.input.value,
  //   done: false,
  // });
  // localStorage.setItem("name", newTodoAdd);
  // newTodo = JSON.parse(localStorage.name);
  // console.log(newTodo);

  // если есть аргумент с делом по-умолчанию, то выводим их
  if (personalList) {
    for (lengthArr = 0; lengthArr < personalList.length; lengthArr++) {
      let defaultItem = createTodoItem(personalList[lengthArr].name);
      todoList.append(defaultItem.item);

      if (personalList[lengthArr].done) {
        defaultItem.item.classList.toggle("list-group-item-success");
      }
      eventDoneDelete(defaultItem);
    }
  }

  //создаем событие submit на форме по нажатию на Enter или на кнопку создания дела
  todoItemForm.form.addEventListener("submit", function (e) {
    //отключаем стандартное действие брайзера - перезагрузку при отправке формы
    e.preventDefault();

    //игнорируем создание элемента при пустом поле
    if (!todoItemForm.input.value) {
      return;
    }


    //разобраться, где нужен локал.гетайтем
    //при добавлении в любой вкладке дела, они добавляются в одну локальную переменную. Исправить! 
    let MyTodoAdd = {
      name: todoItemForm.input.value,
      done: false,
    };
    let MylocalStorageArr = JSON.parse(localStorage.my);
    MylocalStorageArr.push(MyTodoAdd);
    localStorage.setItem("my", JSON.stringify(MylocalStorageArr));

    //добавляем обработчики на кнопки "Удалить" и "Готово"
    let todoItem = createTodoItem(todoItemForm.input.value);
    //вешаем обработчик на кнопки "Готово" и "Удалить"
    eventDoneDelete(todoItem);

    //добавляем из поля ввода в список новое дело
    todoList.append(todoItem.item);

    //обнуляем значение поля
    todoItemForm.input.value = "";
    //при отправке формы(создании дела) кнопка становится неактивной, т.к. поле пустое
    todoItemForm.button.setAttribute("disabled", "disabled");
  });

  //при вводе и удалении символов в инпуте делаем кнопку активной/неактивной
  todoItemForm.input.addEventListener("input", function () {
    if (!todoItemForm.input.value) {
      todoItemForm.button.setAttribute("disabled", "disabled");
    }
    if (todoItemForm.input.value) {
      todoItemForm.button.removeAttribute("disabled");
    }
  });
}

window.createTodoApp = createTodoApp;
