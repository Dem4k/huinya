// function dayOfTheWeek (dayName) {
//     switch (dayName) {
//         case 1:
//             return "Monday";
//         case 2:
//             return "Tuesday";
//         case 3:
//             return "Wednesday";
//         case 4:
//             return "Thursday";
//         case 5:
//             return "Friday";
//         case 6:
//             return "Saturday";
//         case 7:
//             return "Sunday";
//         default:
//             return "Invalid day number(";
//     }
// }

// function monthSeason (month) {
//     switch (month) {
//         case "December":
//         case "January":
//         case "February":
//             return "Winter";
//         case "March":
//         case "April":
//         case "May":
//             return "Spring";
//         case "June":
//         case "July":
//         case "August":
//             return "Summer";
//         case "September":
//         case "October":
//         case "November":
//             return "Autumn";
//         default:
//             return "Invalid month";
//     }
// }

// function getRated (rate) {
//     switch (rate) {
//         case 1:
//             return "Погано";
//         case 2:
//             return "Задовільно";
//         case 3:
//             return "Добре";
//         case 4:
//             return "Дуже добре";
//         case 5:
//             return "Відмінно"
//         default:
//             return "Invalid rate!"
//     }
// }


// function getCornerSum (figure) {
//     switch (figure) {
//         case 0:
//             return "Round";
//         case 180:
//             return "Triangle";
//         case 360:
//             return "Rectangle";
//         default:
//             return "Invalid figure(";
//     }
// }


// function getTaxPercent (percent) {
//     switch (true) {
//         case percent < 10000:
//             return "Tax: 10%";
//         case percent < 30000:
//             return "Tax: 15%";
//         case percent < 50000:
//             return "Tax: 20%";
//         default:
//             return "Tax: 25%";
//     }
// }


// function calculateShippingCost (weight) {
//     switch (true) {
//         case weight < 5:
//             return "You should pay 20$";
//         case weight < 10:
//             return "You should pay 35$";
//         case weight < 20:
//             return "You should pay 50$";
//         default:
//             return "You should pay 75$";
//     }
// }


// function classifyProduct (category) {
//     switch (category) {
//         case "Електроніка":
//             return "Техніка";
//         case "Одяг":
//             return "Мода";
//         case "Книги":
//             return "Література";
//         default:
//             return "Різне";
//     }
// }


// function evaluateTemperature (mark) {
//     switch (true) {
//         case mark < -10:
//             return "Дуже холодно";
//         case mark < 0:
//             return "Холодно";
//         case mark < 10:
//             return "Прохолодно";
//         case mark < 20:
//             return "Тепло";
//         default:
//             return "Дуже тепло";
//     }
// }


// function classifyStudent (average) {
//     switch (true) {
//         case average < 60:
//             return "Не склав";
//         case average < 75:
//             return "Задовільно";
//         case average < 90:
//             return "Добре";
//         default:
//             return "Відмінно";
//     }
// }


// function classifyProductType (type) {
//     switch (type) {
//         case "Електроніка":
//             return "Техніка";
//         case "Одяг":
//             return "Мода";
//         case "Продукти харчування":
//             return "Їжа";
//         default:
//             return "Різне";
//     }
// }


// console.log(classifyProductType("Електроніка"));
// console.log(classifyProductType("Одяг")); 
// console.log(classifyProductType("Продукти харчування")); 
// console.log(classifyProductType("stilettos")); 


// ====================================================IF...ELSE===================================================


// function isEven(number) {
//     if (number % 2 === 0) {
//         return "Парне";
//     } else {
//         return "Непарне"
//     }
// }


console.log(getName(45));
console.log(getName(1));
console.log(getName(2));
console.log(getName(0));