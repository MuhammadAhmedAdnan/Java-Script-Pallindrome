var pallindrome = prompt("Check If This Is A PALINDROME ")
var lowercase = pallindrome.toLowerCase(); 
console.log(lowercase);
var array = []
var reversedArray = []
for ( var A = lowercase.length-1; A>= 0; A--){
    reversedArray.push(lowercase[A])
    console.log(reversedArray)
}
var ispallindrome = true
console.log("main", lowercase);
console.log("reverse", reversedArray);
for(var B = 0; B < lowercase.length; B++  ) {
    if (lowercase[B] !== reversedArray[B]) {
        ispallindrome = false;
        break;
}
}
if (ispallindrome) {
    document.write("Yes, it is a PALINDROME");
} else {
    document.write("This is not a PALINDROME");

}