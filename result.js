// ===========================
// แสดงคะแนน
// ===========================

const score =
    Number(localStorage.getItem("score")) || 0;

document.getElementById("score").textContent =
    score + " / 15";


// ===========================
// แสดงเวลา
// ===========================

const time =
    localStorage.getItem("time") || "00:00";

document.getElementById("time").textContent =
    time;


// ===========================
// ข้อความตามคะแนน
// ===========================

const message =
    document.getElementById("message");


if (score >= 13) {

    message.innerHTML =
        "🌟 <b>เก่งมาก!</b>";

}

else if (score >= 10) {

    message.innerHTML =
        "😊 <b>ดีมาก!</b>";

}

else if (score >= 8) {

    message.innerHTML =
        "👍 <b>พอใช้</b>";

}

else {

    message.innerHTML =
        "ควรทบทวนเพิ่มเติม";

}