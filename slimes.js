fetch(`./slimes.json`)
.then(response => response.json())
.then(data => {

    const container = document.createElement('div');
    container.id = "slimeContainer";

    data.forEach(slime => {
        const slimeDiv = document.createElement('div');
        slimeDiv.className = 'slime'


        slimeDiv.innerHTML = `
        <h2>Name: ${getName(slime)}</h2>
        <p>Hostility: ${getHostility(slime)}</p>
        <p>Diet: ${getDietInfo(slime)}</p>
        <p>Date Released: ${getUpdateRelease(slime)}</p>
        `;

        container.appendChild(slimeDiv)
    
        console.log(getName(slime));
        console.log(getHostility(slime));
        console.log(getDietInfo(slime));
        console.log(getUpdateRelease(slime));
      });

     document.body.appendChild(container);

    function getName(slime) {
        return `The ${slime.name} is a type of slime in Slime Rancher`
    }

    function getHostility(slime) {
        return `The ${slime.name} is ${slime.type}`
    }

    function getDietInfo(slime) {
        switch(slime.diet){
            case "Fruit":
                return `The ${slime.name} is a fruitarian. It's favorite food is ${slime.favfood}s`
            case "Veggie":
                return `The ${slime.name} is a vegetarian. It's favorite food is ${slime.favfood}s`
            case "Meat":
                return `The ${slime.name} is a carnivore. It's favorite food is ${slime.favfood}s`
            default:
                return `The ${slime.name} is an omnivore. It doesn't have a favorite food`
        }
    }

    function getUpdateRelease(slime) {
        return `The ${slime.name} was released in update ${slime.updateadded} on ${slime.dateadded}`
    }


})