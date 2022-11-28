let app = document.getElementById("calls");

let API = async() => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let info = file.data
        .map((element) => {
            return `<div class="zumba">
        <div class="zumba-image">
            <div class="background" ></div>
        </div>
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="zumba-content">
            <h2>${element.first_name} ${element.last_name}</h2>
            <h2>${element.email}</h2>
            <h2>User ID: ${element.id}</h2>
        </div>
    </div>`;
        })
        .join("");
    calls.innerHTML = info;
};

let navBtn = document.getElementById("navigate");
navBtn.addEventListener("click", () => {
    calls.innerHTML = `<h1 class='scan'>collecting user info ........</h1>`;
    setTimeout(() => {
        API();
    }, 1000);
});