const next = document.querySelector(".next_Video");
const video_1 = document.querySelector("#Solo_video_1");
const last = document.querySelector(".last_video");
/////////Links//////////////////////////////////
const links = [
  "https://r8121.kujo-jotaro.com/solo-leveling/1.1080.50ddc8686ad8bfe2.mp4?hash1=00a9c150728c48c821c31b74ffb2a9bf&hash2=d4406a173cb1f8fbf39a1ff3295bd264",
  "https://r8121.kujo-jotaro.com/solo-leveling/2.1080.f24ba2080b8e9f70.mp4?hash1=9fcac04f5638992c510ed43587819c28&hash2=cfd798ca8cc48ecfc79b04e2277624a4",
  "https://r8121.kujo-jotaro.com/solo-leveling/3.1080.1860394365231e41.mp4?hash1=cd91435c8118a2aa2b66a7c58f583b29&hash2=4536d5e805f8ae973ebf8a233f0b5201",
  "https://r8121.kujo-jotaro.com/solo-leveling/4.1080.2ac4d090237b1114.mp4?hash1=e040d1082b6186764fb7eb30a50c9cb1&hash2=9668f794dc5f4a0cb751967ced41b559",
  "https://r8121.kujo-jotaro.com/solo-leveling/5.1080.f0e47bf60ffa63e5.mp4?hash1=caa0705fc39757029081c6a480a23b1f&hash2=3a6770fa33a23e2896818a480edc83a9",
  "https://r8121.kujo-jotaro.com/solo-leveling/6.1080.b560ca2266433695.mp4?hash1=75d3ff84b88215ec44875c4863d78384&hash2=2c3ff7dafd19afb09f4c71549bb40c4a",
  "https://r8121.kujo-jotaro.com/solo-leveling/7.1080.a4993b17e7539b92.mp4?hash1=449a72dfebaaa5d69cb53423fbb90ada&hash2=aa59159d99970a5e5662e0315526c6e9",
  "https://r8121.kujo-jotaro.com/solo-leveling/8.1080.acfab2bb27643882.mp4?hash1=afe2e208ac4098647ba82747d85337d1&hash2=7dc206699bd42d461d3d37e54d40b851",
  "https://r8121.kujo-jotaro.com/solo-leveling/9.1080.459286ec108f54f8.mp4?hash1=17180acee3a9000366eaafff2cbfcf3b&hash2=0b7068ff78df77b312277b3840be9a5b",
  "https://r8121.kujo-jotaro.com/solo-leveling/10.1080.48efd5d9d7c96d2a.mp4?hash1=49558e3e48fb614b66c5e5d891d8d015&hash2=05746004abbb134cae856f5be901a1fb",
  "https://r8121.kujo-jotaro.com/solo-leveling/11.1080.72fe99876c0c01db.mp4?hash1=420f3f6ce0a72452f292f109e23c168d&hash2=a236bded49e8e33fc9272ceba554ea5e",
];

////////////////////////////////////////////////
var currentVideo = 0;
next.addEventListener("click", () => {
  currentVideo = (currentVideo + 1) % links.length;

  video_1.src = links[currentVideo];
});

last.addEventListener("click", () => {
  currentVideo = (currentVideo - 1) % links.length;

  video_1.src = links[currentVideo];
});
