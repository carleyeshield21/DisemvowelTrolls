// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel(str) {
    let vowels = 'aeiouAEIOU'
    let strarr = new Array(...str)
    // console.log(strarr)
    for(i=0; i<=vowels.length-1; i++){
        for(j=0; j<=strarr.length-1; j++){
            // console.log(vowels[i], strarr[j])
            if(vowels[i] == strarr[j]){
                // console.log(strarr[j], strarr.indexOf(strarr[j]))
                strarr.splice(strarr.indexOf(strarr[j]),1,'')
            }
        }
        // console.log('========')
    }
    console.log(strarr.toString().split(',').join(''))
}
disemvowel('This website is for losers LOL!')
console.log('========')
disemvowel("No offense but,\nYour writing is among the worst I've ever read")
console.log('========')
disemvowel('What are you, a communist?')