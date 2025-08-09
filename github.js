async function getUser(){
    const userName=document.getElementById("username").value;
    const userCard=document.getElementById("user-card");
    const errorMessage=document.getElementById("error-message");
    if(userName===" "){
        errorMessage.textContent="please enter github a username";
        userCard.classList.remove("show");
        return;
    }
    try{
        errorMessage.textContent="";
        const response=await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok){
            throw new Error("User not found");
        }
       const data=await response.json();
       document.getElementById("avatar").src=data.avatar_url;
       document.getElementById("name").textContent=data.name||"no-name";
       document.getElementById("bio").textContent=data.bio||"no bio available";
       document.getElementById("followers").textContent=data.Followers;
       document.getElementById("following").textContent=data.Following;
       document.getElementById("repos").textContent=data.public_repos;
       document.getElementById("profile-link").href=data.html_url;
       userCard.classList.add("show");
    }
    catch(error){
        errorMessage.textContent=error.message;
        userCard.classList.remove("show");
    }
}   