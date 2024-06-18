let allProjectButtons = document.querySelectorAll("div.project");


window.addEventListener("DOMContentLoaded", () => {
    // transformWidth();
    putExploreSVG();
    showOrHideContent();
});



let transformWidth = function () {
    allProjectButtons.forEach(element => {

        element.addEventListener("click", () => {
            element.style.width = "100%";
        })
    })
}


let showOrHideContent = function () {
    allProjectButtons.forEach(element => {

        element.addEventListener("click", () => {
            let projectContent = element.lastElementChild;

            if (projectContent.style.display === "block") {

                projectContent.style.display = "none";

            } else {

                projectContent.style.display = "block";

                element.scrollIntoView();
            }
        })
    });
}


let putExploreSVG = function () {
    allProjectButtons.forEach(element => {

        // Adiciona icone de "Código" e Ícone no botão
        element.lastElementChild.lastElementChild.getElementsByTagName("a")[0].innerHTML += "<p>Código</p> <i class='bx bx-code-alt'></i>"
    })
}