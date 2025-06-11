function calculateAge(){
    const date = new Date;

    const year5 = date.getFullYear();
    const year6 = document.getElementById("YEAR").value;
    const year7 = year5 - year6;
    const year8 = (year5 - year6) - 1;

    const monthh = date.getMonth();
    const month5 = monthh+1
    const month6 = document.getElementById("Month").value;
    let month7 = month5 - month6 -1;
    let month8 = month5 - month6;
    let month9 = (month5 - month6) +12;

    const day5 = date.getDate();
    const day6 = document.getElementById("Day").value;
    let day7 = day5 - day6 ;
    let day8 = day5 - day6 + 30;
    

    if((day6>day5) && (month5>month6)){
        document.getElementById("YEAR1").innerHTML = year7;
        document.getElementById("MONTH").innerHTML = month7;
        document.getElementById("DAY").innerHTML = day7 + 30;
    }
    else if((day5>day6) && (month5>month6)){
        document.getElementById("YEAR1").innerHTML = year7;
        document.getElementById("MONTH").innerHTML = month8;
        document.getElementById("DAY").innerHTML = day7;
    }
    else if((day5<day6) && (month5<month6)){
        document.getElementById("YEAR1").innerHTML = year8;
        document.getElementById("MONTH").innerHTML = month9;
        document.getElementById("DAY").innerHTML = day8;
    }
    else if((day5>day6) && (month5<month6)){
        document.getElementById("YEAR1").innerHTML = year8;
        document.getElementById("MONTH").innerHTML = month9;
        document.getElementById("DAY").innerHTML = day7;
    }

}



