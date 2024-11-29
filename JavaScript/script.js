// 퀴즈 데이터 (30개 문제)
const quizData = [
    { question: "도박이란 무엇인가요?", options: ["돈이나 물건을 걸고 결과에 따라 이득이나 손실이 발생하는 활동", "규칙 없이 행해지는 오락 활동", "단순한 여가 활동", "친구와 함께 즐기는 스포츠"], answer: 0 },
    { question: "도박 중독의 주요 원인은 무엇인가요?", options: ["운 좋게 큰 상금을 얻을 수 있다는 기대감", "친구들과의 유대감 강화", "게임의 규칙을 잘 몰라서", "시간을 낭비하는 것"], answer: 0 },
    { question: "도박 예방을 위한 가장 중요한 방법은 무엇인가요?", options: ["도박을 시작하지 않는 것", "도박을 잠시 쉬는 것", "도박을 즐길 수 있는 환경 만들기", "도박에서 이기는 방법 배우기"], answer: 0 },
    { question: "도박을 처음 시작하게 되는 주요 원인은 무엇인가요?", options: ["호기심과 재미", "친구의 권유", "어려운 상황에서 탈출하려는 욕구", "돈을 쉽게 벌 수 있다는 생각"], answer: 0 },
    { question: "도박을 한다면 어떤 문제가 발생할 수 있나요?", options: ["시간과 돈의 낭비", "건강 문제", "사회적 관계 악화", "모든 문제들"], answer: 3 },
    { question: "도박에 빠진 사람은 어떤 특성을 보일 수 있나요?", options: ["자주 무리한 행동을 한다", "과도한 음주를 한다", "예상 외의 행동을 한다", "모든 답이 맞다"], answer: 3 },
    { question: "도박 중독의 초기 증상은 무엇인가요?", options: ["도박을 하기 위해 가짜 정보를 만든다", "도박에 너무 많은 시간을 소비한다", "도박을 계속 반복한다", "가족과 친구들에게 도박을 숨기려고 한다"], answer: 1 },
    { question: "도박을 예방하는 방법 중 가장 중요한 것은 무엇인가요?", options: ["도박을 하지 않는 것", "도박을 단기적으로 즐기는 것", "돈을 잃더라도 계속해서 도박을 하는 것", "친구와 함께 도박을 즐기는 것"], answer: 0 },
    { question: "청소년들이 도박에 빠지지 않도록 예방하려면 어떻게 해야 할까요?", options: ["도박의 위험성을 알리는 교육을 한다", "도박이 재미있다고 알려준다", "도박을 잠시 쉬게 한다", "도박에 대한 감정을 자극하는 게임을 즐긴다"], answer: 0 },
    { question: "인터넷 도박에 빠지지 않도록 예방하려면 어떻게 해야 할까요?", options: ["게임 사이트에 접속하지 않는다", "인터넷 도박 사이트를 찾아본다", "게임에서 돈을 걸고 참여한다", "도박에 대한 감정을 자극하는 게임을 즐긴다"], answer: 0 },
    { question: "도박 중독에서 벗어나려면 무엇을 해야 할까요?", options: ["도박을 계속해서 한다", "상담을 받는다", "혼자서 해결하려고 한다", "돈을 계속해서 모은다"], answer: 1 },
    { question: "도박을 예방하기 위해 가장 중요한 사회적 요인은 무엇인가요?", options: ["건강한 또래 관계", "부모의 개입", "학교에서의 교육", "돈을 잘 관리하는 방법 배우기"], answer: 0 },
    { question: "도박의 특징 중 올바른 것은 무엇인가요?", options: ["게임과 경쟁을 즐길 수 있는 활동", "결과가 예측 불가능한 활동", "기본적으로 법적으로 허용되는 활동", "돈을 벌 수 있는 유일한 방법"], answer: 1 },
    { question: "도박 중독의 예방법으로 잘못된 것은 무엇인가요?", options: ["도박을 전혀 하지 않는다", "도박을 잠시 쉬게 한다", "도박을 한 번씩 즐긴다", "도박의 위험성을 알리는 교육을 한다"], answer: 2 },
    { question: "도박 중독으로 인한 피해는 무엇인가요?", options: ["금전적 손실", "심리적 문제", "사회적 문제", "모든 피해들"], answer: 3 },
    { question: "도박을 예방하기 위해 가정에서 할 수 있는 방법은 무엇인가요?", options: ["도박을 전혀 금지한다", "도박을 자주 허락한다", "도박에 대해 논의하고 교육을 진행한다", "도박에 대해서 얘기하지 않는다"], answer: 2 },
    { question: "도박에 빠진 친구가 있다면 어떻게 해야 할까요?", options: ["함께 도박을 한다", "도박을 그만두도록 설득한다", "도박이 위험하다고 말한다", "도박을 무시한다"], answer: 1 },
    { question: "도박의 부작용으로 가장 큰 것은 무엇인가요?", options: ["심리적 스트레스", "재정적 어려움", "가족 관계의 파탄", "모든 것이 결합된 문제"], answer: 3 },
    { question: "도박 중독을 방지하려면 어떻게 해야 할까요?", options: ["도박을始시키지 않는다", "도박에 빠지지 않도록 경각심을 갖는다", "돈을 많이 벌 수 있다는 생각을 버린다", "계속 도박을 한다"], answer: 1 },
    { question: "도박을 예방하는 방법으로 올바른 것은 무엇인가요?", options: ["도박을 규칙적으로 한다", "도박의 결과를 예측한다", "도박을 하지 않도록 하는 교육을 한다", "도박이 재미있다고 홍보한다"], answer: 2 },
    { question: "도박 중독을 예방하기 위해 가장 중요한 것은 무엇인가요?", options: ["건전한 여가 활동을 하는 것", "도박을 자주 즐기는 것", "도박을 강제로 금지하는 것", "도박을 장려하는 것"], answer: 0 },
    { question: "도박에 빠지지 않기 위한 주의 사항은 무엇인가요?", options: ["도박의 유혹에 빠지지 않도록 주의한다", "도박을 자주 즐긴다", "도박에 돈을 걸지 않는다", "도박이 재미있다고 생각한다"], answer: 0 },
    { question: "청소년들이 도박을 피하려면 어떻게 해야 할까요?", options: ["도박을 하지 않는다", "도박을 한번 해본다", "도박을 일상적으로 한다", "도박이 위험하다는 교육을 받는다"], answer: 0 },
    { question: "도박에 빠진 이유 중 하나는 무엇인가요?", options: ["시간을 낭비하고 싶어서", "돈을 쉽게 벌 수 있다고 믿어서", "친구들이 도박을 하여 유혹받아서", "모든 것"], answer: 1 },
    { question: "도박을 예방하는 방법으로 효과적인 것은 무엇인가요?", options: ["도박을 완전히 끊는다", "도박을 규칙적으로 한다", "도박에 대한 교육을 받는다", "도박에 빠지도록 한다"], answer: 0 },
    { question: "도박에 빠진 후에 해결할 수 있는 방법은 무엇인가요?", options: ["도박을 끊는다", "도박을 계속 한다", "친구들에게 상담을 요청한다", "가족들에게 비밀로 한다"], answer: 0 },
    { question: "도박을 예방하는 방법은 무엇인가요?", options: ["도박을 하지 않는다", "도박을 잠시 쉬게 한다", "도박을 계속한다", "도박을 친구와 한다"], answer: 0 }
];

// 팀 점수와 이름 관리
let teamNames = ["", "", "", ""];
let scores = [0, 0, 0, 0];
let currentQuestionIndex = 0;

// 팀 이름 입력 후 퀴즈 시작
document.getElementById('start-quiz').addEventListener('click', function() {
    teamNames[0] = document.getElementById('team1-name').value;
    teamNames[1] = document.getElementById('team2-name').value;
    teamNames[2] = document.getElementById('team3-name').value;
    teamNames[3] = document.getElementById('team4-name').value;

    document.getElementById('team-names').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    loadQuestion(currentQuestionIndex);
});

function loadQuestion(index) {
    const questionData = quizData[index];
    document.getElementById('question').innerText = questionData.question;
    document.getElementById('option1').innerText = questionData.options[0];
    document.getElementById('option2').innerText = questionData.options[1];
    document.getElementById('option3').innerText = questionData.options[2];
    document.getElementById('option4').innerText = questionData.options[3];
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        scores[currentQuestionIndex % 4]++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    let resultText = '';
    scores.forEach((score, index) => {
        resultText += `${teamNames[index]}: ${score}점\n`;
    });
    document.getElementById('result').innerText = resultText;
}