let form = document.querySelector('form');
let getData = {};

form.addEventListener("click", function (event) {
    let inputData = document.querySelectorAll(".credentials-input");
    let checkbox = document.getElementById("terms-conditions").checked;

    if (event.target.classList.contains("login-btn")){     
        const storedData = JSON.parse(window.localStorage.getData("user"));
        for(let data of inputData){
            if (!data.value){
                alert("Enter credentials properly");
                return;
            }
            if (data.value == username)
        }
        if (!checkbox){
            alert("Agree Terms and Conditions");
            return;
        }

        

    
        window.location.href = "main";
    } else if (event.target.classList.contains("reset-password-btn")){
        for(let data of inputData){
            if (!data.value){
                alert("Enter credentials properly");
                return;
            }
        }
        if (!checkbox){
            alert("Agree Terms and Conditions");
            return;
        }
        alert("Password Reseted")
        window.location.href = "login";
    } else if (event.target.classList.contains("sign-up-btn")){
        
        for(let data of inputData){
            if (!data.value){
                alert("Enter credentials properly");
                return;
            } else {
                let dataID = data.id + "";
                getData[dataID] = "" + data.value;
            }
        }
        if (!checkbox){
            alert("Agree Terms and Conditions");
            return;
        }
        
        alert("Sign-UP Sucessfull")
        getData = window.localStorage.setItem("user", JSON.stringify(getData));
        window.location.href = "login";
    } else if (event.target.classList.contains("redirect")){
        window.location.href = "main";
    }
});