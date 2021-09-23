
//Add class on hover an el-nt
$(".main__content-NonActive").mouseover(function() {
    $(this).addClass('main__content-Active');
    $(this).css('opacity', '0');
});
$(".main__content-NonActive").mouseout(function() {
    $(this).removeClass('main__content-Active');
    $(this).css('opacity', '1');
});
window.addEventListener("scroll", MouseHover);
function MouseHover() {
    $(".main__content-NonActive").mouseover(function() {
        $(this).addClass('main__content-Active');
        $(this).css('opacity', '0');
    });
    $(".main__content-NonActive").mouseout(function() {
        $(this).removeClass('main__content-Active');
        $(this).css('opacity', '1');
    });

    // Открывает окно по нажатию на эл-нт
    $('.main__content-item').click(function() {
        window.location = $(this).data('target-page');
    });

    
  //Mouseover
  $('a').on("mouseover", function(){
    $('.cursor').css({'transform': 'scale(1)'});
  });
  $('.main__content-NonActive').on("mouseover", function(){
    $('.cursor').css({'transform': 'scale(1)'});
  });
  $('#selectField').on("mouseover", function(){
    $('.cursor').css({'transform': 'scale(1)'});
  });
  $('#selectField2').on("mouseover", function(){
    $('.cursor').css({'transform': 'scale(1)'});
  });
  $('li').on("mouseover", function(){
    $('.cursor').css({'transform': 'scale(1)'});
  });

  //Mouseleave
  $('a').on("mouseleave", function(){
    $('.cursor').css({'transform': 'scale(0)'});
  });
  $('.main__content-NonActive').on("mouseleave", function(){
    $('.cursor').css({'transform': 'scale(0)'});
  });
  $('#selectField').on("mouseleave", function(){
    $('.cursor').css({'transform': 'scale(0)'});
  });
  $('#selectField2').on("mouseleave", function(){
    $('.cursor').css({'transform': 'scale(0)'});
  });
  $('li').on("mouseleave", function(){
    $('.cursor').css({'transform': 'scale(0)'});
  });
};

// Custom cursor on website
document.addEventListener("mousemove", function(event) {
    const x = event.pageX - 10;
    const y = event.pageY - 10;
    const cursor = document.querySelector("#cursor");
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });

