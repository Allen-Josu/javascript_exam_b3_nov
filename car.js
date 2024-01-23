//Find the car with highest availabilty

//[id , brand , model , type , pricePerDay, available]
let carBooking = [
    [1, "Toyota", "Corolla", "Sedan", 50, 10],
    [2, "Honda", "Civic", "Sedan", 55, 8],
    [3, "Ford", "Mustang", "Sports Car", 80, 5],
    [4, "Jeep", "Wrangler", "SUV", 70, 7],
    [5, "Nissan", "Altima", "Sedan", 45, 12],
];

// Print all car brands
console.log("--------------------");
console.log("Name of the car brands are :");
carBooking.forEach((item) => {
    console.log(item[1]);
});

//Print total number of car available
console.log("--------------------");
let sum = 0;
carBooking.forEach((item) => {
    sum += item[5];
});
console.log(`Total number of cars available : ${sum}`);

// print sedan car details
console.log("--------------------");
console.log("Sedan Car Details");
carBooking.forEach((item) => {
    if (item[3] == "Sedan") {
        console.log(item);
    }
});

//print cas with price per day greater than 60
console.log("--------------------");
console.log("car with price per day greater than 60");
carBooking.forEach((item) => {
    if (item[4] > 60) {
        console.log(item[1]);
    }
});

//print details of JEEP WRANGLER
console.log("--------------------");
carBooking.forEach((item) => {
    if (item[1] == "Ford") {
        console.log(
            `Name of Brand : ${item[1]} , Model name : ${item[2]} , Price per day : ${item[4]} , Availability : ${item[5]}`
        );
    }
});

//Sort car based on the descending order of the price per day
console.log("--------------------");
console.log("car based on the descending order of the price per day");
console.log(carBooking.sort((item1, item2) => item2[4] - item1[4]));

//Sort cars based on ascending order of available cars
console.log("--------------------");
console.log("car based on the ascending order of available cars");
console.log(carBooking.sort((item1, item2) => item1[5] - item2[5]));

//Find the car with most available car
console.log("--------------------");
console.log("Most available car");
car = carBooking.sort((item1, item2) => item1[5] - item2[5]);
console.log(car[4][1]);

//Calculate the revenue if all the cars are rented for the day
console.log("--------------------");
let rev = 0;
carBooking.forEach((item) => {
    rev += item[4];
});
console.log(`the revenue if all the cars are rented for the day ${rev}`);

//Count the number of sedan car
console.log("--------------------");
let count = 0;
carBooking.forEach((item) => {
    if (item[3] === "Sedan") {
        count += 1;
    }
});
console.log(`Total number of Sedan Cars : ${count}`);

//Print all unique car brands
console.log("--------------------");
unique = [];
carBooking.forEach((item) => {
    if (item[1] in unique) {
    } else {
        unique.push(item[1]);
    }
});
console.log(`Every Car Brands : ${unique}`);

//find the total number of available car for all types
console.log("--------------------");
let total = 0;
carBooking.forEach((item) => {
    total += item[5];
});
console.log(`the total number of available car for all types: ${total}`);

//find the car with a least availabilty
console.log("--------------------");
car = carBooking.sort((item1, item2) => item1[5] - item2[2]);
console.log(`the car with a least availabilty : ${car[0][1]}`);

//Check if there is any car with price per day of exactly 55
console.log("--------------------");
console.log("car with price per day of exactly 55");
carBooking.forEach((item) => {
    if (item[4] == 55) {
        console.log(item[1]);
    }
});