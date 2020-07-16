var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    // added this loop so that I don't have to repeat the same code many times to fetch the data (ex. Title1, Title2, etc)
    var i;
    var count = 6; // Change this value according to how many articles are in the news.txt file
    for (i = 1; i < count; i++) {
        var img = "img" + i;
        var title = "title" + i;
        var desc = "desc" + i;
        var url = "url" + i;
        document.getElementById(img).src = myObj.news[img];
        document.getElementById(title).innerHTML = myObj.news[title];
        document.getElementById(desc).innerHTML = myObj.news[desc];
        document.getElementById(url).href = myObj.news[url];
    } // End of loop

  }
};
xmlhttp.open("GET", "news.txt", true);
xmlhttp.send();