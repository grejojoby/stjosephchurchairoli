let unitExecutives = [

]

url="https://ap-south-1.cdn.hygraph.com/content/cleslmwlh2c5j01ujd6j7gzuf/master?query=%7B%0A%20%20unitExecutives(first%3A%2020)%20%7B%0A%20%20%20%20executive%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%20%20position%0A%20%20%20%20unit%0A%20%20%7D%0A%7D%0A"
async function getUnitExecutivesDataFromServer(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.unitExecutives);

    for(var i=0;i<data.length;i++){
        unitExecutives.push(data[i])
    }
}
getUnitExecutivesDataFromServer()
