cabRequest("12 7 0 4");

function cabRequest(input) {
    let squads = input.trim().split(" ");
    squads = squads.map(x => parseInt(x));
    let cabRequest = squads[3] + squads[2];

    squads[0] >= squads[2] ? squads[0] -= squads[2] : squads[0] = 0;
    cabRequest += Math.trunc((squads[1] / 2)) + Math.ceil((((squads[1] % 2) * 2) + squads[0]) / 4);

    console.log(cabRequest);
}