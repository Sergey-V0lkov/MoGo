

$(document).ready(function() {





	$(".accordeon .noPading").hide().prev().click(function() {
		$(this).parents(".accordeon").find(".noPading").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");


});

	$(".accordion").on('click', function(){

$(".accordion").not(this).find('.deg').removeClass('active');
	$(this).find('.deg').toggleClass('active');


});




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



	$(".first-car .owl-carousel ").owlCarousel({

loop: true, //это что бы карусель бесконечно прокручивалась
items: 1, // этот параметр отвечает за количество отображаемых item (в данном случае один)
navText: ['',''],
  		// navElement: 'div',
  		nav: true,



  	});



	$('.owl-nav button.owl-next').wrap('<div class="marginleft"></div>');














// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





	  	  $('.popup').magnificPopup({
	  	type: 'inline' , //делаем тип вылезающего фото - image
	  	showCloseBtn : true,
	  	gallery : {enabled : true} //делаем галерею
	  	
	  });

	  	  	  $('.carusPop').magnificPopup({
	  	type: 'inline' , //делаем тип вылезающего фото - image
	  	showCloseBtn : true,
	  	gallery : {enabled : false} //делаем галерею
	  	
	  });



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


var header = $("#header"), // переменная header
    introHeight = $("#intro").innerHeight(), // в переменной высота блока с Id intro
    scrollOffset = $(window).scrollTop(); //сколько мы проскройлерили




// ____________ФИКСИРОВАНИЕ ШАПКИ_______________________________________

checkScroll(scrollOffset);//функция вызывается во время загрузки страницы 


    $(window).on("scroll", function(){ // во время скрола

scrollOffset = $(this).scrollTop(); //тут мы отслеживаем сколько мы уже проскройлерили (изменяется высота )

checkScroll(scrollOffset);

});




    function checkScroll(scrollOffset){
    	if( scrollOffset >= introHeight) {
    		header.addClass("fixed");
    	} else {
    		header.removeClass("fixed");
    	}
    };





// ____________ПЛАВНЫЙ СКРОЛЛ_______________________________________

$("[data-scroll]").on("click", function(event){
event.preventDefault(); //отменяем стандартное поведение ссылки

var $this = $(this), // сохряняем значение this что бы много раз не обращаться 
blockId = $this.data('scroll'),
blockOffset = $(blockId).offset().top;

$("#nav a").removeClass("active"); //все остальные ссылки удаляются
$this.addClass("active");//нажатая ссылка остается желтой


$("html, body").animate({
	scrollTop: blockOffset
    }, 1000); //тут можно менять 

});







$('.nav-toggle').on('click', function(){

$('#header').find('.left').toggleClass('active');
$('.shapka').toggleClass('active');
$('.nav-toggle').toggleClass('active');
});

});





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


