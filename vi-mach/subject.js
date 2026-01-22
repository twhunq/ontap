// Quiz data for Microelectronics subject
const quizzes = [
    {
        id: 1,
        title: 'Bài 1: Giới thiệu về vi mạch tích hợp',
        description: 'Tìm hiểu về khái niệm vi mạch tích hợp, phân loại, công nghệ chế tạo và các thành phần cơ bản.',
        questionCount: 27,
        file: 'quiz1.html'
    },
    {
        id: 2,
        title: 'Bài 2: MOSFET và CMOS Cơ Bản',
        description: 'Cấu trúc và nguyên lý hoạt động của MOSFET, threshold voltage, và công nghệ CMOS.',
        questionCount: 22,
        file: 'quiz2.html'
    },
    {
        id: 3,
        title: 'Bài 3: CMOS Layout',
        description: 'Kiến thức về bản vẽ layout, quy tắc thiết kế và kiểm tra LVS.',
        questionCount: 15,
        file: 'quiz3.html'
    },
    {
        id: 4,
        title: 'Bài 4: Quy trình thiết kế VLSI',
        description: 'Các giai đoạn thiết kế, công cụ CAD (SPICE, Cadence) và phương pháp luận trong VLSI.',
        questionCount: 21,
        file: 'quiz4.html'
    }
];

// Render quiz cards
function renderQuizList() {
    const container = document.getElementById('quiz-list');

    quizzes.forEach(quiz => {
        const card = document.createElement('a');
        card.className = 'quiz-card';
        card.href = quiz.disabled ? '#' : quiz.file;

        if (quiz.disabled) {
            card.style.opacity = '0.6';
            card.style.cursor = 'not-allowed';
            card.onclick = (e) => {
                e.preventDefault();
                alert('Bài quiz này đang được cập nhật!');
            };
        }

        const quizNumber = quiz.isSkillTest ? '' : `<div class="quiz-number">Bài ${quiz.id}</div>`;

        card.innerHTML = `
            ${quizNumber}
            <h2>${quiz.title}</h2>
            <p class="quiz-description">${quiz.description}</p>
            <div class="quiz-meta">
                <span class="question-count">${quiz.questionCount} câu hỏi</span>
                <button class="start-btn" ${quiz.disabled ? 'disabled' : ''}>
                    ${quiz.disabled ? 'Sắp ra mắt' : 'Bắt đầu'}
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderQuizList);
