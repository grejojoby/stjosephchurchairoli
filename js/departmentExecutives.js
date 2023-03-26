let pithruvediExecutives = []

url="https://ap-south-1.cdn.hygraph.com/content/cleslmwlh2c5j01ujd6j7gzuf/master?query=%7B%0A%20%20pithruvediExecutives(first%3A%2020)%20%7B%0A%20%20%20%20executive%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%20%20position%0A%20%20%7D%0A%7D%0A"
async function getPithruvediExecutives(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.pithruvediExecutives);

    for(var i=0;i<data.length;i++){
        pithruvediExecutives.push(data[i])
    }
}
getPithruvediExecutives()

let mathrusangamExecutives = []

url="https://ap-south-1.cdn.hygraph.com/content/cleslmwlh2c5j01ujd6j7gzuf/master?query=%7B%0A%20%20mathrusangamExecutives(first%3A%2020)%20%7B%0A%20%20%20%20executive%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%20%20position%0A%20%20%7D%0A%7D%0A"
async function getMathrusangamExecutives(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.mathrusangamExecutives);

    for(var i=0;i<data.length;i++){
        mathrusangamExecutives.push(data[i])
    }
}
getMathrusangamExecutives()


let youthExecutives = []

url="https://ap-south-1.cdn.hygraph.com/content/cleslmwlh2c5j01ujd6j7gzuf/master?query=%7B%0A%20%20youthExecutives(first%3A%2020)%20%7B%0A%20%20%20%20executive%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%20%20position%0A%20%20%7D%0A%7D%0A"
async function getYouthExecutives(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.youthExecutives);

    for(var i=0;i<data.length;i++){
        youthExecutives.push(data[i])
    }
}
getYouthExecutives()

let parishCouncil = []

url="https://ap-south-1.cdn.hygraph.com/content/cleslmwlh2c5j01ujd6j7gzuf/master?query=%7B%0A%20%20parishCouncilMembers(first%3A%2020)%20%7B%0A%20%20%20%20executive%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%20%20position%0A%20%20%7D%0A%7D%0A"
async function getParishCouncil(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.parishCouncilMembers);

    for(var i=0;i<data.length;i++){
        parishCouncil.push(data[i])
    }
}
getParishCouncil()

let catechismTeachers = []

url="https://ap-south-1.cdn.hygraph.com/content/cleslmwlh2c5j01ujd6j7gzuf/master?query=%7B%0A%20%20parishCouncilMembers(first%3A%2020)%20%7B%0A%20%20%20%20executive%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%20%20position%0A%20%20%7D%0A%7D%0A"
async function getCatechismTeachers(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.catechismTeachers);

    for(var i=0;i<data.length;i++){
        catechismTeachers.push(data[i])
    }
}
getCatechismTeachers()

let liturgicalCommittee = []

url="https://ap-south-1.cdn.hygraph.com/content/cleslmwlh2c5j01ujd6j7gzuf/master?query=%7B%0A%20%20parishCouncilMembers(first%3A%2020)%20%7B%0A%20%20%20%20executive%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%20%20position%0A%20%20%7D%0A%7D%0A"
async function getCatechismTeachers(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.catechismTeachers);

    for(var i=0;i<data.length;i++){
        liturgicalCommittee.push(data[i])
    }
}
getCatechismTeachers()

