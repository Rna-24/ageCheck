var age = Number(prompt('Please enter your age'));

if (age < 18) {
    console.log("Your age is less than 18");
} 
else if (age >= 18 && age <= 25) {
    console.log("Your age is between 18 and 25");
} 
else if (age >= 26 && age <= 40) {
    console.log("Your age is between 26 and 40");
} 
else if (age >= 41 && age <= 50) {
    console.log("Your age is between 41 and 50");
} 
else if (age > 50) {
    console.log("Your age is greater than 50");
} 
else {
    console.log("Invalid age");
}
