
// Toteuuttaa openNavin (avaa navigaation kun siitä painetaan)
function openNav() {
  document.getElementById("Sidenavv").style.width = "250px";
}
// Sulkee valikon X kohdalta
function closeNav() {
  document.getElementById("Sidenavv").style.width = "0";
}


// ---------------------PROJEKTI!------------------------//
function myFunction() {
   var element = document.body;
   element.classList.toggle("nightmode");
}