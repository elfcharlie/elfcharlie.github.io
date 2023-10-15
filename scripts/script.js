document.addEventListener('DOMContentLoaded', function () {
    // GitHub username
    const username = 'elfcharlie';

    // GitHub API endpoint for user repositories
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    // Fetch repositories from GitHub API
    fetch(apiUrl)
        .then(response => response.json())
        .then(repos => {
            const repoList = document.getElementById('repo-list');

            repos.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                repoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching GitHub repositories:', error));
});
