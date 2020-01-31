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
var thisDay = new Date();
document.getElementById("calendar").innerHTML = createCalendar(thisDay);
function createCalendar(calDate){
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
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
// functiopnthat calculates the number of days in each month
function daysInMonth(calDate){
   // array of days in each  month
   var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   // find the current month
   var thisMonth = calDate.getMonth();
   // to account for leap years
   var thisYear = calDate.getFullYear();
   if(thisYear % 4 === 0){
      if(thisYear % 100 !== 0 || thisYear % 400 === 0){
         dayCount[1] = 29;
      }
   }
   // returns the number of days for the current month
   return dayCount[thisMonth];
}
// function to write a table row of weekday abbreviations
function calWeekdayRow(){
   // array of weekday abbr.
   var dayName = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";
   // look through the dayName array and place them across the top
   for(var i =0; i < dayName.length; i++){
      rowHTML += "<th class= 'calendar_weekdays'>" + dayName[i] + "</th>"
   }
   rowHTML += "</tr>"
   return rowHTML
}
// creates actual day blocks
function calDays(calDate){
   // determine the starting day
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1)
   var firstDay = day.getDay();
   // wirte blank soaces on the days before the first day
   var htmlCode = "<tr>";
   for(var i=0; i < firstDay; i++){
      htmlCode += "<td></td>"
   }
   // wirte cells for each day of the month
   var totalDays = daysInMonth(calDate);
   // creates a variable that stores todays date
   var highlightedDay = calDate.getDate();
   for(var i = 1; i <= totalDays; i++){
      day.setDate(i);
      firstDay = day.getDay();
      if(firstDay === 0){
         htmlCode += "<tr>";
      }
      
      if(i === highlightedDay){
         htmlCode += "<td class= 'calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>"
      }else{
         htmlCode += "<td class= 'calendar_dates'>" + i + dayEvent[i] + "</td>"
      }
      
      if(firstDay === 6){
         htmlCode += "</tr>";
      }
   }
   return htmlCode;
}
