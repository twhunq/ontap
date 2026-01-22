// Quiz questions data
const questions = [
    {
        question: "Vi mạch tích hợp (Integrated Circuit - IC) là gì?",
        options: [
            "Mạch điện dùng transistor",
            "Tập hợp các linh kiện điện tử (Transistor, điện trở, tụ điện,...) được chế tạo trên cùng một phiến bán dẫn để thực hiện chức năng xác định",
            "Mạch khuếch đại công suất cao",
            "Tập hợp các linh kiện điện tử rời rạc nối tiếp nhau bằng dây dẫn"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong hệ thống thu tín hiệu y sinh (ECG), bộ phận chuyển đổi tín hiệu tương tự sang số là:",
        options: [
            "ADC",
            "LPF",
            "DAC",
            "VGA"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Vi mạch nào sau đây tích hợp toàn bộ hệ thống (CPU, bộ nhớ, giao tiếp) trên cùng một chip?",
        options: [
            "PLA",
            "ASIC",
            "DSP",
            "SoC (System on Chip)"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Vi mạch có thể phân loại theo tín hiệu xử lí:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Phân loại theo chức năng sử dụng là một tiêu chí hợp lí:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Mức độ tích hợp không ảnh hưởng đến cách phân loại vi mạch:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Không thể phân loại vi mạch theo công nghệ chế tạo:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Vi mạch điện trở màng mỏng thay thế CMOS trong các CPU cao cấp:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Vật liệu GaN đang thu hút sự chú ý trong công nghệ vi mạch hiện đại:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Bán dẫn cơ học là xu hướng chủ đạo hiện nay:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "TSMC, Intel và Samsung đang tập trung vào công nghệ 3D-stacking và chiplet:",
        options: [
            "Sai",
            "Đúng"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Ba nhóm vi mạch phân theo tín hiệu xử lí gồm những nhóm nào sau đây? (Chọn 3 đáp án đúng nhất)",
        options: [
            "Vi mạch bipolar (BJT)-CMOS-Bipolar-TTL",
            "Vi mạch hỗn hợp (Mixed-signal IC)",
            "Vi mạch số (Digital IC)",
            "Vi mạch tương tự (Analog IC)"
        ],
        correctAnswers: [1, 2, 3],
        type: "multiple"
    },
    {
        question: "Những yếu tố nào sau đây giới hạn khi thu nhỏ transistor dưới 5nm? (Chọn 3 đáp án đúng nhất)",
        options: [
            "Hiện tượng rò rỉ lượng tử tăng",
            "Kỹ thuật in quang không đủ chính xác",
            "Không đủ không gian đóng gói",
            "Nhiễu điện từ và hiệu ứng kênh ngắn"
        ],
        correctAnswers: [0, 1, 3],
        type: "multiple"
    },
    {
        question: "Vật liệu bán dẫn cơ bản thường dùng nhất trong chế tạo vi mạch là:",
        options: [
            "Germanium",
            "Gallium Nitride (GaN)",
            "Đồng (Cu)",
            "Silicon (Si)"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Vi mạch bán dẫn là gì?",
        options: [
            "Mạch điện tử được chế tạo từ chất bán dẫn và có khả năng thực hiện các chức năng điện tử",
            "Mạch chỉ dùng trong mạch gia dụng",
            "Mạch điện đơn giản không dùng chất bán dẫn",
            "Mạch điện dùng điện trở và cuộn cảm"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Thành phần cơ bản bên trong một chip bán dẫn (vi mạch tích hợp) bao gồm các phần tử nào sau đây: (Chọn 2 đáp án đúng nhất)",
        options: [
            "Mạch logic & mạch nhớ, đường kết nối",
            "Chip nguồn, cảm biến, vỏ đóng gói",
            "Transistor, diode, điện trở, tụ điện",
            "Cuộn cảm, biến áp, transistor, tụ điện"
        ],
        correctAnswers: [0, 2],
        type: "multiple"
    },
    {
        question: "Một transistor MOSFET trong công nghệ CMOS được cấu tạo từ lớp vật liệu chính nào? (Chọn 3 đáp án đúng nhất)",
        options: [
            "Chỉ có vùng silicon tinh khiết và lớp phủ mỏng",
            "Chỉ gồm phần dẫn điện và lớp phủ bảo vệ",
            "Polysilicon - tạo cực cổng điều khiển, Oxide - cách điện giữa cổng và kênh",
            "Nguồn-máng (Source-Drain) - dẫn dòng",
            "Kim loại liên kết - kết nối giữa các tầng mạch"
        ],
        correctAnswers: [2, 3, 4],
        type: "multiple"
    },
    {
        question: "Khi pha tạp loại p, số lỗ trống (p) lớn hơn nhiều so với số electron (n), nhưng tích n.p=ni² vẫn giữ nguyên:",
        options: [
            "Sai",
            "Đúng"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Khi nhiệt độ tăng, ni giảm dần:",
        options: [
            "Sai",
            "Đúng"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Trong bán dẫn nội tại, nồng độ electron n bằng nồng độ lỗ trống p, tức n=p:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Khi giảm nhiệt độ ni tăng nhanh:",
        options: [
            "Sai",
            "Đúng"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Nồng độ hạt tải nội tại ni, phụ thuộc vào nhiệt độ và độ rộng vùng cấm Eg:",
        options: [
            "Sai",
            "Đúng"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Vật liệu có Eg càng lớn thì ni càng nhỏ:",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Ở cùng nhiệt độ, Ge có ni lớn hơn Si:",
        options: [
            "Sai",
            "Đúng"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Câu 25-28: Hình dưới đây minh họa cấu trúc một transistor MOSFET. Hãy kéo thả các ký hiệu tương ứng vào đúng vị trí nghĩa phù hợp:",
        type: "drag-drop",
        image: "mosfet-diagram.png",
        items: [
            { id: "def1", text: "Điện dung lớp oxide cổng" },
            { id: "def2", text: "Chiều rộng kênh dẫn" },
            { id: "def3", text: "Chiều dài kênh dẫn" },
            { id: "def4", text: "Độ dày lớp oxide cổng" }
        ],
        zones: [
            { id: "Cox", title: "Cox", correctItem: "def1" },
            { id: "W", title: "W", correctItem: "def2" },
            { id: "L", title: "L", correctItem: "def3" },
            { id: "tox", title: "tox", correctItem: "def4" }
        ]
    },
    {
        question: "Khi nói đến \"công nghệ 180nm\" hay \"45nm\" trong vi mạch CMOS, điều đó thể hiện: (Chọn 2 đáp án đúng nhất)",
        options: [
            "Độ dày của lớp oxit cách điện trên chip",
            "Kích thước đặc trưng của các thành phần transistor (ví dụ chiều dài kênh - gate length)",
            "Mức độ thu nhỏ công nghệ, ảnh hưởng đến mật độ tích hợp và tốc độ mạch",
            "Kích thước vật lí của toàn bộ con chip"
        ],
        correctAnswers: [1, 2],
        type: "multiple"
    },
    {
        question: "Mẫu silic tinh khiết được pha tạp Bo (B) với nồng độ Na=5×10¹⁵cm⁻³. Khi nhiệt độ tăng cao, hiện tượng nào xảy ra?",
        options: [
            "Mật độ hạt tải không đổi vì pha tạp không phụ thuộc nhiệt độ",
            "Số lỗ trống giảm, điện trở của mẫu tăng lên đáng kể",
            "Số điện tử tự do tăng mạnh, bán dẫn chuyển thành loại n",
            "Số lỗ trống tăng, độ dẫn điện tăng - mẫu vẫn là bán dẫn loại p"
        ],
        correctAnswers: [3],
        type: "single"
    }
];

// Rest of the quiz logic (same as triet quiz1.js)
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
    const currentOptions = isShuffled && question.shuffledOptions ? question.shuffledOptions : question.options;
    const currentCorrect = isShuffled && question.shuffledCorrectAnswers ? question.shuffledCorrectAnswers : question.correctAnswers;

    let html = `<div class="question-text">${currentQuestionIndex + 1}. ${question.question}</div>`;

    if (question.type === 'drag-drop') {
        // Render drag and drop question
        html += '<div class="dnd-container">';

        // Display image if exists
        if (question.image) {
            html += `<div class="question-image"><img src="${question.image}" alt="Question diagram"></div>`;
        }

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
    } else if (question.type === 'matching') {
        html += '<div class="matching-container">';
        question.pairs.forEach((pair, idx) => {
            html += `
                <div class="matching-pair">
                    <div class="matching-left">${pair.left}</div>
                    <div class="matching-right">${pair.right}</div>
                </div>
            `;
        });
        html += '</div>';
    } else {
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

// Select option
function selectOption(index) {
    if (isReviewMode) return;

    const question = questions[currentQuestionIndex];
    if (question.type === 'matching') return;

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

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('current-question-num').textContent = currentQuestionIndex + 1;
}

// Update navigation buttons
function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }
}

// Navigate questions
function nextQuestion() {
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
        if (question.type === 'matching') {
            correct++; // Auto-correct for matching questions
        } else if (question.type === 'drag-drop') {
            // Check if all zones have correct items
            const userAnswer = userAnswers[index] || {};
            let allCorrect = true;
            question.zones.forEach(zone => {
                if (userAnswer[zone.id] !== zone.correctItem) {
                    allCorrect = false;
                }
            });
            if (allCorrect) correct++;
        } else {
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
    if (question.type === 'matching') return filter === 'correct';

    if (question.type === 'drag-drop') {
        // Check if all zones have correct items
        const userAnswer = userAnswers[index] || {};
        let allCorrect = true;
        question.zones.forEach(zone => {
            if (userAnswer[zone.id] !== zone.correctItem) {
                allCorrect = false;
            }
        });
        return (filter === 'correct' && allCorrect) || (filter === 'wrong' && !allCorrect);
    }

    const userAnswer = userAnswers[index] || [];
    const correctAnswer = isShuffled && question.shuffledCorrectAnswers ?
        question.shuffledCorrectAnswers : question.correctAnswers;

    const isCorrect = userAnswer.length === correctAnswer.length &&
        userAnswer.every(ans => correctAnswer.includes(ans));

    return (filter === 'correct' && isCorrect) || (filter === 'wrong' && !isCorrect);
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
