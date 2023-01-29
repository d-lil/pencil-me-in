const currentDate = $('#currentDate');


var d = dayjs().hour();
var time = 9;

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

for (var z = 0; z < 9; z++){
    var words = document.getElementById("tb"+z);
    words.textContent = localStorage.getItem("Eventb"+z);
}



for (var i = 0; i < 9; i++){
    var checkTime = document.getElementById("tb"+i);    

    if (time < d){
        checkTime.classList.add("past");
    }

    else if (time == d) {
        checkTime.classList.add("present")
    }

    else
        checkTime.classList.add("future");

    time++;
}


var main = document.getElementById("main");

main.addEventListener('click', function(event){
    event.preventDefault();
    var selectedButton = event.target;

    if (selectedButton.tagName != 'BUTTON') 
    return;

    console.log(selectedButton.tagName);
    var userInput = document.getElementById("t" + selectedButton.id);

   localStorage.setItem("Event" + selectedButton.id, userInput.value);
 
})

displayDate();

