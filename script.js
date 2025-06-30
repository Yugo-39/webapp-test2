const button = document.getElementById("click");

// 背景画像のリスト（CSSで使える形式）
const backgroundList = [
  //   "url('image/img.jpg')",
  "url('image/img2.jpg')",
  //   "url('image/bg3.jpg')",
];

let index = 0;

button.addEventListener("click", () => {
  index = (index + 1) % backgroundList.length;

  // body の背景画像を変更！
  document.body.style.backgroundImage = backgroundList[index];
});
