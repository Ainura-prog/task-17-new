//task-1

/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, department, position, salary] = arr;

console.log("name: "+ name);
console.log("surname: " + surname);
console.log("department: " + department);
console.log("position: " + position);
console.log("salary: " + salary);*/

//expected output:
// name: Иван
// surname: Иванов
// department: отдел разработки
// position: программист
// salary: 2000



// task-2

/*function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name, surname, department, position, salary] = func();

console.log("name: "+ name);
console.log("surname: " + surname);
console.log("department: " + department);
console.log("position: " + position);
console.log("salary: " + salary);

//expected output:
// name: Иван
// surname: Иванов
// department: отдел разработки
// position: программист
// salary: 2000*/



//task-3

/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [, , department, position ] = arr;

console.log("department: " + department);
console.log("position: " + position);*/

//expected output: 
// department: отдел разработки
// position: программист



// task-4

/*let arr = ['Иван', 'Иванов', 'отдел разработки', ];

let [name, surname, department, position = "джуниор" ] = arr;

console.log("name: "+ name);
console.log("surname: "+ surname);
console.log("department: "+ department);
console.log("position: "+ position);*/

//expected output:
// name: Иван
// surname: Иванов
// department: отдел разработки
// position: джуниор



//task-5

/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, ...info] = arr;

console.log("name: "+ name);
console.log("surname: "+ surname);
console.log(info);*/

//expected output:
// name: Иван
// surname: Иванов
// [ 'отдел разработки', 'программист', 2000 ]


//task-6

let arr = [2022];

function year() {
    let year = new Date().getYear();

    return year;
}

function month() {
    let month = new Date().getMonth() + 1;
    return month;
}

function day() {
    let date = new Date().getDate();
    return date;
}

let [year1 = year(), month1 = month(), day1 = day()] = arr;

console.log("Year: " + year1);
console.log("month: " + month1);
console.log("day: " + day1);


//expected output:
// Year: 2022
// month: 4
// day: 1