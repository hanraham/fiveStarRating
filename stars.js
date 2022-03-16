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
    
    document.querySelector("#star0").onclick = function() { ratingStars(0); };
    document.querySelector("#star1").onclick = function() { ratingStars(1); };
    document.querySelector("#star2").onclick = function() { ratingStars(2); };
    document.querySelector("#star3").onclick = function() { ratingStars(3); };
    document.querySelector("#star4").onclick = function() { ratingStars(4); };

    function ratingStars (numberStars) {
        for (let step = 0; step <= 4; step++){
            let stringTest = "#star" + step;
            
            if (step <= numberStars){ 
                document.querySelector(stringTest).classList.add("checked");
            }
            else {
                document.querySelector(stringTest).classList.remove("checked");
            }
        }
    };
});