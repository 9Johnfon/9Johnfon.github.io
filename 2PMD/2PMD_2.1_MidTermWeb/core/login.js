
var jwt = sessionStorage.getItem("jwt");
var currentPage = window.location.href;
if (jwt == null && !(currentPage.includes("login.html"))) {
    window.location.href = 'login.html';
};

var otpFromServer;

function SendOTP() {

    // ตรวจสอบว่ามีเวลาที่ส่ง OTP ล่าสุดไว้ใน sessionStorage หรือไม่
    const lastOTPSendTime = sessionStorage.getItem('lastOTPSendTime');
    if (lastOTPSendTime) {
        const currentTime = new Date().getTime();
        const timeDiffInSeconds = (currentTime - lastOTPSendTime) / 1000;

        // ตรวจสอบว่าผ่านไปเวลามากกว่า 30 นาทีหรือไม่
        if (timeDiffInSeconds < 30) { // 30 คือ 30 นาทีในหน่วยวินาที
            const remainingTime = Math.ceil(30 - timeDiffInSeconds);
            Swal.fire({
                title: 'กรุณารอสักครู่',
                text: `โปรดรอ ${remainingTime} วินาทีก่อนที่จะส่ง OTP อีกครั้ง`,
                icon: 'warning'
            });
            return;
        }
    }

    // ถ้าผ่านเงื่อนไขการ Cooldown ให้ส่ง OTP
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzZoIrhymoTwaBgbRp9XUmQ4JDjuTe9b7B-b_7WeX3YiCQKpNyVrc6ycQQUpJC66Ddm/exec';
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
        document.getElementById("sendOTPButton").disabled = true;
        e.preventDefault();
        // เช็คว่ามีการ Cooldown อยู่หรือไม่
        const lastOTPSendTime = sessionStorage.getItem('lastOTPSendTime');
        if (lastOTPSendTime) {
            const currentTime = new Date().getTime();
            const timeDiffInSeconds = (currentTime - lastOTPSendTime) / 1000;
            // ถ้าผ่านเวลา Cooldown ให้ทำการส่ง OTP
            if (timeDiffInSeconds >= 30) {
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => response.json())
                    .then(data => {
                        otpFromServer = data.otp;
                        var Encode = btoa(otpFromServer);
                        var Encode2 = btoa(Encode);
                        var EncodeEND = btoa(Encode2);
                        sessionStorage.setItem("code", EncodeEND);
                        // เก็บเวลาที่ส่ง OTP ล่าสุดไว้ใน sessionStorage
                        sessionStorage.setItem('lastOTPSendTime', new Date().getTime());
                    })
                    .catch(error => console.error('Error:', error));
            } else {
                // แสดงข้อความแจ้งเตือนถึงการ Cooldown
                const remainingTime = Math.ceil(30 - timeDiffInSeconds);
                Swal.fire({
                    title: 'กรุณารอสักครู่',
                    text: `โปรดรอ ${remainingTime} วินาทีก่อนที่จะส่ง OTP อีกครั้ง`,
                    icon: 'warning'
                });
            }
        } else {
            // ถ้าไม่มีการ Cooldown ให้ส่ง OTP ได้เลย
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => response.json())
                .then(data => {
                    otpFromServer = data.otp;
                    var Encode = btoa(otpFromServer);
                    var Encode2 = btoa(Encode);
                    var EncodeEND = btoa(Encode2);
                    sessionStorage.setItem("code", EncodeEND);
                    // เก็บเวลาที่ส่ง OTP ล่าสุดไว้ใน sessionStorage
                    sessionStorage.setItem('lastOTPSendTime', new Date().getTime());
                })
                .catch(error => console.error('Error:', error));
        }
    });

    
    setTimeout(() => {
        // เปิดใช้งานปุ่มใหม่
        document.getElementById("sendOTPButton").disabled = false;

        // แสดงข้อความแจ้งเตือนว่าส่ง OTP เสร็จสมบูรณ
    }, 10000); // เปิดใช้งานใหม่หลังจาก 30 วินาที (ปรับตามต้องการ)
    
}

function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value.toLowerCase();
    const enteredOTP = document.getElementById('otp').value;

    var pass = "WWxkV2EySllUakU9";
    var decoded1 = atob(pass);
    var decoded2 = atob(decoded1);
    var decodedEND = atob(decoded2);

    var code = sessionStorage.getItem("code");
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
            sessionStorage.setItem("jwt", "42392734892789fy8678326478t21tqwesgwhbhvc73y47ty1284g12u3g3uh12g3ugff9");
            Swal.fire({
                title: 'เข้าสู่ระบบสําเร็จ',
                text: 'กําลังเปลี่ยนเส้นทาง...',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                willClose: () => {
                    window.location.replace('Basic_phamaco.html');
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
    sessionStorage.removeItem("code");
    return false; // Prevents the form from submitting
}

