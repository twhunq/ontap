// Quiz 3 questions data - CMOS Layout
const questions = [
    {
        question: "Trong công nghệ CMOS, layout của mạch tích hợp biểu diễn cấu trúc hình học vật lý và cách sắp xếp các lớp vật liệu (diffusion, polysilicon, kim loại, v.v.) trên chip.",
        options: [
            "Sai",
            "Đúng"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong công nghệ CMOS, khi bố trí (layout) một transistor, ta có thể quan sát cấu trúc vật lý của nó theo những góc nhìn nào? (Chọn 02 đáp án đúng)",
        options: [
            "Mặt cắt ngang (cross-section)",
            "Hình chiếu phối cảnh và biểu đồ năng lượng",
            "Hình nhìn từ trên xuống (top view)",
            "Sơ đồ logic và sơ đồ nguyên lý"
        ],
        correctAnswers: [0, 2],
        type: "multiple"
    },
    {
        question: "Trong thiết kế layout CMOS, đơn vị λ (lambda) thường có giá trị bằng bao nhiêu so với chiều dài kênh tối thiểu của transistor?",
        options: [
            "Bằng một nửa chiều dài kênh tối thiểu",
            "Bằng hai lần chiều dài kênh tối thiểu",
            "Không có quan hệ cố định với chiều dài kênh",
            "Bằng đúng chiều dài kênh tối thiểu"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Trong thiết kế layout CMOS, “Minimum Enclosure Rule” quy định:",
        options: [
            "Khoảng cách tối thiểu giữa hai vùng well khác loại",
            "Khoảng cách tối thiểu giữa cực Gate và vùng khuếch tán (active)",
            "Khoảng cách tối thiểu giữa hai dây kim loại song song trên cùng một lớp",
            "Lớp vật liệu bên ngoài (như metal hay poly) phải bao phủ hoàn toàn lớp bên trong (như contact hoặc via) một khoảng tối thiểu xác định"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Nếu mạch qua DRC nhưng không qua LVS, điều đó có nghĩa là gì, và mục tiêu của kiểm tra LVS (Layout Versus Schematic) là gì? (Chọn 2 đáp án đúng)",
        options: [
            "Mục tiêu của LVS là kiểm tra xem layout có khớp với sơ đồ nguyên lý hay không",
            "Layout đúng công nghệ nhưng kết nối sai so với schematic",
            "LVS dùng để đo công suất tiêu thụ của mạch",
            "Layout sai quy tắc công nghệ"
        ],
        correctAnswers: [0, 1],
        type: "multiple"
    },
    {
        question: "Mục đích chính của kiểm tra DRC (Design Rule Check) trong thiết kế layout CMOS là gì? (Chọn 03 đáp án đúng)",
        options: [
            "So sánh sơ đồ nguyên lý với layout",
            "Kiểm tra kích thước layout",
            "Kiểm tra quy tắc công nghệ của layout",
            "Kiểm tra khoảng cách layout"
        ],
        correctAnswers: [1, 2, 3],
        type: "multiple"
    },
    {
        question: "Trong công nghệ CMOS 45 nm, hai đường Metal 1 trong hình được vẽ cách nhau 4λ. Khoảng cách thực tế giữa chúng là bao nhiêu µm? Nhập đáp án theo đơn vị µm. Kết quả làm tròn 2 chữ số thập phân sau dấu phẩy ví dụ: 1,12",
        image: "layout-spacing.png",
        correctAnswer: "0,09",
        type: "fill-in",
        acceptedAnswers: ["0,09", "0.09", "0.09", "0,09"]
    },
    {
        question: "Nếu một lớp contact có kích thước 2λ × 2λ, thì diện tích thực tế của nó xấp xỉ bằng bao nhiêu?. Nhập đáp án theo đơn vị µm². Kết quả làm tròn 2 chữ số thập phân sau dấu phẩy ví dụ: 1,12",
        correctAnswer: "0,03",
        type: "fill-in",
        acceptedAnswers: ["0,03", "0.03"]
    },
    {
        question: "Trong công nghệ CMOS 180 nm, đơn vị λ (lambda) có giá trị xấp xỉ bằng bao nhiêu nm? (Nhập số nguyên. Không nhập đơn vị)",
        correctAnswer: "90",
        type: "fill-in",
        acceptedAnswers: ["90", "90nm", "90 nm"]
    },
    {
        question: "Trong mạch logic CMOS, transistor n-MOS hoạt động như:",
        options: [
            "Tải (Load)",
            "Mạng kéo lên (Pull-up network)",
            "Không được sử dụng trong mạch CMOS",
            "Mạng kéo xuống (Pull-down network)"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Trong mạch logic CMOS, transistor p-MOS hoạt động như:",
        options: [
            "Nối tắt xuống đất",
            "Mạng kéo lên (Pull-up network)",
            "Mạng kéo xuống (Pull-down network)",
            "Tải (Load)"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Hình sau biểu diễn layout của mạch nào dưới đây?",
        image: "cmos-inverter.png",
        options: [
            "Cổng NOR CMOS",
            "Mạch khuếch đại vi sai",
            "Cổng NAND CMOS",
            "Mạch đảo CMOS"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Công cụ DRC báo lỗi `CONT.SE.4` - Minimum 1.8 V gate Contact on Active Area spacing ≥ 0.07 µm. Quan sát layout nguyên nhân của lỗi này là gì?",
        image: "drc-spacing-error.png",
        options: [
            "Contact đặt sai lớp kim loại",
            "Khoảng cách giữa contact và vùng active nhỏ hơn giá trị tối thiểu quy định",
            "Chiều rộng contact nhỏ hơn giá trị tối thiểu",
            "Thiếu lớp nối substrate (well tap)"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong hình (b), các vùng khuếch tán và tiếp xúc được bố trí theo quy tắc nào để đảm bảo khoảng cách tối thiểu giữa pMOS và nMOS? (Chọn 2 đáp án đúng)",
        image: "layout-spacing-rules.png",
        options: [
            "Các tiếp xúc (contacts) được bố trí sao cho vẫn đảm bảo cách điện giữa PMOS và NMOS theo quy tắc well spacing.",
            "Khoảng cách giữa hai vùng khuếch tán được rút ngắn còn 8λ để tăng mật độ mạch.",
            "Tổng khoảng cách giữa hai vùng khuếch tán vẫn là 12λ, được chia thành các đoạn 4λ – 4λ – 4λ để đặt thêm contact và diffusion mở rộng.",
            "Không có quy tắc cố định, khoảng cách thay đổi tùy theo kích thước transistor."
        ],
        correctAnswers: [0, 2],
        type: "multiple"
    },
    {
        question: "Dựa trên layout CMOS inverter trong hình, khi đầu vào A = 1, ngõ ra Y sẽ có mức logic nào? (Nhập đáp án là số nguyên)",
        image: "inverter-logic-level.png",
        correctAnswer: "0",
        type: "fill-in",
        acceptedAnswers: ["0", "0V", "thấp", "low"]
    }
];

// Quiz Logic
let currentQuestionIndex = 0;
let userAnswers = [];
let isShuffled = false;
let isReviewMode = false;
let currentFilter = 'all';

// Shuffle array function
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize quiz
function initQuiz(shuffle = false) {
    isShuffled = shuffle;
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    isReviewMode = false;
    currentFilter = 'all';

    if (shuffle) {
        // Shuffle questions and their options
        questions.forEach(q => {
            if (q.type !== 'matching' && q.options) {
                const shuffledOptions = shuffleArray(q.options.map((opt, idx) => ({ text: opt, originalIndex: idx })));
                q.shuffledOptions = shuffledOptions.map(item => item.text);
                q.shuffledCorrectAnswers = q.correctAnswers.map(correctIdx =>
                    shuffledOptions.findIndex(item => item.originalIndex === correctIdx)
                );
            }
        });
    }

    showScreen('quiz-screen');
    renderQuestion();
}

// Show specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Render question
function renderQuestion() {
    const question = questions[currentQuestionIndex];
    const container = document.getElementById('question-container');

    let html = '';

    // Display instruction if exists
    if (question.instruction) {
        html += `<div class="question-instruction">${question.instruction}</div>`;
    }

    html += `<div class="question-text">${currentQuestionIndex + 1}. ${question.question}</div>`;

    // Display image if exists
    if (question.image) {
        html += `<div class="question-image"><img src="${question.image}" alt="Question diagram"></div>`;
    }

    // Handle fill-in questions
    if (question.type === 'fill-in') {
        const userAnswer = userAnswers[currentQuestionIndex] || '';
        const isCorrect = question.acceptedAnswers.some(ans =>
            userAnswer.toLowerCase().trim() === ans.toLowerCase().trim()
        );

        html += '<div class="options-container">';
        if (isReviewMode) {
            html += `
                <div class="fill-in-answer ${isCorrect ? 'correct' : 'wrong'}">
                    <strong>Câu trả lời của bạn:</strong> ${userAnswer || '(Chưa trả lời)'}
                </div>
                <div class="fill-in-correct">
                    <strong>Đáp án đúng:</strong> ${question.correctAnswer}
                </div>
            `;
        } else {
            html += `
                <input 
                    type="text" 
                    class="fill-in-input" 
                    placeholder="Nhập câu trả lời..." 
                    value="${userAnswer}"
                    onchange="handleFillInAnswer(this.value)"
                />
            `;
        }
        html += '</div>';
    } else if (question.type === 'drag-drop') {
        // Render drag and drop question
        html += '<div class="dnd-container">';

        // Source area with draggable items
        html += '<div class="dnd-source" id="dnd-source">';
        question.items.forEach(item => {
            const isPlaced = userAnswers[currentQuestionIndex]?.[item.id];
            if (!isPlaced) {
                html += `<div class="draggable-item" draggable="true" data-item-id="${item.id}">${item.text}</div>`;
            }
        });
        html += '</div>';

        // Drop zones
        html += '<div class="dnd-target-group">';
        question.zones.forEach(zone => {
            const placedItem = userAnswers[currentQuestionIndex]?.[zone.id];
            const itemData = question.items.find(i => i.id === placedItem);

            html += `
                <div class="dnd-zone">
                    <div class="dnd-zone-title">${zone.title}</div>
                    <div class="dnd-drop-box" data-zone-id="${zone.id}">
                        ${itemData ? `<div class="draggable-item" draggable="true" data-item-id="${itemData.id}">${itemData.text}</div>` : ''}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        html += '</div>';
    } else {
        // Handle multiple choice questions
        const currentOptions = isShuffled && question.shuffledOptions ? question.shuffledOptions : question.options;
        const currentCorrect = isShuffled && question.shuffledCorrectAnswers ? question.shuffledCorrectAnswers : question.correctAnswers;

        html += '<div class="options-container">';
        currentOptions.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestionIndex]?.includes(index);
            const isCorrect = currentCorrect.includes(index);

            let optionClass = 'option';
            if (isReviewMode) {
                if (isCorrect) optionClass += ' correct';
                if (isSelected && !isCorrect) optionClass += ' wrong';
                if (isSelected) optionClass += ' selected';
            } else if (isSelected) {
                optionClass += ' selected';
            }

            // Add checkbox class for multiple choice
            const letterClass = question.type === 'multiple' ? 'option-letter checkbox' : 'option-letter';

            html += `
                <div class="${optionClass}" onclick="selectOption(${index})">
                    <span class="${letterClass}">${String.fromCharCode(65 + index)}</span>
                    <span class="option-text">${option}</span>
                    ${isReviewMode && isCorrect ? '<span class="check-mark">✓</span>' : ''}
                </div>
            `;
        });
        html += '</div>';
    }

    container.innerHTML = html;
    updateProgress();
    updateNavigationButtons();

    // Initialize drag-drop if needed
    if (question.type === 'drag-drop') {
        initDragDrop();
    }
}

// Select option
function selectOption(index) {
    if (isReviewMode) return;

    const question = questions[currentQuestionIndex];

    if (!userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = [];
    }

    if (question.type === 'single') {
        userAnswers[currentQuestionIndex] = [index];
    } else {
        const answerIndex = userAnswers[currentQuestionIndex].indexOf(index);
        if (answerIndex > -1) {
            userAnswers[currentQuestionIndex].splice(answerIndex, 1);
        } else {
            userAnswers[currentQuestionIndex].push(index);
        }
    }

    renderQuestion();
}

// Handle fill-in answer
function handleFillInAnswer(value) {
    if (isReviewMode) return;
    userAnswers[currentQuestionIndex] = value.trim();
}

// Initialize drag and drop functionality
function initDragDrop() {
    const draggables = document.querySelectorAll('.draggable-item');
    const dropBoxes = document.querySelectorAll('.dnd-drop-box');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', handleDragStart);
        draggable.addEventListener('dragend', handleDragEnd);
    });

    dropBoxes.forEach(box => {
        box.addEventListener('dragover', handleDragOver);
        box.addEventListener('drop', handleDrop);
        box.addEventListener('dragleave', handleDragLeave);
    });

    // Also handle source area
    const source = document.getElementById('dnd-source');
    if (source) {
        source.addEventListener('dragover', handleDragOver);
        source.addEventListener('drop', handleDropToSource);
    }
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    if (!draggedElement) return;

    const dropBox = e.currentTarget;
    const zoneId = dropBox.dataset.zoneId;
    const itemId = draggedElement.dataset.itemId;

    // Remove any existing item in this zone
    const existingItem = dropBox.querySelector('.draggable-item');
    if (existingItem) {
        document.getElementById('dnd-source').appendChild(existingItem);
    }

    // Add the dragged item to this zone
    dropBox.appendChild(draggedElement);

    // Update user answers
    if (!userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = {};
    }
    userAnswers[currentQuestionIndex][zoneId] = itemId;

    draggedElement = null;
}

function handleDropToSource(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    if (!draggedElement) return;

    const itemId = draggedElement.dataset.itemId;

    // Find which zone this item was in and remove it from answers
    if (userAnswers[currentQuestionIndex]) {
        for (let zoneId in userAnswers[currentQuestionIndex]) {
            if (userAnswers[currentQuestionIndex][zoneId] === itemId) {
                delete userAnswers[currentQuestionIndex][zoneId];
            }
        }
    }

    // Add back to source
    document.getElementById('dnd-source').appendChild(draggedElement);
    draggedElement = null;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('current-question-num').textContent = currentQuestionIndex + 1;
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.disabled = currentQuestionIndex === 0;

    if (isReviewMode) {
        // In review mode, always hide submit button and show next/back buttons
        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Quay Lại Kết Quả' : 'Tiếp Theo';
    } else {
        // Normal quiz mode
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
        nextBtn.textContent = 'Tiếp Theo';
    }
}

// Navigate questions
function nextQuestion() {
    // In review mode, if at last question, go back to results
    if (isReviewMode && currentQuestionIndex === questions.length - 1) {
        showScreen('result-screen');
        isReviewMode = false;
        document.getElementById('review-filters').classList.add('hidden');
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

// Calculate score
function calculateScore() {
    let correct = 0;
    questions.forEach((question, index) => {
        if (question.type === 'fill-in') {
            // Check fill-in answer
            const userAnswer = userAnswers[index] || '';
            const isCorrect = question.acceptedAnswers.some(ans =>
                userAnswer.toLowerCase().trim() === ans.toLowerCase().trim()
            );
            if (isCorrect) correct++;
        } else if (question.type === 'drag-drop') {
            // Check drag-drop answer
            const userAnswer = userAnswers[index] || {};
            let allCorrect = true;
            question.zones.forEach(zone => {
                if (userAnswer[zone.id] !== zone.correctItem) {
                    allCorrect = false;
                }
            });
            if (allCorrect && Object.keys(userAnswer).length === question.zones.length) {
                correct++;
            }
        } else {
            // Check multiple choice answer
            const userAnswer = userAnswers[index] || [];
            const correctAnswer = isShuffled && question.shuffledCorrectAnswers ?
                question.shuffledCorrectAnswers : question.correctAnswers;

            if (userAnswer.length === correctAnswer.length &&
                userAnswer.every(ans => correctAnswer.includes(ans))) {
                correct++;
            }
        }
    });
    return (correct / questions.length) * 10;
}

// Submit quiz
function submitQuiz() {
    const score = calculateScore();
    document.getElementById('score-display').textContent = score.toFixed(1);

    let message = '';
    if (score >= 9) message = 'Xuất sắc! Bạn đã nắm vững kiến thức!';
    else if (score >= 7) message = 'Tốt! Bạn đã hiểu phần lớn nội dung!';
    else if (score >= 5) message = 'Khá! Hãy ôn lại một số phần!';
    else message = 'Cần cố gắng thêm! Hãy xem lại đáp án!';

    document.getElementById('result-message').textContent = message;
    showScreen('result-screen');
}

// Review answers
function reviewAnswers() {
    isReviewMode = true;
    currentQuestionIndex = 0;
    currentFilter = 'all';
    document.getElementById('review-filters').classList.remove('hidden');
    showScreen('quiz-screen');
    renderQuestion();
}

// Filter questions in review mode
function filterQuestions(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Find first question matching filter
    for (let i = 0; i < questions.length; i++) {
        if (matchesFilter(i, filter)) {
            currentQuestionIndex = i;
            renderQuestion();
            break;
        }
    }
}

function matchesFilter(index, filter) {
    if (filter === 'all') return true;

    const question = questions[index];

    if (question.type === 'fill-in') {
        const userAnswer = userAnswers[index] || '';
        const isCorrect = question.acceptedAnswers.some(ans =>
            userAnswer.toLowerCase().trim() === ans.toLowerCase().trim()
        );
        return (filter === 'correct' && isCorrect) || (filter === 'wrong' && !isCorrect);
    } else if (question.type === 'drag-drop') {
        const userAnswer = userAnswers[index] || {};
        let allCorrect = true;
        question.zones.forEach(zone => {
            if (userAnswer[zone.id] !== zone.correctItem) {
                allCorrect = false;
            }
        });
        const isCorrect = allCorrect && Object.keys(userAnswer).length === question.zones.length;
        return (filter === 'correct' && isCorrect) || (filter === 'wrong' && !isCorrect);
    } else {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = isShuffled && question.shuffledCorrectAnswers ?
            question.shuffledCorrectAnswers : question.correctAnswers;

        const isCorrect = userAnswer.length === correctAnswer.length &&
            userAnswer.every(ans => correctAnswer.includes(ans));

        return (filter === 'correct' && isCorrect) || (filter === 'wrong' && !isCorrect);
    }
}

// Retry quiz - only wrong questions
function retryQuiz() {
    // Find all wrong questions
    const wrongQuestions = [];
    questions.forEach((question, index) => {
        if (!matchesFilter(index, 'correct')) {
            wrongQuestions.push(index);
        }
    });

    if (wrongQuestions.length === 0) {
        alert('Bạn đã trả lời đúng tất cả các câu!');
        return;
    }

    // Create a filtered quiz with only wrong questions
    const originalQuestions = [...questions];
    const originalAnswers = [...userAnswers];

    // Filter to only wrong questions
    questions.length = 0;
    wrongQuestions.forEach(idx => {
        questions.push(originalQuestions[idx]);
    });

    // Reset and start
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    isReviewMode = false;
    showScreen('quiz-screen');
    renderQuestion();
}

// Event listeners
document.getElementById('start-btn').addEventListener('click', () => initQuiz(false));
document.getElementById('shuffle-btn').addEventListener('click', () => initQuiz(true));
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);
document.getElementById('submit-btn').addEventListener('click', submitQuiz);
document.getElementById('review-btn').addEventListener('click', reviewAnswers);
document.getElementById('retry-btn').addEventListener('click', () => initQuiz(false));
document.getElementById('retry-wrong-btn').addEventListener('click', retryQuiz);

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => filterQuestions(e.target.dataset.filter));
});
