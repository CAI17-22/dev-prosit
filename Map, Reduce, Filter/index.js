const loadJSON = callback => {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'data' with the path to your file
    xobj.onreadystatechange = () => {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.response);
        }
    };
    xobj.send(null);
}

const init = new Promise((resp) => {
    loadJSON(response => {
        let data = JSON.parse(response);

        // Filter out the personnel who can’t use the force
        let filter = data.filter(person => person.name === "Ezra Bridger");
        console.log(filter);

        // We now need to create an array containing the total score of each Jedi.
        let map = filter.map(jedi => jedi.pilotingScore + jedi.shootingScore);
        console.log(map);

        // Reduce to get the total
        let reduce = map.reduce((acc, score) => acc + score, 0);
        resp(reduce);
    });
});

// Get the total score of force users only !
init.then((res)=>console.log(res));
