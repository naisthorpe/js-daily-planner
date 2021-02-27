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
    if (militaryTime < currentHour) {
        $("#" + timeBlockList[i]).addClass("past");
    } else if (militaryTime === currentHour) {
        $("#" + timeBlockList[i]).addClass("present");
    } else {
        $("#" + timeBlockList[i]).addClass("future");
    }
}


// Okay, let's get to storing our data locally so it persists

// Select the save buttons
var saveBtn = $(".saveBtn");

var inputStorageObject = {};

// var inputText = $(this).parent().children("textarea").val();
// var inputIdText = $(this).parent().children("textarea").attr("id");

// Add event listener for save button
// Store the text in a key:value pair >> key = id of textarea element  & value = text input
saveBtn.on("click", function(event) {
    event.preventDefault();
    var inputText = $(this).parent().children("textarea").val();
    var inputIdText = $(this).parent().children("textarea").attr("id");
    inputStorageObject[inputIdText] = inputText;
    localStorage.setItem("stored-text", JSON.stringify(inputStorageObject));
});

function init() {
    var storedData = JSON.parse(localStorage.getItem("stored-text"));

    if (storedData !== null) {
        inputStorageObject = storedData;

        var storedObject = Object.entries(inputStorageObject);

        for (var i=0; i<storedObject.length; i++) {
            var idInsert = storedObject[i][0];
            var textInsert = storedObject[i][1];
            $("#"+idInsert).text(textInsert);
        }
    }

}


init();

