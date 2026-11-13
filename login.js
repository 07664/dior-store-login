/* =====================================================
   DIOR STORE - LOGIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const loginMessage = document.getElementById("loginMessage");
    const rememberInput = document.getElementById("remember");


    /* =====================================================
       SHOW / HIDE PASSWORD
    ===================================================== */

    togglePassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.textContent = "🙈";

        } else {

            passwordInput.type = "password";
            togglePassword.textContent = "👁";

        }

    });


    /* =====================================================
       LOGIN FORM
    ===================================================== */

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();


        /* LOGIN DEMO */
        const correctUsername = "admin";
        const correctPassword = "dior123";


        /* RESET MESSAGE */
        loginMessage.textContent = "";


        /* VALIDASI USERNAME */
        if (username === "") {

            loginMessage.textContent =
                "Username wajib diisi.";

            loginMessage.style.color = "#b00020";

            usernameInput.focus();

            return;
        }


        /* VALIDASI PASSWORD */
        if (password === "") {

            loginMessage.textContent =
                "Password wajib diisi.";

            loginMessage.style.color = "#b00020";

            passwordInput.focus();

            return;
        }


        /* =================================================
           CEK LOGIN
        ================================================= */

        if (
            username === correctUsername &&
            password === correctPassword
        ) {

            loginMessage.textContent =
                "✓ Login berhasil! Mengarahkan...";

            loginMessage.style.color = "#9b781b";


            /* SIMPAN STATUS LOGIN */

            if (rememberInput.checked) {

                localStorage.setItem(
                    "diorLogin",
                    "true"
                );

            } else {

                sessionStorage.setItem(
                    "diorLogin",
                    "true"
                );

            }


            /* DISABLE BUTTON */

            const loginButton =
                loginForm.querySelector(".login-button");

            loginButton.disabled = true;

            loginButton.textContent =
                "LOADING...";


            /* REDIRECT */

            setTimeout(function () {

                window.location.href =
                    "dashboard.html";

            }, 1200);


        } else {

            loginMessage.textContent =
                "✕ Username atau password salah.";

            loginMessage.style.color = "#b00020";


            /* ANIMASI ERROR */

            loginForm.classList.add("login-error");

            setTimeout(function () {

                loginForm.classList.remove("login-error");

            }, 400);

        }

    });


    /* =====================================================
       ENTER UNTUK LOGIN
    ===================================================== */

    passwordInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            loginForm.dispatchEvent(
                new Event("submit")
            );

        }

    });


    /* =====================================================
       HILANGKAN PESAN SAAT USER MENGETIK
    ===================================================== */

    usernameInput.addEventListener("input", function () {

        loginMessage.textContent = "";

    });

    passwordInput.addEventListener("input", function () {

        loginMessage.textContent = "";

    });


    /* =====================================================
       CEK STATUS LOGIN
    ===================================================== */

    const alreadyLogin =
        localStorage.getItem("diorLogin") ||
        sessionStorage.getItem("diorLogin");


    /*
       Jika ingin user yang sudah login
       langsung masuk dashboard,
       hapus tanda komentar pada kode berikut.

    if (alreadyLogin === "true") {
        window.location.href = "dashboard.html";
    }
    */


});