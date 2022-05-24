function invalidNumber (input){
let num = Number(input[0]);

Boolean = num >= 100 && num <= 200 || num == 0;

if (!Boolean){
    console.log("invalid")
}
}
invalidNumber(["199"])
