var jwt = localStorage.getItem("jwt");
var currentPage = window.location.href;
if (jwt == null && !(currentPage.includes("login.html"))) {
    window.location.href = 'login.html';
};

var otpFromServer;

function SendOTP() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbydpHuQa5bTVS2QuXeZnNU2CU3SaN_GZSEFpERZxh1_BOPSeOFRVfUF-sFqjJvcMzrg/exec'
    const form = document.forms['login-form'];
    const enteredPassword = document.getElementById('password').value;
    var pass = "WWxkV2EySllUakU9";
    var decoded1 = atob(pass);
    var decoded2 = atob(decoded1);
    var decodedEND = atob(decoded2);

    const correctPassword = decodedEND + "18";

    if (enteredPassword !== correctPassword) {
        Swal.fire({
            title: 'เข้าสู่ระบบล้มเหลว!',
            text: 'รหัสผ่านไม่ถูกต้อง',
            icon: 'error'
        });

        return;  
    };


    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => response.json())
            .then(data => {
                otpFromServer = data.otp;
                var Encode = btoa(otpFromServer);
                var Encode2 = btoa(Encode);
                var EncodeEND = btoa(Encode2);
                localStorage.setItem("code",EncodeEND);
            })
            .catch(error => console.error('Error:', error));
    });
}


function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const enteredOTP = document.getElementById('otp').value;

    var pass = "WWxkV2EySllUakU9";
    var decoded1 = atob(pass);
    var decoded2 = atob(decoded1);
    var decodedEND = atob(decoded2);

    var code = localStorage.getItem("code");
    var decode1 = atob(code);
    var decode2 = atob(decode1);
    var decodeEND = atob(decode2);

    // Replace 'paramed' with your actual username and password
    const correctUsername = decodedEND;
    const correctPassword = decodedEND + "18";
    const correctOTP = decodeEND;
    

    if (enteredUsername !== null && enteredPassword === correctPassword) {
        // Check OTP
        
        if (enteredOTP === correctOTP) {
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
                text: 'OTP ไม่ถูกต้อง',
                icon: 'error'
            });
        }


    } else {
        Swal.fire({
            title: 'เข้าสู่ระบบล้มเหลว!',
            text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
            icon: 'error'
        });
    }
    localStorage.removeItem("code");
    return false; // Prevents the form from submitting
}





