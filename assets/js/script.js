// Call current date and set the text in the HTML
var currentDate = moment().format("MMMM D, YYYY");
$("#currentDay").text(currentDate);

// Empty array for times
// Will be filled later
var timesList = [];

// Variable for each hour element
var hours = $(".hour");

// Variable for current hour
var currentHour = moment().format("HH");

// currentHour = "14";

// Add hours from planner to a list
// That way I have something to iterate over
for (var i=0; i<hours.length; i++) {
    var hourText = $(hours[i]).text();
    timesList.push(hourText);
}

// Variable for each time block element
var timeBlock = $(".time-block");

// Empty array for textarea id's
// Will use to assign class based on index
var timeBlockList = [];

// Add textarea id's to empty array for comparison later
for (var i=0; i<timeBlock.length; i++) {
    var timeBlockText = timeBlock[i].id;
    timeBlockList.push(timeBlockText);
}

// Now do a for loop to compare the array of times to the current time
// Change the class of the given id based on the time condition
for (var i=0; i<timesList.length; i++) {
    var militaryTime = moment(timesList[i], "h A").format("HH");
    console.log(militaryTime);
    if (militaryTime < currentHour) {
        $("#" + timeBlockList[i]).addClass("past");
    } else if (militaryTime === currentHour) {
        $("#" + timeBlockList[i]).addClass("present");
    } else {
        $("#" + timeBlockList[i]).addClass("future");
    }
}

