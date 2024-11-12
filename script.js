// script.js

function generateExercisePlan() {
    const goal = document.getElementById("goal").value;
    let output = "";

    if (goal.toLowerCase().includes("체중 감량")) {
        output = "추천 운동: 유산소 운동 (러닝, 자전거 타기), 근력 운동 (스쿼트, 플랭크)";
    } else if (goal.toLowerCase().includes("근력 증가")) {
        output = "추천 운동: 웨이트 트레이닝 (벤치프레스, 덤벨 컬), 전신 운동 (데드리프트)";
    } else {
        output = "목표에 따라 맞춤형 운동을 추천해드립니다.";
    }

    document.getElementById("exercise-output").innerText = output;
}

function calculateCalories() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);

    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        document.getElementById("calorie-output").innerText = "모든 값을 입력해주세요.";
        return;
    }

    // 간단한 일일 권장 칼로리 계산 (Mifflin-St Jeor Equation)
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const dailyCalories = bmr * 1.2; // 활동 수준: 낮음

    document.getElementById("calorie-output").innerText = `일일 권장 칼로리: ${Math.round(dailyCalories)} kcal`;
}

function trackWorkout() {
    const date = document.getElementById("workout-date").value;
    if (date === "") {
        alert("운동 날짜를 선택해주세요.");
        return;
    }

    const log = document.getElementById("workout-log");
    const entry = document.createElement("div");
    entry.innerText = `운동 기록: ${date}`;
    log.appendChild(entry);
}

// 진행 상황 시각화 (간단한 예시)
window.onload = function() {
    const ctx = document.getElementById("progressChart").getContext("2d");
    const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: '운동 횟수',
                data: [3, 4, 5, 6],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
