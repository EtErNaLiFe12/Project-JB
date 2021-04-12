const searchEl = document.querySelector('.search'); // document도 하나의 요소 = html로 보면 된다.
const searchInputEl = searchEl.querySelector('input') // 찾은 요소를 넣은 변수의 명으로 querySelector를 통해 찾을 수 있다.

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