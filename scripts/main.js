var a = document.querySelector("img");

var arr = [
"https://sun9-35.userapi.com/impg/JaJ-Xgsq2VVM45aUBKgYcnfriOisTiOB1KJjbg/NNt6ZLmvAqM.jpg?size=1620x2160&quality=95&sign=ded7c76d3688eb6564159f3c07dff4f5&type=album", 
"https://sun9-13.userapi.com/impg/5B8_rExAbxrkJuSv8WwU2JiSGBc-EYiVlfPgtw/_dv4CJBbpSs.jpg?size=1404x1874&quality=95&sign=5ad809d31282c60d5da1248cb3d799dd&type=album", 
"https://sun4-17.userapi.com/impg/Ayywjg-hGkO3ch-05INrhn9aVfcEkzggNIiMgg/9w-rA0bTt6s.jpg?size=1728x2160&quality=95&sign=8d6ce5ccdc3b3084bc987ffe8bb17793&type=album",
"https://sun4-20.userapi.com/impg/RewwDxnvw3Q0zFjqbVWsZgrLbsljI4TRo33q1Q/IwvfjXq3qNQ.jpg?size=1866x2160&quality=96&sign=0193acaa3824f566632b73865f4ffeed&type=album",
"https://sun4-22.userapi.com/impg/JAXVhSatrX2PbJ8hCQFmbYJmTscYowsHnpV6Bw/VIwu_mguqts.jpg?size=1280x1280&quality=96&sign=a8b72d2f54bb1999421fc735f86ac1a4&type=album",
];

a.onclick = function () {

  var x = a.getAttribute("src");

  if (x === "https://sun4-21.userapi.com/impg/bPKgJj2Ukpk-aft10g35GlYJ94vNykwPNjVASg/XooD2Tn9RJ4.jpg?size=875x1280&quality=96&sign=0cfec05f1ea7857658fd3d66c4d3d486&type=album")
  {
  a.setAttribute("src", "https://sun4-20.userapi.com/impg/RewwDxnvw3Q0zFjqbVWsZgrLbsljI4TRo33q1Q/IwvfjXq3qNQ.jpg?size=1866x2160&quality=96&sign=0193acaa3824f566632b73865f4ffeed&type=album");
  }
};
