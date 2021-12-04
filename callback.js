// 콜백함수: callback function: 제어권 위임
// 실행시점
var cb = function() {
	console.log('1초마다 실행')
}
setInterval(cb, 1000) // 1초 마다 cb함수 실행
// 매개변수
var arr = [1, 2, 3, 4]
var entries = []
arr.forEach(function(v, i) {
	entries.push([i, v, this[i]])
}, [10, 20, 30, 40])
// forEach(callbackFunc, [thisArg])
console.log(entries) // [0, 1, 10], [1, 2, 20], [2, 3, 30], [3, 4, 40]
// this
document.body.innerHTML = `<div id="a">abc</div>`
function cbFunc(x) {
	console.log(this, x) // currentTarget, Event(PointerEvent)
}
document.getElementById("a").addEventListener('click', cbFunc)
// 콜백함수 특징
// > 다른함수(A) 인자로 콜백함수(B)를 전달하면 A가 B의 제어권을 갖는다.
// > A가 미리 정해둔 방식에 따라 B를 호출한다. (특별한 요청(bind)이 없는 한)