// 데이터타입
// 기본형 : Number, String, Boolean, null, undefined, [ES6] Symbol
// 참고형 : Object : Array, Function, RegExp, [ES6] Set/WeakSet, Map/WeakMap

// 자바스크립트 메모리구조
// stack: 변수, 기본형데이터 저장, 정적할당
// > 기본형데이터 값은 불변값이다. ex) 값을 'ab'에서 'abc'로 변경 시에 값 'ab'를 바꾸는게 아니라 새 값 'abc' 을 보게됨
// > 참조카운트가 "0"일때 가비지 컬럭터로 가고 후에 사라짐(위에서 'ab'를 참조하는 값이 없을 때)
// heap:: 참조형데이터 저장, 동적할당

var str = 'test'
// 변수영역 주소확보 > 변수영역 데이터에 이름 str 저장 >
// 데이터영역 주소확보 > 데이터영역 데이터에 'test' 저장 > 데이터영역 주소를 변수영역 데이터의 값으로 저장

// 변수복사
// 기본형
var a = 10
var b = a // b변수 영역 주소확보 > b값은 a값주소랑 같은 주소를 바라보게 함
b = 2 // 값2주소 추가하여 b변수 값을 값2주소 바라보게 함
// 참조형
var obj1 = {
	c: 10,
	d: 'ddd'
}
var obj2 = obj1
// obj2 변수영역 추가 > obj2값은 obj1의 값주소 바라봄(obj1, 2가 같은 값주소를 바라봄)
obj2.c = 20
// obj1, obj2 같은 값주소를 바라보고 있기 떄문에 obj1.c === obj2.c === 20(c값이 둘다 20으로 바뀜)