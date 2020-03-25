/* opening and closing of invisible content page: Who Am I */
function openAbout() {
  document.getElementById("page-about").style.display = "block";
  document.getElementById("navigation").style.display = "none";
  document.getElementById("header-logo").style.display = "none";
  document.getElementById("footer").style.display = "none";
}
function closeAbout() {
  document.getElementById("page-about").style.display = "none";
  document.getElementById("navigation").style.display = "block";
  document.getElementById("header-logo").style.display = "block";
  document.getElementById("footer").style.display = "block";
}

/* opening and closing of invisible content page: Mission Statement */
function openMission() {
  document.getElementById("page-mission").style.display = "block";
  document.getElementById("navigation").style.display = "none";
  document.getElementById("header-logo").style.display = "none";
    document.getElementById("footer").style.display = "none";
}
function closeMission() {
  document.getElementById("page-mission").style.display = "none";
  document.getElementById("navigation").style.display = "block";
  document.getElementById("header-logo").style.display = "block";
  document.getElementById("footer").style.display = "block";
}

/* opening and closing of invisible content page: Contact Information */
function openContact() {
  document.getElementById("page-contact").style.display = "block";
  document.getElementById("navigation").style.display = "none";
  document.getElementById("header-logo").style.display = "none";
    document.getElementById("footer").style.display = "none";
}
function closeContact() {
  document.getElementById("page-contact").style.display = "none";
  document.getElementById("navigation").style.display = "block";
  document.getElementById("header-logo").style.display = "block";
  document.getElementById("footer").style.display = "block";
}
