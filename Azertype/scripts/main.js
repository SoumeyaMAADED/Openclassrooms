function showResult(score, totalWordsproposed) {
    // On affiche le score de l'utilisateur
    console.log('Votre score est de ' + score + ' sur ' + totalWordsproposed.length)
}

function chooseSentencesOrWords() {
    // Tant que l'utilisateur n'a pas choisis "mots" ou "phrases", on lui repose la même question
    let choice = prompt('Voulez-vous jouer avec les "mots" ou les "phrases" ?')
    while (choice !== "mots" && choice !== "phrases") {
        choice = prompt('Vous devez choisir entre "mots" et "phrases"')
    }
    return choice
}

function launchGameLoop(proposedList) {
    // Je mets en paramètre d
    let score = 0
    for (let i = 0; i < proposedList.length; i++) {
        userWord = prompt('Entrez le mot: ' + proposedList[i])
        if (userWord === proposedList[i]) {
            score++
        }
    }
    return score
}

function launchGame() {
    let choice = chooseSentencesOrWords()
    let score = 0
    let totalWordsproposed = 0


    if (choice === "mots") {
        score = launchGameLoop(wordList)
        totalWordsproposed = wordList.length
    } else {
        score = launchGameLoop(sentencesList)
        totalWordsproposed = sentencesList.length
    }

    showResult(score, totalWordsproposed)
}

// launchGame()

let userWillWrite = document.getElementById("inputEcriture")
console.log(userWillWrite);

let validationButton = document.getElementById("btnValiderMot")
console.log(validationButton);