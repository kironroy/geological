async function fetchCommitDate() {
  const response = await fetch(
    'https://api.github.com/repos/kironroy/geological/commits',
    {
      headers: {
        Authorization: 'YOUR_GITHUB_TOKEN',
      },
    }
  );
  const commits = await response.json();
  const latestCommit = commits[0];
  const commitDate = new Date(latestCommit.commit.committer.date);
  const options = {
    hour: 'numeric', // Hour (e.g., '2 PM')
    minute: 'numeric', // Minute (e.g., '30')
    second: 'numeric', // Second (e.g., '45')
    weekday: 'long', // Full weekday name (e.g., 'Friday')
    month: 'short', // Abbreviated month name (e.g., 'Dec')
    day: 'numeric', // Day of the month (e.g., '13')
    year: 'numeric', // Four-digit year (e.g., '2024')
  };
  let formattedDate2 = commitDate.toLocaleDateString('en-US', options);

  document.getElementById(
    'commit-date'
  ).innerText = `Last updated ${formattedDate2}`; //`Last commit date: ${commitDate.toDateString()} ${commitDate.toLocaleTimeString()}`;
}

fetchCommitDate();
