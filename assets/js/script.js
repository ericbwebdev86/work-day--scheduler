// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
let currentDate = moment().format('ddd, MMM do YYYY');
$("#currentDay").html(currentDate);







// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I click into a time block
// THEN I can enter an event
$(document).ready(function () {

    // WHEN I click the save button for that time block
    $(".saveBtn").on("click", function () {
        let booking = $(this).closest(".description").val();
        let hour = $(this).parent().attr("id");
        // THEN the text for that event is saved in local storage

        localStorage.setItem(hour, booking);
    });

    function time() {
        let currentHour = moment().hour();
        // WHEN I view the time blocks for that day
        // THEN each time block is color-coded to indicate whether it is in the past, present, or future
        $(".time-block").each(function () {
            if ($(this).attr("id") < currentHour) {
                $(this).addClass("past");
            } else if ($(this).attr("id") == currentHour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
        });
    };
    // WHEN I refresh the page
    // THEN the saved events persist
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    time();
})





//.bg-secondary gray bg

