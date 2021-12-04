// 클로저: 내부함수와 LexicalEnvironment의 조합
// 컨텍스트 A에서 선언한 변수를 내부함수 B에서 참조할 경우 발생하는 특별한 현상
var outer = function() {
	var a = 1;
	var inner = function() {
		return ++a
	}
	return inner
}
var outer2 = outer()
// outer 실행 컨텍스트는 사라지지만 리턴받은 inner 함수에서 변수 a를 사라지지 않는다.
// outer 실행 컨텍스트에 environmentRecord a: 1이 살아있다.
console.log(outer2()) // 2
console.log(outer2()) // 3
// 함수종료 후에도 사라지지않는 지역변수를 만들 수 있다.
// 외부로부터 내부변수 보호(캡슐화)