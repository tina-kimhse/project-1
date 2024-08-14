window.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("#signup_form");

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // 등록 버튼 눌러도 새로고침 되지 않음
        const result = await fetch("http://localhost:3000/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: document.querySelector("#user_id").value,
                pwd: document.querySelector("#user_pwd").value,
                name: document.querySelector("#user_name").value,
                nick: document.querySelector("#user_nick").value,
                email: document.querySelector("#user_email").value,
                hint: document.querySelector("#user_hint").value,
            })
        });
    })
})