// Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
function Tags(titleOfTag,action,attrs=[]){
    this.titleOfTag=titleOfTag;
    this.action=action;
    this.attrs=attrs;
}
let a =new Tags('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.');
a.attrs.push('href-Задает адрес документа, на который следует перейти.');
a.attrs.push('name-Устанавливает имя якоря внутри документа.');
console.log(a);
let div=new Tags('<div>','Элемент <div> является блочным элементом');
div.attrs.push('align-Задает выравнивание содержимого тега <div>.');
div.attrs.push('title-Добавляет всплывающую подсказку к содержимому.');
console.log(div);
let h1=new Tags('h1','Tег <h1> представляет собой наиболее важный заголовок первого уровня');
h1.attrs.push('align-Определяет выравнивание заголовка.');
h1.attrs.push('class-Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(h1);
let span=new Tags('span','Тег <span> предназначен для определения строчных элементов документа.');
span.attrs.push('class-Определяет имя класса, которое позволяет связать тег со стилевым оформлением.')
span.attrs.push('id-Указывает имя стилевого идентификатора.');
console.log(span);
let input=new Tags('input','<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.');
input.attrs.push('checked-Предварительно активированный переключатель или флажок.');
input.attrs.push('list-Указывает на список вариантов, которые можно выбирать при вводе текста.');
console.log(input);
let form=new Tags('form','Тег <form> устанавливает форму на веб-странице.');
form.attrs.push('action-Адрес программы или документа, который обрабатывает данные формы.');
form.attrs.push('autocomplete-Включает автозаполнение полей формы');
console.log(form);
let option=new Tags('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.');
option.attrs.push('label-Указание метки пункта списка.');
option.attrs.push('disabled-Заблокировать для доступа элемент списка.');
console.log(option);
let select=new Tags('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, ')
select.attrs.push('form-Связывает список с формой.');
select.attrs.push('Количество отображаемых строк списка');
console.log(select);
// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
class TagsByClass{
    constructor(titleOfTag,action,attrs=[]){
        this.titleOfTag=titleOfTag;
        this.action=action;
        this.attrs=attrs;

    }
}
let aNew =new TagsByClass('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.');
aNew.attrs.push('href-Задает адрес документа, на который следует перейти.');
aNew.attrs.push('name-Устанавливает имя якоря внутри документа.');
console.log(aNew);
let divNew=new TagsByClass('<div>','Элемент <div> является блочным элементом');
divNew.attrs.push('align-Задает выравнивание содержимого тега <div>.');
divNew.attrs.push('title-Добавляет всплывающую подсказку к содержимому.');
console.log(divNew);
let h1New=new TagsByClass('h1','Tег <h1> представляет собой наиболее важный заголовок первого уровня');
h1New.attrs.push('align-Определяет выравнивание заголовка.');
h1New.attrs.push('class-Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(h1New);
let spanNew=new TagsByClass('span','Тег <span> предназначен для определения строчных элементов документа.');
spanNew.attrs.push('class-Определяет имя класса, которое позволяет связать тег со стилевым оформлением.')
spanNew.attrs.push('id-Указывает имя стилевого идентификатора.');
console.log(spanNew);
let inputNew=new TagsByClass('input','<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.');
inputNew.attrs.push('checked-Предварительно активированный переключатель или флажок.');
inputNew.attrs.push('list-Указывает на список вариантов, которые можно выбирать при вводе текста.');
console.log(inputNew);
let formNew=new TagsByClass('form','Тег <form> устанавливает форму на веб-странице.');
formNew.attrs.push('action-Адрес программы или документа, который обрабатывает данные формы.');
formNew.attrs.push('autocomplete-Включает автозаполнение полей формы');
console.log(formNew);
let optionNew=new TagsByClass('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.');
optionNew.attrs.push('label-Указание метки пункта списка.');
optionNew.attrs.push('disabled-Заблокировать для доступа элемент списка.');
console.log(optionNew);
let selectNew=new TagsByClass('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, ')
selectNew.attrs.push('form-Связывает список с формой.');
selectNew.attrs.push('Количество отображаемых строк списка');
console.log(selectNew);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

    car5={
    model:'yaguar',
    manufacturer:'jaguar lend rover',
    year:2017,
    maxSpeed:220,
    engine:140,

    drive : function (maxSpeed) {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    },
    info:function(model,manufacturer,year,maxSpeed,engine){
        console.log(`модель-${model},виробник-${manufacturer},рік випуску-${year},максимальна швидкість-${maxSpeed},об'єм двигуна-${engine}`);
    },
    increaseMaxSpeed : function(newSpeed){
        car5.maxSpeed=newSpeed;
    },
    changeYear : function (newValue){
        car5.year=newValue;
    },
    addDriver : function (driver){
        car5.driver=driver;
        
    }
}

car5.drive(car5.maxSpeed);
car5.info(car5.model,car5.manufacturer,car5.year,car5.maxSpeed,car5.engine)
car5.increaseMaxSpeed(240);
console.log(car5);
car5.changeYear(2020);
console.log(car5);
car5.addDriver(driver={name:'Lena',age:20})

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//  об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
function NewCars(model,manufacturer,year,maxSpeed,engine){
        this.model=model;
        this.manufacturer=manufacturer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engine=engine;

        this.drive= function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        this.info=function(){
            console.log(`модель-${this.model},виробник-${this.manufacturer},рік випуску-${this.year},максимальна швидкість-${this.maxSpeed},об'єм двигуна-${this.engine}`);
        }
        this.increaseMaxSpeed=function(newSpeed){
            this.maxSpeed=newSpeed;
        };
        this.changeYear=function (newValue){
            this.year=newValue;
        }
        this.addDriver=function (driver){
            this.driver=driver;
            
        }

}

let car11=new NewCars('toyota','toyota',2007,181,3);
let car22=new NewCars('audi','audi',2005,185,1.5);
let car33=new NewCars('wv','wv',2009,183,2);
car11.drive();
car22.drive();
car33.drive();
car11.info();
car22.info();
car33.info();
car11.increaseMaxSpeed(195);
console.log(car11);
car22.increaseMaxSpeed(190);
console.log(car22);
car33.increaseMaxSpeed(198);
console.log(car33);
car11.changeYear(2010);
console.log(car11);
car22.changeYear(2011);
console.log(car22);
car33.changeYear(2012);
console.log(car33);
car11.addDriver(driver={name:'Vanya',age:21});
car22.addDriver(driver={name:'Vova',age:22});
car33.addDriver(driver={name:'Galya',age:23});
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class Cars {
    constructor(model,manufacturer,year,maxSpeed,engine){
        this.model=model;
        this.manufacturer=manufacturer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engine=engine;
    }
        drive () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }

        info (){
            console.log(`модель-${this.model},виробник-${this.manufacturer},рік випуску-${this.year},максимальна швидкість-${this.maxSpeed},об'єм двигуна-${this.engine}`);
        }
        increaseMaxSpeed (newSpeed){
            this.maxSpeed=newSpeed;
        }
        changeYear (newValue){
            this.year=newValue;
        }
        addDriver (driver){
            this.driver=driver;

        }
}

let car1=new Cars('mazda cx-9','mazda',2010,181,3);
let car2=new Cars('honda insight','honda',2009,185,1.3);
let car3=new Cars('nissan qashqai','nissan',2019,185,2);
car1.drive();
car2.drive();
car3.drive();
car1.info();
car2.info();
car3.info();
car1.increaseMaxSpeed(200);
console.log(car1);
car2.increaseMaxSpeed(210);
console.log(car2);
car3.increaseMaxSpeed(215);
console.log(car3);
car1.changeYear(2013);
console.log(car1);
car2.changeYear(2014);
console.log(car2);
car3.changeYear(2020);
console.log(car3);
car1.addDriver(driver={name:'Vasya',age:25});
car2.addDriver(driver={name:'Petya',age:23});
car3.addDriver(driver={name:'Olya',age:28});

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class Sinderella{
    constructor(name,age,footSize){
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }
}
 
let tanya=new Sinderella('Tanya',23,37);
let lena= new Sinderella('Lena',21,37.5);
let katya=new Sinderella('Katya',22,36);
let olya=new Sinderella('Olya',20,38.5);
let yana=new Sinderella('Yana',24,36.5);
let sonya=new Sinderella('Sonya',25,39);
let tina=new Sinderella('Tina',27,35.5);
let vera=new Sinderella('Vera',26,35);
let maria=new Sinderella('Maria',28,39.5);
let viola=new Sinderella('Viola',29,40);

let sinderellas=[tanya,lena,katya,olya,yana,sonya,tina,vera,maria,viola];
console.log(sinderellas);
class Prince{
    constructor(name,age,findedShue){
        this.name=name;
        this.age=age;
        this.findedShue=findedShue;
    }
};
let prince=new Prince('Vasya',27,35);
console.log(prince);
for(let sinderella of sinderellas){
    if(sinderella.footSize===prince.findedShue){
       
        console.log(sinderella);
    
    }
}

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, 
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function AnoterSinderella (name,age,footSize){
    this.name=name;
    this.age=age;
    this.footSize=footSize;

}
let lesya=new AnoterSinderella('Lesya',23,40);
let luba= new AnoterSinderella('Luba',21,37.5);
let kira=new AnoterSinderella('Kira',22,36);
let oksana=new AnoterSinderella('Oksana',20,38.5);
let ira=new AnoterSinderella('Ira',24,36.5);
let sveta=new AnoterSinderella('Sveta',25,39);
let kristina=new AnoterSinderella('Kristina',27,35.5);
let vita=new AnoterSinderella('Vita',26,35);
let marina=new AnoterSinderella('Marina',28,37);
let lida=new AnoterSinderella('Lida',29,40);

let anotherSinderellas=[lesya,luba,kira,oksana,ira,sveta,kristina,vita,marina,lida];
// anoterSinderellas.push(lesya,luba,kira,oksana,ira,sveta,kristina,vita,marina,lida);
console.log(anotherSinderellas);

function AnotherPrince(name,age,findedShue) {
    this.name=name;
    this.age=age;
    this.findedShue=findedShue;

    this.findSinderella=function (array) {
        
        for(let sindy of array){
            if(sindy.footSize===this.findedShue){
                console.log(prince2);
                console.log(sindy);
            }
        }
        
    }
        
     
}


let prince2=new AnotherPrince("Vova",28,37);
prince2.findSinderella(anotherSinderellas)