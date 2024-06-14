document.addEventListener("DOMContentLoaded", function() {
    const content = "Hello, I’m Sunghee!";
    const text = document.querySelector(".one h1");
    let textIdx = 0;

    function typing() {
        let txt = content[textIdx++]; // txt에 content 문자 하나씩 넣기
        text.innerHTML += txt; // h1의 콘텐츠에 문자 넣기

        if (textIdx > content.length) { // 문자열이 모두 표시되면 초기화
            text.textContent = "";
            textIdx = 0;
        }
    }

    setInterval(typing, 150); // 150ms 간격으로 typing 함수 호출
});