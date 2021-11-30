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



	$(".contact_form input").focus(function(){

		$(".label_img").removeClass("active")
		$(this).next().next().addClass("active")
	})

	$(".contact_form input").blur(function(){
		$(".label_img").removeClass("active")


	})


	$(".review_container input").focus(function(){

		$(".label_img").removeClass("active")
		$(this).next().next().addClass("active")
	})
	$(".review_container input").blur(function(){
		$(".label_img").removeClass("active")


	})



	$('.casino_slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  centerPadding: '50px',
	  dots: true,
});



// 	$('.home_slider').slick({
// 	  infinite: true,
// 	  slidesToShow: 3,
// 	  slidesToScroll: 1,
// 	  centerPadding: '100px',
// 	  dots: false,
// 	   arrows : false,

// });


// $('.home_slider')
//   .on('init', () => {
//     $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
//     $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
//     $('.slick-slide[data-slick-index="1"]').addClass('gt1');
//     $('.slick-slide[data-slick-index="2"]').addClass('gt2');
// })
//   .slick({
//   centerMode: true,
//   centerPadding: 0,
//   slidesToShow: 3,
//    dots: false,
// 	 arrows : false,
// 	  autoplay: true,
//   autoplaySpeed: 2000,
// }).on('beforeChange', (event, slick, current, next) => {
//   $('.slick-slide.gt2').removeClass('gt2');
//   $('.slick-slide.gt1').removeClass('gt1');
//   $('.slick-slide.lt1').removeClass('lt1');
//   $('.slick-slide.lt2').removeClass('lt2');

//   const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
//   const lt1 = (current < next && current > 0) ? current : next - 1;
//   const gt1 = (current < next || next === 0) ? next + 1 : current;
//   const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

//   $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
//   $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
//   $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
//   $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

//   // Clone processing when moving from 5 to 0
//   if (current === 5 && next === 0) {
//     $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
//     $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
//     $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
//     $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
//   }

//   // Clone processing when moving from 0 to 5
//   if (current === 0 && next === 5) {
//     $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
//     $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
//     $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
//     $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
//   }



var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  speed: 800,

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
});


swiper.on('transitionStart', function() {
  $(".swiper_progress").removeClass("test");
  $(".swiper_progress").addClass("test");
});


});