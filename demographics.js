const otherComplaintBtn = document.querySelector('#presentingCheckR4_9');
const otherComplaintBox = document.querySelector('#other_complaint_area');
const toggleOther = () => {
    otherComplaintBox.classList.toggle('input_visibility');
}
otherComplaintBtn.addEventListener('click', toggleOther);

checkDate()