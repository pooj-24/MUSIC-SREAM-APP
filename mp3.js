let songs = [
    { name: "PUDHU VELLAI MALAI", artist: "A.R.Rahman", file: "audio/song1.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmSEeQ01YsSEZQIG5Tffe0rYmoxxqKOFKXg&s" },
    { name: "SAWADEEKA", artist: "Anthony Daasan", file: "audio/song2.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQhVVCQrDLNOBPFuRKmcwew-C8D2OBCnIJw&s" },
    { name: "VENNILAVU SARAL NEE", artist: "Kapil Kapilan, Rakshita Suresh, G V Prakash", file: "audio/song3.mp3", image: "https://m.sakshipost.com/sites/default/files/styles/storypage_main/public/gallery_images/2024/12/6/Amaran%20Movie%20HD%20Images_%20%2819%29-1729573602.jpg?itok=oxEHtDqW" },
    { name: "KANNANA KANNE", artist: "Sean Roldan, Anirudh Ravichander", file: "audio/song4.mp3", image: "https://i.ytimg.com/vi/zwIpvea4_9A/maxresdefault.jpg" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const albumArt = document.getElementById("albumArt");
const songTitle = document.getElementById("songTitle");
const artistName = document.getElementById("artistName");
const playPauseButton = document.getElementById("playPause");
const playPauseBottomButton = document.getElementById("playPauseBottom");

function playSong(index) {
    currentSongIndex = index;
    audio.src = songs[index].file;
    albumArt.src = songs[index].image;
    songTitle.innerText = songs[index].name;
    artistName.innerText = songs[index].artist;
    audio.play();
    updatePlayPauseButton(true);
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        updatePlayPauseButton(true);
    } else {
        audio.pause();
        updatePlayPauseButton(false);
    }
}

function updatePlayPauseButton(isPlaying) {
    if (isPlaying) {
        playPauseButton.innerText = "⏸"; // Change to pause icon
        playPauseBottomButton.innerText = "⏸";
    } else {
        playPauseButton.innerText = "▶"; // Change to play icon
        playPauseBottomButton.innerText = "▶";
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

// Automatically update button when song ends
audio.addEventListener("ended", () => {
    updatePlayPauseButton(false);
});
