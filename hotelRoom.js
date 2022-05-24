function hotelRoom(input) {
    let month = String(input[0]);
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;

    switch (month) {
        case "May":
        case "October":
            priceStudio = nights * 50;
            priceApartment = nights * 65;
            if (nights > 7 && nights <= 14) {
                priceStudio = priceStudio - (priceStudio * 0.05);
            } else if (nights > 14) {
                priceStudio = priceStudio - (priceStudio * 0.30);
                priceApartment = priceApartment - priceApartment * 0.10;
            }
            break;
        case "June":
        case "September":
            priceStudio = nights * 75.20;
            priceApartment = nights * 68.70;
            if (nights > 14) {
                priceStudio = priceStudio - priceStudio * 0.20;
                priceApartment = priceApartment - priceApartment * 0.10;
            }
            break;
        case "July":
        case "August":
            priceStudio = nights * 76;
            priceApartment = nights * 77;
            if (nights > 14) {
                priceApartment = priceApartment - priceApartment * 0.10;
            }
            break;

    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}
hotelRoom (["August",
"20"])


