function hideAllPages() {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.add("hidden"));
}

function checkPassword() {
    let pass = document.getElementById("password").value;

    if (pass == "2523") {
        hideAllPages();
        document.getElementById("birthdayPage").classList.remove("hidden");
    } else {
        alert("Wrong Password ❤️ Try Again");
    }
}

function nextPage() {
    hideAllPages();
    document.getElementById("questionPage").classList.remove("hidden");
}

function showCountdown() {
    hideAllPages();
    document.getElementById("countdownPage").classList.remove("hidden");

    let count = 3;

    document.getElementById("count").innerHTML = count;

    let timer = setInterval(function () {

        count--;

        document.getElementById("count").innerHTML = count;

        if (count <= 0) {

            clearInterval(timer);

            hideAllPages();
            document.getElementById("giftPage").classList.remove("hidden");

        }

    }, 1000);
}

function showGift1() {
    hideAllPages();
    document.getElementById("gift1Page").classList.remove("hidden");
}

function showGift2() {
    hideAllPages();
    document.getElementById("gift2Page").classList.remove("hidden");
}

function showGift3() {
    hideAllPages();
    document.getElementById("gift3Page").classList.remove("hidden");
}

function showLetter() {
    hideAllPages();
    document.getElementById("letterPage").classList.remove("hidden");
}
function showLetter() { hideAllPages();

document.getElementById("letterPage") .classList.remove("hidden"); }

function showFinal() { hideAllPages();

document.getElementById("finalPage"). classList.remove("hidden"); }