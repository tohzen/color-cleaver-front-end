const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");
const str1 = getInput(1);
const str2 = getInput(2);
// Your code here!


if(str1 !== undefined && str2 !== undefined && isValidPrimary(str1) && isValidPrimary(str2)){
    console.log("If we put them together it makes " + colorCombinator(str1,str2) + "!")
}
if(getInput(1) !== undefined && getInput(2) == undefined ){
    console.log("If we split that color apart we get " + colorDeconstructor(str1) + "!") 
}
