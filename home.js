// Subject categories
const subjects = [
    {
        id: 1,
        name: 'Triết',
        title: 'Triết học Mác - Lênin',
        description: 'Tổng hợp các chủ đề về Triết học Mác - Lênin',
        icon: '🧠',
        quizCount: 7,
        questionCount: 272,
        link: 'triet/index.html'
    },
    {
        id: 2,
        name: 'Vi mạch',
        title: 'Nhập môn vi mạch',
        description: 'Tổng hợp các chủ đề về vi mạch tích hợp',
        icon: '💻',
        quizCount: 1,
        questionCount: 27,
        link: 'vi-mach/index.html'
    }
];

// Render subject cards
function renderSubjectList() {
    const container = document.getElementById('quiz-list');
    container.innerHTML = '';

    subjects.forEach(subject => {
        const card = document.createElement('a');
        card.className = 'subject-card';
        card.href = subject.link;

        card.innerHTML = `
            <div class="subject-icon">${subject.icon}</div>
            <div class="subject-info">
                <h2 class="subject-title">${subject.title}</h2>
                <p class="subject-description">${subject.description}</p>
                <div class="subject-meta">
                    <span>${subject.quizCount} bài học</span>
                    <span>•</span>
                    <span>${subject.questionCount} câu hỏi</span>
                </div>
            </div>
            <div class="arrow-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;

        container.appendChild(card);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderSubjectList);
