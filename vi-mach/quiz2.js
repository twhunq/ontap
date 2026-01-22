// Quiz 2 questions data - MOSFET and CMOS Basics
const questions = [
    {
        question: "Hạt tải (Carrier) đa số trong kênh dẫn của NMOS là:",
        options: [
            "Lỗ trống",
            "Electron",
            "Ion âm",
            "Ion dương"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Threshold voltage là gì?",
        options: [
            "Là điện áp ngưỡng khi kênh dẫn vừa bắt đầu hình thành, MOSFET bắt đầu dẫn dòng",
            "Là điện áp ngưỡng để transistor bị phá hủy",
            "Là điện áp ngưỡng để Transistor đóng mạch hoặc hở mạch",
            "Là điện áp cao nhất đầu vào của Transistor"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "CMOS viết tắt là gì?",
        options: [
            "complex metal-oxide silicon",
            "complementary metal-oxide semiconductor",
            "completed metal-oxide semiconductor",
            "complementary metal-oxide silicon"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Khi NMOS dẫn, dòng điện đi từ:",
        options: [
            "Substrate → Source",
            "Source → Drain (do electron)",
            "Gate → Source",
            "Drain → Source (do lỗ trống)"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong cấu trúc MOS cơ bản hình dưới đây (bỏ qua Source và Drain), lớp giữa cổng (Gate) và thân (Body) là:",
        image: "mosfet-structure.png",
        options: [
            "Silicon loại p",
            "Kim loại nhôm",
            "Oxit silic (SiO₂)",
            "Polysilicon"
        ],
        correctAnswers: [2],
        type: "single"
    },
    {
        question: "Ở chế độ bão hòa của NMOS, dòng I_DS chủ yếu phụ thuộc vào:",
        options: [
            "Không phụ thuộc yếu tố nào",
            "Điện áp Gate V_GS",
            "Cả hai V_GS và V_DS",
            "Điện áp Drain V_DS"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Khẳng định nào sau đây là đúng? Chọn 02 đáp án đúng",
        options: [
            "PMOS có hạt tải là lỗ trống, trên đế kênh dẫn n",
            "NMOS có hạt tải là electron, trên đế kênh dẫn n",
            "NMOS có hạt tải là electron, trên đế kênh dẫn p",
            "PMOS có hạt tải là lỗ trống, trên kênh đế dẫn p"
        ],
        correctAnswers: [0, 2],
        type: "multiple"
    },
    {
        question: "Quan sát hình dưới đây và nhập đáp án thích hợp. Câu 8: Hình a là transistor loại gì?",
        image: "mosfet-types.png",
        correctAnswer: "NMOS",
        type: "fill-in",
        acceptedAnswers: ["NMOS", "nmos", "N-MOS", "n-mos"]
    },
    {
        question: "Quan sát hình dưới đây và nhập đáp án thích hợp. Câu 9: Hình b là transistor loại gì?",
        image: "mosfet-types.png",
        correctAnswer: "PMOS",
        type: "fill-in",
        acceptedAnswers: ["PMOS", "pmos", "P-MOS", "p-mos"]
    },
    {
        question: "Transistor PMOS dẫn dòng khi điện áp cổng–nguồn V_GS_(1)__ điện áp ngưỡng Vth. Nhập đáp án thích hợp cho vị trí (1).",
        correctAnswer: "nhỏ hơn",
        type: "fill-in",
        acceptedAnswers: ["nhỏ hơn", "nho hon", "< hơn", "<"]
    },
    {
        question: "Transistor PMOS dẫn dòng khi điện áp cổng–nguồn V_SG_(2)__ điện áp ngưỡng | Vth |. Nhập đáp án thích hợp cho vị trí (2).",
        correctAnswer: "lớn hơn",
        type: "fill-in",
        acceptedAnswers: ["lớn hơn", "lon hon", "> hơn", ">"]
    },
    {
        question: "Khi V_GS < V_th thì dòng I_DS của MOSFET bằng:",
        options: [
            "Một giá trị lớn",
            "Gần bằng 0",
            "Phụ thuộc V_DS",
            "Tăng tuyến tính"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Hai transistor NMOS và PMOS có cùng tỉ lệ W/L. Hãy cho biết transistor nào dẫn mạnh hơn?",
        correctAnswer: "NMOS",
        type: "fill-in",
        acceptedAnswers: ["NMOS", "nmos", "N-MOS", "n-mos"]
    },
    {
        question: "Hiệu ứng kênh ngắn (Short-Channel Effect) xuất hiện khi chiều dài kênh của MOSFET giảm đến mức mà trường điện từ từ cực Drain tác động trực tiếp lên vùng kênh. Hệ quả là điện áp ngưỡng (V_T) bị giảm, dòng rò dưới ngưỡng (subthreshold leakage current) tăng, và xuất hiện hiệu ứng \"Drain-Induced Barrier Lowering (DIBL)\".",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Câu 15-17: Các phương trình dưới đây tóm tắt dòng điện I_ds trong ba vùng hoạt động của transistor nMOS.",
        type: "drag-drop",
        image: "equations.png",
        items: [
            { id: "cutoff", text: "Vùng ngắt (Cutoff)" },
            { id: "linear", text: "Vùng tuyến tính (Linear / Triode)" },
            { id: "saturation", text: "Vùng bão hòa (Saturation)" }
        ],
        zones: [
            { id: "eq1", title: "Phương trình (1): I_ds = 0", correctItem: "cutoff" },
            { id: "eq2", title: "Phương trình (2): I_ds = μ_n C_ox (W/L) [(V_gs - V_t)V_ds - ½V_ds²]", correctItem: "linear" },
            { id: "eq3", title: "Phương trình (3): I_ds = ½ μ_n C_ox (W/L) (V_gs - V_t)²", correctItem: "saturation" }
        ]
    },
    {
        question: "Câu 18:",
        image: "question18.png",
        question: "Câu 18: Nhập đáp án đúng cho câu hỏi trên",
        correctAnswer: "tuyến tính",
        type: "fill-in",
        acceptedAnswers: ["tuyến tính", "tuyen tinh", "linear", "triode", "tuyến tính (linear)", "tuyến tính (triode)"]
    },
    {
        question: "Một transistor NMOS có V_TH = 0.4 V, W/L = 20, μ_n C_ox = 300 μA/V². Khi V_GS = 1.0 V và V_DS = 1.5 V, transistor hoạt động trong vùng bão hòa. Hãy tính dòng mạng I_D. Nhập đáp án đúng. Nhập số nguyên theo đơn vị μA. Chú ý không nhập đơn vị.",
        correctAnswer: "1080",
        type: "fill-in",
        acceptedAnswers: ["1080", "1080μA", "1080 μA", "1080uA", "1080 uA"]
    },
    {
        question: "Một transistor NMOS có V_TH = 0.4 V, W/L = 20, μ_n C_ox = 300 μA/V². Khi V_GS = 1.0 V và V_DS = 1.5 V, transistor hoạt động trong vùng bão hòa và sử dụng hiệu ứng Channel-Length Modulation với λ = 0.05 V⁻¹. Hãy tính lại dòng mạng thực tế I_D. Nhập đáp án đúng. Nhập số nguyên theo đơn vị μA. Chú ý không nhập đơn vị.",
        correctAnswer: "1161",
        type: "fill-in",
        acceptedAnswers: ["1161", "1161μA", "1161 μA", "1161uA", "1161 uA"]
    },
    {
        question: "Một transistor PMOS có V_Thp = -0.45 V, μ_p C_ox = 100 μA/V² và W/L = 15. Khi V_SG = 1.2 V và V_SD = 0.2 V, hãy tính dòng mạng I_D. Nhập đáp án đúng. Nhập số nguyên theo đơn vị μA. Chú ý không nhập đơn vị.",
        correctAnswer: "195",
        type: "fill-in",
        acceptedAnswers: ["195", "195μA", "195 μA", "195uA", "195 uA"]
    },
    {
        question: "Trong công nghệ MOSFET có tox = 8 nm và εox = 3,45×10⁻¹¹ F/m. Hãy tính điện dung riêng của lớp oxide Cox (mF/m²). Nhập đáp án đúng. Làm tròn 2 chữ số thập phân sau dấu phẩy theo đơn vị mF/m². Chú ý không nhập đơn vị. Ví dụ 1,23",
        correctAnswer: "4,31",
        type: "fill-in",
        acceptedAnswers: ["4,31", "4.31", "4,3", "4.3"]
    },
    {
        question: "Câu 23-24: Ghép mỗi hình sau với mô tả tương ứng:",
        type: "drag-drop",
        image: "mosfet-matching.png",
        items: [
            { id: "linear", text: "MOSFET hoạt động như một điện trở có điều khiển điện áp khi ở vùng tuyến tính" },
            { id: "saturation", text: "MOSFET hoạt động như một nguồn dòng điều khiển điện áp khi ở vùng bão hòa" }
        ],
        zones: [
            { id: "zone23", title: "Câu 23: Hình b", correctItem: "saturation" },
            { id: "zone24", title: "Câu 24: Hình a", correctItem: "linear" }
        ]
    }
];

// Rest of the quiz logic (same as quiz1.js)
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

    let html = `<div class="question-text">${currentQuestionIndex + 1}. ${question.question}</div>`;

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
