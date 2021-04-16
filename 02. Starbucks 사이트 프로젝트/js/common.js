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

//년도 자동 출력 이벤트 추가
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021