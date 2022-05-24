function newHouse(input) {
    let typeFlower = String(input[0]);
    let numberFlower = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;
    switch (typeFlower) {
        case "Roses":
            price = numberFlower * 5;
            if (numberFlower > 80){
                price -= price * 0.1;
            }
            break;
        case "Dahlias":
            price = numberFlower * 3.8;
            if (numberFlower > 90){
                price -= price * 0.15;
            }
            break;
        case "Tulips":
            price = numberFlower * 2.8;
            if (numberFlower > 80){
                price -= price * 0.15;
            }
            break;
        case "Narcissus":
            price = numberFlower * 3;
            if (numberFlower < 120){
                price += price * 0.15;
            }
            break;
        case "Gladiolus":
            price = numberFlower * 2.5;
            if (numberFlower < 80){
                price += price * 0.20;
            }
            break;
    }
    if (budget >= price){
console.log(`Hey, you have a great garden with ${numberFlower} ${typeFlower} and ${(budget - price).toFixed(2)} leva left.`);
    }else{
console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
}
newHouse(["Narcissus",
"119",
"360"])