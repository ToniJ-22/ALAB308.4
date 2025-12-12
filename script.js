//original csv
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


//Part 2; Store columns in  rows and expand code to accept any number 
//Store in a 2D array with its own array for each column
//Array stored in a parent array with heading row [0]

//split text into rows
let rows= str.split("\n")
console.log(str)

//make a 2d array
let i = 0;
let row = "";
let twoDArray=[];
while(i < str.length ){
    while(str[i] !=="\n" && i < str.length){
        row +=str[i];
        i++;
    }
   
    twoDArray.push(row.split(","));
    row="";
    i++;
}

console.log(twoDArray)
//Part 3; create a obj and Convert keys into lowercase and store in a array
let heading=twoDArray[0];
for (let i= 0; i< heading.length; i++){
    heading[i]=heading[i].toLowerCase()
}
let people=[];

for (let i = 1; i < twoDArray.length; i++) {
    let obj = {};
 for (let j = 0; j < heading.length; j++) {
    let vaule = twoDArray[i][j];
    while(vaule[0]===""){
        vaule=vaule.slice(1);
    }
    while(vaule[vaule.length -1 ] === ""){
        vaule = vaule.slice(0, vaule.length -1);
    }
    obj[heading[j]]=vaule;
 }
 people.push(obj);
 }
 

console.log(people);
//Part 4; Remove last element from array // push / pop edit the end of an array
//insert  id: "48", name: "Barry", occupation: "Runner", age: "25"// Splice - Edit any amount of items anywhere in the array
//add to end { id: "7", name: "Bilbo", occupation: "None", age: "111" } //push adds to end of array 
//calculate the average age 


console.log(people[3].name)
people.pop();
console.log(people)
let name1= {
    'id': '48',
    'name': 'Barry',
    'occupation':'Runner',
    'age': '25'
}
people.push(name1);
console.log(people)

let name2 = {
    'id': '7',
    'name':'Bilbo',
    'occupation':'none',
    'age': '111'
}
people.push(name2);
console.log(people)

let totalAge = 0;
for (let i = 0; i < people.length; i++) {
   totalAge += parseInt(people[i].age);
}
console.log(totalAge)
let averageAge = totalAge / people.length;

console.log(averageAge)

// part 5; data back into csv format
let headers= Object.keys(people[0]);
let csv="";
for (let i = 0; i < headers.length;i++) {
    csv+=headers[i];
    if (i<headers.length -1) csv += ",";
}
csv += '\n';

for (let i = 0; i < people.length;i++) {
    let row="";
    for(let j = 0; j < headers.length; j++){
    row+=people[i][headers[j]];
    if (j<headers.length -1) row += ",";
}
csv+=row;
if (i < people.length -1) csv += "/n"
}
console.log(csv); 