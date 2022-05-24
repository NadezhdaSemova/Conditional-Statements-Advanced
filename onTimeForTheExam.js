function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let totalMinExam = hourExam * 60 + minExam;
    let totalMinArrive = hourArrive * 60 + minArrive;

    let current = Math.abs(totalMinExam - totalMinArrive);
    let hourCurrent = Math.floor(current / 60);
    let munCurrent = current % 60;
    if (totalMinExam >= totalMinArrive) {
        if (totalMinExam == totalMinArrive) {
            console.log("On time");
        } else if (totalMinExam - totalMinArrive <= 30) {
            console.log("On time")
            console.log(`${current} minutes before the start`)
        } else if (totalMinExam - totalMinArrive >= 30) {
            console.log("Early")
            if (current < 60) {
                console.log(`${current} minutes before the start`)
            } else {
                if (munCurrent <= 9) {
                    console.log(`${hourCurrent}:0${munCurrent} hours before the start`)
                } else {
                    console.log(`${hourCurrent}:${munCurrent} hours before the start`)
                }
            }
        }
    } else if (totalMinExam < totalMinArrive) {
        console.log("Late")
        if (current < 60) {
            console.log(`${current} minutes after the start`)
        } else {
            if (munCurrent <= 9) {
                console.log(`${hourCurrent}:0${munCurrent} hours after the start`)
            } else {
                console.log(`${hourCurrent}:${munCurrent} hours after the start`)
            }
        }
    }
}
onTimeForTheExam(["16",
"00",
"15",
"00"])

