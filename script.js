const control_container = document.querySelector(".controls-main");
const video = document.querySelector("video");
const play_btn = document.querySelector(".btn-play");
const play_btn_icon = document.querySelector(".btn-play>i");



function show_controls() {
    control_container.style.opacity = 1;
}

function hide_controls() {
    control_container.style.opacity = 0;
}

function play_video() {
    if (video.paused) {
        video.play();
        play_btn_icon.classList.remove("fa-play");
        play_btn_icon.classList.add("fa-pause");
    } else {
        video.pause();
         play_btn_icon.classList.remove("fa-pause");
         play_btn_icon.classList.add("fa-play");
    }
}

function seekButton(n) {
    video.currentTime += (n * 5);
}

video.addEventListener("timeupdate", () => {
    let percent = video.currentTime / video.duration * 100;
    document.querySelector("progress").style.width = percent + "%";
});

document.onkeydown = (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (video.volume < 1) {
                video.volume = (video.volume + .1).toFixed(1);
            }
            break;
        case "ArrowDown":
            if (video.volume > 0) {
                video.volume = (video.volume - .1).toFixed(1);
            }
            break;
    }
}