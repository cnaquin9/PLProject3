$(document).ready(function() { //when page is loaded call the function
    $("#jdom a").click(function(){ //when <a> tag is clicked on call the function
        $("div").toggleClass("hide"); //use toggleclass to add or remove the hide class from a div element
        if ($("#jdom a").previousElementSibling.attr("class") != "hide") { //if the element before the link is part of the hide class,
            $("#jdom a").innerHTML = "Show Less"; //change the link to show less
        }
        else {
            $("#jdom a").innerHTML = "Show More" //if not keep it as show more

        }
    }); // end click
}); // end ready
