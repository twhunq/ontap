// Quiz 5 questions data - Materials and Fabrication
const questions = [
    {
        question: "Chất nền khối (bulk substrate) thường được sử dụng trong chế tạo transistor nMOS là gì?",
        options: [
            "Nền silicon loại p (p-type substrate)",
            "Silicon trên sapphire (silicon-on-sapphire)",
            "Phốt pho (phosphorus)",
            "Oxit silic (silicon dioxide)"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Phương pháp nuôi tinh thể silicon đơn phổ biến nhất hiện nay là:",
        options: [
            "Phương pháp chùm tia phân tử (Molecular beam epitaxy)",
            "Phương pháp Bridgman",
            "Phương pháp Czochralski",
            "Phương pháp tinh luyện vùng (Zone refining)"
        ],
        correctAnswers: [2],
        type: "single"
    },
    {
        question: "Quang khắc (Lithography) là gì?",
        options: [
            "Quy trình được sử dụng để truyền (chuyển) mẫu hình sang một lớp trên chip",
            "Quy trình được sử dụng để tạo lớp oxit trên chip",
            "Quy trình được sử dụng để hình thành lớp kim loại trên chip",
            "Quy trình được sử dụng để chế tạo hoàn chỉnh con chip"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Hình dưới đây minh họa cho bước nào trong quy trình quang khắc (Photolithography) của công nghệ CMOS?",
        image: "photolithography-exposure.png",
        options: [
            "Ăn mòn lớp oxide (Etching)",
            "Phủ lớp cảm quang (Photoresist coating)",
            "Rửa ảnh (Developing)",
            "Chiếu sáng qua mặt nạ (Exposure)"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Sau khi thực hiện đầy đủ các bước quang khắc lên lớp SiO2 (phủ cản quang → chiếu sáng → hiện ảnh → ăn mòn → loại bỏ cản quang), bề mặt wafer sẽ có kết quả thế nào?",
        options: [
            "Lớp SiO2 bị loại bỏ tại vùng cửa sổ, để lộ nền silicon",
            "Silicon bị ăn mòn sâu vào lớp nền",
            "Lớp SiO2 còn nguyên trên toàn wafer",
            "Lớp SiO2 bị loại bỏ hoàn toàn"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Trong chế tạo CMOS, các transistor nMOS và pMOS được tích hợp trên cùng một chất nền.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Bước developing (hiển ảnh) trong quang khắc là (Chọn 02 đáp án đúng):",
        image: "developing-step.png",
        options: [
            "Hòa tan phần photoresist đã bị chiếu sáng",
            "Lắng đọng lớp oxide lên wafer",
            "Loại bỏ phần photoresist đã bị chiếu sáng (đối với positive resist)",
            "Chiếu tia UV lên lớp mask"
        ],
        correctAnswers: [0, 2],
        type: "multiple"
    },
    {
        question: "Trong các kỹ thuật sau, kỹ thuật nào thuộc công đoạn quang khắc? (Chọn 3 đáp án đúng)",
        options: [
            "Spin coating (phủ lớp cảm quang (photoresist))",
            "Exposure (chiếu tia UV qua mask)",
            "Developing (hiển ảnh)",
            "Ion implantation (Cấy ion)"
        ],
        correctAnswers: [0, 1, 2],
        type: "multiple"
    },
    {
        question: "Trong quy trình chế tạo CMOS, loại nền nào được bố trí phía trên lớp cản tạp chất (barrier to dopants) nhằm ngăn sự khuếch tán của tạp chất vào các vùng khác? (Chọn Cách điện/Dẫn điện/Bán dẫn)",
        image: "high-k-transistor.png",
        type: "fill-in",
        acceptedAnswers: ["Cách điện", "Cach dien", "Insulator"],
        correctAnswer: "Cách điện"
    },
    {
        question: "Silicon dioxide là chất cách điện tốt, được sử dụng làm lớp cách điện (insulator) trong các vi mạch tích hợp.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Quan sát hình dưới đây. Hình minh họa cho các bước nào trong quy trình chế tạo CMOS?",
        image: "cmos-fabrication-steps.png",
        options: [
            "Các bước tạo lớp kim loại (Metallization process)",
            "Các bước tạo vùng n-well trong nền m-type (Well Formation Process)",
            "Các bước tạo lớp cách ly (Isolation process)",
            "Các bước tạo vùng n-well trong nền p-type (Well Formation Process)"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Trong transistor nMOS, vật liệu được sử dụng để chế tạo cực cổng (Gate) là:",
        options: [
            "Silicon",
            "Phốt pho (Phosphorus)",
            "Bo (Boron)",
            "Polysilicon (Silicon đa tinh thể)"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Lớp kim loại đầu tiên (metal1) trong vi mạch thường là:",
        options: [
            "Vonfram (W)",
            "Titan (Ti)",
            "Đồng (Cu)",
            "Nhôm (Al)"
        ],
        correctAnswers: [3],
        type: "single"
    },
    {
        question: "Lớp oxit cổng (Gate Oxide) trong công nghệ CMOS có đặc điểm nào sau đây? (Chọn 2 đáp án đúng)",
        image: "gate-oxide.png",
        options: [
            "Polysilicon được lắng đọng ngay cùng lúc với lớp oxit cổng",
            "Là lớp oxit dày dùng để bảo vệ wafer khỏi nhiễm tạp chất",
            "Có thể được cải tiến bằng cách phủ thêm lớp oxi-nitride (SiON) hoặc vật liệu điện môi cao (high-k dielectric) để giảm rò rỉ và tăng điện dung cổng",
            "Là lớp SiO2 (silicon dioxide) mỏng phủ trên bề mặt silicon, đóng vai trò lớp điện môi cách ly giữa kênh dẫn và cực cổng"
        ],
        correctAnswers: [2, 3],
        type: "multiple"
    },
    {
        question: "Quan sát hai hình dưới đây. Hình minh họa cho quá trình nào trong quy trình chế tạo transistor CMOS? (Chọn 02 đáp án đúng)",
        image: "source-drain-formation.png",
        options: [
            "Quy trình tạo lớp oxide cách ly (Isolation Process)",
            "Quy trình hình thành vùng Source",
            "Quy trình tạo cực cổng Gate Formation",
            "Quy trình hình thành vùng Drain"
        ],
        correctAnswers: [1, 3],
        type: "multiple"
    },
    {
        question: "Trong hình trên, các lớp \"contact\" và \"via pad\" được sử dụng với mục đích nào sau đây? (Chọn 2 đáp án đúng)",
        image: "contact-via-structure.png",
        options: [
            "Tăng độ bền cơ học cho lớp oxide",
            "Tạo liên kết điện giữa các tầng dẫn – gồm liên kết giữa vùng khuếch tán hoặc polysilicon với lớp kim loại (contact)",
            "Tạo liên kết điện giữa các lớp kim loại (via pad)",
            "Là lớp bảo vệ bề mặt chip (passivation layer)"
        ],
        correctAnswers: [1, 2],
        type: "multiple"
    },
    {
        question: "Trong phương pháp cấy ion (ion implantation), tạp chất được bắn vào nền silicon bằng chùm ion năng lượng cao (high-energy ion beam) và không cần ủ nhiệt sau quá trình",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [1],
        type: "single"
    },
    {
        question: "Trong phương pháp khuếch tán (diffusion), tạp chất được đưa vào wafer nhờ nhiệt độ cao, khiến chúng khuếch tán từ bề mặt vào trong lớp silicon.",
        options: [
            "Đúng",
            "Sai"
        ],
        correctAnswers: [0],
        type: "single"
    },
    {
        question: "Giả sử trong một chip CMOS đa lớp kim loại, tín hiệu từ vùng khuếch tán p+ (trong substrate) cần được dẫn lên lớp Metal2 để kết nối với mạch logic ở tầng trên. Hãy xác định chuỗi lớp vật liệu mà dòng điện phải đi qua.",
        image: "metal-layers-routing.png",
        options: [
            "Diffusion → Via → Metal2",
            "Diffusion → Contact → Metal1 → Via → Metal2",
            "Diffusion → Metal2 → Contact",
            "Diffusion → Metal1 → Contact → Metal2"
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
