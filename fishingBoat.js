function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = String(input[1]);
    let fishers = Number(input[2]);

    let priceBoat = 0;

    switch (season) {
        case "Spring":
            priceBoat = 3000;
            if (fishers <= 6) {
                priceBoat -= priceBoat * 0.10;
            } else if (fishers <= 11) {
                priceBoat -= priceBoat * 0.15;
            } else if (fishers >= 12) {
                priceBoat -= priceBoat * 0.25;
            }
            break;
        case "Summer":
        case "Autumn":
            priceBoat = 4200;
            if (fishers <= 6) {
                priceBoat -= priceBoat * 0.10;
            } else if (fishers <= 11) {
                priceBoat -= priceBoat * 0.15;
            } else if (fishers >= 12) {
                priceBoat -= priceBoat * 0.25;
            }
            break;
        case "Winter":
            priceBoat = 2600;
            if (fishers <= 6) {
                priceBoat -= priceBoat * 0.10;
            } else if (fishers <= 11) {
                priceBoat -= priceBoat * 0.15;
            } else if (fishers >= 12) {
                priceBoat -= priceBoat * 0.25;
            }
            break;
    }
    if (fishers % 2 == 0 && season != "Autumn") {
        priceBoat -= priceBoat * 0.05;
    }

    if (priceBoat <= budget) {
        console.log(`Yes! You have ${(budget - priceBoat).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(priceBoat - budget).toFixed(2)} leva.`)
    }
}
fishingBoat(["2000",
    "Winter",
    "13"])