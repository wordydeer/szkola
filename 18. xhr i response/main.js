//==============================================================================//
//                               PLANETY STAR WARS                              //
//==============================================================================//

const planets = document.querySelector(".planets");

const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.responseType = "json";
xhr.open("GET", "https://swapi.co/api/planets/", true);
xhr.send();
xhr.addEventListener("load", function(){
    if(xhr.status === 200){
        // console.log(xhr.response);
        planets.innerHTML = xhr.response.results[1].name;
    }
});

function timeout(){
    console.log(xhr.response);
};

setTimeout(timeout, 500);