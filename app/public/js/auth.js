let form = document.querySelector('form');

form.addEventListener("click", function (event) {
    let getData = {};
    let inputData = document.querySelectorAll(".credentials-input");
    let checkbox = document.getElementById("terms-conditions").checked;

    if (event.target.classList.contains("login-btn")){      
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
        window.location.href = "main.html";
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
        window.location.href = "main.html";
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

        getData = window.localStorage.setItem("user", JSON.parse(getData));
        
    } else if (event.target.classList.contains("redirect")){
        window.location.href = "main.html";
    }
});