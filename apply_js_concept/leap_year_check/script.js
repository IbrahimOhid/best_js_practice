function leapYear(year){
    const reminderYear = year % 4;
    if (reminderYear == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(leapYear(2000));

