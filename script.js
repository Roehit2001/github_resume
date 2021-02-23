const gitHubForm = document.getElementById('gitHubForm');
gitHubForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let usernameInput = document.getElementById('usernameInput');
    let gitHubUsername = usernameInput.value;          
    requestUserRepos(gitHubUsername);
})
function requestUserRepos(username){
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}`;
    xhr.open('GET', url, true);
    xhr.onload = function () {
        const data = JSON.parse(this.response);
        let name = document.getElementById('name');
        name.innerHTML = (`<p>${data.name}</p>`);
        let dp =document.getElementById('dp');
        dp.innerHTML = (`<img class="justify-content-center align-self-center" style="align-self: flex-end; width: 100px; height: 100px;" src="${data.avatar_url}">`);
        let github = document.getElementById('github');
        let bio = document.getElementById('bio');
        bio.innerHTML = (`<p>${data.bio}</p>`);
        github.innerHTML = (`<a style="text-decoration: none;" href="${data.html_url}">View github profile</a>`);
        let repos = document.getElementById('repos');
        repos.innerHTML = (`<p>Public Repos: ${data.public_repos}</p>`);
        let org = document.getElementById('org');
        org.innerHTML = (`<p>Public Repos: ${data.company}</p>`);
        let blog = document.getElementById('blog');
        blog.innerHTML = (`<a style="text-decoration: none;" href="${data.blog}">Blog</a>`);
        let location = document.getElementById('location');
        location.innerHTML = (`<p>Location: ${data.location}</p>`);
        let followers = document.getElementById('followers');
        followers.innerHTML = (`<p>Followers: ${data.followers}</p>`);
         }
    xhr.send();
    
}