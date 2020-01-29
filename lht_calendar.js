"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: 
   Date:  

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/
var thisDay = new Date("August 24, 2018");
document.getElementById("calendar").innerHTML = createCalendar(thisDay);
function createCalendar(calDate){
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}
// written captions to the calendar
function calCaption(calDate){
   // monthName array contians the list of the names of the months
   var monthName = ["January", 
   "February ", 
   "March ", 
   "April ", 
   "May ",  
   "June ", 
   "July ", 
   "August ", 
   "September ", 
   "October ", 
   "November ", 
   "December "];
   var thisMonth = calDate.getMonth();
   var thisYear = calDate.getFullYear();
   return "<caption>" + monthName[thisMonth]+""+ thisYear + "</caption>";
}


//Examples, you can delete after done

//var food = new Array("chicken", "bread", "soup");
//var food = ["chicken", "bread", "soup"];

//food[0]; //Chicken

//food[2]; //soup

//food[3]; //undefined

//food[3]= "taco";

//food[3]; //taco

//--------------------------------//

var array = new Array(1,3,5,1,7,4,9,3,2,1,0,9,5,6,9,3,1);

for(var i = 0; i < array.length; i+1){
   output.innerHTML+= array[i];
}

//for loop that starts at the first 5


for(var i = 2; i < array.length; i+2){
   output.innerHTML+= array[i];
}

//for loop that starts at the first number 7 and adds every fifth number then 
//outputs the added amount
for(var i = 4; i < array.length; i+5){
   var added =0;
   added += array[i];
}
output.innerHTML = added;

//for loop that starts at the second 1 and outputs sum of half the array
for(var i = 3; i < array.length/2; i++){
   var added =0;
   added += array[i];
}
output.innerHTML = added;

//sort this array least to greatest
function ascending(a,b){
   return a - b;
}
array.sort(ascending);
//greatest to least
function ascending(a,b){
   return b - a;
}
array.sort(descending);
//or 
function ascending(a,b){
   return a - b;
}
array.sort(ascending);
array.reverse();
