$(document).ready(function() {
  $.getJSON("https://api.rootnet.in/covid19-in/stats/latest", null, function(
    data
  ) {
    Obj = data.data.summary;
    mainObj = data.data.regional.sort(function(a, b) {
      return (
        b.confirmedCasesIndian +
        b.confirmedCasesForeign -
        (a.confirmedCasesIndian + a.confirmedCasesForeign)
      );
    });
    var k = "<tbody>";
    for (i = 0; i < mainObj.length; i++) {
      k += "<tr>";
      k += "<td>" + mainObj[i].loc + "</td>";
      k +=
        "<td>" +
        (mainObj[i].confirmedCasesIndian + mainObj[i].confirmedCasesForeign) +
        "</td>";
      k +=
        "<td>" +
        (mainObj[i].confirmedCasesIndian +
          mainObj[i].confirmedCasesForeign -
          mainObj[i].deaths -
          mainObj[i].discharged) +
        "</td>";
      k += "<td>" + mainObj[i].deaths + "</td>";
      k += "<td>" + mainObj[i].discharged + "</td>";
      k += "</tr>";
    }
    k += "</tbody> ";
    document.getElementById("tableData").innerHTML = k;
    var j = "<tbody>";
    j += "<tr>";
    j += "<td>" + Obj.total + "</td>";
    j += "<td>" + (Obj.total - Obj.deaths - Obj.discharged) + "</td>";
    j += "<td>" + Obj.confirmedCasesIndian + "</td>";
    j += "</tr>";
    j += "</tbody>";
    document.getElementById("india-data1").innerHTML = j;
    var j = "<tbody>";
    j += "<tr>";
    j += "<td>" + Obj.confirmedCasesForeign + "</td>";
    j += "<td>" + Obj.deaths + "</td>";
    j += "<td>" + Obj.discharged + "</td>";
    j += "</tr>";
    j += "</tbody>";
    document.getElementById("india-data2").innerHTML = j;
  });
});

$(document).ready(function() {
  $.getJSON("https://api.rootnet.in/covid19-in/stats/latest", null, function(
    data
  ) {
    Obj = data.data.summary;
    mainObj = data.data.regional.sort(function(a, b) {
      return (
        b.confirmedCasesIndian +
        b.confirmedCasesForeign -
        (a.confirmedCasesIndian + a.confirmedCasesForeign)
      );
    });
    var loca = [];
    var cases = [];
    var curedcases = [];
    for (var i = 0; i < mainObj.length - 9; i++) {
      loca.push(mainObj[i].loc);
      cases.push(
        mainObj[i].confirmedCasesIndian + mainObj[i].confirmedCasesForeign
      );
      curedcases.push(mainObj[i].discharged);
    }

    var ctx = document.getElementById("canvas").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: loca,
        datasets: [
          {
            label: "Infected",
            data: cases,
            backgroundColor: "white",
            borderColor: "blue",
            fill: false
          },
          {
            label: "Cured",
            fill: false,
            backgroundColor: "#fff",
            borderColor: "red",
            data: curedcases
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              ticks: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: "States"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "No. of people"
              }
            }
          ]
        }
      }
    });
  });
});

$(document).ready(function() {
  $.getJSON("https://cryptic-ravine-96718.herokuapp.com/", null, function(
    data
  ) {
    var news = document.getElementById("news");
    var newcol = document.createElement("ul");
    newcol.setAttribute("class", "list-inline");
    news.appendChild(newcol);
    for (var i = 0; i < 12; i++) {
      var li = document.createElement("li");
      li.setAttribute("class", "list-inline-item");
      var card = document.createElement("div");
      card.setAttribute("class", "card");
      card.style.width = "15rem";
      card.style.marginRight = "1rem";
      card.style.marginBottom = "2rem";
      // card.style.border="2px solid black";
      card.style.boxShadow = "none";
      var card_title = document.createElement("h5");
      card_title.innerHTML = data.news[i].title;
      card_title.setAttribute("classs", "card-title");
      var news_img = document.createElement("img");
      news_img.setAttribute("src", data.news[i].img);
      news_img.setAttribute("class", "card-img-top lazyload");
      news_img.setAttribute("loading", "lazy");
      var btntoart = document.createElement("a");
      btntoart.setAttribute("class", "btn btn-main");
      btntoart.style.color = "#fff";
      btntoart.style.background = "#000";
      btntoart.setAttribute("href", data.news[i].link);
      btntoart.innerHTML = "Read More";
      var card_body = document.createElement("div");
      card_body.setAttribute("class", "card-body");
      card_body.appendChild(card_title);
      card_body.appendChild(btntoart);
      card.appendChild(news_img);
      card.appendChild(card_body);
      li.appendChild(card);
      newcol.appendChild(li);
    }
  });
});

let resp = null;
let resp2 = null;

// $.get("https://coronavirus-worlddata.herokuapp.com/", function(d) {
//   resp = d;
// });
$.getJSON("https://coronavirus-worlddata.herokuapp.com/", null, function(data) {
  resp = data.India;
  // resp2 = data.USA;
  var j = "<tbody>";
  j += "<tr>";
  j += "<td>" + resp.total + "</td>";
  j += "<td>" + resp.active + "</td>";
  j += "<td>" + resp.deaths + "</td>";
  j += "<td>" + resp.cured + "</td>";
  j += "</tr>";
  j += "</tbody>";
  // j += "<p>" + resp2.total + "</p>";
  document.getElementById("faster-data").innerHTML = j;
});

$(document).ready(function() {
  $("#btn-graph").on("click", function() {
    var graph = document.getElementById("graph-data");
    var map = document.getElementById("map-data");
    graph.style.display = "block";
    map.style.display = "none";
  });

  $("#btn-map").on("click", function() {
    var graph = document.getElementById("graph-data");
    var map = document.getElementById("map-data");
    graph.style.display = "none";
    map.style.display = "block";
  });
});

$(document).ready(function() {
  $("#btn-offical").on("click", function() {
    var offical = document.getElementById("offical-data");
    var fast = document.getElementById("fast-data");
    offical.style.display = "block";
    fast.style.display = "none";
  });

  $("#btn-fast").on("click", function() {
    var offical = document.getElementById("offical-data");
    var fast = document.getElementById("fast-data");
    offical.style.display = "none";
    fast.style.display = "block";
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err));
}
