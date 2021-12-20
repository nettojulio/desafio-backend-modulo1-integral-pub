cabRequest("120 -10 -10 -10");

function cabRequest(input) {
    const squads = input.trim().split(" ");

    for (x = 0; x < squads.length; x++) {
        squads[x] = parseInt(squads[x])
    }

    let capacity1 = squads[0], capacity2 = squads[1], capacity3 = squads[2], cabRequest = squads[3], resto = 0;

    if (capacity1 >= capacity3 && capacity3 > 0 && capacity1 > 0) {
        capacity1 -= capacity3;
        cabRequest += capacity3;
        capacity3 -= capacity3;
    } else if (capacity1 < capacity3 && capacity3 > 0 && capacity1 > 0) {
        cabRequest += capacity3
        capacity3 -= capacity3;
        capacity1 -= capacity1
    }

    if (capacity2 > 1 && capacity2 % 2 === 0) {
        cabRequest += capacity2 / 2
        capacity2 = 0
    } else if (capacity2 > 1 && capacity2 % 2 !== 0) {
        cabRequest = cabRequest + ((capacity2) - 1) / 2
        capacity2 = capacity2 - ((capacity2) - 1)
    }

    if (capacity2 === 1 && capacity1 >= 2) {
        capacity1 -= 2;
        capacity2--;
        cabRequest++;
    } else if (capacity2 === 1 && capacity1 > 0) {
        capacity1--;
        capacity2--;
        cabRequest++;
    } else if (capacity2 === 1 && capacity1 === 0) {
        capacity2--;
        cabRequest++;
    }

    if (capacity1 >= 4) {
        while (capacity1 % 4 !== 0) {
            capacity1--;
            resto++;
        }
        cabRequest += capacity1 / 4
        capacity1 -= capacity1, capacity1 += resto
    }

    if (capacity1 > 0) {
        capacity1 -= capacity1;
        cabRequest++;
    }
    console.log(cabRequest)
}