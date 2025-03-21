function verifyClaim() {
    const claimInput = document.getElementById("inputText").value.trim();

    if (!claimInput) {
        alert("Please enter data to verify.");
        return;
    }

    document.getElementById("loading").style.display = "block";
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "none";

    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        resultBox.style.display = "block";

        const truthScore = Math.floor(Math.random() * 101);
        const aiScore = Math.floor(Math.random() * 101);

        document.getElementById("truthScore").innerText = truthScore + "%";
        document.getElementById("aiScore").innerText = aiScore + "%";

        document.querySelector(".truth-score").style.transform = "scale(1.1)";
        document.querySelector(".ai-score").style.transform = "scale(1.1)";

        setTimeout(() => {
            document.querySelector(".truth-score").style.transform = "scale(1)";
            document.querySelector(".ai-score").style.transform = "scale(1)";
        }, 500);

    }, 1500);
}

// File Upload Functionality
document.getElementById("fileUpload").addEventListener("change", function() {
    let fileName = this.files[0] ? this.files[0].name : "No file selected";
    alert("File uploaded: " + fileName);
});
