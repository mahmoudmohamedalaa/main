function editRow(button) {
    // Get the row that contains the button
    const row = button.parentNode.parentNode;
    
    // Get the editable cells in the row
    const cells = row.querySelectorAll('.editable');
    
    // Convert cells to input fields
    cells.forEach((cell, index) => {
        const input = document.createElement('input');
        input.value = cell.textContent;
        cell.textContent = ''; // Clear the cell
        cell.appendChild(input); // Append the input
    });

    // Change button text to "Save"
    button.textContent = 'Save';
    button.setAttribute('onclick', 'saveRow(this)');
}

function saveRow(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll('.editable');

    // Update cells with input values
    cells.forEach(cell => {
        const input = cell.querySelector('input');
        if (input) {
            cell.textContent = input.value; // Set cell text to input value
        }
    });

    // Change button text back to "Edit"
    button.textContent = 'Edit'
    button.setAttribute('onclick', 'editRow(this)');
}
