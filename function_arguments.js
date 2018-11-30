// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, mark) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        // if a remainder of 3 and greatr than 3, add the desired mark
        if (i !=0 && i % 3 === 0){
            buildMeUp += `${sentence[i]}${mark}`;
        } else {
        // Concatenate the new word onto buildMeUp
            buildMeUp += `${sentence[i]} `;
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
};
// Invoke the function and pass in the array
addExcitement(sentence, "? ");