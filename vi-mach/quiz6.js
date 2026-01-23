// Quiz 6 questions data - Độ trễ và Công suất
const questions = [
    {
        question: "Thời gian trễ lan truyền (tpd) được định nghĩa là:",
        options: [
            "Thời gian trễ trung bình của mạch",
            "Thời gian nhỏ nhất giữa lúc lối vào thay đổi và lối ra đạt mức ổn định",
            "Thời gian cần để tín hiệu ra đạt 100% giá trị",
            "Thời gian lớn nhất giữa lúc lối vào đạt 50% và lối ra đạt 50%"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Thời gian trễ ô nhiễm (tcd) thể hiện:",
        options: [
            "Thời gian trễ do RC ký sinh",
            "Độ trễ nhỏ nhất của mạch",
            "Độ trễ trung bình",
            "Độ trễ lớn nhất của mạch"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong mô hình RC, hằng số thời gian τ = RC cho biết:",
        options: [
            "Thời gian để điện áp đạt giá trị 100%",
            "Độ trễ ô nhiễm",
            "Tốc độ truyền tín hiệu",
            "Thời gian để điện áp đạt 63% giá trị cuối"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Nếu transistor có điện trở hiệu dụng giảm một nửa, độ trễ lan truyền:",
        options: [
            "Không đổi",
            "Giảm bốn lần",
            "Tăng gấp đôi",
            "Giảm một nửa"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Chọn 2 yếu tố có ảnh hưởng lớn nhất đến độ trễ tổng thể của mạch CMOS:",
        options: [
            "Điện áp nguồn VDD",
            "Kích thước cell tiêu chuẩn",
            "Số tầng logic trong đường truyền",
            "Điện trở hiệu dụng của transistor"
        ],
        correctAnswers: [0, 3],
        type: "multiple"
    },
    {
        question: "Chọn 3 phát biểu đúng về mối quan hệ giữa điện trở – điện dung (RC) và độ trễ tổng thể của mạch CMOS:",
        instruction: "Sinh viên chọn 3 phương án đúng nhất",
        options: [
            "RC càng nhỏ thì mạch càng tiêu thụ nhiều công suất động.",
            "Khi điện trở tăng, điện áp ra đạt mức logic mong muốn chậm hơn.",
            "Độ trễ của mạch chỉ phụ thuộc vào điện trở, không phụ thuộc điện dung.",
            "Giảm giá trị R hoặc C đều giúp tín hiệu ra thay đổi nhanh hơn.",
            "Khi điện dung tải tăng, độ trễ lan truyền tăng theo tỉ lệ tuyến tính."
        ],
        correctAnswers: [1, 3, 4],
        type: "multiple"
    },
    {
        question: "Độ trễ lan truyền trong mạch CMOS có thể được ước lượng gần đúng theo mô hình ________, trong đó tín hiệu bị trễ do quá trình sạc và xả điện dung tải thông qua điện trở của transistor.",
        instruction: "Điền từ còn thiếu vào chỗ trống (1 từ):",
        type: "fill-in",
        acceptedAnswers: ["RC"],
        correctAnswer: "RC"
    },
    {
        question: "Mục đích của mô hình RC trong phân tích trễ là:",
        options: [
            "Xác định độ trễ lan truyền dựa trên điện trở và điện dung ký sinh.",
            "đo tần số dao động của mạch.",
            "Mô phỏng dạng sóng tín hiệu đầu ra.",
            "Đánh giá công suất tiêu thụ của transistor."
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Mô hình Elmore được sử dụng để:",
        options: [
            "Xác định dòng rò.",
            "Mô phỏng dạng sóng tín hiệu AC.",
            "Tính toán xấp xỉ độ trễ trong mạch RC nhiều nhánh.",
            "Ước lượng công suất động."
        ],
        correctAnswers: [2],
        type: "single"
    },
    {
        question: "Trong mô hình Elmore, mỗi nhánh RC có độ trễ tỉ lệ với:",
        options: [
            "Điện áp nguồn.",
            "Tích điện trở nhánh và tổng điện dung phía sau nó.",
            "Điện dung đầu vào transistor.",
            "Tổng điện dung của nhánh."
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong Logical Effort, “logical effort (g)” thể hiện:",
        options: [
            "Hệ số công suất tiêu thụ.",
            "Độ trễ tuyến tính RC.",
            "Điện dung tải của cổng logic.",
            "Mức độ khó của một cổng logic trong việc lái tải."
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Trong mô hình tuyến tính, trễ tổng được biểu diễn bởi công thức:",
        options: [
            "T = 1/(RC)",
            "T = T0 + kCload",
            "T = V/I",
            "T = RC"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Mô hình Elmore cho kết quả chính xác tuyệt đối về độ trễ.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Mô hình RC lý tưởng chỉ xem xét điện trở và điện dung, bỏ qua cảm kháng.",
        options: [
            "Sai",
            "Đúng"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong mô hình RC, độ trễ tỷ lệ thuận với ________ và điện dung tải.",
        instruction: "Điền từ thích hợp:",
        type: "fill-in",
        acceptedAnswers: ["điện trở", "R"],
        correctAnswer: "điện trở"
    },
    {
        question: "Ghép thông số Logical Effort với ý nghĩa:",
        instruction: "Kéo thả ý nghĩa vào ký hiệu tương ứng",
        type: "drag-drop",
        zones: [
            { id: "zone-h", title: "h", correctItem: "item-h" },
            { id: "zone-g", title: "g", correctItem: "item-g" },
            { id: "zone-p", title: "p", correctItem: "item-p" }
        ],
        items: [
            { id: "item-h", text: "Nỗ lực điện (tải/ngõ vào)" },
            { id: "item-g", text: "Nỗ lực logic (độ khó lái tải)" },
            { id: "item-p", text: "Trễ ký sinh của cổng" }
        ]
    },
    {
        question: "Khi “slack” âm, mạch không đáp ứng yêu cầu thời gian.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Thời gian trễ lan truyền và thời gian trễ ô nhiễm luôn bằng nhau.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
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

    // Always shuffle drag-drop items for confusion
    questions.forEach(q => {
        if (q.type === 'drag-drop') {
            q.shuffledItems = shuffleArray([...q.items]);
        }
    });

    if (shuffle) {
        // Shuffle questions
        // For MCQs, also shuffle options
        questions.forEach(q => {
            if (q.type !== 'drag-drop' && q.options) {
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
        html += `<div class="question-image"><img src="${question.image}" alt="Question diagram" onerror="this.onerror=null; this.src='../placeholder.png'; this.parentNode.innerHTML += '<br><small>(Image needs to be added as ${question.image})</small>'"></div>`;
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
        // Use shuffledItems if available (which should be always now)
        const displayItems = question.shuffledItems || question.items;

        html += '<div class="dnd-source" id="dnd-source">';
        displayItems.forEach(item => {
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

            let boxClass = 'dnd-drop-box';
            if (isReviewMode) {
                if (placedItem === zone.correctItem) {
                    boxClass += ' correct';
                } else if (placedItem) {
                    boxClass += ' wrong';
                }
            }

            html += `
                <div class="dnd-zone">
                    <div class="dnd-zone-title">${zone.title}</div>
                    <div class="${boxClass}" data-zone-id="${zone.id}">
                        ${itemData ? `<div class="draggable-item" draggable="true" data-item-id="${itemData.id}">${itemData.text}</div>` : ''}
                    </div>
                </div>
            `;
        });
        html += '</div>';

        // Show correct mapping in review mode if wrong
        if (isReviewMode) {
            const userAnswer = userAnswers[currentQuestionIndex] || {};
            let allCorrect = true;
            question.zones.forEach(zone => {
                if (userAnswer[zone.id] !== zone.correctItem) {
                    allCorrect = false;
                }
            });

            if (!allCorrect) {
                html += '<div class="dnd-correct-answer"><strong>Đáp án đúng:</strong><br>';
                question.zones.forEach(zone => {
                    const params = question.items.find(i => i.id === zone.correctItem);
                    html += `${zone.title} → ${params.text}<br>`;
                });
                html += '</div>';
            }
        }

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

            // Allow clicking only if not in review mode
            const onClickAttr = isReviewMode ? '' : `onclick="selectOption(${index})"`;

            html += `
                <div class="${optionClass}" ${onClickAttr}>
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

    // Initialize drag-drop if needed and not in review mode
    if (question.type === 'drag-drop' && !isReviewMode) {
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
