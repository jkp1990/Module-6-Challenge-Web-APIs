const hiScoresList = document.querySelector("#highscores")
const scores = JSON.parse(localStorage.getItem('mod6hw-hiscore')||"null")
scores.sort((a,b) => b[1]-a[1])

if (!scores) {
    hiScoresList.innerHTML = `<h3>No scores yet.</h3>`
} else {
    scores.forEach(score => {
        hiScoresList.innerHTML += `
            <li>
                ${score[0]} - ${score[1]}
            </li>
        `
    })
}