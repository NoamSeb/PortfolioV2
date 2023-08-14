fetch('./data/data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        // Selection des éléments dans le JSON
        const elements = data.features;

        elements.forEach(element => {
            console.log(element.name);
        });

        // On découpe l'URL pour obtenir le nom de la planète
        const name = document.location.href.split("?")[1].split("=")[1];

        // On cherche un élément avec le même nom
        const objName = elements.find(item => {
            return item.name === name;
        });

        if (objName) {
            let ht = '<h1>' + objName.name + '</h1>' + '</br>' +
            '<p>' + objName.properties.DivArt.name + '</p>' +
            '<p>' + objName.properties.DivArt.date + '</p>'+
            '<p>' + objName.properties.DivArt.description + '</p>'
            document.getElementById("planetInfo").innerHTML = ht;
            console.log(objName);
        } else {
            console.log("Planet not found");
        }
    });
