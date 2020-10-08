function scrollFunction() {
    var scrollHeight = document.querySelector("main").scrollTop;
    if (scrollHeight < 800) { // SECTION INTRO
        if (!document.querySelector("main").classList.contains("intro")) inPicture("intro");
    }
    else if (scrollHeight > 800 && scrollHeight < 2100) { // SECTION DRUGS
        var scrollCalc = (scrollHeight - 800) / 10,
            bars = document.querySelectorAll((".drug .bar"));
        bars[0].style.height = scrollCalc + "rem";
        bars[1].style.height = scrollCalc + "rem";
        bars[2].style.height = scrollCalc + "rem";

        var spans = document.querySelectorAll(".drug .bar span:last-of-type"),
            spanCalc1 = Math.ceil(scrollCalc) / 10;
        if (spanCalc1 > 7.4) spanCalc1 = 7.4;
        spans[0].textContent = spanCalc1;

        spanCalc2 = Math.ceil(scrollCalc) / 10;
        if (spanCalc2 > 6.6) spanCalc2 = 6.6;
        spans[1].textContent = spanCalc2;

        spanCalc3 = Math.ceil(scrollCalc) / 10;
        if (spanCalc3 > 7.8) spanCalc3 = 7.8;
        spans[2].textContent = spanCalc3;


        if (!document.querySelector("main").classList.contains("drugs")) inPicture("drugs");
    }
    else if (scrollHeight > 2100 && scrollHeight <= 4400) { // SECTION ALCOHOL
        if (!document.querySelector("main").classList.contains("alcohol")) inPicture("alcohol");
        if (scrollHeight > 2600 && scrollHeight < 2850) document.querySelector(".question").classList.add("active");
        else document.querySelector(".question").classList.remove("active");

        if (scrollHeight > 3000) document.querySelector("section.alcohol .chart").classList.add("active");
        else document.querySelector("section.alcohol .chart").classList.remove("active");

        var alcBars = document.querySelectorAll("section.alcohol .bar");
        if (scrollHeight > 3300) alcBars[0].classList.add("active");
        else alcBars[0].classList.remove("active");

        if (scrollHeight > 3350) alcBars[1].classList.add("active");
        else alcBars[1].classList.remove("active");

        if (scrollHeight > 3400) alcBars[2].classList.add("active");
        else alcBars[2].classList.remove("active");

        if (scrollHeight > 3450) alcBars[3].classList.add("active");
        else alcBars[3].classList.remove("active");

        if (scrollHeight > 3500) alcBars[4].classList.add("active");
        else alcBars[4].classList.remove("active");

        if (scrollHeight > 3550) alcBars[5].classList.add("active");
        else alcBars[5].classList.remove("active");

        if (scrollHeight > 3600) alcBars[6].classList.add("active");
        else alcBars[6].classList.remove("active");

        if (scrollHeight > 3650) alcBars[7].classList.add("active");
        else alcBars[7].classList.remove("active");

        if (scrollHeight > 3700) alcBars[8].classList.add("active");
        else alcBars[8].classList.remove("active");

        if (scrollHeight > 3750) alcBars[9].classList.add("active");
        else alcBars[9].classList.remove("active");
        
        var jobsCalc = scrollHeight - 4500; 
        document.querySelector(".large h1").style = "transform: scale(" + (470 - (jobsCalc * (469/1600))) + "); margin-left: -" + (96 - (jobsCalc * (96/1600))) + "rem";

    }
    else if (scrollHeight > 4500 && scrollHeight < 7150) { // SECTION JOBS
        if (!document.querySelector("main").classList.contains("jobs")) inPicture("jobs");
        var jobsCalc = scrollHeight - 4500; 
        if (jobsCalc > 1600) jobsCalc = 1600;
        document.querySelector(".large h1").style = "transform: scale(" + (470 - (jobsCalc * (469/1600))) + "); margin-left: -" + (96 - (jobsCalc * (96/1600))) + "rem";

        if (scrollHeight > 6300) document.querySelector("section.bijbaan p:first-of-type").classList.add("active");
        else document.querySelector("section.bijbaan p").classList.remove("active");
        if (scrollHeight > 6500) document.querySelector("section.bijbaan p:first-of-type").classList.remove("active");
        
        if (scrollHeight > 6580) { 
            document.querySelector("section.bijbaan h1").classList.add("active");
            document.querySelector("section.bijbaan p:last-of-type").classList.add("active");
        }
        else {
            document.querySelector("section.bijbaan h1").classList.remove("active");
            document.querySelector("section.bijbaan p:last-of-type").classList.remove("active");
        }

        if (scrollHeight > 6750) document.querySelector("section.bijbaantwee .left h2").classList.add("active");
        else document.querySelector("section.bijbaantwee .left h2").classList.remove("active");
        if (scrollHeight > 6850) document.querySelector("section.bijbaantwee .right h2").classList.add("active");
        else document.querySelector("section.bijbaantwee .right h2").classList.remove("active");
        
    }
    else if(scrollHeight >= 7150) {
        if (!document.querySelector("main").classList.contains("jobstwo")) inPicture("jobstwo");
        
        if (scrollHeight > 8000) document.querySelector("section.bijbaan .pie").classList.add("active");
        else document.querySelector("section.bijbaan .pie").classList.remove("active");
        console.log(scrollHeight);
        

    }
}

scrollFunction();
document.querySelector("main").addEventListener("scroll", scrollFunction);

function inPicture(classVar) {
    document.querySelector("main").classList.remove("intro");
    document.querySelector("main").classList.remove("drugs");
    document.querySelector("main").classList.remove("jobs");
    document.querySelector("main").classList.remove("jobstwo");
    document.querySelector("main").classList.remove("alcohol");
    document.querySelector("main").classList.add(classVar);
}

