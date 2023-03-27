let prevScrollPos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("myHeader").style.top = "0";
    } else {
      document.getElementById("myHeader").style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
  }
 