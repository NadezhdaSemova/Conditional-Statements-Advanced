function skiTrip(input) {
    let days = Number(input[0]);
    let type = String(input[1]);
    let rating = String(input[2]);

    let price = 0;

    if (days < 10) {
        switch (type) {
            case "room for one person":
                price = (days - 1) * 18;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
            case "apartment":
                price = (days - 1) * 25;
                price -= price * 0.30;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
            case "president apartment":
                price = (days - 1) * 35;
                price -= price * 0.10;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
        }

    } else if (days <= 15) {
        switch (type) {
            case "room for one person":
                price = (days - 1) * 18;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
            case "apartment":
                price = (days - 1) * 25;
                price -= price * 0.35;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
            case "president apartment":
                price = (days - 1) * 35;
                price -= price * 0.15;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
        }
    } else {
        switch (type) {
            case "room for one person":
                price = (days - 1) * 18;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
            case "apartment":
                price = (days - 1) * 25;
                price -= price * 0.50;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
            case "president apartment":
                price = (days - 1) * 35;
                price -= price * 0.20;
                switch (rating) {
                    case "positive":
                        price += price * 0.25;
                        break;
                    case "negative":
                        price -= price * 0.10;
                        break;
                }
                break;
        }
    }
console.log(price.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])
