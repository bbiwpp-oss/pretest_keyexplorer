// ======================================================
// แบบทดสอบก่อนเรียน - 15 ข้อ
// ======================================================

// ===============================
// Google Apps Script
// ===============================
const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzFDjvVyxmArAkoRX27WOfJCJHcDQmlMaI5nQ6Ev-rlzi4awL7ooGG-pUdKD2t7lk6tSA/exec";


// ===============================
// เสียงเอฟเฟกต์
// ===============================
const sounds = {
    wrong: new Audio("sounds/freesound_community-wrong-47985.mp3"),
    correct: new Audio("sounds/dragon-studio-correct.mp3"),
    finish: new Audio("sounds/freesound_community-game-start-6104.mp3"),
    click: new Audio("sounds/matthewvakaliuk73627-mouse-click-290204.mp3")
};


// ป้องกันเสียงกระตุก/ซ้อนกัน
function playSound(sound) {
    try {
        sound.pause();
        sound.currentTime = 0;

        const playPromise = sound.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {});
        }
    } catch (error) {
        console.log("ไม่สามารถเล่นเสียงได้", error);
    }
}


// ===============================
// ข้อมูลคำถาม
// ===============================

const questions = [

    // --------------------------------
    // ข้อ 1
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ร"</span> บนแป้นพิมพ์',
        answer: "ร",
        keyboard: "images/keyboard_q1.png"
    },

    // --------------------------------
    // ข้อ 2
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ห"</span> บนแป้นพิมพ์',
        answer: "ห",
        keyboard: "images/keyboard_q2.png"
    },

    // --------------------------------
    // ข้อ 3
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ท"</span> บนแป้นพิมพ์',
        answer: "ท",
        keyboard: "images/keyboard_q3.png"
    },

    // --------------------------------
    // ข้อ 4
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ไ"</span> บนแป้นพิมพ์',
        answer: "ไ",
        keyboard: "images/keyboard_q4.png"
    },

    // --------------------------------
    // ข้อ 5
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ถ"</span> บนแป้นพิมพ์',
        answer: "ถ",
        keyboard: "images/keyboard_q5.png"
    },

    // --------------------------------
    // ข้อ 6
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ต"</span> บนแป้นพิมพ์',
        answer: "ต",
        keyboard: "images/keyboard_q6.png"
    },

    // --------------------------------
    // ข้อ 7
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"น"</span> บนแป้นพิมพ์',
        answer: "น",
        keyboard: "images/keyboard_q7.png"
    },

    // --------------------------------
    // ข้อ 8
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ข"</span> บนแป้นพิมพ์',
        answer: "ข",
        keyboard: "images/keyboard_q8.png"
    },

    // --------------------------------
    // ข้อ 9
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ช"</span> บนแป้นพิมพ์',
        answer: "ช",
        keyboard: "images/keyboard_q9.png"
    },

    // --------------------------------
    // ข้อ 10
    // --------------------------------
    {
        type: "text",
        question: 'จงหาปุ่ม <span>"ะ"</span> บนแป้นพิมพ์',
        answer: "ะ",
        keyboard: "images/keyboard_q10.png"
    },

    // ==================================================
    // ปุ่มพิเศษ ข้อ 11–15
    // ==================================================

    // --------------------------------
    // ข้อ 11
    // --------------------------------
    {
        type: "choice",
        question: 'ถ้าต้องการขึ้นบรรทัดใหม่ ควรกดปุ่มใด',
        keyboard: "images/keyboard_q11.png",
        choices: [
            "Enter",
            "Spacebar",
            "Backspace"
        ],
        answer: "Enter"
    },

    // --------------------------------
    // ข้อ 12
    // --------------------------------
    {
        type: "choice",
        question: 'ถ้าต้องการเว้นวรรคระหว่างคำ ควรกดปุ่มใด',
        keyboard: "images/keyboard_q12.png",
        choices: [
            "Spacebar",
            "Enter",
            "Shift"
        ],
        answer: "Spacebar"
    },

    // --------------------------------
    // ข้อ 13
    // --------------------------------
    {
        type: "choice",
        question: 'ถ้าต้องการลบตัวอักษรที่พิมพ์ผิด ควรกดปุ่มใด',
        keyboard: "images/keyboard_q13.png",
        choices: [
            "Backspace",
            "Enter",
            "Spacebar"
        ],
        answer: "Backspace"
    },

    // --------------------------------
    // ข้อ 14
    // --------------------------------
    {
        type: "choice",
        question: 'ถ้าต้องการพิมพ์ตัวอักษรด้านบน ควรกดปุ่มใด',
        keyboard: "images/keyboard_q14.png",
        choices: [
            "Shift",
            "Enter",
            "Backspace"
        ],
        answer: "Shift"
    },

    // --------------------------------
    // ข้อ 15
    // --------------------------------
    {
        type: "choice",
        question: 'ปุ่มใดใช้สำหรับเปิดหรือปิดการพิมพ์ตัวเลข',
        keyboard: "images/keyboard_q15.png",
        choices: [
            "Num Lock",
            "Shift",
            "Spacebar"
        ],
        answer: "Num Lock"
    }

];


// ======================================================
// ตัวแปรระบบ
// ======================================================

let currentQuestion = 0;
let score = 0;

const TOTAL_QUESTIONS = questions.length;

// เวลา 5 นาที
const TOTAL_TIME = 300;

let time = TOTAL_TIME;
let timeUsed = 0;

let timerInterval = null;

let isAnswering = false;
let quizFinished = false;

let selectedChoice = "";


// ======================================================
// ดึง Element จาก HTML
// ======================================================

const submitBtn =
    document.querySelector(".submit-btn");

const progressFill =
    document.querySelector(".progress-fill");

const timerText =
    document.querySelector(".timer-text");

const popup =
    document.getElementById("popupMessage");

const answerInput =
    document.getElementById("answerInput");

const answerArea =
    document.querySelector(".answer-area");

const choiceArea =
    document.getElementById("choiceArea");

const frameTitle =
    document.querySelector(".frame-title");

const questionTitle =
    document.querySelector(".question-title");

const questionSubtitle =
    document.querySelector(".question-subtitle");

const keyboardImage =
    document.querySelector(".keyboard-image");


// ======================================================
// ตรวจสอบ Element
// ======================================================

if (!submitBtn) {
    console.error("ไม่พบ .submit-btn");
}

if (!answerInput) {
    console.error("ไม่พบ #answerInput");
}

if (!answerArea) {
    console.error("ไม่พบ .answer-area");
}

if (!choiceArea) {
    console.error("ไม่พบ #choiceArea");
}


// ======================================================
// โหลดคำถาม
// ======================================================

function loadQuestion() {

    if (currentQuestion >= TOTAL_QUESTIONS) {
        finishQuiz(false);
        return;
    }

    const q = questions[currentQuestion];

    // --------------------------------
    // สถานะเริ่มตอบข้อใหม่
    // --------------------------------
    isAnswering = false;
    selectedChoice = "";

    // --------------------------------
    // หัวข้อข้อ
    // --------------------------------
    frameTitle.textContent =
        `ข้อที่ ${currentQuestion + 1} / ${TOTAL_QUESTIONS}`;

    // --------------------------------
    // คำถาม
    // --------------------------------
    questionTitle.innerHTML = q.question;

    // --------------------------------
    // คำอธิบาย
    // --------------------------------
    if (q.type === "text") {

        questionSubtitle.textContent =
            "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ";

    } else {

        questionSubtitle.textContent =
            "เลือกปุ่มที่คิดว่าถูกต้อง แล้วกดส่งคำตอบ";
    }

    // --------------------------------
    // รูปแป้นพิมพ์
    // --------------------------------
    keyboardImage.src = q.keyboard;

    // --------------------------------
    // Progress Bar
    // --------------------------------
    const progress =
        ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;

    progressFill.style.width =
        `${progress}%`;


    // ==================================================
    // ข้อแบบพิมพ์คำตอบ
    // ==================================================

    if (q.type === "text") {

        answerArea.style.display = "flex";

        choiceArea.style.display = "none";

        // ล้างคำตอบเก่า
        answerInput.value = "";

        // เปิดช่อง
        answerInput.disabled = false;

        // เอาสถานะ selected ออก
        selectedChoice = "";

        // เปิดปุ่มส่ง
        submitBtn.disabled = false;

        // ให้เคอร์เซอร์อยู่ในช่องทันที
        setTimeout(() => {
            answerInput.focus();
        }, 100);

    }


    // ==================================================
    // ข้อแบบเลือกตัวเลือก
    // ==================================================

    else {

        answerArea.style.display = "none";

        choiceArea.style.display = "flex";

        // ล้างตัวเลือกเดิม
        choiceArea.innerHTML = "";

        selectedChoice = "";

        // สร้างปุ่มตัวเลือก
        q.choices.forEach((choice) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className = "choice-btn";

            button.textContent = choice;

            button.dataset.value = choice;

            button.addEventListener("click", () => {

                if (isAnswering || quizFinished) {
                    return;
                }

                // เอา selected จากทุกปุ่มออก
                const allButtons =
                    choiceArea.querySelectorAll(".choice-btn");

                allButtons.forEach((btn) => {
                    btn.classList.remove("selected");
                });

                // เลือกปุ่มนี้
                button.classList.add("selected");

                selectedChoice = choice;

            });

            choiceArea.appendChild(button);

        });

        // เปิดปุ่มส่ง
        submitBtn.disabled = false;

    }

}


// ======================================================
// Timer
// ======================================================

function updateTimer() {

    timerText.textContent =
        formatTime(time);

}


// ======================================================
// เริ่ม Timer
// ======================================================

function startTimer() {

    // กัน timer ซ้อน
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    updateTimer();

    timerInterval = setInterval(() => {

        if (quizFinished) {
            clearInterval(timerInterval);
            return;
        }

        time--;

        timeUsed++;

        updateTimer();

        // หมดเวลา
        if (time <= 0) {

            time = 0;

            updateTimer();

            clearInterval(timerInterval);

            finishQuiz(true);

        }

    }, 1000);

}


// ======================================================
// แปลงวินาทีเป็น MM:SS
// ======================================================

function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}


// ======================================================
// แสดง Popup
// ======================================================

function showPopup(message, type) {

    popup.textContent = message;

    popup.classList.remove(
        "correct",
        "wrong",
        "show"
    );

    if (type) {
        popup.classList.add(type);
    }

    // บังคับให้ animation เริ่มใหม่
    void popup.offsetWidth;

    popup.classList.add("show");

}


// ======================================================
// ซ่อน Popup
// ======================================================

function hidePopup() {

    popup.classList.remove("show");

}


// ======================================================
// ตรวจคำตอบ
// ======================================================

function checkAnswer() {

    // ป้องกันการกดซ้ำ
    if (isAnswering || quizFinished) {
        return;
    }

    const q = questions[currentQuestion];

    let userAnswer = "";


    // ==================================================
    // ถ้าเป็นข้อพิมพ์
    // ==================================================

    if (q.type === "text") {

        userAnswer =
            answerInput.value.trim();

        // ยังไม่ได้ตอบ
        if (userAnswer === "") {

            return;
        }

    }


    // ==================================================
    // ถ้าเป็นข้อเลือก
    // ==================================================

    else {

        userAnswer = selectedChoice;

        // ยังไม่ได้เลือก
        if (!userAnswer) {

            return;
        }

    }


    // ==================================================
    // ล็อกคำตอบ
    // ==================================================

    isAnswering = true;

    // ปิดปุ่มส่ง
    submitBtn.disabled = true;


    // ปิดช่องพิมพ์
    if (q.type === "text") {
        answerInput.disabled = true;
    }


    // ==================================================
    // ตรวจคำตอบ
    // ==================================================

    const isCorrect =
        userAnswer === q.answer;


    // ==================================================
    // ตอบถูก
    // ==================================================

    if (isCorrect) {

        score++;

        playSound(sounds.correct);

        showPopup(
            "ตอบถูกต้อง ✓",
            "correct"
        );

    }


    // ==================================================
    // ตอบผิด
    // ==================================================

    else {

        playSound(sounds.wrong);

        showPopup(
            "ตอบไม่ถูกต้อง ✗",
            "wrong"
        );

    }


    // ==================================================
    // ไปข้อถัดไป
    // ==================================================

    setTimeout(() => {

        hidePopup();

        currentQuestion++;

        if (currentQuestion >= TOTAL_QUESTIONS) {

            finishQuiz(false);

        } else {

            loadQuestion();

        }

    }, 1000);

}


// ======================================================
// เสียงคลิก + ตรวจคำตอบ
// ======================================================

submitBtn.addEventListener("click", () => {

    if (isAnswering || quizFinished) {
        return;
    }

    // เสียงคลิกส่งคำตอบ
    playSound(sounds.click);

    checkAnswer();

});


// ======================================================
// กด Enter เพื่อส่งคำตอบ
// ======================================================

answerInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        event.preventDefault();

        if (isAnswering || quizFinished) {
            return;
        }

        // เสียงคลิก
        playSound(sounds.click);

        checkAnswer();

    }

});


// ======================================================
// จบแบบทดสอบ
// ======================================================

function finishQuiz(timeUp = false) {

    // ป้องกันเรียกซ้ำ
    if (quizFinished) {
        return;
    }

    quizFinished = true;

    // หยุด Timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }


    // ==============================================
    // เวลาที่ใช้จริง
    // ==============================================

    const finalTime =
        formatTime(timeUsed);


    // ==============================================
    // บันทึกคะแนน
    // ==============================================

    localStorage.setItem(
        "score",
        score
    );


    // ==============================================
    // บันทึกจำนวนข้อ
    // ==============================================

    localStorage.setItem(
        "totalQuestions",
        TOTAL_QUESTIONS
    );


    // ==============================================
    // บันทึกเวลา
    // ==============================================

    localStorage.setItem(
        "time",
        finalTime
    );


    // ==============================================
    // บันทึกสถานะหมดเวลา
    // ==============================================

    localStorage.setItem(
        "timeUp",
        timeUp ? "true" : "false"
    );


    // ==============================================
    // เสียงจบแบบทดสอบ
    // ==============================================

    playSound(sounds.finish);


    // ==============================================
    // ส่งข้อมูลไป Google Sheets
    // ==============================================

    sendResultToGoogleSheet(
        score,
        finalTime,
        timeUp
    );


    // ==============================================
    // ถ้าหมดเวลา
    // ==============================================

    if (timeUp) {

        showPopup(
            "หมดเวลา",
            "wrong"
        );

        setTimeout(() => {

            window.location.href =
                "result.html";

        }, 1200);

    }


    // ==============================================
    // ถ้าทำครบ
    // ==============================================

    else {

        setTimeout(() => {

            window.location.href =
                "result.html";

        }, 500);

    }

}


// ======================================================
// ส่งผลไป Google Sheets
// ======================================================

function sendResultToGoogleSheet(
    finalScore,
    finalTime,
    timeUp
) {

    const data = {

        score: finalScore,

        totalQuestions:
            TOTAL_QUESTIONS,

        time:
            finalTime,

        timeUp:
            timeUp,

        timestamp:
            new Date().toISOString()

    };


    fetch(SCRIPT_URL, {

        method: "POST",

        mode: "no-cors",

        headers: {
            "Content-Type":
                "application/json"
        },

        body: JSON.stringify(data)

    })
    .then(() => {

        console.log(
            "ส่งข้อมูลเรียบร้อย"
        );

    })
    .catch((error) => {

        console.error(
            "ส่งข้อมูลไม่สำเร็จ:",
            error
        );

    });

}


// ======================================================
// เริ่มแบบทดสอบ
// ======================================================
;

// ยังไม่เริ่ม Timer จนกว่าจะกรอกเลขที่และเลือกชั้น

// ============================================
// ระบบเลือกชั้น + เลขที่
// ============================================

const loginScreen =
    document.getElementById("loginScreen");

const quizScreen =
    document.getElementById("quizScreen");

const numberInput =
    document.getElementById("numberInput");

const classInput =
    document.getElementById("classInput");

const startQuizBtn =
    document.getElementById("startQuizBtn");

const loginError =
    document.getElementById("loginError");


startQuizBtn.addEventListener("click", startQuiz);


function startQuiz() {

    const studentNumber =
        numberInput.value.trim();

    const studentClass =
        classInput.value;


    // ตรวจสอบข้อมูล

    if (
        studentNumber === "" ||
        studentClass === ""
    ) {

        loginError.style.display = "block";

        return;

    }


    loginError.style.display = "none";


    // เก็บข้อมูลนักเรียน

    localStorage.setItem(
        "studentNumber",
        studentNumber
    );

    localStorage.setItem(
        "studentClass",
        studentClass
    );


    // ซ่อนหน้าล็อกอิน

    loginScreen.style.display = "none";


    // แสดงหน้าข้อสอบ

    quizScreen.style.display = "block";


    // เริ่มข้อสอบ

    loadQuestion();

    startTimer();

}