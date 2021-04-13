const searchEl = document.querySelector('.search'); // document도 하나의 요소 = html로 보면 된다.
const searchInputEl = searchEl.querySelector('input') // 찾은 요소를 넣은 변수의 명으로 querySelector를 통해 찾을 수 있다.

//검색창 이벤트 삽입
searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


//배지 이벤트 삽입
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY); 
  if (window.scrollY > 500) {
    //배지 숨기기
    // badgeEl.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션); gsap library 사용
    gsap.to(badgeEl, .6,{
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6,{
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)


// fade-in 이벤트 삽입
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});


// 수직-slide 이벤트 삽입
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true //반복 재생
});

// 수평-slide 이벤트 삽입
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 기본값임 그러므로 명시 안해도됨
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 2000 //ms 단위
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


//스타벅스 프로모션 버튼 (숨김/보임 처리) 이벤트 삽입
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


// 화살표의 방향 전환 이벤트 삽입
const toggleProEl = document.querySelector('.toggle-promotion');
const toggleRotateEl = document.querySelector('.toggle-promotion .material-icons');
let isRotate = false;
toggleRotateEl.addEventListener('click', function () {
  isRotate = !isRotate
  if (isRotate) {
    //180도 돌림
    toggleProEl.classList.add('rotate');
  } else {
    //원상 복귀
    toggleProEl.classList.remove('rotate');
  }
});