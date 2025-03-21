const control_container = document.querySelector(".controls-main");
const video = document.querySelector("video");
const play_btn = document.querySelector(".btn-play");
const play_btn_icon = document.querySelector(".btn-play > i");
const volume_show = document.querySelector(".volume-show");
const volume_btn = document.querySelector(".volume-btn");
const volume_btn_icon = document.querySelector(".volume-btn > i");
const stop_btn = document.querySelector(".btn-stop");



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
    let percent = (video.currentTime / video.duration) * 100;
    document.querySelector(".progress").style.width = percent + "%";
});

document.onkeydown = (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (video.volume < 1) {
                video.volume = (video.volume + .1).toFixed(1);
                volume_show.textContent = video.volume * 100 + "%";
                if (volume_btn_icon.classList.contains("fa-volume-mute")) {
                    volume_btn_icon.classList.remove("fa-volume-mute");
                    volume_btn_icon.classList.add("fa-volume");
                }
            }
            if (video.muted) {
                video.muted = false;
                volume_btn_icon.classList.remove("fa-volume-mute");
                volume_btn_icon.classList.add("fa-volume");
            }
            break;
        case "ArrowDown":
            if (video.volume > 0) {
                video.volume = (video.volume - .1).toFixed(1);
                volume_show.textContent = (video.volume * 100) + "%";
                if (video.volume == 0) {
                    volume_btn_icon.classList.remove("fa-volume");
                    volume_btn_icon.classList.add("fa-volume-mute");
                }
            }
            break;
        case "ArrowRight":
            seekButton(1);
            break;
        case "ArrowLeft":
            seekButton(-1);
            break;
        case "Enter":
            full_screen();
            break;
    }
}

function full_screen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function toggle_mute(){
    if (video.muted) {
        video.muted = false;
        volume_btn_icon.classList.add("fa-volume");
        volume_btn_icon.classList.remove("fa-volume-mute");
    } else {
        video.muted = true;
        volume_btn_icon.classList.remove("fa-volume");
        volume_btn_icon.classList.add("fa-volume-mute");
    }
}

stop_btn.addEventListener("click", () => {
  video.pause(); 
  video.currentTime = 0; 
  play_btn_icon.classList.remove("fa-pause");
  play_btn_icon.classList.add("fa-play");
});