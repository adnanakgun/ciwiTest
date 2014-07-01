
var galleryData;

function getData(data){
	galleryData = data;
}

$(document).ready(function() {	

	var thumbnailList = '';
	var selectedIndex;
	var containerWidth = $('#thumbnailContainer').width();

	for(var item in galleryData.items){
		thumbnailList += '<li><img src="' + galleryData.items[item].thumbnail + '"/></li>'
	}

	$('#imageGallery ul').html(thumbnailList);

	$('#imageGallery ul li').click(function(){
		$(this).siblings().removeClass('active');		
		$(this).addClass('active');
		var itemIndex = $(this).index();
		$('#textGallery').html(galleryData.items[itemIndex].text);
		$('#selectedImage').attr('src', galleryData.items[itemIndex].image);
		selectedIndex = itemIndex;

		var selectedItemDistanceLeft = (selectedIndex+1)*80;

		if(selectedItemDistanceLeft >= containerWidth){
			//scroll +80
			$('#thumbnailContainer').scrollLeft(selectedItemDistanceLeft-80);
		}else{
			$('#thumbnailContainer').scrollLeft(0);			
		}

	});

	$('.arrow.left').click(function(event){
		event.preventDefault();
		$('#imageGallery ul li').eq(selectedIndex).prev().click();
	});

	$('.arrow.right').click(function(event){
		event.preventDefault();
		$('#imageGallery ul li').eq(selectedIndex).next().click();
	});

	$('#imageGallery ul li').eq(0).click();

	$('#thumbnailContainer').perfectScrollbar();
});