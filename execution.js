//실행컨텍스트: 함수를 실행할 떄 필요한 환경정보를 담은 객체(in js)
// Execution: 동일한 조건, 환경을 갖는 코드뭉치(전역공간, function, module > 다 함수라고 볼 수 있다.)
// Context: 를 실행할 때 필요한 조건, 환경정보

// 전역컨텍스트 시작
var a = 1
function outer() {
	console.log(a) // 1, 1
	function inner() {
		console.log(a) // 2, undefined
		var a = 3
	}
	// inner컨텍스트 시작
	inner()
	console.log(a) // 3, 1
}

// outer컨텍스트 시작
outer()
console.log(a) // 4, 1

// 스택: 마지막에 들어온 컨텍스트가 처음에 나가고 처음에 들어온 컨텍스트가 마지막에 나가는 것(FILO = first in last out)
// callstack: 현재 어떤함수가 동작중인지, 다음에 어떤함수가 호출될 예정인지등을 제어하는 자료구조

// Lexical Environment: 어휘적/사전적 환경, 실행컨텍스트에 대한 환경정보가 담겨있음
// > environmentRecord: 현재 문맥의 식별자 정보, 실핸컨텍스트 실행 시 제일먼저 수행 === HOISTING
// 호이스팅: 끌어올리다
console.log(a())
console.log(b())
console.log(c())

function a() {
	return 'a'
}
var b = function bb() {
	return 'bb'
}
var c = function() {
	return 'c'
}
// 호이스팅 했을때
function a() {
	return 'a'
}
var b;
var c;
// 위 a,b,c === environmentRecord
console.log(a())
console.log(b())
console.log(c())


b = function bb() {
	return 'bb'
}
c = function() {
	return 'c'
}
// > outerEnvironmentReference: 현재문맥과 관련있는 외부 식별자 정보, scope chain
// 스코프: 자기 외부론 나갈 수 있음, 내부론 못들어감, 변수의 유효범위