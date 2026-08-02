let form = document.querySelector('form');

form.addEventListener("click", function (event) {
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
        alert("Password Reseted");
    } else if (event.target.classList.contains("sign-up-btn")){
        
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
        alert("Sign-UP Sucessfull");
    }
});