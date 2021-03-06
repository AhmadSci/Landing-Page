//Setting global variables
const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");
const upBtn = document.querySelector("#upBtn");
const title = document.querySelector(".mainTitle")
const navBarBackground = document.querySelector(".navbar__menu");
const helloButton = document.querySelector(".helloButton");
const linkLogo = document.querySelector(".linkLogo");
let i;

//add sections to the navigation bar 
for (let i=1; i<=sections.length; i++){
    let tempLi = document.createElement("li");
    tempLi.innerHTML = "<a>Section "+i+"</a>";
    tempLi.setAttribute("class", "navbarsection");
    navBar.appendChild(tempLi);
}

//selecting all the sections after adding them to the ul in the nav bar
let navbarsections = document.querySelectorAll(".navbarsection");

//check if one of the sections in the nav bar has been clicked then scrolling to said section
for(let i = 0; i < navbarsections.length; i++)
{
    navbarsections[i].addEventListener('click', function scrollTo (){
        let toScrollTo = sections[i];
        toScrollTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
}

//back to the top button
upBtn.addEventListener("click", function(){
    title.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

//change the background color of the navbar and addingshadow on scrolling past the main title
window.addEventListener('scroll', function (e) {
    if ( document.documentElement.scrollTop > (title.getBoundingClientRect().bottom + 750)) {
            navBarBackground.style.setProperty('background-color', '#ffffff');
            navBarBackground.style.setProperty('box-shadow', '0px 3px 20px rgba(0, 0, 0, .2)')
        } else {
            navBarBackground.style.setProperty('background-color', '#8ca0ff');
            navBarBackground.style.setProperty('box-shadow', '0px 3px 20px rgba(0, 0, 0, 0)');
        }
});

//chaging the background color and color of text of the hello button on scrolling past the main title
window.addEventListener('scroll', function (e) {
    if ( document.documentElement.scrollTop > (title.getBoundingClientRect().bottom + 750)) {
            helloButton.style.setProperty('background-color', '#ffffff');
            helloButton.style.setProperty('color', '#1a1a1a');
        } else {
            helloButton.style.setProperty('background-color', '#8ca0ff');
            helloButton.style.setProperty('color', '#fef4f3');
        }
});

//changing the color of the ul elemnts on scrolling past the main title
for (let i = 0; i < navbarsections.length; i++){
    window.addEventListener('scroll', function (e) {
        if ( document.documentElement.scrollTop > (title.getBoundingClientRect().bottom + 750)) {
                navbarsections[i].style.setProperty('color', '#1a1a1a');
            } else {
                navbarsections[i].style.setProperty('color', '#fef4f3');
            }
    });
}

//inverts the logo up top in the navbar on scrolling past the main title
window.addEventListener('scroll', function (e) {
    if ( document.documentElement.scrollTop > (title.getBoundingClientRect().bottom + 750)) {
            linkLogo.style.setProperty('filter', 'none');
        } else {
            linkLogo.style.setProperty('filter', 'invert()');
        }
});

//add a line underneath the section currently in veiw 
for (let i = 0; i < navbarsections.length; i++){
    window.addEventListener('scroll', function (e) {
        //checks if current section is the first section
        if (sections[i]===sections[0]){ 
            if ( document.documentElement.scrollTop > (title.getBoundingClientRect().bottom + 750)) {
                navbarsections[i].classList.add('active');
            } else {
                navbarsections[i].classList.remove('active');
            }
        }else{
            if ( document.documentElement.scrollTop > (sections[i].getBoundingClientRect().bottom + sections[i].getBoundingClientRect().y + 700)) {
                navbarsections[i].classList.add('active');
                navbarsections[i-1].classList.remove('active');
            } else {
                navbarsections[i].classList.remove('active');
            }
        }
    });
}