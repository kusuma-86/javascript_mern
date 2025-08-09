async function fetchUsers() {
    try{
        const response=await fetch("https://fake-json.api.mock.beeceptor.com/users");
        if(!response.ok){
            throw new Error("failed to fetch data");
        }
        const data=await response.json();
        console.log(data);
         return data;
    }catch(error){
        console.log(error);
        throw error;
    }
    
}
fetchUsers();
async function displayUsers() {
    try{

        const users =await fetchUsers();
        const userList=document.getElementById("user-list");
        if(userList){
            userList.innerHTML="";
            users.forEach(user => {
                const userElement=document.getElementById("li");
                userElement.className="user-card";
                userElement.innerHTML=
                <div class="user-image">
                    <img src="${user.image || 'placeholder-user.jpg'} alt="${user.name} || "user"}
                    oneerror="this.src=`placeholder-user.jpg`"></img>
                </div>
            });
        }
    }
}