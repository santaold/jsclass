// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// function TagConstr(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
// let atribute = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'}
// ]
//
// let aTag = new TagConstr(title, action, atribute);
// console.log(aTag);
//
//
// let titleDiv = '<div>';
// let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ';
// let atributeDiv = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}
// ]
//
// let divTag = new TagConstr(titleDiv, actionDiv, atributeDiv);
// console.log(divTag);
//
// let titleH = '<h1>';
// let actionH = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка';
// let atributeH = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
//    ]
//
// let HTag = new TagConstr(titleH, actionH, atributeH);
// console.log(HTag);
//
// let titleSpan = '<span>';
// let actionSpan = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.';
// let atributeSpan = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}
// ]
//
// let spanTag = new TagConstr(title, action, atribute);
// console.log(spanTag);

// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
//
// class TagConstr {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//
// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
// let atribute = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'}
// ]
//
// let aTag = new TagConstr(title, action, atribute);
// console.log(aTag);
//
//
// let titleDiv = '<div>';
// let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ';
// let atributeDiv = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}
// ]
//
// let divTag = new TagConstr(titleDiv, actionDiv, atributeDiv);
// console.log(divTag);
//
// let titleH = '<h1>';
// let actionH = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка';
// let atributeH = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
// ]
//
// let HTag = new TagConstr(titleH, actionH, atributeH);
// console.log(HTag);
//
// let titleSpan = '<span>';
// let actionSpan = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.';
// let atributeSpan = [
//     {
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     },
//     {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}
// ]
//
// let spanTag = new TagConstr(title, action, atribute);
// console.log(spanTag);


// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// //
// let car = {
//     model: 'Focus',
//     factory: 'Ford',
//     year: '2010',
//     maxSpeed: 180,
//     engine: 1.8,
//     drive: function () {
//         console.log('"їдемо зі швидкістю ' + car.maxSpeed + ' на годину"')
//     },
//     info: function () {
//         console.log(car)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     },
//     changeYear: function (newYear) {
//         this.year = newYear;
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//     }
// }
//
//
// let driver = {name: 'Ibragim', age: '15'};
//
// console.log(car.addDriver(driver));
// console.log(car.changeYear(2020));
// console.log(car.drive());
// console.log(car.info());
// console.log(car.increaseMaxSpeed(20));
// console.log(car.info());

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

