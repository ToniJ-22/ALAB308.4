//original csv
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


//Part 2; Store columns in  rows and expand code to accept any number 
//Store in a 2D array with its own array for each column
//Array stored in a parent array with heading row [0]

// let row = [
//     ['ID','Name','Occupation','Age'],
//     ['42', 'Bruce',' Knight', '41'],
//     ['57','Bob','Fry Cook','19'],
//     ['63','Blaine','Quiz Master','58'],
//     ['98','Bill','Doctors Assistant','26'],
// ]
// let column = rows[0].length;
// console.log(column)
// console.log(rows)

console.log(str);
let newStr = "";
for (let i = 0; i < str.length; i = i++) {
    newStr = newStr + (str[i]);
}
console.log(newStr);

//Part 3; Convert keys into lowercase and store in a array


//Part 4; Remove last element from array // push / pop edit the end of an array
//insert  id: "48", name: "Barry", occupation: "Runner", age: "25"// Splice - Edit any amount of items anywhere in the array
//add to end { id: "7", name: "Bilbo", occupation: "None", age: "111" } //push adds to end of array 

// people.pop();

// people.splice(){
//     ID: "48",
//     Name: "Barry",
//     Occupation:"Runner",
//     Age: "25"
// };

// people.push{
//     ID: '7',
//     Name:'Bilbo',
//     Occupation:'none',
//     Age: '111'
// };