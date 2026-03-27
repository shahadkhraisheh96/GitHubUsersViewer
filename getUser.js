const userContainer=document.getElementById("user-container");
const loadUsersBtn=document.getElementById("loading-btn");

loadUsersBtn.addEventListener("click",() => {
    if (userContainer.innerHTML.trim() !== "") {
        userContainer.innerHTML = ""; 
        loadUsersBtn.textContent="O Loading Users..."
    } else {
      
        fetchFirstTenUsers(`https://api.github.com/users`);
    }
});

//fetch all users
function fetchallUsers(link){  

fetch(link)
.then(response => response.json())
.then(users => {
 
    users.forEach(user => {
         const userInfo=document.createElement('div');
         userInfo.className='user-info';
          userInfo.innerHTML=`
        <img class="user-img" src="${user.avatar_url}">
                <h6 class="user-name">${user.login}</h6>
                <p class="user-profile-link"><a href="${user.html_url}"><i class="fa-solid fa-arrow-up-right-from-square"></i>view profile</a></p>

    `;
    userContainer.append(userInfo);
    });
    loadUsersBtn.textContent="Hide Users"
  
    
   
})
.catch(error => {
    alert(error);
});

}

//first Ten Users 
function fetchFirstTenUsers(link){   
fetch(link)
.then(response => response.json())
.then(users => {
    const userFirstTen=users.slice(0,10);
    userFirstTen.forEach(user => {
         const userInfo=document.createElement('div');
    userInfo.className='user-info';
    userInfo.innerHTML=`
        <img class="user-img" src="${user.avatar_url}">
                <h6 class="user-name">${user.login}</h6>
                <p class="user-profile-link"><a href="${user.html_url}"><i class="fa-solid fa-arrow-up-right-from-square"></i>view profile</a></p>

    `;
    userContainer.append(userInfo);
    });
    loadUsersBtn.textContent="Hide Users";


   
})
.catch(error => {
    alert(error);
});

}