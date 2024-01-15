// List of all document.querySelector's
const clickOpenDialogButton = document.querySelector('#open-dialog');
const selectDialogForm = document.querySelector('#modal');

clickOpenDialogButton.addEventListener('click', (event) => {

    // Prevents form from being submitted
    event.preventDefault();

    // DOM - Opens up modal from dialog element
    selectDialogForm.showModal();

    // DOM - Functionality of Cancel button
    const clickCancel = document.querySelector('#cancel');
    clickCancel.addEventListener('click', () => {

        // DOM - Dialog modal closes
        selectDialogForm.close();
    })

    // DOM - Functionality of Submit button
    const clickSubmit = document.querySelector('#submit');
    clickSubmit.addEventListener('click', () => {
        
    })
})