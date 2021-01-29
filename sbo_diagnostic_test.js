
function toggleYesNo(radio1, radio2, datetime) {

    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const DT = document.querySelector(datetime);


    const toggleDT = () => {
        if (radY.checked) {
            DT.classList.remove('input_visibility')
        } else {
            DT.classList.add('input_visibility')
        }

    };

    radY.addEventListener('click', toggleDT);
    radN.addEventListener('click', toggleDT);

};

function checkYesNo(radio1, radio2, datetime) {

    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const DT = document.querySelector(datetime);

    if (radY.checked) {
        DT.classList.remove('input_visibility')
    };
};

toggleYesNo("#abdoXrRadio1", "#abdoXrRadio2", "#abdoDT");
toggleYesNo("#ctRadio1", "#ctRadio2", "#ctDT");
toggleYesNo("#contrastRadio1", "#contrastRadio2", "#contrastDT");


checkYesNo("#abdoXrRadio1", "#abdoXrRadio2", "#abdoDT");







