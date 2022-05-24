function fruitShop(input) {
    let fruit = String(input[0]);
    let dayOfTheWeek = String(input[1]);
    let quantity = Number(input[2]);

    let price = 0;
    let end = Boolean(false);
    

    if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
            switch (fruit) {
                case "banana":
                    price = quantity * 2.7;
                    end = Boolean(true);
                    break;
                case "apple":
                    price = quantity * 1.25;
                    end = Boolean(true);
                    break;
                case "orange":
                    price = quantity * 0.90;
                    end = Boolean(true);
                    break;
                case "grapefruit":
                    price = quantity * 1.60;
                    end = Boolean(true);
                    break;
                case "kiwi":
                    price = quantity * 3;
                    end = Boolean(true);
                    break;
                case "pineapple":
                    price = quantity * 5.6;
                    end = Boolean(true);
                    break;
                case "grapes":
                    price = quantity * 4.2;
                    end = Boolean(true);
            }
    } else if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday"){
            switch (fruit) {
                case "banana":
                    price = quantity * 2.5;
                    end = Boolean(true);
                    break;
                case "apple":
                    price = quantity * 1.2;
                    end = Boolean(true);
                    break;
                case "orange":
                    price = quantity * 0.85;
                    end = Boolean(true);
                    break;
                case "grapefruit":
                    price = quantity * 1.45;
                    end = Boolean(true);
                    break;
                case "kiwi":
                    price = quantity * 2.7;
                    end = Boolean(true);
                    break;
                case "pineapple":
                    price = quantity * 5.5;
                    end = Boolean(true);
                    break;
                case "grapes":
                    price = quantity * 3.85;
                    end = Boolean(true);
                   
            }
     
        }if(end){
            console.log(price.toFixed(2));}
            else{
                console.log("error")
            }
    }
fruitShop(["apple",
"Workday",
"2"])
