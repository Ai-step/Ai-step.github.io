$(document).ready(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 550) { 
              $('.navbar').addClass('solid');
              $('.back-to-top').addClass('visible'); 
          } else {
              $('.navbar').removeClass('solid');
              $('.back-to-top').removeClass('visible');  
          }

        });


        // Scrolling effect for Arrow icons
        $("#scrollIcon").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#about"), 1000);
        });
        $("#nav-about").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#about"), 1000);
        });
        $("#nav-profile").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#profile"), 1000);
        });
        $("#nav-Performance").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#Performance"), 1000);
        });
        $(".navbar-brand").click(function(e) {
            e.preventDefault();
            $.scrollTo(0, 1000);
        });
          
      });