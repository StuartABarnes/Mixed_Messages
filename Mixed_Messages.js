//This program will provide a series of randomly created messages via JavaScript
const firstWords = ["Greetings", "Hello there", "Hi", "Good work", "Good day"];
const secondWords = ["Mr", "Ms", "Commander", "Captain", "Doctor", "Counsellor", "Chief"];
const thirdWords = ["Picard", "Riker", "Shepard", "Troi", "Legion", "O'Brien"];
const fourthWords = ["how are you today?","how have you been?","make it so.","what's that coming over the hill?", "you big stupid jellyfish!"]
function mixedMessages (firstWords,secondWords,thirdWords,fourthWords) {
    let randNumber1 = Math.floor(Math.random() * (firstWords.length));
    let randNumber2 = Math.floor(Math.random() * (secondWords.length));
    let randNumber3 = Math.floor(Math.random() * (thirdWords.length));
    let randNumber4 = Math.floor(Math.random() * (fourthWords.length));
    let greeting = firstWords[randNumber1];
    let title = secondWords[randNumber2];
    let name = thirdWords[randNumber3];
    let action = fourthWords[randNumber4];

    console.log(greeting + " " + title + " " + name + ", " + action);
};

mixedMessages(firstWords,secondWords,thirdWords,fourthWords);
