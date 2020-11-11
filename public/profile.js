const addInfo = (res) => {
    const gallery = document.querySelector(".profile");
    let html = "";
    html += ` 
      <div class="profile">
        <h1>${res.username}</h1>
      </div>       
`;
    gallery.innerHTML = html;
};
const callAPI = async (username) => {
    try {
        console.log("Username --> ", username);
        const response = await fetch("/api/searchUser", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username}),
        });
        const res = await response.json();
        //check response return from our API
        console.log("response ----> ", res);
        addInfo(res);
    } catch (error) {
        console.log("message error --->", error);
        //Do Something
    }
};
const main = () => {
    const quertString = window.location.search;
    const urlParams = new URLSearchParams(quertString);
    ////
    const username = urlParams.get('username');
    
    if (urlParams.has('username')) {
        callAPI(username)
    } else {
        console.log('Plase enter Username')
    }
    console.log(username);
};
main();