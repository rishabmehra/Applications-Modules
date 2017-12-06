

var person = [
                {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
                {firstName:"james", lastName:"lebron", age:45, eyeColor:"red"},
                {firstName:"steph", lastName:"curry", age:35, eyeColor:"green"},
                {firstName:"virat", lastName:"kohli", age:28, eyeColor:"yellow"},
                {firstName:"rohit", lastName:"sharma", age:30, eyeColor:"grey"},
                {firstName:"rishab", lastName:"mehra", age:27, eyeColor:"white"},
                {firstName:"sri", lastName:"rajendra", age:24, eyeColor:"cat"},
                {firstName:"james", lastName:"anderson", age:32, eyeColor:"light blue"},
                {firstName:"vinay", lastName:"pedamallu", age:27, eyeColor:"blue"},
                {firstName:"narayana", lastName:"pedamallu", age:50, eyeColor:"blue"},
];


var arr = [];
for(i=0;i<=10;i++) {
    
    arr = person[i].firstName;
    arr.push;
}

function filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).arr(k => 
            o[k].toUpperCase().includes(string.toUpperCase().value.find(/^[A](.*[H])?$/igm))));
}