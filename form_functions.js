// // Old yes/no toggle function
// function toggleYesNo(radio1, radio2, datetime) {
//     const radY = document.querySelector(radio1);
//     const radN = document.querySelector(radio2);
//     const DT = document.querySelector(datetime);


//     const toggleDT = () => {
//         if (radY.checked) {
//             DT.classList.remove('input_visibility')
//         } else {
//             DT.classList.add('input_visibility')
//         }

//     };

//     radY.addEventListener('click', toggleDT);
//     radN.addEventListener('click', toggleDT);

// };

function checkRadio(condition, Div) {
    if (condition) {
        Div.classList.remove("input_visibility")
    }
}

function toggleYesNo(radio1, radio2, datetime) {

    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const DT = document.querySelector(datetime);


    checkRadio(radY.checked, DT)

    radY.addEventListener('change', () => { DT.classList.toggle('input_visibility') })
    radN.addEventListener('change', () => { DT.classList.toggle('input_visibility') })

};

function toggleYesNoND(radio1, radio2, radio3, datetime) {
    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const radND = document.querySelector(radio3);
    const DT = document.querySelector(datetime);

    checkRadio(radY.checked, DT)

    const toggleDT = () => {
        if (radY.checked) {
            DT.classList.remove('input_visibility')
        } else {
            DT.classList.add('input_visibility')
        }

    };

    radY.addEventListener('click', toggleDT);
    radN.addEventListener('click', toggleDT);
    radND.addEventListener('click', toggleDT);

};


function toggleSelect(selectID, hiddenEl, vals) {
    const selectMenu = document.querySelector(selectID);
    const el = document.querySelector(hiddenEl)

    checkRadio(vals.includes(selectMenu.value), el)

    selectMenu.addEventListener('change', () => {
        if (vals.includes(selectMenu.value)) {
            el.classList.remove("input_visibility")
        }
        else {
            el.classList.add("input_visibility")
        }
    })

}


function checkYesNo(radio1, radio2, datetime) {

    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const DT = document.querySelector(datetime);

    if (radY.checked) {
        DT.classList.remove('input_visibility')
    };
};



// Old check date function
// function addDateCheck(dateInput, container) {
//     const dt = document.querySelector(dateInput);
//     const currDate = new Date();

//     dt.addEventListener("change", () => {
//         const dateIP = new Date(dt.value);
//         if (dateIP > currDate) {
//             dt.style.backgroundColor = '#f99'
//             dt.style.borderColor = '#ff0e0e'
//             dt.style.borderWidth = '3px'
//             // could set some value as false
//             if (!document.querySelector(`${container} span`)) {
//                 const warningMsg = document.createElement('span');
//                 warningMsg.innerText = "You have entered a date in the future"
//                 // warningMsg.style.fontSize = '1.1em'
//                 // warningMsg.style.margin = '0.5em';
//                 warningMsg.style.color = '#ff0e0e';

//                 document.querySelector(container).append(warningMsg)
//             }
//         }
//         else {
//             dt.style.backgroundColor = 'white'
//             dt.style.borderColor = ''
//             dt.style.borderWidth = ''
//             try {
//                 document.querySelector(`${container} span`).remove()
//             } catch { }

//         }
//     })
// }

function checkDate(dt, currDate) {
    //     const dts = document.querySelectorAll("[type='datetime-local'], [type='date']");
    let dateIP = new Date(dt.value);
    if (dateIP > currDate) {
        dt.style.backgroundColor = '#f99'
        dt.style.borderColor = '#ff0e0e'
        dt.style.borderWidth = '3px'
        // could set some value as false
        if (!dt.parentElement.querySelector('span')) {
            const warningMsg = document.createElement('span');
            warningMsg.innerText = "You have entered a date in the future"
            warningMsg.style.color = '#ff0e0e';
            dt.parentElement.append(warningMsg)
        }
    }
    else {
        dt.style.backgroundColor = 'white'
        dt.style.borderColor = ''
        dt.style.borderWidth = ''
        try {
            dt.parentElement.querySelector('span').remove()
        } catch {

        }
    }
}



function addDateCheck() {
    const dts = document.querySelectorAll("[type='datetime-local'], [type='date']");
    const currDate = new Date();
    for (let dt of dts) {
        checkDate(dt, currDate);
        dt.addEventListener('change', function () { checkDate(dt, currDate); }, false)
    }
}

function populate(input_class) {

    const all = document.querySelectorAll(input_class)
    for (let el of all) {
        if (localStorage.getItem(el.name)) {
            if (el.type === 'radio' | el.type === 'checkbox') {
                let checkArray = localStorage.getItem(el.name).split('&')
                if (checkArray.indexOf(el.value) > -1) {
                    el.checked = true;
                }
            } else {
                el.value = localStorage.getItem(el.name);
            }
        }
    }

}


function setListener(input_class) {

    const all = document.querySelectorAll(input_class)

    for (let el of all) {
        el.addEventListener('change', () => {
            if (el.type === "checkbox") {
                let currVal = (localStorage.getItem(el.name))
                editCheckboxValues(currVal, el)
            } else {
                localStorage.setItem(el.name, el.value);
            }
        })
    }
}

function editCheckboxValues(currVal, el) {
    // Something in there already. Check if we're removing?
    if (currVal) {
        let checkArray = currVal.split('&');
        // if the button is unchecked remove the value from the list
        if (el.checked) {
            checkArray.push(el.value)
        }
        // else add the value to the list
        else {
            checkArray.splice(checkArray.indexOf(el.value), 1)
        }
        // recomine the array into a string again and store
        localStorage.setItem(el.name, checkArray.join('&'))

    } else {//Nothing in there good to go
        localStorage.setItem(el.name, el.value)
    }
}
