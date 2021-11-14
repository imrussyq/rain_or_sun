// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

let dom = document.getElementsByClassName("menu")[0];
let dom_li_tag = dom.getElementsByTagName("li");
let dom_li_a_tag = dom.getElementsByTagName("a");
let a_tag_length = dom_li_a_tag.length - 2;
for (let i = 0; i < a_tag_length; i++) {
  switch (location.href.split("/")[3]) {
    case "index.html":
      dom_li_a_tag[0].style.backgroundColor = "black";
      dom_li_a_tag[0].style.color = "white";
      break;
    case "umbrella.html":
      dom_li_a_tag[1].style.backgroundColor = "black";
      dom_li_a_tag[1].style.color = "white";
      break;
    case "sunglass.html":
      dom_li_a_tag[2].style.backgroundColor = "black";
      dom_li_a_tag[2].style.color = "white";
      break;
    case "shop.html":
      dom_li_a_tag[3].style.backgroundColor = "black";
      dom_li_a_tag[3].style.color = "white";
      break;
    case "location.html":
      dom_li_a_tag[4].style.backgroundColor = "black";
      dom_li_a_tag[4].style.color = "white";
      break;
    case "aboutus.html":
      dom_li_a_tag[5].style.backgroundColor = "black";
      dom_li_a_tag[5].style.color = "white";
      break;
    case "contact.html":
      dom_li_a_tag[6].style.backgroundColor = "black";
      dom_li_a_tag[6].style.color = "white";
      break;
  }
}
