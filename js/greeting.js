/** js-form의 input과 js-greetings 가져오기 */
const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_KEY = "Username", 
      NAME_SHOW = "showing";

/** 이름을 로컬에 저장 */
function saveName(text){
    localStorage.setItem(USER_KEY, text);
}

// 제출을 누르면 해당 값(이름)을 출력하고 저장
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// js-form이 보이게 해서 이름 물어보기
function askForName() {
    form.classList.add(NAME_SHOW);
    form.addEventListener("submit", handleSubmit);
}

// 이름 보여주기
function paintGreeting(text) {
    // 이름 물어보는거 안보이게 하기
    form.classList.remove(NAME_SHOW);
    // js-greeting 보이게 하기
    greeting.classList.add(NAME_SHOW);
    // 시간 받아오기
    const date = new Date();
    const hours = date.getHours();
    let mention = 'Hello';
    if(0<= hours && hours <= 4 || 20 < hours){
        mention = "오늘 하루도 힘차게 시작해봐요";
    } else if (hours<12){
        mention = "오늘 하루도 고생하셨어요";
    } else{
        mention = "퇴근까지 아자아자";
    }
    // js-greeting에 innerText 넣어주기
    greeting.innerText = `${mention}, ${text}님!`;
}

// 이름 불러오기
function loadName() {
    const Username = localStorage.getItem(USER_KEY);
    // 저장된 이름이 없으면 물어보기
    if(Username === null){
        askForName();
    }else{
        // 저장된 이름이 있으면 출력하기
        paintGreeting(Username);
    }
}
function init() {
    loadName();
}

init();