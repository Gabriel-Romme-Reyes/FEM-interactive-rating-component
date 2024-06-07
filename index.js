let elements = document.getElementsByTagName("li");
var chosen =0;
let button = document.getElementsByTagName("button");

for(var i = 0, len = elements.length; i < len; i++) {
    (function(index){
        elements[index].onclick = function () {
        

            if( elements[index].classList.contains("active") == false){
                for (var j = 0; j < elements.length; j++) {
                    elements[j].classList.remove("active");
                }
                elements[index].classList.add("active");
                chosen = index + 1;
                let selected = document.getElementsByClassName("ty-rating");
                selected[0].innerHTML = chosen;
            }
            else{
                elements[index].classList.remove("active");
                chosen = 0;
            }

        };

    })(i);

}

button[0].onclick = function(){

    if(chosen != 0){
        let rating = document.getElementsByClassName("rating");
        rating[0].style.display ="none";
        let ty = document.getElementsByClassName("TY");
        ty[0].style.display ="flex";
    }
    else{
        let alert = document.getElementsByClassName("alert");
        alert[0].style.display = "block";
    }

}