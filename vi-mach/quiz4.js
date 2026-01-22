// Quiz 4 questions data - VLSI Design
const questions = [
    {
        question: "Trong thiết kế VLSI, \"phân chia thiết kế\" (design partitioning) được sử dụng chủ yếu để:",
        options: [
            "Giảm số lượng transistor trong chip",
            "Giảm kích thước của mạch tích hợp",
            "Quản lý độ phức tạp của hệ thống lớn",
            "Tăng tốc độ xử lý dữ liệu"
        ],
        correctAnswers: [2],
        type: "single"
    },
    {
        question: "Cấp độ nào trong thiết kế VLSI mô tả chức năng tổng thể của hệ thống?",
        options: [
            "Thiết kế vật lý (Physical design)",
            "Thiết kế kiến trúc (Architecture design)",
            "Thiết kế logic (Logic design)",
            "Thiết kế mạch (Circuit design)"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong thiết kế VLSI, \"hierarchy\" (phân cấp) giúp:",
        options: [
            "Xác định vị trí các khối lượng logic trên chip",
            "Giảm số lượng dây kết nối trong layout",
            "Tăng mật độ transistor",
            "Quản lý thiết kế phức tạp bằng cách chia đôi thành phần các mức trừu tượng"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Kéo thả chức năng phù hợp với từng giai đoạn thiết kế:",
        type: "drag-drop",
        correctAnswers: [], // Handled by drag-drop logic
        zones: [
            { id: "zone1", title: "Thiết kế vật lý", correctItem: "item1" },
            { id: "zone2", title: "Thiết kế mạch", correctItem: "item2" },
            { id: "zone3", title: "Thiết kế logic", correctItem: "item3" }
        ],
        items: [
            { id: "item1", text: "Bố trí layout xác định vị trí phần tử trên chip" },
            { id: "item2", text: "Mô tả các transistor thực hiện mạch logic" },
            { id: "item3", text: "Mô tả cách xây dựng của các khối chức năng bằng cổng logic" }
        ]
    },
    {
        question: "Chọn hai yếu tố sau đây giúp quản lý độ phức tạp trong thiết kế VLSI:",
        options: [
            "Môđun hóa (Modularity)",
            "Tăng số lượng transistor",
            "Giảm số lượng lớp trừu tượng",
            "Phân cấp (Hierarchy)"
        ],
        correctAnswers: [0, 3],
        type: "multiple"
    },
    {
        question: "Trong thiết kế vi mạch có hai mục tiêu chính của việc phân chia thiết kế (design partitioning) là:",
        options: [
            "Giảm chiều dài dây dẫn",
            "Dễ dàng kiểm thử và tái sử dụng các khối",
            "Quản lý độ phức tạp của hệ thống",
            "Giảm điện áp hoạt động"
        ],
        correctAnswers: [1, 2],
        type: "multiple"
    },
    {
        question: "Thiết kế logic trong mạch chủ yếu tập trung vào:",
        options: [
            "Mô tả chức năng của mạch bằng cổng logic",
            "Bố trí các dây nối trong chip",
            "Quá trình khuếch tán trong chế tạo",
            "Cấu trúc vật lý của transistor"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Thiết kế mạch điện (circuit design) xác định:",
        options: [
            "Quy trình đóng gói chip",
            "Vị trí transistor trên chip",
            "Sơ đồ kết nối chi tiết của transistor điện trở tụ điện",
            "Mô tả hành vi hệ thống ở mức khối"
        ],
        correctAnswers: [2],
        type: "single"
    },
    {
        question: "Trong thiết kế vi mạch tham số quan trọng nhất quyết định tốc độ của hoạt động của CMOS là:",
        options: [
            "Kích thước tụ điện",
            "Thời gian trễ lan truyền (propagation)",
            "Điện áp nguồn",
            "Dòng rò rỉ"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong thiết kế vi mạch công cụ SPICE được sử dụng chủ yếu trong giai đoạn nào:",
        options: [
            "Thiết kế vật lý",
            "Thiết kế mạch điện",
            "Đóng gói chip",
            "Thiết kế logic"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Kéo thả ghép giai đoạn thiết kế với kết quả đầu ra tương ứng:",
        type: "drag-drop",
        zones: [
            { id: "zone1", title: "Physical Design", correctItem: "item1" },
            { id: "zone2", title: "Logic Design", correctItem: "item2" },
            { id: "zone3", title: "Circuit Design", correctItem: "item3" }
        ],
        items: [
            { id: "item1", text: "Layout hoàn chỉnh" },
            { id: "item2", text: "File netlist" },
            { id: "item3", text: "Sơ đồ transistor và linh kiện" }
        ]
    },
    {
        question: "Thiết kế vật lý được thực hiện trước khi thiết kế logic.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Kết quả của các bước thiết kế vật lý là file GDSII dùng để chế tạo chip.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Thiết kế logic chỉ liên quan đến phần cứng, không thể mô tả bằng phần mềm.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Hai công cụ phổ biến cho thiết kế vật Lý là:",
        options: [
            "AutoCAD",
            "MATLAB",
            "Synopsys IC Compiler",
            "Cadence Innovus"
        ],
        correctAnswers: [2, 3],
        type: "multiple"
    },
    {
        question: "Kéo thả ghép công cụ thiết kế với mục đích sử dụng:",
        type: "drag-drop",
        zones: [
            { id: "zone1", title: "Verilog", correctItem: "item1" },
            { id: "zone2", title: "Cadence", correctItem: "item2" },
            { id: "zone3", title: "SPICE", correctItem: "item3" }
        ],
        items: [
            { id: "item1", text: "Mô tả chức năng hoạt động của Logic" },
            { id: "item2", text: "Thiết kế và kiểm tra vật lý" },
            { id: "item3", text: "Mô phỏng mạch điện tương tự" }
        ]
    },
    {
        question: "Kéo thả ghép các đoạn thiết kế vật Lý với các chức năng tương ứng:",
        type: "drag-drop",
        zones: [
            { id: "zone1", title: "DRC", correctItem: "item1" },
            { id: "zone2", title: "Routing", correctItem: "item2" },
            { id: "zone3", title: "Placement", correctItem: "item3" }
        ],
        items: [
            { id: "item1", text: "Kiểm tra quy tắc thiết kế" },
            { id: "item2", text: "Nối dây giữa các cell logic" },
            { id: "item3", text: "Đặt vị trí cell logic" }
        ]
    },
    {
        question: "Kết quả đầu ra của giai đoạn thiết kế logic thường là:",
        options: [
            "File mask",
            "File GDSII",
            "File netlist",
            "File layout"
        ],
        correctAnswers: [2],
        type: "single"
    },
    {
        question: "Mối quan hệ giữa thiết kế logic và thiết kế vật Lý là:",
        options: [
            "Logic chỉ dùng để kiểm thử vật lý",
            "Vật lý được thiết kế trước để làm mẫu cho logic",
            "Cả hai đều thực hiện song song",
            "Logic xác định chức năng, vật Lý thực hiện bố trí thực tế của mạch"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Thiết kế mạch điện giúp chuyển mô tả logic sang dạng transistor để có thể chế tạo được.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Thiết kế vật Lý không ảnh hưởng đến hiệu suất và tiêu thụ công suất của chip.",
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
