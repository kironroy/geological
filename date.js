function renderDate() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    document.getElementById('date-container').innerText = formattedDate;
}

// Example usage: Call this function after the DOM has loaded
document.addEventListener('DOMContentLoaded', (event) => {
    renderDate();
});