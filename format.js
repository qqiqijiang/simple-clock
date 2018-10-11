/**
 * Created by zhangq2 on 17/11/2017.
 */
"use strict";

var timeformat;
var dateformat;


timetype();
daytype();
dynamictime();

function dynamictime(){
    timetype();
    daytype();
    setInterval("dynamictime()",1000);
}

function timetype(){
    var now = new Date();
    var select1=document.getElementById("hourselect").value
    if(select1=="12h") {
        timeformat = now.format("mediumTime");
    }else {
        timeformat = now.format("isoTime");
    }
    document.getElementById("timebox").value=timeformat;
}

function daytype(){
    var now = new Date();
    var select2=document.getElementById("formatselect").value
    if(select2=="long") {
        dateformat = now.format("fullDate");
    }else {
        dateformat = now.format("shortDate");
    }
    document.getElementById("datebox").value=dateformat;
}


