// Quiz data
const quizzes = [
    {
        id: 1,
        title: 'Chủ đề 1: Khái luận về Triết học, Triết học Mác - Lênin và vai trò của Triết học Mác - Lênin trong công cuộc đổi mới ở Việt Nam hiện nay',
        description: 'Tìm hiểu về khái niệm triết học, sự ra đời và phát triển của triết học Mác-Lênin, cũng như vai trò của nó trong việc định hướng công cuộc đổi mới toàn diện ở Việt Nam.',
        questionCount: 32,
        file: 'quiz1.html'
    },
    {
        id: 2,
        title: 'Chủ đề 2: Sắp ra mắt',
        description: 'Nội dung đang được cập nhật...',
        questionCount: 0,
        file: '#',
        disabled: true
    },
    {
        id: 3,
        title: 'Chủ đề 3: Sắp ra mắt',
        description: 'Nội dung đang được cập nhật...',
        questionCount: 0,
        file: '#',
        disabled: true
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

        card.innerHTML = `
            <div class="quiz-number">Bài ${quiz.id}</div>
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
