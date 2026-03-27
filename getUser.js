const userContainer=document.getElementById("user-container");


fetch(`https://api.github.com/users`)
.then(response => response.json())
.then(users => {
    users.forEach(user => {
         const userInfo=document.createElement('div');
    userInfo.className='user-info';
    userInfo.innerHTML=`
        <img class="user-img" src="${user.avatar_url}">
                <h6 class="user-name">${user.login}</h6>
                <p class="user-profile-link"><a href="${user.html_url}">view profile</a></p>

    `;
    userContainer.append(userInfo);
    });

   
})
.catch(error => {
    alert(error);
});
