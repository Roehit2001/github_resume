// Get the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm');

// Listen for submissions on GitHub username input form
gitHubForm.addEventListener('submit', (e) => {
    
    // Prevent default form submission action
    e.preventDefault();

    // Get the GitHub username input field on the DOM
    let usernameInput = document.getElementById('usernameInput');

    // Get the value of the GitHub username input field
    let gitHubUsername = usernameInput.value;          

    // Run GitHub API function, passing in the GitHub username
    requestUserRepos(gitHubUsername);

})


function requestUserRepos(username){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}`;
    
    // const url1 = `https://api.github.com/users/${username}/repos`;
   
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    //  xhr.open('GET', url1, true);
    
    // When request is received
    // Process it here
    xhr.onload = function () {
    
        // Parse API data into JSON
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
        //Loop over each object in data array
        // for (let i in data) {

        //     // Get the ul with id of of userRepos
        //     let ul = document.getElementById('userRepos');
    
        //     // Create variable that will create li's to be added to ul
        //     let li = document.createElement('li');
            
        //     // Add Bootstrap list item class to each li
        //     li.classList.add('list-group-item')
        
        //     // Create the html markup for each li
        //     li.innerHTML = (`
        //         <p><strong>Repo:</strong> ${data[i].name}</p>
        //         <p><strong>Description:</strong> ${data[i].description}</p>
        //         <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
        //     `);
            
        //     // Append each li to the ul
        //     ul.appendChild(li);
        
        // }

    }
    
    // Send the request to the server
    xhr.send();
    
}