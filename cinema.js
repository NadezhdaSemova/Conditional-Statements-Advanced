function cinema(input) {
    let type = String(input[0]);
    let row = Number(input[1]);
    let colum = Number(input[2]);

    let price = 0;
    let totalSeats = row * colum;

    switch (type) {
        case "Premiere":
            price = totalSeats * 12;
            break;
        case "Normal":
            price = totalSeats * 7.5;
            break;
        case "Discount":
            price = totalSeats * 5;
            break;
    }
    console.log(price.toFixed(2) + ` leva`);
}
cinema(["Discount",
"12",
"30"])