
// Detect IE and if it's there, alert folks to get with the times
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > -1){
   /* Microsoft Internet Explorer detected in. */
   alert("Dude, are you seriously still using Internet Exploder 11 or lower!?? My god, get with the times. This website is designed and optimized for MODERN browsers that are respecting WEB STANDARDS. Therefore this website probably won't look right on your piece of shit out-of-date browser. Get Firefox or Chrome or something...!!!");
}


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    document.getElementById("title").innerHTML = myObj.title;
    document.getElementById("slogan").innerHTML = myObj.slogan;

    // added this loop so that I don't have to repeat the same code many times to fetch the data (ex. Title1, Title2, etc)
    var i;
    var count = Object.keys(myObj).length - 1; // This counts how many items are in the JSON object, and removes 1 since we have 2 extra items (page title+slogan) but need 1 extra since loop count starts at 1

    for (i = 1; i < count; i++) {
        var news = "news" + i; 
        var img = "img" + i;
        var title = "title" + i;
        var desc = "desc" + i;
        var url = "url" + i;
        var div = "div" + i;
        document.getElementById(img).src = myObj[news].img;
        document.getElementById(title).innerHTML = myObj[news].title;
        document.getElementById(desc).innerHTML = myObj[news].desc;
        document.getElementById(url).href = myObj[news].url;
        document.getElementById(div).className = myObj[news].class;
    } // End of loop

    // Below line displays how many items are in the JSON object in the place where the slogan is (for development purposes only)
    //document.getElementById("slogan").innerHTML = count;

  }
};
xmlhttp.open("GET", "news.txt", true);
xmlhttp.send();