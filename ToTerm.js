usernameInput = document.getElementById("TermLogUserInp");
passwordInput = document.getElementById("TermLogPassInp");

document.getElementById("TermLogButton").addEventListener("click", function(ToTerminal){
    console.log("Logging into terminal...");
    if (usernameInput.value == "") {
        console.log("nope")
    } else {
        if (usernameInput.value == "JadenCDTLJ") {
            if (passwordInput.value == "TLJTERM2022") {
                VipAdmin=true;
                username = "JadenCDTLJ";
                window.location.href="ToTermDirect.html";
            } else {
                console.log("nope");
            }
        } else{
            if (usernameInput.value == "TrafficTLJ") {
                if (passwordInput.value == "TLJTERM2022") {
                    Admin=true;
                    username="TrafficTLJ";
                    window.location.href="ToTermDirect.html";
                } else {
                    console.log("nope");
                }
            } else {
                if (usernameInput.value == "LumpyTLJ") {
                    if (passwordInput.value == "TLJTERM2022") {
                        Admin = true;
                        username="LumpyTLJ";
                        window.location.href="ToTermDirect.html";
                    } else {
                        console.log("nope");
                    }
                } else {
                    console.log("nope");
                }
            }
        }
    }
});