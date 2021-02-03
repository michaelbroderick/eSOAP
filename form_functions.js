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

function toggleYesNo(radio1, radio2, datetime) {

    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const DT = document.querySelector(datetime);

    radY.addEventListener('change', () => { DT.classList.toggle('input_visibility') })
    radN.addEventListener('change', () => { DT.classList.toggle('input_visibility') })

};

function toggleYesNoND(radio1, radio2, radio3, datetime) {
    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const radND = document.querySelector(radio3);
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
    radND.addEventListener('click', toggleDT);

};


function toggleSelect(selectID, hiddenEl, vals) {
    const selectMenu = document.querySelector(selectID);
    const el = document.querySelector(hiddenEl)

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
// function checkDate(dateInput, container) {
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


function checkDate() {
    const dts = document.querySelectorAll("[type='datetime-local']");
    const currDate = new Date();
    for (let dt of dts) {
        dt.addEventListener("change", () => {
            let dateIP = new Date(dt.value);
            if (dateIP > currDate) {
                dt.style.backgroundColor = '#f99'
                dt.style.borderColor = '#ff0e0e'
                dt.style.borderWidth = '3px'
                // could set some value as false
                if (!dt.parentElement.querySelector('span')) {
                    console.log("Here")
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
        })
    }
}