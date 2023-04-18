let unitExecutives = [
    {
        "executive": {
            "name": "Lilly Stalin",
        },
        "position": "President",
        "unit": "MotherTeresa"
    },
    {
        "executive": {
            "name": "Anagha Sebastian",
        },
        "position": "Secretary",
        "unit": "MotherTeresa"
    },
    {
        "executive": {
            "name": "Swapna Paul",
        },
        "position": "Treasurer",
        "unit": "MotherTeresa"
    },
    {
        "executive": {
            "name": "Nisen Antony",
        },
        "position": "President",
        "unit": "MariamThressia"
    },
    {
        "executive": {
            "name": "Sophy Anne Jison",
        },
        "position": "Secretary",
        "unit": "MariamThressia"
    },
    {
        "executive": {
            "name": "Jincy Joseph",
            "mobileNumber": "9819656819"
        },
        "position": "Treasurer",
        "unit": "MariamThressia"
    },
    {
        "executive": {
            "name": "Mary George",
            "mobileNumber": "8355837774"
        },
        "position": "President",
        "unit": "Alphonsa"
    },
    {
        "executive": {
            "name": "Angel Mary Binoy",
            "mobileNumber": "8097388988"
        },
        "position": "Secretary",
        "unit": "Alphonsa"
    },
    {
        "executive": {
            "name": "Siji Vincent",
            "mobileNumber": "9920102352"
        },
        "position": "Treasurer",
        "unit": "Alphonsa"
    },
    {
        "executive": {
            "name": "Annes Joseph",
            "mobileNumber": "9930272929"
        },
        "position": "President",
        "unit": "Euphresia"
    },
    {
        "executive": {
            "name": "Vigil Antony",
            "mobileNumber": "9702325155"
        },
        "position": "Secretary",
        "unit": "Euphresia"
    },
    {
        "executive": {
            "name": "Sandra Viniel",
            "mobileNumber": "9664805017"
        },
        "position": "Treasurer",
        "unit": "Euphresia"
    },
    {
        "executive": {
            "name": "Daly Paulson",
            "mobileNumber": "9821461658"
        },
        "position": "President",
        "unit": "Chavara"
    },
    {
        "executive": {
            "name": "Alphonsa Abraham",
            "mobileNumber": "9821092170"
        },
        "position": "Secretary",
        "unit": "Chavara"
    },
    {
        "executive": {
            "name": "Sherly Justine",
            "mobileNumber": "9004116618"
        },
        "position": "Treasurer",
        "unit": "Chavara"
    },
    {
        "executive": {
            "name": "Shiby Philip",
            "mobileNumber": "9619225456"
        },
        "position": "President",
        "unit": "Marys"
    },
    {
        "executive": {
            "name": "Rosemary Stephen",
            "mobileNumber": "9702147264"
        },
        "position": "Secretary",
        "unit": "Marys"
    },
    {
        "executive": {
            "name": "Reji Shaji",
            "mobileNumber": "8082760251"
        },
        "position": "Treasurer",
        "unit": "Marys"
    }
]

// url = "https://ap-south-1.cdn.hygraph.com/content/cleslmwlh2c5j01ujd6j7gzuf/master?query=%7B%0A%20%20unitExecutives(first%3A%2020)%20%7B%0A%20%20%20%20executive%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%20%20position%0A%20%20%20%20unit%0A%20%20%7D%0A%7D%0A"
// async function getUnitExecutivesDataFromServer() {
//     const reps = await fetch(url);
//     var data = await reps.json();
//     data = (data.data.unitExecutives);

//     for (var i = 0; i < data.length; i++) {
//         unitExecutives.push(data[i])
//     }
// }
// getUnitExecutivesDataFromServer()
