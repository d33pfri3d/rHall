// Uncompressed version of the extension
// Below code changes all images within a webpage with the images given in the ryanImages array
// This code is free to use by everyone
// The project uses JQuery 1.8.0.min

// The array containing the images, simply create a new line and put in the URL to add a new image
var ryanImages = [
"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10612747_10154779737655437_1872860319158058176_n.jpg",
"https://media.licdn.com/media/p/3/005/04b/2ea/35df726.jpg",
"http://distilleryimage6.ak.instagram.com/85f532be3caf11e2a4da22000a1f9253_7.jpg",
"http://distilleryimage10.ak.instagram.com/b508e08c368811e2854522000a1f9e45_7.jpg",
"http://distilleryimage3.ak.instagram.com/7bc352522fc711e2ada322000a1fbcdb_7.jpg",
"https://scontent-a.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10635935_10154646382215296_4683102967507645954_n.jpg?oh=df013c1489dfb0c1e752fd5e17771fd7&oe=54E62AE6",
"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/10583065_10154561219310296_3220549719853389198_o.jpg",
"https://scontent-a.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10563152_10152332892278301_9039580075042656028_n.jpg?oh=a58c3920b6e1d36e0bbc9c5452fc17bc&oe=54B7C129",
"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/419824_10152597467705296_907083009_n.jpg?oh=f43aeaa0cb81297abce772ff324cc393&oe=54EFBCEB&__gda__=1424880696_666e16ba30f3b8a4cc009e9ffadd79df",
"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/240895_10150595452350296_5040754_o.jpg",
"http://www.nice.agency/sites/default/files/article_images/Ryan_New_v3.jpeg"
];

// The code that alters the images on the webpage
$(function(){
  // For each element in the webpage that is an img
  $.each($('img'), function(i,item) { 
    // Set the w variable
    var w = $(item).width();
    // Set the h variable
    var h = $(item).height();
    // Set the width and height
    $(item).css("width", w + "px").css("height", h + "px");
    // Change the src attribute to one in the ryanImages array
    $(item).attr("src", ryanImages[Math.floor(Math.random() * ryanImages.length)]);
  });
});