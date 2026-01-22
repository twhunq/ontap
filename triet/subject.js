// Quiz data for Philosophy subject
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
        title: 'Chủ đề 2: Quan niệm của chủ nghĩa duy vật biện chứng về vật chất, ý thức',
        description: 'Tìm hiểu về quan điểm của chủ nghĩa duy vật biện chứng về vật chất, ý thức và mối quan hệ giữa chúng trong quá trình nhận thức và thực tiễn.',
        questionCount: 29,
        file: 'quiz2.html'
    },
    {
        id: 3,
        title: 'Chủ đề 3: Mối quan hệ biện chứng giữa vật chất và ý thức',
        description: 'Tìm hiểu về mối quan hệ biện chứng giữa vật chất và ý thức, vai trò quyết định của vật chất đối với ý thức và tính năng động của ý thức.',
        questionCount: 30,
        file: 'quiz3.html'
    },
    {
        id: 4,
        title: 'Chủ đề 4: Hai nguyên lý, sáu cặp phạm trù của phép biện chứng duy vật',
        description: 'Tìm hiểu về hai nguyên lý cơ bản (nguyên lý liên hệ phổ biến và nguyên lý phát triển) cùng sáu cặp phạm trù của phép biện chứng duy vật.',
        questionCount: 30,
        file: 'quiz4.html'
    },
    {
        id: 5,
        title: 'Chủ đề 5: Các quy luật cơ bản của phép biện chứng duy vật',
        description: 'Tìm hiểu về ba quy luật cơ bản: quy luật chuyển hóa từ lượng đến chất, quy luật thống nhất và đấu tranh của các mặt đối lập, quy luật phủ định của phủ định.',
        questionCount: 30,
        file: 'quiz5.html'
    },
    {
        id: 6,
        title: 'Chủ đề 6: Lý luận nhận thức của chủ nghĩa duy vật biện chứng',
        description: 'Tìm hiểu về quá trình nhận thức, vai trò của thực tiễn, mối quan hệ giữa nhận thức cảm tính và lý tính trong quá trình nhận thức chân lý.',
        questionCount: 30,
        file: 'quiz6.html'
    },
    {
        title: 'Bài kiểm tra kỹ năng 1: Tổng hợp chủ đề 1, 2, 3',
        description: 'Bài kiểm tra tổng hợp toàn bộ kiến thức từ 3 chủ đề đầu tiên, giúp củng cố và đánh giá mức độ nắm vững kiến thức.',
        questionCount: 91,
        file: 'test1.html',
        isSkillTest: true
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
