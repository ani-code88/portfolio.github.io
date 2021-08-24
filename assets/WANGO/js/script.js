      $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
      });

// ! All Pages Main Scrollspy

const scrollspyLinks = document.querySelectorAll(".scrollspy-link");
const scrollspySections = document.querySelectorAll(".scrollspy-section");
const scrollspyIndicator = document.querySelector(".scrollspy-indicator");

scrollspyLinks.forEach((link) => {
  link.onclick = () => {
    scrollspySections.forEach((section) => {
      if (link.dataset.target === section.id) {
        document.documentElement.scrollTop = section.offsetTop;
      }
    });
  };
});

window.onscroll = () => wango_Scrollspy();
window.onload = () => wango_Scrollspy();
window.onresize = () => wango_Scrollspy();

const wango_Scrollspy = () => {
  const pageYPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
    scrollspySections.forEach((section) => {
    const sectionYPosition = section.offsetTop;

    if (pageYPosition > sectionYPosition - 60) {
      scrollspyLinks.forEach((link) => {
        if (link.dataset.target === section.id) {
          scrollspyIndicator.style.left = `${link.offsetLeft}px`;
          scrollspyIndicator.style.width = `${link.offsetWidth}px`;
        }
      });
    }
  });
};
wango_Scrollspy();


// Industries Page Tab
function openTab(evt, tabTitle) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabTitle).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
if(document.getElementById("defaultOpen")){
  document.getElementById("defaultOpen").click();
}
