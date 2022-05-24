function journey(input) {
    let budget = Number(input[0]);
    let season = String(input[1]);

    let destination = "";
    let place = "";
    let price = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                place = "Camp";
                price = budget * 0.30;
                break;
            case "winter":
                place = "Hotel"
                price = budget * 0.70;
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                place = "Camp";
                price = budget * 0.40;
                break;
            case "winter":
                place = "Hotel"
                price = budget * 0.80;
                break;
        }
    } else {
        destination = "Europe";
        place = "Hotel"
        price = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}
journey(["678.53", "winter"])