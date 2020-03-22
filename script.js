// Write your JavaScript code here!
window.addEventListener("load", function() {
  let form = document.getElementById("launchForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let pilotTest = Number(pilot.value);
    let coTest = Number(copilot.value);
    let fuelTest = Number(fuelLevel.value);
    let cargoTest = Number(cargoMass.value);

    if (
      pilot.value === "" ||
      copilot.value === "" ||
      fuelLevel.value === "" ||
      cargoMass.value === ""
    ) {
      alert("All fields required!");
    } else if (isNaN(pilotTest) === false) {
      alert("Pilot Name must contain letters");
    } else if (isNaN(coTest) === false) {
      alert("Co-pilot Name must contain letters");
    } else if (isNaN(fuelTest) === true) {
      alert("Fuel Level must only contain numbers");
    } else if (isNaN(cargoTest) === true) {
      alert("Cargo Mass may only contain numbers");
    } else if (fuelTest < 10000 && cargoTest > 10000) {
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle not ready for launch";
      document.getElementById(
        "pilotStatus"
      ).innerHTML = `Pilot ${pilot.value} is ready for launch.`;
      document.getElementById(
        "copilotStatus"
      ).innerHTML = `Copilot ${copilot.value} is ready for launch`;
      document.getElementById("fuelStatus").innerHTML =
        "Fuel level too low for launch";
      document.getElementById("cargoStatus").innerHTML =
        "Mass to high for shuttle to launch";
    } else if (fuelTest < 10000) {
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle not ready for launch";
      document.getElementById(
        "pilotStatus"
      ).innerHTML = `Pilot ${pilot.value} is ready for launch.`;
      document.getElementById(
        "copilotStatus"
      ).innerHTML = `Copilot ${copilot.value} is ready for launch`;
      document.getElementById("fuelStatus").innerHTML =
        "Fuel level too low for launch";
    } else if (cargoTest > 10000) {
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById(
        "pilotStatus"
      ).innerHTML = `Pilot ${pilot.value} is ready for launch.`;
      document.getElementById(
        "copilotStatus"
      ).innerHTML = `Pilot ${pilot.value} is ready for launch.`;
      document.getElementById("cargoStatus").innerHTML =
        "Mass to high for shuttle to launch";
    } else if (cargoTest <= 10000 && fuelTest >= 10000) {
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle ready for launch!";
    }
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(
      function(response) {
        let destination = response.json();

        destination.then(function(json) {
          let container = document.getElementById("missionTarget");

          for (mission of json) {
            let missionHTML = `<h2>Mission Destination</h2>
          <ol>
             <li>Name: ${mission.name}</li> 
             <li>Diameter: ${mission.diameter}</li>
             <li>Star: ${mission.star}</li>
             <li>Distance from Earth: ${mission.distance}</li>
             <li>Number of Moons: ${mission.moons}</li>
          </ol>
          <img src= "${mission.image}"></img>
          `;
            container.innerHTML = missionHTML;
          }
        });
      }
    );
  });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
