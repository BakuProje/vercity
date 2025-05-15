const tabs = document.querySelectorAll('button[data-tab]');
const tabContent = document.getElementById('tab-content');


function createSnowflake() {
const snowflake = document.createElement('div');
snowflake.classList.add('snowflake');


const size = Math.random() * 5 + 2; 
const opacity = Math.random() * 0.6 + 0.2; 
const startPositionX = Math.random() * window.innerWidth;
const fallDuration = Math.random() * 10 + 5; 
const fallDelay = Math.random() * 5; 


snowflake.style.width = `${size}px`;
snowflake.style.height = `${size}px`;
snowflake.style.opacity = opacity;
snowflake.style.left = `${startPositionX}px`;
snowflake.style.top = '-10px';
snowflake.style.animation = `fall ${fallDuration}s linear ${fallDelay}s infinite`;


const styleSheet = document.styleSheets[0];
const keyframes = `
 @keyframes fall {
   0% {
     transform: translateY(-10px) rotate(0deg);
   }
   100% {
     transform: translateY(${window.innerHeight + 10}px) rotate(360deg);
   }
 }
`;

if (!document.querySelector('style#snowfall-animation')) {
 const styleEl = document.createElement('style');
 styleEl.id = 'snowfall-animation';
 styleEl.textContent = keyframes;
 document.head.appendChild(styleEl);
}
document.getElementById('snowfall').appendChild(snowflake);
setTimeout(() => {
 snowflake.remove();
}, (fallDuration + fallDelay) * 1000);
}


setInterval(createSnowflake, 100);
const themeToggle = document.getElementById('theme-toggle');
const body = document.getElementById('page-body');
const themeIcon = document.getElementById('theme-icon');
let isDarkMode = true; 

themeToggle.addEventListener('click', () => {
isDarkMode = !isDarkMode;

if (isDarkMode) {
 body.classList.remove('light-mode');
 themeIcon.classList.remove('fa-moon');
 themeIcon.classList.add('fa-sun');
 themeIcon.classList.remove('text-blue-900');
 themeIcon.classList.add('text-yellow-400');
} else {
 body.classList.add('light-mode');
 themeIcon.classList.remove('fa-sun');
 themeIcon.classList.add('fa-moon');
 themeIcon.classList.remove('text-yellow-400');
 themeIcon.classList.add('text-blue-900');
}
});

const videoElement = document.getElementById('video-background');
const soundToggle = document.getElementById('sound-toggle');
const soundIcon = document.getElementById('sound-icon');
let isMuted = true; 


const videoSources = [
'img/video1.mp4',
'img/video2.mp4',
'img/video3.mp4',
'img/video6.mp4'
];

let currentVideoIndex = 0;
function changeVideo() {
currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
videoElement.src = videoSources[currentVideoIndex];
videoElement.load();
videoElement.play();
}
setInterval(changeVideo, 30000);
soundToggle.addEventListener('click', () => {
isMuted = !isMuted;
videoElement.muted = isMuted;

if (isMuted) {
 soundIcon.classList.remove('fa-volume-up');
 soundIcon.classList.add('fa-volume-mute');
} else {
 soundIcon.classList.remove('fa-volume-mute');
 soundIcon.classList.add('fa-volume-up');
}
});

const contents = {
android: `<div class="bg-blue-900 rounded p-2 mb-3">
<div class="font-bold text-white text-[11px] mb-1">HOSTS DI ANDROID</div>
<div class="text-white text-[9px] mb-2">
 Unduh "No Root Hosts GO" dari tautan berikut: <a href="https://sfile.mobi/2wAFRSHHTOQ" target="_blank" class="text-blue-300 underline">Unduh Hosts GO</a><br>
 Instal aplikasi dan buka "Hosts Editor".<br>
 Masukkan tautan berikut untuk mengunduh file hosts:
</div>
<div class="bg-blue-800 rounded p-2 mb-2 relative">
 <div class="text-white text-[9px] font-mono" id="android-host-url">
   https://gtpshost.com/VercityBeta.txt
 </div>
 <button class="absolute right-1 top-1 bg-green-600 text-white rounded p-1 text-[8px]" id="copy-android-url">
   <i class="fas fa-copy"></i>
 </button>
 <span class="absolute right-1 top-1 bg-green-600 text-white rounded p-1 text-[8px] hidden" id="copied-android-indicator">
   <i class="fas fa-check"></i>
 </span>
</div>
<div class="text-white text-[9px]">
 Ketuk "Download and Apply", lalu tekan "START".
</div>
</div>`,
ios: `<div class="bg-blue-900 rounded p-2 mb-3">
<div class="font-bold text-white text-[11px] mb-1">HOSTS DI IOS</div>
<div class="text-white text-[9px] mb-2">
 Unduh aplikasi "Surge 5" dari App Store.<br>
 Pilih "IMPORT" → "Download Profile from URL".<br>
 Masukkan URL berikut:
</div>
<div class="bg-blue-800 rounded p-2 mb-2 relative">
 <div class="text-white text-[9px] font-mono" id="ios-host-url">
   https://ios.gtpshost.com/VercityBeta
 </div>
 <button class="absolute right-1 top-1 bg-green-600 text-white rounded p-1 text-[8px]" id="copy-ios-url">
   <i class="fas fa-copy"></i>
 </button>
 <span class="absolute right-1 top-1 bg-green-600 text-white rounded p-1 text-[8px] hidden" id="copied-ios-indicator">
   <i class="fas fa-check"></i>
 </span>
</div>
<div class="text-white text-[9px]">
 Tekan "OK" lalu "Done".<br>
 Setujui kebijakan dan tekan "SETUP".
</div>
</div>`,
windows: `<div class="bg-blue-900 rounded p-2 mb-3">
<div class="font-bold text-white text-[11px] mb-1">PANDUAN EDIT FILE HOSTS</div>
<div class="text-white text-[9px] mb-2">
 Tekan ⊞ Win + R, lalu ketik C:\\Windows\\System32\\drivers\\etc<br>
 Temukan file hosts, klik kanan, pilih Edit.<br>
 Tambahkan baris berikut di akhir file:
</div>
<div class="bg-blue-800 rounded p-2 mb-2 relative">
 <div class="text-white text-[9px]" id="windows-host-content">
   206.189.91.118 growtopia1.com<br>
   206.189.91.118 growtopia2.com<br>
   206.189.91.118 www.growtopia1.com<br>
   206.189.91.118 www.growtopia2.com<br>
   206.189.91.118 RvLnd.here
 </div>
 <button class="absolute right-1 top-1 bg-green-600 text-white rounded p-1 text-[8px]" id="copy-windows-hosts">
   <i class="fas fa-copy"></i>
 </button>
 <span class="absolute right-1 top-1 bg-green-600 text-white rounded p-1 text-[8px] hidden" id="copied-windows-indicator">
   <i class="fas fa-check"></i>
 </span>
</div>
<div class="text-white text-[9px]">Simpan file dan tutup editor.</div>
</div>`,
mac: `<div class="bg-blue-900 rounded p-2 mb-3">
<div class="font-bold text-white text-[11px] mb-1">EDIT FILE HOSTS DI MAC</div>
<div class="text-white text-[9px] mb-2">
 Buka Finder: Buka Finder dan pilih dari menu Go → Go to Folder.<br>
 Ketik lokasi berikut dan tekan Return: /private/etc/hosts<br>
 Seret file hosts ke desktop untuk memudahkan pengeditan.<br>
 Tambahkan baris berikut:
</div>
<div class="bg-blue-800 rounded p-2 mb-2 relative">
 <div class="text-white text-[9px]" id="mac-host-content">
   206.189.91.118 growtopia1.com<br>
   206.189.91.118 growtopia2.com<br>
   206.189.91.118 www.growtopia1.com<br>
   206.189.91.118 www.growtopia2.com<br>
   206.189.91.118 RvLnd.here
 </div>
 <button class="absolute right-1 top-1 bg-green-600 text-white rounded p-1 text-[8px]" id="copy-mac-hosts">
   <i class="fas fa-copy"></i>
 </button>
 <span class="absolute right-1 top-1 bg-green-600 text-white rounded p-1 text-[8px] hidden" id="copied-mac-indicator">
   <i class="fas fa-check"></i>
 </span>
</div>
<div class="text-white text-[9px]">
 Simpan file dan pindahkan kembali ke folder /private/etc/
</div>
</div>`
};


const selectedTab = document.querySelector('button[aria-selected="true"]');
if (selectedTab) {
const key = selectedTab.getAttribute('data-tab');
if (key === 'windows' || key === 'ios' || key === 'android' || key === 'mac') {
 tabContent.innerHTML = contents[key];
} else {
 tabContent.textContent = contents[key];
}
} else {
tabContent.innerHTML = contents['android'];
}

tabs.forEach(tab => {
tab.addEventListener('click', () => {
 tabs.forEach(t => {
   t.classList.remove('tab-active');
   t.classList.add('tab-inactive');
   t.setAttribute('aria-selected', 'false');
 });
 tab.classList.add('tab-active');
 tab.classList.remove('tab-inactive');
 tab.setAttribute('aria-selected', 'true');
 const key = tab.getAttribute('data-tab');
 if (key === 'windows' || key === 'ios' || key === 'android' || key === 'mac') {
   tabContent.innerHTML = contents[key];
 } else {
   tabContent.textContent = contents[key];
 }
});
});


document.getElementById('download-host').addEventListener('click', () => {
const content = `206.189.91.118 growtopia1.com
206.189.91.118 growtopia2.com
206.189.91.118 www.growtopia1.com
206.189.91.118 www.growtopia2.com
206.189.91.118 RVLnd.here`;
const blob = new Blob([content], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'VercityBeta.txt';
document.body.appendChild(a);
a.click();
setTimeout(() => {
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
}, 0);
});


function copyText(text, checkIconId, button) {
navigator.clipboard.writeText(text).then(() => {
 const checkIcon = document.getElementById(checkIconId);
 const originalText = button.querySelector('.copy-text');
 checkIcon.classList.remove('hidden');
 originalText.classList.add('opacity-0');
 setTimeout(() => {
   checkIcon.classList.add('hidden');
   originalText.classList.remove('opacity-0');
 }, 2000);
});
}

document.getElementById('copy-powertunnel').addEventListener('click', (e) => {
copyText('https://gtpshost.com/VercityBeta.txt', 'powertunnel-check', e.currentTarget);
});

document.getElementById('copy-ios').addEventListener('click', (e) => {
copyText('https://ios.gtpshost.com/VercityBeta', 'ios-check', e.currentTarget);
});

document.getElementById('copy-ip-list').addEventListener('click', () => {
const content = `206.189.91.118 growtopia1.com
206.189.91.118 growtopia2.com
206.189.91.118 www.growtopia1.com
206.189.91.118 www.growtopia2.com
206.189.91.118 RVLnd.here`;

navigator.clipboard.writeText(content).then(() => {
 const button = document.getElementById('copy-ip-list');
 const originalIcon = button.querySelector('i');
 originalIcon.classList.remove('fa-copy');
 originalIcon.classList.add('fa-check');
 
 setTimeout(() => {
   originalIcon.classList.remove('fa-check');
   originalIcon.classList.add('fa-copy');
 }, 2000);
});
});

document.addEventListener('click', (e) => {
if (e.target.closest('#copy-windows-hosts')) {
 const content = document.getElementById('windows-host-content').innerText;
 const copyButton = document.getElementById('copy-windows-hosts');
 const copiedIndicator = document.getElementById('copied-windows-indicator');
 
 navigator.clipboard.writeText(content).then(() => {
   copyButton.classList.add('hidden');
   copiedIndicator.classList.remove('hidden');
   
   setTimeout(() => {
     copyButton.classList.remove('hidden');
     copiedIndicator.classList.add('hidden');
   }, 2000);
 });
}

if (e.target.closest('#copy-ios-url')) {
 const content = document.getElementById('ios-host-url').innerText.trim();
 const copyButton = document.getElementById('copy-ios-url');
 const copiedIndicator = document.getElementById('copied-ios-indicator');
 
 navigator.clipboard.writeText(content).then(() => {
   copyButton.classList.add('hidden');
   copiedIndicator.classList.remove('hidden');
   
   setTimeout(() => {
     copyButton.classList.remove('hidden');
     copiedIndicator.classList.add('hidden');
   }, 2000);
 });
}

if (e.target.closest('#copy-android-url')) {
 const content = document.getElementById('android-host-url').innerText.trim();
 const copyButton = document.getElementById('copy-android-url');
 const copiedIndicator = document.getElementById('copied-android-indicator');
 
 navigator.clipboard.writeText(content).then(() => {
   copyButton.classList.add('hidden');
   copiedIndicator.classList.remove('hidden');
   
   setTimeout(() => {
     copyButton.classList.remove('hidden');
     copiedIndicator.classList.add('hidden');
   }, 2000);
 });
}

if (e.target.closest('#copy-mac-hosts')) {
 const content = document.getElementById('mac-host-content').innerText;
 const copyButton = document.getElementById('copy-mac-hosts');
 const copiedIndicator = document.getElementById('copied-mac-indicator');
 
 navigator.clipboard.writeText(content).then(() => {
   copyButton.classList.add('hidden');
   copiedIndicator.classList.remove('hidden');
   
   setTimeout(() => {
     copyButton.classList.remove('hidden');
     copiedIndicator.classList.add('hidden');
   }, 2000);
 });
}
});


window.onload = function() {
tabContent.innerHTML = contents['android'];
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');
const noCommentsMessage = document.getElementById('no-comments');
if (commentsContainer.children.length > 0) {
 noCommentsMessage.classList.add('hidden');
} else {
 noCommentsMessage.classList.remove('hidden');
}

commentForm.addEventListener('submit', function(e) {
 e.preventDefault();
 
 const username = document.getElementById('username').value.trim();
 const commentText = document.getElementById('comment-text').value.trim();
 
 if (username && commentText) {
 
   const now = new Date();
   const dateFormat = new Intl.DateTimeFormat('en', {
     day: 'numeric',
     month: 'short',
     year: 'numeric',
     hour: '2-digit',
     minute: '2-digit'
   });
   const dateTime = dateFormat.format(now);
   addComment(username, commentText, dateTime);
   commentForm.reset();
   noCommentsMessage.classList.add('hidden');
 }
});
function addComment(username, text, dateTime) {
 const commentElement = document.createElement('div');
 commentElement.className = 'bg-[#121926] rounded-lg p-4 border border-[#1e293b]';
 
 commentElement.innerHTML = `
   <div class="flex items-start">
     <div class="mr-3">
       <img src="img/avatar.png" alt="User avatar" class="w-10 h-10 rounded-full">
     </div>
     <div class="flex-1">
       <div class="flex justify-between items-center mb-2">
         <div class="font-semibold text-[#38bdf8]">${username}</div>
         <div class="text-[10px] text-gray-400">${dateTime}</div>
       </div>
       <div class="text-[11px] text-gray-300">
         ${text}
       </div>
     </div>
   </div>
 `;
 
 commentsContainer.prepend(commentElement);
}
};

document.getElementById('toggle-comments').addEventListener('click', () => {
const commentsPopup = document.getElementById('comments-popup');
const buttonText = document.querySelector('#toggle-comments span');

commentsPopup.classList.toggle('hidden');

if (commentsPopup.classList.contains('hidden')) {
 buttonText.textContent = 'Lihat Komentar';
} else {
 buttonText.textContent = 'Tutup Komentar';
}
});

document.getElementById('close-comments').addEventListener('click', () => {
const commentsPopup = document.getElementById('comments-popup');
const buttonText = document.querySelector('#toggle-comments span');

commentsPopup.classList.add('hidden');
buttonText.textContent = 'Lihat Komentar';
});

const downloadHostApkBtn = document.getElementById('download-host-apk');
const hostAppsModal = document.getElementById('host-apps-modal');
const closeModalBtn = document.getElementById('close-modal');

downloadHostApkBtn.addEventListener('click', () => {
hostAppsModal.style.display = 'block';
setTimeout(() => {
 hostAppsModal.classList.add('show');
}, 10);
});

closeModalBtn.addEventListener('click', () => {
hostAppsModal.classList.remove('show');
setTimeout(() => {
 hostAppsModal.style.display = 'none';
}, 300);
});

window.addEventListener('click', (event) => {
if (event.target === hostAppsModal) {
 hostAppsModal.classList.remove('show');
 setTimeout(() => {
   hostAppsModal.style.display = 'none';
 }, 300);
}
});


const registerButton = document.getElementById('register-button');
const registerModal = document.getElementById('register-modal');
const closeRegisterBtn = document.getElementById('close-register-modal');

registerButton.addEventListener('click', () => {
registerModal.style.display = 'block';
setTimeout(() => {
 registerModal.classList.add('show');
}, 10);
});

closeRegisterBtn.addEventListener('click', () => {
registerModal.classList.remove('show');
setTimeout(() => {
 registerModal.style.display = 'none';
}, 300);
});

window.addEventListener('click', (event) => {
if (event.target === registerModal) {
 registerModal.classList.remove('show');
 setTimeout(() => {
   registerModal.style.display = 'none';
 }, 300);
}
});

const priceListBtn = document.getElementById('show-price-list');
const priceListModal = document.getElementById('price-list-modal');
const closePriceModalBtn = document.getElementById('close-price-modal');

priceListBtn.addEventListener('click', () => {
priceListModal.style.display = 'block';
setTimeout(() => {
 priceListModal.classList.add('show');
}, 10);
});

closePriceModalBtn.addEventListener('click', () => {
priceListModal.classList.remove('show');
setTimeout(() => {
 priceListModal.style.display = 'none';
}, 300);
});

window.addEventListener('click', (event) => {
if (event.target === priceListModal) {
 priceListModal.classList.remove('show');
 setTimeout(() => {
   priceListModal.style.display = 'none';
 }, 300);
}
});
