function time(){
mydate =new Date();
document.getElementsByClassName("hms")[0].innerText=mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds()
document.getElementsByClassName("day")[0].innerText=day()
}
setInterval(time,86)
function day(){
    day=mydate.getDay()
    if(day==1)
    {
        return "monday"
    }
    else if(day==2){
        return "Tuesday"
    }
    else if(day==3){
        return "Wednesday"
    }
    else if(day==4){
        return "Thursday"
    }
    else if(day==5){
        return "Friday"
    }
    else if(day==6){
        return "Suterday"
    }
    else if(day==7){
        return "Sunday"
    }
}
