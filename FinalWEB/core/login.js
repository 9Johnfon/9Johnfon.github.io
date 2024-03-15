var jwt = localStorage.getItem("jwt");
var currentPage = window.location.href;
if (jwt == null && !(currentPage.includes("login.html"))) {
        window.location.href = 'login.html';
};



function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    var pass = "WWxkV2EySllUakU9";
    var decoded1 = atob(pass);
    var decoded2 = atob(decoded1);
    var decodedEND = atob(decoded2);

    // Replace 'paramed' with your actual username and password
    const correctUsername = decodedEND;
    const correctPassword = decodedEND + "1848";

    if ((enteredUsername) === correctUsername && enteredPassword === correctPassword) {
        // Successful login, you can store JWT or perform other actions
        localStorage.setItem("jwt", "42392734892789fy8678326478t21tqwesgwhbhvc73y47ty1284g12u3g3uh12g3ugff9");
        Swal.fire({
            title: 'เข้าสู่ระบบสําเร็จ',
            text: 'กําลังเปลี่ยนเส้นทาง...',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
                window.location.replace('AnatomyLecture.html');
            }
        });
    } else {
        Swal.fire({
            title: 'เข้าสู่ระบบล้มเหลว!',
            text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
            icon: 'error'
        });
    }

    return false; // Prevents the form from submitting
}


