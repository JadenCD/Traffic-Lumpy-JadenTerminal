DirectoryInput = document.getElementById("TermDirectInp");
DirectoryButton = document.getElementById("TermDirectButton");

document.getElementById("TermDirectButton").addEventListener("click", function(OpenDirect){
    console.log("Opening directory")
    if (TermDirectInp.value == "") {
        console.log("nope");
    } else {
        if (TermDirectInp.value == "Roblox"){
            window.location.href = "Roblox.html";
        } else{
            if (TermDirectInp.value == "Forntite") {
                window.location.href = "Fortnite.html";
            } else {
                if (TermDirectInp.value == "Book") {
                    window.location.href = "Book.html";
                } else {
                    if(TermDirectInp.value == "Cmd"){
                        window.location.href = "Cmd.html";
                    } else {
                        console.log("nope");
                    }
                }
            }
        }
    }
});