var currentDate = $('#currentDate');

var d = dayjs().hour();

function displayDate() {
    var st = "st";
    var nd = "nd";
    var rd = "rd";
    var th = "th";
    var rightNow = dayjs().format('dddd, MMMM DD');
    currentDate.text(rightNow);
    if (d == 1 && d != 11) {
        currentDate.append(st);
    } else if (d == 2 && d != 12) {
        currentDate.append(nd);
    } else if (d == 3 && d != 13) {
        currentDate.append(rd);
    } else {
        currentDate.append(th);
    }
};  


// FUNCTION FOR SUFFIX OF DATE (DOES IT GO HERE OR IN THE FUNCTION ABOVE?)

/*WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
-military time
-hidden class colors past, present, future
-compare time block against current time
-find a way to add or remove classes ______.addClass*/

/*WHEN I click into a timeblock
THEN I can enter an event
-text input*/

/*WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
-event listener on save button
-create var, get value, set to localstorage*/


/*WHEN I refresh the page
THEN the saved events persist
-get localstorage parse back to object (if JSON)*/

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
/*$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
*/  
  displayDate();
