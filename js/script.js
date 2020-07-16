var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("img1").src = myObj.news.img1;
    document.getElementById("title1").innerHTML = myObj.news.title1;
    document.getElementById("desc1").innerHTML = myObj.news.desc1;
    document.getElementById("url1").href = myObj.news.url1;

    document.getElementById("img2").src = myObj.news.img2;
    document.getElementById("title2").innerHTML = myObj.news.title2;
    document.getElementById("desc2").innerHTML = myObj.news.desc2;
    document.getElementById("url2").href = myObj.news.url2;

    document.getElementById("img3").src = myObj.news.img3;
    document.getElementById("title3").innerHTML = myObj.news.title3;
    document.getElementById("desc3").innerHTML = myObj.news.desc3;
    document.getElementById("url3").href = myObj.news.url3;

    document.getElementById("img4").src = myObj.news.img4;
    document.getElementById("title4").innerHTML = myObj.news.title4;
    document.getElementById("desc4").innerHTML = myObj.news.desc4;
    document.getElementById("url4").href = myObj.news.url4;

    document.getElementById("img5").src = myObj.news.img5;
    document.getElementById("title5").innerHTML = myObj.news.title5;
    document.getElementById("desc5").innerHTML = myObj.news.desc5;
    document.getElementById("url5").href = myObj.news.url5;
  }
};
xmlhttp.open("GET", "news.txt", true);
xmlhttp.send();