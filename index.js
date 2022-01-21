// var rtans = [
//     "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/rtan.gif",
//     "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker.gif",
//     "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker+(2).gif",
//     "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker+(1).gif"
// ];

// function open_letter() {
//     if (!confirm('편지를 열어보시겠습니까?')) {
//         //아니오 버튼 클릭시
//         alert('ㅠㅠ');
//         location.replace('index_2.html');

//     } else {
//         //예 버튼 클릭시
//         document.getElementsByClassName("letter-close")[0].style.display = 'none'
//         document.getElementsByClassName("letter-open")[0].style.display = 'block'

//         random_rtans();
//     }
// }

android:stateListAnimator = "@null"
android:background="#00ff0000"

function open_letter() {
  // document.querySelector(".envelope_open").style.display = 'block';
  document.querySelector(".envelope").style.display = 'none';
  document.querySelector(".envelope-msg").style.display = 'none';
  document.querySelector('.background').className = "background show";
  document.querySelector('.popup').style.display = 'block';
}

function close() {
  // document.querySelector('.background').className = "background";
  location.replace('index_2.html');
}

function on_Mouse() {
  document.querySelector('.arrow-right').style.display = 'none';
}

document.querySelector(".close").addEventListener("mouseover", on_Mouse);

function out_Mouse() {
  document.querySelector('.arrow-right').style.display = "block";
}

document.querySelector('.close').addEventListener("mouseout", out_Mouse);


function close_letter() {
  document.querySelector('.background').className = "background";
  document.querySelector('.bin').style.display = 'block';
  document.querySelector('.bin-msg').style.display = 'block';
  document.querySelector('.loading-bar').style.display = 'block';
}

document.querySelector(".envelope").addEventListener('click', open_letter);
document.querySelector(".img-btn").addEventListener('click', close);
document.querySelector(".close").addEventListener('click', close_letter);


function onClick() {
  document.getElementsByClassName("letter-close")[0].style.display = 'none';
  document.getElementsByClassName("letter-open")[0].style.display = 'block';

  random_rtans();
}

document.querySelector('.open').addEventListener('click', onClick);


// random_rtans();

// radom images
// function random_rtans() {
//     let rand_number = Math.floor(Math.random() * 10) % 4;
//     let rtan_path = rtans[rand_number];
//     console.log(rand_number);
//     document.getElementsByClassName("rtan")[0].style.backgroundImage = `url(${rtan_path})`;
// }

// hidden message
// setTimeout (function go_rtan() {
//   alert('사랑하는 작가님~♪♬ 생일 축하합니다\n특별 공연을 시작합니다!');
//   window.open('https://youtu.be/AWrXKyFzg0o');
// }, 2000);

function hidden_msg() {
  document.querySelector('.hidden-back').className = "background show";
  document.querySelector('.open-msg').style.display = 'block';

  setTimeout (function go_rtan() {
    alert('사랑하는 작가님~♪♬ 생일 축하합니다\n특별 공연을 시작합니다!');
    window.open('https://youtu.be/AWrXKyFzg0o');
  }, 2000);

}

document.querySelector('.rtan').addEventListener('click', hidden_msg);