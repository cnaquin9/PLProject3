$(document).ready(function() { //function called when page is ready
    $("#image_list a").each(function () { //goes through each image in list
        var imageURL = $(this).attr("href"); //gets the URL for each image
        var imageTitle = $(this).attr("title"); //gets the caption for each image
    });

    $("#image_list a").click(function (evt) { //goes to the image when you click the word
        $("#caption").innerHTML = $(this).imageTitle; //sets the caption to the title of each image
        $("#gallery").innerHTML = $(this).imageURL; //sets the url to the url of each image

        evt.preventDefault(); //prevents default method
    }); //end click

    $("li:first-child a").focus(); //changes focus to next tab
}); //end ready