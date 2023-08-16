console.log('jk')
let songIndex = 0;
let audioElement = document.createElement("AUDIO")
document.body.appendChild(audioElement);
audioElement.src = "./songs/1.mp3";
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    { songName: "kasam-Salam-e-Ishq",filePath: "/songs/1.mp3", coverPath: 'covers/1.jpg'},
    { songName: "kala jadu-Salam-e-Ishq",filePath: "/songs/2.mp3", coverPath: 'covers/2.jpg'},
    { songName: "hum hai is pal-Salam-e-Ishq",filePath: "/songs/3.mp3", coverPath: 'covers/3.jpg'},
    { songName: "janu tu ya jane-Salam-e-Ishq",filePath: "/songs/4.mp3", coverPath: 'covers/4.jpg'},
    { songName: "tujhe yaad na-Salam-e-Ishq",filePath: "/songs/5.mp3", coverPath: 'covers/5.jpg'},
    { songName: "dil chahte hai-Salam-e-Ishq",filePath: "/songs/6.mp3", coverPath: 'covers/6.jpg'},
    { songName: "yaaro sab dua -Salam-e-Ishq",filePath: "/songs/7.mp3", coverPath: 'covers/7.jpg'}
  
]
songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName
    console.log(element,i)
    
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.add('fa-circle-play');
           element.classList.remove('fa-circle-pause');
    
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
        audioElement.src= 'songs/3.mp3'
        audioElement.currentTime=0
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
