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

})