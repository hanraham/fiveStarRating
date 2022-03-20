function docReady(fn) {    
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick        
        setTimeout(fn, 1);    
    } 
    else {  document.addEventListener("DOMContentLoaded", fn);  }
}

docReady(function () {
    // DOM is loaded and ready for manipulation here

    const fiveStars = document.querySelectorAll(".starReview span");

    fiveStars.forEach((singleStar, starIndex) => {

        // Highlights clicked star and previous stars
        singleStar.addEventListener("click", () => {
            fiveStars.forEach((starLoop, secondIndex) => {
                if (secondIndex <= starIndex) {
                    fiveStars[secondIndex].classList.add("checked");
                }
                else {
                    fiveStars[secondIndex].classList.remove("checked");
                }
            });
        });

        /*
        // Hover effect with javascript
        singleStar.addEventListener('mouseenter', () => {
            fiveStars.forEach((addHover, hoverIndex) => {
                if (hoverIndex <= starIndex) {
                    fiveStars[hoverIndex].classList.add("hovered");
                }
            });
        });
        singleStar.addEventListener('mouseleave', () => {
            fiveStars.forEach( (dummyStar, rmvHoverIndex) => {
                fiveStars[rmvHoverIndex].classList.remove("hovered");
            });
        });
        */

    });
});