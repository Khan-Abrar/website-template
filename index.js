window.onload = function() {
    let time = new Date().getHours();
    document.getElementById('alert').style.display = "block";
    if (time < 12) {
        document.getElementById('alert-text').innerText = 'Good Morning, Guest!';
    } else if (time < 18) {
        document.getElementById('alert-text').innerText = 'Good Afternoon, Guest!';
    } else if (time >= 18) {
        document.getElementById('alert-text').innerText = 'Good Evening, Guest!';
    } else if (time == 12) {
        document.getElementById('alert-text').innerText = 'Good Night, Guest!';
    }

    setTimeout(function() {
        document.getElementById('alert').style.display = "none";
    }, 10 * 1000);
};

function togglePwd() {
    var pwdInput = document.getElementById("password");
    if (pwdInput.type === "password") {
        pwdInput.type = "text";
    } else {
        pwdInput.type = "password";
    }
}

document.getElementById('close').onclick = function() {
    document.getElementById('alert').style.display = "none";

}

document.getElementById('color').onchange = function() {
    let pattern = "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$";
    let validation = document.getElementById('color').value;
    if (!validation.match(pattern)) {
        alert("Please enter a valid hex code");
    } else { document.body.style.backgroundColor = this.value; }

}