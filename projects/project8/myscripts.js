
	logo1 = new Image
	logo2 = new Image

	printbutton1 = new Image
	printbutton2 = new Image

if (document.images) {
	logo1.src = "images/logo/RAPlogo.png"
	logo2.src = "images/logo/RAPlogoHover.png"
	
	printbutton1.src = "images/logo/printbutton.png"
    printbutton2.src = "images/logo/printbuttonhover.png"
}


		var imgArray = new Array(
			'DogTrick2Lg.jpg',
			'HuntingDogsLg.jpg',
			'KidsDogLg.jpg',
			'Pet1Lg.jpg'
			

		);


		var titleArray = new Array(
			'Dog doing Trick',
			'Two hunting Dogs',
			'Dog and two kids',
			'Woman and Dog'
			
		);
			
		var imgPath = "images/fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
// JavaScript Document