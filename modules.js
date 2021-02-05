if (localStorage.getItem("moduleid")) {

    const module = document.querySelector(`#${localStorage.getItem("moduleid")}`);
    module.querySelector('a').classList.remove('disabled');
    module.classList.add('form_div_enabled');
    module.querySelector('img').classList = "hse_red";
    module.querySelector('h3').style.color = "#b4083a";

}

