// ============================== CHAPTER 9 TO 11 ====================================
// Assignment-3
// Chapter# 9-11
// Question# 01
// var city = prompt("Enter your city name");
// if(city=="karachi"){
//     alert("welcome to the city of lights");
// }else{
//     alert("wrong city type /karachi/ in input")
// }

// Assignment-3
// Chapter# 9-11
// Question# 02
// var gender = prompt("Enter your gender");
// if(gender=="male"){
//     alert("Good Morning Sir");
// }else if(gender=="female"){
//     alert("Good Morning Ma'am");
// }

// Assignment-3
// Chapter# 9-11
// Question# 3
// var signalcolor = prompt("Enter signal Color ");
// if(signalcolor=="red"){
//     alert("Must stop");
// }else if(signalcolor=="yellow"){
//     alert("Ready to move");
// }else if(signalcolor=="green"){
//     alert("Move now");
// }

// Assignment-3
// Chapter# 9-11
// Question# 4
// var fuel = prompt("Enter Your Fuel ");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car");}



// Assignment-3
// Chapter# 9-11
// Question# 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost)
// { alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("cat" < "car"){
// alert("cat is smaller than car");}


// Assignment-3
// Chapter# 9-11
// Question# 6
// var marks1 = +prompt("Enter your marks of computer");
// var marks2 = +prompt("Enter your marks of Math");
// var marks3 = +prompt("Enter your marks of Biology");
// totalMarks = 300;
// obtainedMarks = marks1 + marks2 + marks3;
// percentage = obtainedMarks / totalMarks * 100;
// alert("Marks Obtained : " + obtainedMarks);
// alert("Percentage : " + percentage + "%");

// document.write("<h1>Marksheet</h1>");
// document.write("Total Marks : " + totalMarks + "</br>");
// document.write("Obtained Marks : " + obtainedMarks + "</br>");
// document.write("Percentage : " + percentage + "%" + "</br>");
// if (percentage >= 80) {
//     document.write("Grade : A-one"+ "</br>");
//     document.write("Remarks: Excellent Performance");
// }
// else if (percentage >= 70) {
//     document.write("Grade : A"+ "</br>");
//     document.write("Remarks: Keep it up");
// }
// else if (percentage >= 60) {
//     document.write("Grade : B"+ "</br>");
//     document.write("Remarks: You need to improve");
// }
// else if (percentage >= 40) {
//     document.write("Grade : C"+ "</br>");
//     document.write("Remarks: Bad Result! You should work on your-self");
// }


// Assignment-3
// Chapter# 9-11
// Question# 7
var secretNumber=7;
var guess=+prompt("Guess the secret number");

if(guess===secretNumber){
    document.write("Bingo! Congrajulation You Won 🏆");
}
else if(guess===secretNumber-1){
    document.write("close enough to correct answer 🤔🔮???");
}

else if(guess===secretNumber+1){
    document.write("close enough to correct answer 🤔🔮???");
}
else {
    document.write("Try again 👎");
}

// Assignment-3
// Chapter# 9-11
// // Question# 8
// var givenNumber=+prompt("Enter a number");
// if(givenNumber % 3 ==0){
// document.write("Yes given number "+givenNumber+ " is divisible by 3");
// }
// else{
//     document.write("Given number "+givenNumber+ " Is Not divisible by 3");}

// Assignment-3
// Chapter# 9-11
// Question# 9
// var number1=+prompt("Enter a number");
// if(number1 % 2 ==0){
//     document.write(number1+" "+"is Even");
// }
// else if(number1 % 2 !==0){
//     document.write(number1+" "+"is ODD");
// }

// Assignment-3
// Chapter# 9-11
// Question# 10
// var temprature = +prompt("Enter today temprature");
// if (temprature > 40) {
//     alert("It is too hot outside.");
// }
// else if (temprature > 30) {
//     alert( "The Weather today is Normal.");
// }
// else if (temprature > 20) {
//     alert( "Today’s Weather is cool.");
// }
// else if (temprature > 10) {
//     alert( "OMG! Today’s weather is so Cool.");
// }



// Assignment-3
// Chapter# 9-11
// Question# 11
// var num1 = +prompt("Enter your number");
// var num2 = +prompt("Enter your number");
// var operator = prompt("Enter your operator");
// if (operator == "+") {
//     document.write(num1 + num2);
// }
// else if (operator == "-") {
//     document.write(num1 - num2);
// }
// else if (operator == "*") {
//     document.write(num1 * num2);
// }
// else if (operator == "/") {
//     document.write(num1 / num2);
// }
// else if (operator == "%") {
//     document.write(num1 % num2);
// }
// else {
//     document.write("Invalid operator");
// }

// ============================== CHAPTER 12 TO 13 ====================================

// Assignment-3
// Chapter# 12-13
// Question# 1
// var input=prompt("Enter a character");

// // Check if input is a number
// if (!isNaN(input)) {
//     alert("The input is a number.");
// }

// if(input.charCodeAt() >=65 && input.charCodeAt() <=90){
//     alert("input "+input+ " is uppercase");
// }
// else if(input.charCodeAt() >=97 && input.charCodeAt() <=122){
//     alert("input "+input+ " is lowercase");
// }
// else {
//     alert("The input is neither a number nor a input.");
// }

// Assignment-3
// Chapter# 12-13
// Question# 2
// var a = +prompt("Enter 1st number");
// var b = +prompt("Enter 2nd number");
// if (a > b) {
//     alert("Larger number is : " + a);
// }
// else if (b>a) {
//     alert("Larger number is : " + b);
// }
// else if(a==b){
//     alert("Both numbers are equal");
// }


// Assignment-3
// Chapter# 12-13
// Question# 3
// var numb = +prompt("Enter desire number");
// if (numb > 0) {
//     alert(numb + " is Positive");
// }
// else if (numb < 0) {
//     alert(numb + " is Negative");
// }
// else if (numb == 0) {
//     alert("Number is zero");
// }
// else {
//     alert("Not A Number");
// }


// Assignment-3
// Chapter# 12-13
// Question# 4
// var letter=prompt("enter a character");
// letter = letter.toLowerCase();
// if(letter=='a' || letter=='e' || letter=='i' || letter=='o' ||letter=='u'){
// alert("Yes its vowel");
// }
// else{alert("Not A VOWEL")}


// Assignment-3
// Chapter# 12-13
// Question# 5
// var correctPassword = "6may";
// var user = prompt("Enter Your Password");
// if (user === "") {
//     alert("Please enter your password");
// }
// else if (user === correctPassword) {
//     alert("Correct! The password you  entered matches the original password");
// }
// else { alert("Incorrect password") }


// Assignment-3
// Chapter# 12-13
// Question# 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {                       //two curly bracket fix one before else and other one after bracket
//     greeting = "Good evening";
// } 


// Assignment-3
// Chapter# 12-13
// Question# 7
// var time = +prompt("enter time in 24-hour format");
// if (time >= 0 && time < 1200) {
//     alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evenng");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night");
// }