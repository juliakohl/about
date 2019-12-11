function toggleShow(element) {
    element.nextElementSibling.classList.toggle("show");
  }
  
  window.onscroll = function () { scrollFunction() };
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.display = "block";
      document.getElementById("nav-list").style.display = "block";
  
    } else {
      document.getElementById("navbar").style.display = "none";
      document.getElementById("nav-list").style.display = "none";
    }
  }
  
  
  window.addEventListener('resize', function (){
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth <= 800) {
      document.getElementById("top-cta").innerHTML = "Meine Projekte";
    } else {
      document.getElementById("top-cta").innerHTML = "Hier gehts zu meinen Projekten";
    }
  });
  
  function adjustButton(){
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth <= 800) {
      document.getElementById("top-cta").innerHTML = "Meine Projekte";
    } else {
      document.getElementById("top-cta").innerHTML = "Hier gehts zu meinen Projekten";
    }
  }
  
  adjustButton();
  
  function toggleNav(){
    if(document.getElementById("navbar").classList.contains("active")){
      document.getElementById("navbar").classList.remove("active");
    }else{
      document.getElementById("navbar").classList.add("active");
    }
  }
  
  function toggleDisplay(element){
    if(element.style.display === "none"){
      element.style.display = "initial";
    }else{
      element.style.display = "none";
    }
  }