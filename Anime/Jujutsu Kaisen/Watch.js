const next = document.querySelector(".next_Video");
const video_1 = document.querySelector("#JJK_video_1");
const last = document.querySelector(".last_video");
/////////Links//////////////////////////////////
const links = [
  "https://r350103.kujo-jotaro.com/jujutsu-kaisen/1.1080.812841b2c0546248.mp4?hash1=5b22fbe61079a52018ecc7fd3366a4fd&hash2=c37ed5d0b4fbccf20f1979f6ce5bf3ac",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/2.1080.00e82869f54154d8.mp4?hash1=08154ecdacf86dc819d74c6b9f1c2619&hash2=f968e4099595dded1b91c51d72529ea7",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/3.1080.3ab1a0c4b449d8f9.mp4?hash1=357d5cf61e7a9935a1e2e8aaba725d12&hash2=1a1de2481c0045f1e2721e70a1c266c9",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/4.1080.5afac34dc6a02441.mp4?hash1=90f78718de0012155ba7772a0cac9352&hash2=41d414aa24337c22a99588b5b86c33e8",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/5.1080.77668105d0144c85.mp4?hash1=8747e38ce82d5481bd41ca96a18da634&hash2=622db70c1ed9cd6842058bb0b383ce80",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/6.1080.2ff0fc838dec1fdb.mp4?hash1=44f8117ea263f12fddde510987cbb1e0&hash2=8c90d14561f389f426366c8f15cea9b4",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/7.1080.4bea854e963c8b1f.mp4?hash1=2cd9c21f748c2f7f2b5320a2b5a4e2db&hash2=01cd3353177b622acf16650c95302fd3",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/8.1080.0abefed5f16abfd1.mp4?hash1=4a2113dbfe232c8bcd0e2efbc88c7322&hash2=dabe49e18674b3677ba6f580b4fc251d",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/9.1080.37194b300b4e8ed0.mp4?hash1=3328a5692c7bb55afda756f3cc3848db&hash2=c4dfc363b0198479bd3c69685d46bdfe",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/10.1080.8bfb6637c3a3f051.mp4?hash1=15c523975d1df477fab17877e73525db&hash2=0330e01f0252df20ff36c2395af99ae5",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/11.1080.36ed0ca4fe3a9d1a.mp4?hash1=a11be2a8262c346d8f1000b424315dec&hash2=429c046dc5b3142098bece551e8ac678",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/12.1080.dc5054caedb7fdb2.mp4?hash1=c3b86239678b9a66fdb58174a39dd745&hash2=d17460beb3046de4c74890506b26a7a3",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/13.1080.063826a2b9561103.mp4?hash1=46d1527973cdb4aacb3c95874d1da233&hash2=ac3d7726a1486d41216eff8d72dd667c",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/14.1080.0b623bfabae0b819.mp4?hash1=26a5d64ddb41294652b97c9094e4d594&hash2=a8fe62994e775e8340edd37b44a267e1",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/15.1080.2fb1c47fdd60087f.mp4?hash1=1aa64b1396a2daa53dc57a313060373e&hash2=9df0e93cf997b9ff196f741cf2c530d6",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/16.1080.930dcd5139a2487b.mp4?hash1=208c8e4c8a0dc4f368994d192f0139e6&hash2=e7aa1fba0a8fd3772c167b5d20735b7f",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/17.1080.679341b7ad77c53d.mp4?hash1=a54b8b4bd6730a56218b8e1ca338def4&hash2=2b033d8944118d28bc6d2e69d83f3a19",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/18.1080.28785045279e89ba.mp4?hash1=5301ef180deb5cacd2c58e4ca29fc072&hash2=136b770432b8eec38ed2ed9d1638b4a9",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/19.1080.1aff3e9c81b13bc6.mp4?hash1=9119b3aca6fbaf0aa570d9edc0f303a6&hash2=b2301bdda090876b05178c4b7a2ac05c",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/20.1080.786d472c5c6a0dd4.mp4?hash1=4542a0ec755f58698ff7dec3f5f56f58&hash2=25d02f9bfa1f82d4b3775f3179f6ed7b",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/21.1080.29e9c4afa26ead99.mp4?hash1=7fcad778eda14c5792931f82ff327853&hash2=757568b171d1de05c9e123a17152c000",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/22.1080.d9e09f173732c071.mp4?hash1=49c208cd8a7683b429ae7c5574897494&hash2=32b48957843add9324c4a5cccb6b1c25",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/23.1080.739f1060f648647e.mp4?hash1=b04cef1199c3f35dbf7708d55c35d749&hash2=1ec7e6eec14732f59717a0b2301b34ce",
  "https://r8121.kujo-jotaro.com/jujutsu-kaisen/24.1080.bf203e7ec5830642.mp4?hash1=885f4c3702fd5bd40c8269b4c92be9e5&hash2=e58bb7b87e6b1e6ed2d2e4235dc54080",
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
