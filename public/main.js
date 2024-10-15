const video_player = document.querySelector('#html_video_player'),
main_video = video_player.querySelector('#main_video'),
idloader = video_player.querySelector('.idloader'),
cued_thumbnail = video_player.querySelector('.Nll_cued_thumbnail'),
video_controls = video_player.querySelector('#video_controls'),
current = video_player.querySelector('.current'),
totalDuration = video_player.querySelector('.duration'),
gradientbg = video_player.querySelector('.gradient_bg'),
config = video_player.querySelector('#config'),
// AREA_LABELS();
progressbararea = video_player.querySelector('.pbar_cont'),
// BTN_ICONS(VAR);SVG/AREA
playpausebtn = video_player.querySelector('#playpausebtn'),
forwardsbtn = video_player.querySelector('#forwardsbtn'),
volmutebtn = video_player.querySelector('#volmutebtn'),
settingsbtn = video_player.querySelector('#settingsbtn'),
fullscreenbtn = video_player.querySelector('#fullscreenbtn'),
// SLIDERS(HANDLER);AREA
progressbar = video_player.querySelector('.progressbar'),
progressbar_life = video_player.querySelector('.progressbar_life'),
progressbar_buffer = video_player.querySelector('.progressbar_buffer'),
progressbar_scruber = video_player.querySelector('.progressbar_scruber'),
volumearea = video_player.querySelector('.volumearea'),
volumeslider = video_player.querySelector('.volumeslider'),
volume_handle = video_player.querySelector('.volume_handle');

// VARIABLES(SVG);FORCEINSERT_DOM
let svgplay = `
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
		<path d="M13 8C13.0004 8.1567 12.9608 8.31083 12.8851 8.44741C12.8095 8.58398 12.7003 8.69835 12.5682 8.77939L4.38182 13.8641C4.2438 13.95 4.08572 13.9968 3.92391 13.9998C3.7621 14.0029 3.60242 13.962 3.46136 13.8814C3.32165 13.8021 3.20527 13.6865 3.12418 13.5463C3.0431 13.4062 3.00023 13.2467 3 13.0842V2.91582C3.00023 2.7533 3.0431 2.59378 3.12418 2.45365C3.20527 2.31353 3.32165 2.19786 3.46136 2.11855C3.60242 2.03799 3.7621 1.99712 3.92391 2.00016C4.08572 2.0032 4.2438 2.05005 4.38182 2.13586L12.5682 7.22061C12.7003 7.30165 12.8095 7.41602 12.8851 7.55259C12.9608 7.68917 13.0004 7.8433 13 8Z" fill="#EEEEFF"/>
	</svg>
`;

let svgpause = `
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
		<path d="M9.5 2.85714C9.5 2.38376 9.94772 2 10.5 2H12.5C13.0523 2 13.5 2.38376 13.5 2.85714V13.1429C13.5 13.6162 13.0523 14 12.5 14H10.5C9.94772 14 9.5 13.6162 9.5 13.1429V2.85714Z" fill="#EEEEFF"/>
		<path d="M2.5 2.85714C2.5 2.38376 2.94772 2 3.5 2H5.5C6.05228 2 6.5 2.38376 6.5 2.85714V13.1429C6.5 13.6162 6.05228 14 5.5 14H3.5C2.94772 14 2.5 13.6162 2.5 13.1429V2.85714Z" fill="#EEEEFF"/>
	</svg>
`;

let svgvolup = `
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
		<path d="M1 6V10C1 10.5523 1.44772 11 2 11H4.22573L8.3125 13.818C9.0625 14.3351 10 13.6887 10 12.6544V3.34561C10 2.3113 9.0625 1.66486 8.3125 2.18201L4.22573 5H2C1.44772 5 1 5.44772 1 6Z" fill="#EEEEFF"/>
		<path d="M12.4958 8.00561C12.4958 7.39719 12.2736 6.80966 11.8709 6.35311C11.7825 6.25605 11.6594 6.19761 11.5281 6.1904C11.3969 6.1832 11.2681 6.2278 11.1696 6.3146C11.071 6.4014 11.0105 6.52342 11.0013 6.65433C10.992 6.78525 11.0346 6.91456 11.1199 7.01436C11.3614 7.28826 11.4946 7.64067 11.4946 8.00561C11.4946 8.37055 11.3614 8.72296 11.1199 8.99686C11.0346 9.09666 10.992 9.22597 11.0013 9.35689C11.0105 9.4878 11.071 9.60982 11.1696 9.69662C11.2681 9.78342 11.3969 9.82802 11.5281 9.82082C11.6594 9.81361 11.7825 9.75517 11.8709 9.65811C12.2736 9.20156 12.4958 8.61403 12.4958 8.00561Z" fill="#EEEEFF"/>
		<path d="M13.7252 11.3394C14.5468 10.4228 15.0007 9.23574 15 8.00561C15.001 6.77562 14.547 5.58862 13.7252 4.67249C13.6817 4.62237 13.6287 4.58139 13.5691 4.55195C13.5096 4.52251 13.4448 4.50519 13.3786 4.501C13.3123 4.49681 13.2458 4.50583 13.1831 4.52754C13.1203 4.54925 13.0625 4.58321 13.013 4.62745C12.9635 4.67169 12.9233 4.72532 12.8948 4.78522C12.8663 4.84512 12.85 4.91009 12.8468 4.97634C12.8437 5.0426 12.8538 5.10882 12.8765 5.17114C12.8992 5.23346 12.9342 5.29065 12.9792 5.33936C13.636 6.07271 13.9991 7.02206 13.9991 8.00592C13.9991 8.98978 13.636 9.93913 12.9792 10.6725C12.8932 10.7716 12.8496 10.9006 12.8579 11.0316C12.8662 11.1626 12.9257 11.285 13.0236 11.3725C13.1215 11.4601 13.25 11.5056 13.3812 11.4994C13.5125 11.4932 13.636 11.4357 13.7252 11.3394Z" fill="#EEEEFF"/>
	</svg>
`;

let svgvoldown = `
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
		<rect x="1" y="5" width="5" height="6" rx="1" fill="#EEEEFF"/>
		<path d="M1.5625 9.1636C0.8125 8.64644 0.8125 7.35356 1.5625 6.8364L8.3125 2.18201C9.0625 1.66486 10 2.3113 10 3.34561V12.6544C10 13.6887 9.0625 14.3351 8.3125 13.818L1.5625 9.1636Z" fill="#EEEEFF"/>
		<path d="M12.4958 8.0056C12.4958 7.39718 12.2736 6.80965 11.8709 6.3531C11.7825 6.25604 11.6594 6.1976 11.5281 6.19039C11.3969 6.18319 11.2681 6.22779 11.1696 6.31459C11.071 6.40139 11.0105 6.52341 11.0013 6.65432C10.992 6.78524 11.0346 6.91455 11.1199 7.01435C11.3614 7.28825 11.4946 7.64066 11.4946 8.0056C11.4946 8.37054 11.3614 8.72295 11.1199 8.99685C11.0346 9.09665 10.992 9.22596 11.0013 9.35688C11.0105 9.48779 11.071 9.60981 11.1696 9.69661C11.2681 9.78341 11.3969 9.82801 11.5281 9.82081C11.6594 9.8136 11.7825 9.75516 11.8709 9.6581C12.2736 9.20155 12.4958 8.61402 12.4958 8.0056Z" fill="#EEEEFF"/>
	</svg>
`;

let svgvolmute = `
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
		<path d="M5.25672 4.28909L4.22573 5H2C1.44772 5 1 5.44772 1 6V10C1 10.5523 1.44772 11 2 11H4.22573L8.3125 13.818C9.0625 14.3351 10 13.6887 10 12.6544V9.98103L5.25672 4.28909Z" fill="#EEEEFF"/>
		<path d="M10 8.41897V3.34561C10 2.3113 9.0625 1.66486 8.3125 2.18201L6.08341 3.71906L10 8.41897Z" fill="#EEEEFF"/>
		<path d="M12.4958 8.00561C12.4958 7.39719 12.2736 6.80966 11.8709 6.35311C11.7825 6.25605 11.6594 6.19761 11.5281 6.1904C11.3969 6.1832 11.2681 6.2278 11.1696 6.3146C11.071 6.4014 11.0105 6.52342 11.0013 6.65433C10.992 6.78525 11.0346 6.91456 11.1199 7.01436C11.3614 7.28826 11.4946 7.64067 11.4946 8.00561C11.4946 8.37055 11.3614 8.72296 11.1199 8.99686C11.0346 9.09666 10.992 9.22597 11.0013 9.35689C11.0105 9.4878 11.071 9.60982 11.1696 9.69662C11.2681 9.78342 11.3969 9.82802 11.5281 9.82082C11.6594 9.81361 11.7825 9.75517 11.8709 9.65811C12.2736 9.20156 12.4958 8.61403 12.4958 8.00561Z" fill="#EEEEFF"/>
		<path d="M15 8.00561C15.0007 9.23574 14.5468 10.4228 13.7252 11.3394C13.636 11.4357 13.5125 11.4932 13.3812 11.4994C13.25 11.5056 13.1215 11.4601 13.0236 11.3725C12.9257 11.285 12.8662 11.1626 12.8579 11.0316C12.8496 10.9006 12.8932 10.7716 12.9792 10.6725C13.636 9.93913 13.9991 8.98978 13.9991 8.00592C13.9991 7.02206 13.636 6.07271 12.9792 5.33936C12.9342 5.29065 12.8992 5.23346 12.8765 5.17114C12.8538 5.10882 12.8437 5.0426 12.8468 4.97634C12.85 4.91009 12.8663 4.84512 12.8948 4.78522C12.9233 4.72532 12.9635 4.67169 13.013 4.62745C13.0625 4.58321 13.1203 4.54925 13.1831 4.52754C13.2458 4.50583 13.3123 4.49681 13.3786 4.501C13.4448 4.50519 13.5096 4.52251 13.5691 4.55195C13.6287 4.58139 13.6817 4.62237 13.7252 4.67249C14.547 5.58862 15.001 6.77562 15 8.00561Z" fill="#EEEEFF"/>
		<path d="M3 2L13 14" stroke="#EEEEFF" stroke-linecap="round"/>
	</svg>
`;

let svgfullscreenexit = `
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
		<path d="M10.5 13V10.5H13M5.5 3V5.5H3M3 10.5H5.5V13M13 5.5H10.5V3" stroke="#EEEEFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
`;

let svgfullscreen = `
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
		<path d="M10.5 3H13V5.5M5.5 13H3V10.5M13 10.5V13H10.5M3 5.5V3H5.5" stroke="#EEEEFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
`;

document.addEventListener('keydown', keypress => {
	const tagName = document.activeElement.tagName.toLowerCase()

	if (tagName === "input") return
	switch (keypress.key.toLowerCase()) {
		case " ":
			if (tagName === "button") return
		case "k":
			playPause()
			break
		case "f":
			fullscreen()
			break
		case "m":
			mutevolume();
			break
	}
})

//BUFFERLOADED();FUNCTION{}timeupdate
main_video.addEventListener('loadeddata', ()=> {
	setInterval(() => {
		let bufferedTime = main_video.buffered.end(0);
		let duration = main_video.duration;
		let width = (bufferedTime / duration) * 100;

		progressbar_buffer.style.width = `${width}%`;
	},500);
})


//AUTOPLAY(PROMISE);FUNCTION{}
cued_thumbnail.style.display = `inherit`;
main_video.addEventListener('loadeddata', ()=> {
var playPromise = main_video.play();
	if (playPromise !== undefined) {
		playPromise.then(_ => {
			cued_thumbnail.style.display = `none`;
			idloader.style.display = `none`;
			playpausebtn.innerHTML = svgpause; //
			video_player.classList.add('paused'); //REPLACE WITH main_video.pause(); TO DESACTIVATE AUTOPLAY
		})
	.catch(error => {
			cued_thumbnail.addEventListener('click', ()=> {
				cued_thumbnail.style.display = `none`;
				main_video.play();
				video_player.classList.add('paused');
				playpausebtn.innerHTML = svgpause;
			})
			idloader.style.display = `block`;
			main_video.pause();
		});
	}
})

main_video.addEventListener('waiting', ()=> {
	idloader.style.display = `inherit`;
})

main_video.addEventListener('canplay', ()=> {
	idloader.style.display = `none`;
})

//PLAYPAUSE(CLICK);FUNCTION{}
function playPause() {
	main_video.paused ? main_video.play() : main_video.pause()

	if (main_video.paused) {
		playpausebtn.innerHTML = svgplay;
		video_player.classList.remove('paused');
	} else {
		playpausebtn.innerHTML = svgpause;
		video_player.classList.add('paused');
	}
}

playpausebtn.addEventListener('click', playPause)
main_video.addEventListener('click', playPause)
main_video.addEventListener('ended', ()=> {
	if (video_player.classList.contains('paused')) {
		main_video.pause();
		playpausebtn.innerHTML = svgplay;
		video_player.classList.remove('paused');
	} else {
		playpausebtn.innerHTML = svgpause;
		video_player.classList.add('paused');
	}
})

//VIDEO_TIMER();FUNCTION{}
main_video.addEventListener('loadeddata',(e)=> {
	let videoDuration = e.target.duration;
	let totalMin = Math.floor(videoDuration / 60);
	let totalSeg = Math.floor(videoDuration % 60);

	totalSeg < 10 ? totalSeg = '0' + totalSeg : totalSeg;
	totalDuration.innerHTML = `${totalMin}:${totalSeg}`;

	progressbararea.ariaValueMax = `${Math.floor(videoDuration)}`;
})

//PROGRESSBAR();FUNCTION{}
main_video.addEventListener('timeupdate',(e)=> {
	let currentVideoTime = e.target.currentTime;
	let currentMin = Math.floor(currentVideoTime / 60);
	let currentSeg = Math.floor(currentVideoTime % 60);

	currentSeg < 10 ? currentSeg = '0' + currentSeg : currentSeg;
	current.innerHTML = `${currentMin}:${currentSeg}`;

	let videoDuration = e.target.duration;
	let progressWidth = (currentVideoTime / videoDuration) * 1;

	progressbar_life.style.transform = `scaleX(${progressWidth})`;
})

main_video.addEventListener('timeupdate',(e)=> {
	if (video_player.classList.contains('autohide')) {
		let currentVideoTime = e.target.currentTime;
		let currentMin = Math.floor(currentVideoTime / 60);
		let currentSeg = Math.floor(currentVideoTime % 60);
		let videoDuration = e.target.duration;
		let durationMin = Math.floor(videoDuration / 60);
		let durationSeg = Math.floor(videoDuration % 60);
		
		progressbararea.ariaValueNow = `${Math.floor(currentVideoTime)}`;
		progressbararea.ariaValueText = `${currentMin} Minutos ${currentSeg} Segundos de ${durationMin} Minutos ${durationSeg} Segundos`;
	} if (video_player.classList.contains('progressbar_hover')) {
		let progressbarCurrent = progressbar_life.getBoundingClientRect();
		let width = progressbarCurrent.width;
		progressbar_scruber.style.transform = `translateX(${width}px)`;
	}
})

progressbar.addEventListener('mouseenter', ()=>{
	video_player.classList.add('progressbar_hover');
	if (video_player.classList.contains('progressbar_hover')) {
		let progressbarCurrent = progressbar_life.getBoundingClientRect();
		let width = progressbarCurrent.width;
		progressbar_scruber.style.transform = `translateX(${width}px)`;
	}
})

progressbar.addEventListener('mouseleave', ()=>{
	video_player.classList.remove('progressbar_hover');
})

video_player.addEventListener('mouseenter', ()=>{
	video_player.classList.remove('autohide');
})

video_player.addEventListener('mouseleave', ()=>{
	if (video_player.classList.contains('paused')) {
		video_player.classList.add('autohide');
	} else {
		video_player.classList.remove('autohide');
	}
})


//PROGRESSBAR_SCRUBER(FIX);FUNCTION{}
var anchoVentana = window.innerWidth;
window.onresize = function(){
	let progressbarCurrent = progressbar_life.getBoundingClientRect();
	let width = progressbarCurrent.width;
	progressbar_scruber.style.transform = `translateX(${width}px)`;
};

//PROGRESSBAR_ONCLICK(SET);FUNCTION{}
progressbar.addEventListener('pointerdown',(e)=> {
	progressbar.setPointerCapture(e.pointerId);
	setTimelinePosition(e);
	progressbar.addEventListener('pointermove', setTimelinePosition);
	progressbar.addEventListener('pointerup', ()=> {
		progressbar.removeEventListener('pointermove', setTimelinePosition);
	});
})

function setTimelinePosition(e) {
	let videoDuration = main_video.duration;
	let currentTime = main_video.currentTime;
	let progressWidthVal = progressbar.clientWidth;
	let clickOffsetX = e.offsetX;
	main_video.currentTime = (clickOffsetX / progressWidthVal) * videoDuration;

	let progressWidth = (main_video.currentTime / videoDuration) * 1;
	progressbar_life.style.transform = `scaleX(${progressWidth})`;

	let currentVideoTime = main_video.currentTime;
	let currentMin = Math.floor(currentTime / 60);
	let currentSeg = Math.floor(currentTime % 60);

	currentSeg < 10 ? (currentSeg = "0" + currentSeg) : currentSeg;
	current.innerHTML = `${currentMin}:${currentSeg}`;
	
	let progressbarCurrent = progressbar_life.getBoundingClientRect();
	let width = progressbarCurrent.width;
	progressbar_scruber.style.transform = `translateX(${width}px)`;

	e.preventDefault();
}

//MUTEVOL()FUNCTION;
function mutevolume() {
if (main_video.volume) {
		volume_handle.setAttribute('data-class', 'muted');
		volmutebtn.innerHTML = svgvolmute; // Icono de volumen mute
		main_video.volume = 0;
		volmutebtn.setAttribute('aria-label', 'Activar sonido combinación de teclas m');

	} else {
		volume_handle.setAttribute('data-class', '');
		volmutebtn.innerHTML = svgvolup; // Icono de volumen alto
		main_video.volume = (volumearea.ariaValueNow / 100);
		volmutebtn.setAttribute('aria-label', 'Silenciar combinación de teclas m');
	}
}

function volumeMuted() {
	main_video.muted = !main_video.muted;
	switch (main_video.muted) {
		case true:
			volume_handle.setAttribute('data-class', 'muted');
			volmutebtn.innerHTML = svgvolmute; // Icono de volumen mute
			volmutebtn.setAttribute('aria-label', 'Activar sonido combinación de teclas m');
			break;
		default:
			volume_handle.setAttribute('data-class', '');
			volmutebtn.innerHTML = svgvolup; // Icono de volumen alto
			volmutebtn.setAttribute('aria-label', 'Silenciar combinación de teclas m');
			break;
	}
}
volmutebtn.addEventListener('click', volumeMuted);
volmutebtn.addEventListener('click', ()=> {
	if (volume_handle.classList.contains('data-class', 'muted')) {
		volmutebtn.setAttribute('aria-label', 'Activar sonido combinación de teclas m');
		volume_handle.setAttribute('data-class', '');
		volmutebtn.innerHTML = svgvolup;
		!main_video.muted
	}else if (main_video.volume === 0) {
		main_video.volume = 1;
		volume_handle.style.left = `40px`;
		volume_handle.setAttribute('data-class', '');
		volmutebtn.setAttribute('aria-label', 'Silenciar combinación de teclas m');
		volmutebtn.innerHTML = svgvolup;
	}
})

volumeslider.addEventListener('pointerdown',(e)=> {
	volumeslider.setPointerCapture(e.pointerId);
	volumeHandling(e);
	volumeslider.addEventListener('pointermove', volumeHandling);
	volumeslider.addEventListener('scrollmouse', volumeHandling);
	volumeslider.addEventListener('pointerup', ()=> {
		volumeslider.removeEventListener('pointermove', volumeHandling);
	});
	e.preventDefault();
})

function volumeHandling(e) {
	let volumeWidth = volumearea.getBoundingClientRect();
	let scrubberWidth = volume_handle.getBoundingClientRect();
	const volumeArea = (volumeWidth.width - scrubberWidth.width);
	let newLeft = e.offsetX;
	let left = Math.round((newLeft / volumeWidth.width) * volumeArea);

	const value = Math.round((newLeft / volumeWidth.width) * 100);
	let Area = Math.max(0, Math.min(volumeArea, left));
	let Vol = Math.max(0, Math.min(100, value));

	volume_handle.style.left = `${Area}px`;

	volumearea.ariaValueText = `${Vol}% Volumen`;
	volumearea.ariaValueNow = `${Vol}`;
	main_video.volume = Vol / 100;

	updateVolumeIcon(value);
	e.preventDefault();
}


function updateVolumeIcon(value) {
	if (value <= 0) {
		volmutebtn.innerHTML = svgvolmute; // Icono de volumen mute
		volume_handle.setAttribute('data-class', 'muted');
	} else if (value > 0 && value < 100) {
		volmutebtn.innerHTML = svgvolup; // Icono de volumen alto
		volume_handle.setAttribute('data-class', '');
	}
}

//FULLSCREEN();FUNCTION{}
function fullscreen() {
	if (document.fullscreenElement == null) {
		video_player.classList.add('openfullscreen');
		fullscreenbtn.innerHTML = svgfullscreenexit;
		video_player.requestFullscreen();
	} else {
		video_player.classList.remove('openfullscreen');
		fullscreenbtn.innerHTML = svgfullscreen;
		document.exitFullscreen();
	}
}

fullscreenbtn.addEventListener('click', fullscreen)

//BLOBURL(&VIDEO);FUNCTION{}
let xhr = new XMLHttpRequest();
xhr.open("GET", "./src/video/render.mp4", true)
xhr.responseType = "blob";
xhr.withCredentials = true;
xhr.onload = (e)=> {
	let blob = new Blob([xhr.response]);
	let url = URL.createObjectURL(blob);
	main_video.src = url;
}
xhr.send(null);


window.addEventListener('unload', ()=> {
	let setDuration = localStorage.setItem('duration',`${main_video.currentTime}`);
	// let setSrc = localStorage.setItem('src',`${main_video.getAttribute('src')}`);
})

window.addEventListener('load', ()=> {
	let getDuration = localStorage.getItem('duration');
	if (getDuration) {
		main_video.currentTime = getDuration;
	}
})

main_video.addEventListener('contextmenu', (e)=> {
	e.preventDefault();
})