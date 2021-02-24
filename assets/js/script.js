var currentDate = moment().format("MMMM D, YYYY");
$("#currentDay").text(currentDate);

var relativeTime = $(".hour");

console.log(relativeTime);

var currentHour = moment().format("h A");

var input = $("#input");

console.log(input);

// if (relativeTime < currentHour) {
//     input.attr("class", "past");
// } else {
//     console.log("fuk u");
// }