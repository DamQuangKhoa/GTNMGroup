function showContent(currentTab) {
    if (currentTab.getAttribute("for") === "9") {
        document.getElementById('comp-0').innerHTML = '30%';
        document.getElementById('comp-1').innerHTML = '15%';
        document.getElementById('comp-2').innerHTML = '20%';
        document.getElementById('comp-3').innerHTML = '15%';
        document.getElementById('comp-4').innerHTML = '20%';
    } else {
        document.getElementById('comp-0').innerHTML = '100%';
        document.getElementById('comp-1').innerHTML = '100%';
        document.getElementById('comp-2').innerHTML = '100%';
        document.getElementById('comp-3').innerHTML = '100%';
        document.getElementById('comp-4').innerHTML = '100%';
    }
    
    var pos = parseInt(currentTab.getAttribute("for"));
    var contents = data[pos];
    var works = contents.works;
    var links = contents.external_link;
    var ords = contents.members;
    for (var i = 0; i < links.length; i++) {
        var link = document.getElementById("result_link" + i);
        link.setAttribute("href", links[i]);
        var work = document.getElementById("work" + i);
        work.innerHTML = works[i];
        var name = document.getElementById("member_name"+i);
        name.innerHTML = memberNames[ords[i]];
    }
}

function riseUp(currentTab) {
    var tabs = document.getElementsByClassName("tab selected");
    for (var i = 0; i < tabs.length; i++)
        tabs[i].classList.remove("selected");
    currentTab.classList.add("selected");
    showContent(currentTab);
}

function init() {
    var tabs = document.getElementsByClassName("tab");
    riseUp(tabs[tabs.length - 1]);
}

init();