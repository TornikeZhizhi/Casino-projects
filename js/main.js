$(document).ready(function () {
	// body...

function getFirstPixelColor(img) {
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 2;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return [...ctx.getImageData(1, 1, 1, 1).data];
}

async function getBackgroundColor(img){
    return new Promise((resolve, reject) => {
        if(!img.complete || img.naturalWidth === 0) {
            img.addEventListener('load', () => resolve(img));
        } else {
            resolve(img);
        }
    }).then(getFirstPixelColor);
}

document.querySelectorAll('.js-back').forEach(async (target) => {
    const img = target.querySelector('img');
    const c = await getBackgroundColor(img);
    c[3] /= 255;
    target.style.backgroundColor = `rgba(${c.join(',')})`;
});




if ($(".casino_inner_header").length > 0) {

  $("body").css("overflow-x","hidden");
}




	$(document).click(function(argument) {
		
		$(".language_body").slideUp(250);
		$(".language_caret").removeClass("rotate");

	})


	$(".language_title").click(function(e){
		e.stopPropagation()
		$(".language_body").slideToggle(250);
		$(".language_caret").toggleClass("rotate");

	})

	$(".language_body").click(function(e){
		e.stopPropagation()

	})


	$(".rev_stars .star-ratings-css").each(function(index){
    var dataRating = $(this).find(".star-ratings-css-top").attr("data-rating") / 5 * 100 + "%"
    $(this).find(".star-ratings-css-top").css("width",dataRating)

  })



	$(".contact_form input, .contact_form textarea").focus(function(){

		$(".label_img").removeClass("active")
		$(this).next().next().addClass("active");
    $(".contact_form input").removeClass("shadow");
    $(".contact_form textarea").removeClass("shadow");
    $(this).addClass("shadow");
	})

	$(".contact_form input").blur(function(){
		$(".label_img").removeClass("active");

      $(".contact_form input").removeClass("shadow");
    $(".contact_form textarea").removeClass("shadow");
    $(".contact_form input").removeClass("shadow")


	})


	$(".review_container input, .review_container textarea").focus(function(){

		$(".label_img").removeClass("active")
		$(this).next().next().addClass("active")

    $(".review_container input").removeClass("border")
    $(".review_container textarea").removeClass("border")
    $(this).addClass("border")

	})
	$(".review_container input").blur(function(){
		$(".label_img").removeClass("active")

    $(".review_container input").removeClass("border")
    $(".review_container textarea").removeClass("border")

	})



	$('.casino_slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  centerPadding: '50px',
	  dots: true,


        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1,
            }
        },
    
        {
            breakpoint: 310,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1
            }
        }

  ]
});




var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  speed: 1000,

  autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: {
      
          992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },

          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        },
});


swiper.on('activeIndexChange', function() {
  $(".swiper_progress").removeClass("test1");
  setTimeout(() => {
    $(".swiper_progress").addClass("test1");
  }, 10)
});



$(".nav-container").click(function(){

	$(".header .header_right").slideToggle();
  $('body').toggleClass("overflow")
})





$(".scrop_top").click(function(event) {
      
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });



$(".payment_header .toggler").click(function() {
  
  $(this).parent().toggleClass('toggle')

})



});