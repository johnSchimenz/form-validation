// List of all document.querySelector's
const clickOpenDialogButton = document.querySelector('#open-dialog');
const selectDialogForm = document.querySelector('#modal');

clickOpenDialogButton.addEventListener('click', (event) => {

    // Prevents form from being submitted
    event.preventDefault();

    // Opens up modal from dialog element
    selectDialogForm.showModal();

})