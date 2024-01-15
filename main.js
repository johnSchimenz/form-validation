// List of all document.querySelector's
const clickOpenDialogButton = document.querySelector('#open-dialog');
const selectDialogForm = document.querySelector('#modal');

clickOpenDialogButton.addEventListener('click', (event) => {

    // Prevents form from being submitted
    event.preventDefault();

    // DOM - Opens up modal from dialog element
    selectDialogForm.showModal();

    // DOM - Shows what happens when Cancel button is clicked
    const clickCancel = document.querySelector('#cancel');
    clickCancel.addEventListener('click', () => {
        selectDialogForm.close();
    })
})