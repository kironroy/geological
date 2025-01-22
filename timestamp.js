const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});


console.log(currentDate);

document.getElementById('timestamp-js').innerText = `Updated on ${currentDate}.`;