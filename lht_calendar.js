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
