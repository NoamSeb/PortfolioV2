fetch('./data/data.json').then(Response => {
    return Response.json();
}).then(data => {

    //selection des éléments du geojson
    element = data.features

    //récupération des regions/departements/communes et ajout dans des listes
    element.forEach(element => {
        console.log(element.name);
    });

    let loadedData = {
        features: element
    }

    //On découpe l'URL en plusieurs parties afin de garder uniquement l'id du site
    let name = document.location.href.split("?")[1].split("=")[1];
    //On check si un élément à le même id
    let objName = loadedData.features.find(item => {
        return item.name == name
    })

    let ht = '<p>Entreprise : ' + objName.properties.nom_site + '</p>' + '</br>' +
        '<p>Region : ' + objId.properties.region + '</p>' + '</br>' +
        '<p>Commune : ' + objId.properties.commune + ' ( ' + objId.properties.dpt + ' )' + '</p>' + '</br>' +
        '<p>Adresse : ' + objId.properties.adresse + ' ( ' + objId.properties.code_post + ' )' + '</p>' + '</br>' +
        '<p>Activité : ' + objId.properties.activite + ' ( ' + objId.properties.code_act + ' )' + '</p>' + '</br>' +
        '<p> Description du site : ' + objId.properties.descrip + '</p>' + '</br>' +
        '<p>Polluants : ' + objId.properties.nom_classe + '</p>' + '</br>' +
        '<p>Type de Pollution : ' + objId.properties.type_pollu.replace("{", "").replace("}", "").replace(/'/g, "") + '</p>' + '</br>' +
        '<p>Origine de la pollution : ' + objId.properties.oigine_pollution + '</p>';
    document.getElementById("siteInfo").innerHTML = ht;
    console.log(objName);
});