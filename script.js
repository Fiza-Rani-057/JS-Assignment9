//   Question 1

document.write( "<h1>" + "Question 1" + "<br>"  + "</h1>");

// MultiDimensional Array

var array = [[], [], []];

document.write("Empt Multidimensional Array");

// Question 2

 document.write( "<h1>" + "Question 2" + "<br>"  + "</h1>");

 var array2 = [
    [0 , 1  , 2 ,3],
    [1 , 0 , 1 , 2],
    [2 , 1 , 0 , 1],
 ];

 document.write(array2[0] + "<br>");
 document.write(array2[1] + "<br>");
 document.write(array2[2] + "<br>");

//  Question 3

 document.write( "<h1>" + "Question 3" + "<br>"  + "</h1>");

 var array3 = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

 document.write(array3[0]+ "<br>");
 document.write(array3[1]+ "<br>");
 document.write(array3[2]+ "<br>");
 document.write(array3[3]+ "<br>");
 document.write(array3[4]+ "<br>");
 document.write(array3[5]+ "<br>");
 document.write(array3[6]+ "<br>");
 document.write(array3[8]+ "<br>");
 document.write(array3[9]+ "<br>");

//  Question 4

  document.write( "<h1>" + "Question 4" + "<br>"  + "</h1>");

  var table = +prompt("Enter any number");
  var tbLength = 11;

  for( i = 1; i < tbLength; i++){
    document.write(table +  "x " + i + " = " +  (table*i) + "<br>" + "<br>");
  }

  document.write("Table number:" + table  +"<br>");
  document.write("Table length:" + tbLength + "<br>");

//   Question 5

  document.write( "<h1>" + "Question 5" + "<br>"  + "</h1>");
  
  var fruits = ["apple" ,"banana", "mango", "strawberry", "orange"];

  for(var i = 0;  i < fruits.length; i++){
    document.write(fruits[i] + "<br>");
  }
 document.write("Element at index 0 is:" + fruits[0] + "<br>");
 document.write("Element at index 1 is:" + fruits[1] + "<br>");
 document.write("Element at index 2 is:" + fruits[2] + "<br>");
 document.write("Element at index 3 is:" + fruits[3] + "<br>");
 document.write("Element at index 4 is:" + fruits[4] + "<br>");

//   Question 6

document.write( "<h1>" + "Question 6" + "<br>"  + "</h1>");

 document.write("<h3> Counting </h3>");

 for(var i = 1; i <= 15; i++){
    document.write(i + " , ");
 }
 
 document.write("<h3> Reverse Counting </h3>");

 for( i = 10; i >= 1; i--){
    document.write(i + " , " );
 }

 document.write("<h3> Even </h3>");
 
 for(i = 0; i <= 20; i+= 2){
    document.write(i + " , ");
 }

 document.write("<h3> Odd </h3>");

 for(i = 1;  i<=20; i+=2 ){
    document.write(i + " , ");
 }

  document.write("<h3> Series </h3>");

  for(i = 2; i< 20; i+=2){
    document.write(i + "k,")
  }

//   Question 7

 document.write( "<h1>" + "Question 7" + "<br>"  + "</h1>");

 var bakery = ["pattis", "cake", "cookie", "apple pie", "chips"];
 var userInput = prompt("Welcome to our bakery.What do you want to order");

 var found = false;

 for(var i = 0; i < bakery.length; i++){
   if(userInput.toLowerCase() === bakery[i].toLowerCase()){
    found = true;
    document.write( userInput +" is available at index" + i 
        + "in our bakery");
        break;
   }
 }
 if(found === false){
    document.write("we are sorry" + userInput + 
        "is not available in our bakery");
 }
  