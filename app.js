async function fetchTimestamp() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/your-username/your-repo/main/timestamp.txt'
    );
    const timestamp = await response.text();
    document.getElementById(
      'timestamp'
    ).innerText = `Last updated: ${timestamp}`;
  } catch (error) {
    console.error('Error fetching timestamp:', error);
    document.getElementById('timestamp').innerText =
      'Failed to load timestamp.';
  }
}

fetchTimestamp();
