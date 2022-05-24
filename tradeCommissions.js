function tradeCommissions(input) {
    let city = String(input[0]);
    let value = Number(input[1]);

    if (city != "Sofia" && city != "Varna" && city != "Plovdiv") {
        console.log("error");
    } else if(value < 0){
        console.log("error");
    } 
    else {
        if (value >= 0 && value <= 500) {
            switch (city) {
                case "Sofia":
                    value *= 0.05;
                    break;
                case "Varna":
                    value *= 0.045;
                    break;
                case "Plovdiv":
                    value *= 0.055;
                    break;
            }
            console.log(value.toFixed(2));
        } else if (value <= 1000) {
            switch (city) {
                case "Sofia":
                    value *= 0.07;
                    break;
                case "Varna":
                    value *= 0.075;
                    break;
                case "Plovdiv":
                    value *= 0.08;
                    break;
            }
            console.log(value.toFixed(2));
        } else if (value <= 10000) {
            switch (city) {
                case "Sofia":
                    value *= 0.08;
                    break;
                case "Varna":
                    value *= 0.10;
                    break;
                case "Plovdiv":
                    value *= 0.12;
                    break;
            }
            console.log(value.toFixed(2));

        } else {
            switch (city) {
                case "Sofia":
                    value *= 0.12;
                    break;
                case "Varna":
                    value *= 0.13;
                    break;
                case "Plovdiv":
                    value *= 0.145;
                    break;
            }
            console.log(value.toFixed(2));
        }
    }
}
tradeCommissions(["Kaspichan",
"-50"])
