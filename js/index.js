"use strict";

// ?<---- qoutes app logic ----->
var qoutes = [
  {
    qoute: "“Be yourself; everyone else is already taken”",
    wise: "― Oscar Wilde",
    photo: '<img src="img/1.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute: "“So many books, so little time.”",
    wise: "― Frank Zappa",
    photo: '<img src="img/4.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe”",
    wise: "― Albert Einstein",
    photo: '<img src="img/2.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute: "“A room without books is like a body without a soul.”",
    wise: "― Marcus Tullius Cicero",
    photo: '<img src="img/3.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute: "“Be the change that you wish to see in the world.”",
    wise: "― Mahatma Gandhi",
    photo: '<img src="img/7.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute: "“If you tell the truth, you don't have to remember anything.”",
    wise: "― Mark Twain",
    photo: '<img src="img/8.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute: "“If you tell the truth, you don't have to remember anything.”",
    wise: "― Mark Twain",
    photo: '<img src="img/9.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    wise: "― Andre Gide, Autumn Leaves",
    photo: '<img src="img/10.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute:
      "“In three words I can sum up everything I’ve learned about life: It goes on.”",
    wise: "– Robert Frost",
    photo: '<img src="img/11.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute: "“The unexamined life is not worth living.”",
    wise: "– Socrates",
    photo: '<img src="img/12.jpg" class="w-100" alt="wise who said that">',
  },
  {
    qoute: "“Life’s tragedy is that we get old too soon and wise too late.”",
    wise: "– Benjamin Franklin",
    photo: '<img src="img/13.jpg" class="w-100" alt="wise who said that">',
  },
];

var img = document.getElementById("photo");
var pQuote = document.getElementById("qoute");
var pWise = document.getElementById("wise");

function randomQoutes() {
  var randNumber = Math.trunc(Math.random() * qoutes.length);
  while (pQuote.innerHTML === qoutes[randNumber].qoute) {
    randNumber = Math.trunc(Math.random() * qoutes.length);
  }
  img.innerHTML = qoutes[randNumber].photo;
  pQuote.innerHTML = qoutes[randNumber].qoute;
  pWise.innerHTML = qoutes[randNumber].wise;
}
// ?<---- qoutes app logic ----->
