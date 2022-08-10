// ------------ VARIABLES -----------
var submitButton = document.getElementById('uiButton');
var nameBox = document.getElementById('nameBox');
// Update score list
function updateList() {
    document.getElementById('highscore').textContent = localStorage.getItem('score');
    if(localStorage.getItem('scoreList')) {
        var scoreList = JSON.parse(localStorage.scores);
        var ul = document.getElementById("scoreList")
        ul.innerHTML = "";
        for(var i=0; i<=scoreList.length-1; i++) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(i+1 + '. ' + scoreList[i]));
            ul.appendChild(li);
        }
    }
}
updateList();

// Add the user's name and score to a list. They can add as many different or identical names and scores as they want.
submitButton.addEventListener('click',addName)
function addName() {
    if(document.getElementById('nameBox').value != '') {
        var scoreList = JSON.parse(localStorage.scores);
        scoreList.push(document.getElementById('nameBox').value + ' - ' + localStorage.getItem('score'));
        console.log(scoreList)
        localStorage.scoreList =  JSON.stringify(scoreList);
        document.getElementById('nameBox').value = "";
        updateList();
    }
}