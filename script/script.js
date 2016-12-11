$(document).ready(function(){

  // SLIDE SECTION ================
  $('.slide-section').click(function(e){
    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    },1000);
  });

  // ANIMASI LAMPUS ===============
  $('#a7').css('width' , '15%');
  $('#a7').css('opacity' , '1');

  $('#a1').css('width' , '34%');
  $('#a1').css('opacity' , '1');

  $('#a3').css('left' , '37%');
  $('#a3').css('opacity' , '1');

  $('#a5').css('left' , '37%');
  $('#a5').css('opacity' , '1');

  $('#a4').css('opacity' , '1');

  $('#a2').css('top' , '25%');
  $('#a2').css('opacity' , '1');
  // end ANIMASI LAMPU ============


  // RESPONSIVE ANIMASI ===========
  //ternyata harus yg lebih kecil dulu diatas
  // if ($(window).width() < 440){
  //   alert('tes');
  // }

  if ($(window).width() < 330) {
    $('#a2').css('top' , '20%');
    $('#a2').css('opacity' , '1');

    $('#a7').css('top' , '57%');
    $('#a7').css('opacity' , '1');
  }else if ($(window).width() < 380) {
    $('#a7').css('top' , '64%');
    $('#a7').css('opacity' , '1');
  }else if ($(window).width() < 440) {
    // alert('44');
    // $('#full-logo').css('opacity','0');
    $('#a2').css('top' , '23%');
    $('#a2').css('opacity' , '1');

    $('#a7').css('top' , '73%');
    $('#a7').css('opacity' , '1');

  }else if ($(window).width() < 770) {
    $('#a2').css('top' , '15%');
    $('#a2').css('opacity' , '1');
    // alert('77');
  }


  // end RESPONSIVE ANIMASI ===========

  $(window).scroll(function(){
          //.css('height','50px')
          //menentukan scrollup
          var y = $(this).scrollTop();
          if(y >350){
            $('.description-holder .penutup-desc').css('left','100%');
            $('.description-holder .penutup-desc').css('width','0%');
            // $('.description-holder .penutup-desc').css('opacity','0');

            $('.slash').css('left','30%');
            $('.slash').css('opacity','1');

            $('.img-holder img').css('left','1%');
            $('#item').css('opacity','0');

            $('#btn-rocket').css('opacity','0.8');
            $('#btn-rocket').css('transform','scale(1)');

          }


          if (y>690) {
            // alert("hallo");
            $('#html').css('left','3.5%');
            $('#js').css('left','-3.5%');

            $('#js , #html').css('opacity','1');
          }

          if (y>980) {
            // alert("halo");
            $('#php-capt').css('margin-top','28%');
            $('#php-capt').css('opacity','1');

            $('#sql-server').css('left','62%');
            $('#sql-server').css('opacity','1');

            $('#mysql').css('left','16%');
            $('#mysql').css('opacity','1');
          }
        });

    // CARD
    $('#1 .card').mouseenter(function(){
      $('#1 .hover-card').css('background-color','rgba(0, 0, 0, 0.5)');
      $('#1 .btn-card').css('opacity','1');

      $('.btn-card').mouseenter(function(){
        $('.btn-card').css('width','60%');
      });
    });

//

    $('#2 .card').mouseenter(function(){
      $('#2 .hover-card').css('background-color','rgba(0, 0, 0, 0.5)');
      $('#2 .btn-card').css('opacity','1');

      $('.btn-card').mouseenter(function(){
        $('.btn-card').css('width','60%');
      });
    });

//

    $('#3 .card').mouseenter(function(){
      $('#3 .hover-card').css('background-color','rgba(0, 0, 0, 0.5)');
      $('#3 .btn-card').css('opacity','1');

      $('.btn-card').mouseenter(function(){
        $('.btn-card').css('width','60%');
      });
    });

    $('.card').mouseleave(function(){
      $('.hover-card').css('background-color','rgba(0, 0, 0, 0)');
      $('.btn-card').css('opacity','0');

      $('.btn-card').mouseleave(function(){
        $('.btn-card').css('width','50%');
      });
    });

//rocket

  });
