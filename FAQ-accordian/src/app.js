const btn = document.querySelectorAll(".icon");
const answers = document.querySelectorAll(".answer");


for(let i = 0, len = btn.length; i < len; i++){
    btn[i].addEventListener("click", (e) => {
        const answer = e.target.parentElement.parentElement.lastElementChild;

        for(let i = 0, len = btn.length; i < len; i++){
            if("icon icon_open" === btn[i].classList.value && btn[i] != e.target){
                btn[i].classList.value = "icon";
            }

            if("answer answer_active" === answers[i].classList.value && answers[i] != answer){
                answers[i].classList.value = "answer";
            }
        }

        e.target.classList.toggle("icon_open");
        answer.classList.toggle("answer_active");
    });
}


