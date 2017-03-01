$(function(){

    //start with `NewContent` being the HTML to add to the page
    var NewContent='<div class="added">Added</div>'
    $(".add").click(function(){

        //check if `NewContent` is empty or not
        if (NewContent != '') {
            $("#spin").after(NewContent);

            //now that `NewContent` has been added to the DOM, reset it's value to an empty string so this doesn't happen again
            NewContent = '';
        } else {

            //this is not the first click, so just toggle the appearance of the element that has already been added to the DOM
            //since we injected the element just after the `#spin` element we can select it relatively to that element by using `.next()`
            $('#spin').next().toggle();
        }
    });
});