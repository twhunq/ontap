// App State
let currentQuestionIndex = 0;
let userAnswers = {}; // Store answers key: questionId
// For DragDrop: userAnswers[14] = { itemId: targetId, ... }
let isReviewMode = false;
let isRetryMode = false; // Track if we're in retry wrong answers mode
let originalUserAnswers = {}; // Store original answers before retry
let isShuffleMode = false; // Track if quiz is in shuffle mode
let originalQuestions = []; // Store original questions before shuffle

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const reviewBtn = document.getElementById('review-btn');
const retryBtn = document.getElementById('retry-btn');
const questionContainer = document.getElementById('question-container');
const currentQNum = document.getElementById('current-question-num');
const totalQNum = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const scoreDisplay = document.getElementById('score-display');
const resultMessage = document.getElementById('result-message');
const retryWrongBtn = document.getElementById('retry-wrong-btn');
const shuffleBtn = document.getElementById('shuffle-btn');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
shuffleBtn.addEventListener('click', startShuffleQuiz);
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));
submitBtn.addEventListener('click', submitQuiz);
reviewBtn.addEventListener('click', startReview);
retryBtn.addEventListener('click', resetQuiz);
retryWrongBtn.addEventListener('click', retryWrongAnswers);

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    userAnswers = {};
    isReviewMode = false;
    isShuffleMode = false;
    totalQNum.innerText = questions.length;
    renderQuestion();
    updateProgress();
}

function startShuffleQuiz() {
    // Save original questions if not already saved
    if (originalQuestions.length === 0) {
        originalQuestions = JSON.parse(JSON.stringify(questions));
    }

    // Shuffle questions
    shuffleArray(questions);

    // Shuffle answers for each question
    questions.forEach(q => {
        if (q.type === 'single' || q.type === 'multiple') {
            shuffleQuestionOptions(q);
        }
        // Note: group and drag_drop questions don't shuffle
    });

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    userAnswers = {};
    isReviewMode = false;
    isShuffleMode = true;
    totalQNum.innerText = questions.length;
    renderQuestion();
    updateProgress();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleQuestionOptions(question) {
    // Create array of indices
    const indices = question.options.map((_, idx) => idx);

    // Shuffle indices
    shuffleArray(indices);

    // Create new options array in shuffled order
    const newOptions = indices.map(idx => question.options[idx]);

    // Update correct answers to match new positions
    const newCorrect = question.correct.map(correctIdx => {
        return indices.indexOf(correctIdx);
    });

    // Update question
    question.options = newOptions;
    question.correct = newCorrect;
}

function resetQuiz() {
    // Restore original questions if in shuffle mode
    if (isShuffleMode && originalQuestions.length > 0) {
        questions.length = 0;
        questions.push(...JSON.parse(JSON.stringify(originalQuestions)));
        isShuffleMode = false;
    }

    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

function retryWrongAnswers() {
    // Get list of wrong question indices
    const wrongQuestions = [];
    questions.forEach((q, idx) => {
        if (!isQuestionCorrect(q)) {
            wrongQuestions.push(idx);
        }
    });

    // If no wrong answers, show message
    if (wrongQuestions.length === 0) {
        alert('Bạn đã trả lời đúng tất cả các câu! 🎉');
        return;
    }

    // Save original answers before retry
    originalUserAnswers = JSON.parse(JSON.stringify(userAnswers));

    // Clear answers for wrong questions only
    wrongQuestions.forEach(idx => {
        const q = questions[idx];
        delete userAnswers[q.id];
    });

    // Set up filtered quiz with only wrong questions
    filteredQuestions = wrongQuestions;
    currentFilteredIndex = 0;
    currentQuestionIndex = wrongQuestions[0];
    isReviewMode = false;
    isRetryMode = true; // Enable retry mode

    // Switch to quiz screen
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');

    // Update total questions display
    totalQNum.innerText = wrongQuestions.length;

    // Render first wrong question
    renderQuestion();
    updateProgress();
}

function startReview() {
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    isReviewMode = true;

    // Show filter buttons
    const filterContainer = document.getElementById('review-filters');
    if (filterContainer) {
        filterContainer.classList.remove('hidden');

        // Setup filter button handlers
        const filterBtns = filterContainer.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Apply filter
                const filter = this.getAttribute('data-filter');
                applyReviewFilter(filter);
            });
        });
    }

    // Show back to results button
    showBackToResultsButton();

    renderQuestion();
    updateProgress();
    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
}

function showBackToResultsButton() {
    // Remove existing button if any
    let existingBtn = document.getElementById('back-to-results-btn');
    if (existingBtn) existingBtn.remove();

    // Create back to results button
    const backBtn = document.createElement('button');
    backBtn.id = 'back-to-results-btn';
    backBtn.className = 'nav-btn';
    backBtn.innerText = 'Quay Lại Kết Quả';
    backBtn.onclick = () => {
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');
        // Hide filters when going back
        const filterContainer = document.getElementById('review-filters');
        if (filterContainer) filterContainer.classList.add('hidden');
        // Remove the back button
        backBtn.remove();
        // Reset filtered questions
        filteredQuestions = [];
        currentFilteredIndex = 0;
    };

    // Insert before the footer-actions div
    const footer = document.querySelector('.quiz-footer');
    const footerActions = document.querySelector('.footer-actions');
    footer.insertBefore(backBtn, footerActions);
}

// Track filtered questions
let filteredQuestions = [];
let currentFilteredIndex = 0;

function applyReviewFilter(filter) {
    if (filter === 'all') {
        filteredQuestions = questions.map((q, idx) => idx);
    } else if (filter === 'correct') {
        filteredQuestions = questions.map((q, idx) => ({ q, idx }))
            .filter(({ q }) => isQuestionCorrect(q))
            .map(({ idx }) => idx);
    } else if (filter === 'wrong') {
        filteredQuestions = questions.map((q, idx) => ({ q, idx }))
            .filter(({ q }) => !isQuestionCorrect(q))
            .map(({ idx }) => idx);
    }

    if (filteredQuestions.length === 0) {
        alert('Không có câu hỏi nào phù hợp với bộ lọc này!');
        // Reset to all
        filteredQuestions = questions.map((q, idx) => idx);
        document.querySelector('.filter-btn[data-filter="all"]').click();
        return;
    }

    currentFilteredIndex = 0;
    currentQuestionIndex = filteredQuestions[0];
    renderQuestion();
    updateProgress();
}

function isQuestionCorrect(question) {
    if (question.type === 'single') {
        return userAnswers[question.id] === question.correct[0];
    } else if (question.type === 'multiple') {
        const user = userAnswers[question.id] || [];
        const correct = question.correct;

        // Sort both arrays to ensure order doesn't matter
        const sortedUser = [...user].sort((a, b) => a - b);
        const sortedCorrect = [...correct].sort((a, b) => a - b);

        // Check if arrays are equal
        return sortedUser.length === sortedCorrect.length &&
            sortedUser.every((val, idx) => val === sortedCorrect[idx]);
    } else if (question.type === 'group') {
        let allCorrect = true;
        question.subQuestions.forEach((sub, idx) => {
            const uAns = userAnswers[question.id] ? userAnswers[question.id][idx] : undefined;
            if (uAns !== sub.correct) allCorrect = false;
        });
        return allCorrect;
    } else if (question.type === 'drag_drop') {
        let allCorrect = true;
        question.items.forEach(item => {
            // Only check required items (if required property exists and is true)
            if (item.required !== false) {
                const uTarget = userAnswers[question.id] ? userAnswers[question.id][item.id] : null;
                if (uTarget !== item.correctTarget) allCorrect = false;
            }
        });
        return allCorrect;
    }
    return false;
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];

    // Update question number display
    if (isReviewMode && filteredQuestions.length > 0) {
        currentQNum.innerText = `${currentFilteredIndex + 1}/${filteredQuestions.length}`;
    } else if (filteredQuestions.length > 0 && !isReviewMode) {
        // Retry wrong answers mode
        currentQNum.innerText = `${currentFilteredIndex + 1}`;
    } else {
        currentQNum.innerText = currentQuestionIndex + 1;
    }

    questionContainer.innerHTML = '';

    const qTitle = document.createElement('div');
    qTitle.className = 'question-text';

    // Remove original question number and add sequential numbering
    let questionText = question.text;
    if (isShuffleMode) {
        // Remove "Câu X:" from the beginning
        questionText = questionText.replace(/^Câu\s+\d+:\s*/, '');
        // Add sequential numbering
        questionText = `Câu ${currentQuestionIndex + 1}: ${questionText}`;
    }
    qTitle.innerText = questionText;
    questionContainer.appendChild(qTitle);

    if (question.type === 'group') {
        renderGroupQuestion(question);
    } else if (question.type === 'drag_drop') {
        renderDragDropQuestion(question);
    } else {
        renderStandardQuestion(question);
    }

    // Update Buttons
    if (isReviewMode && filteredQuestions.length > 0) {
        prevBtn.disabled = currentFilteredIndex === 0;
    } else if (filteredQuestions.length > 0 && !isReviewMode) {
        // Retry wrong answers mode
        prevBtn.disabled = currentFilteredIndex === 0;
    } else {
        prevBtn.disabled = currentQuestionIndex === 0;
    }

    // Check if we're at the last question (either in filtered mode or normal mode)
    const isLastQuestion = (filteredQuestions.length > 0 && !isReviewMode)
        ? currentFilteredIndex === filteredQuestions.length - 1
        : currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
        nextBtn.classList.add('hidden');
        if (!isReviewMode) {
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.add('hidden');
            let finishReviewBtn = document.getElementById('finish-review-btn');
            if (!finishReviewBtn) {
                finishReviewBtn = document.createElement('button');
                finishReviewBtn.className = 'nav-btn primary';
                finishReviewBtn.innerText = 'Kết thúc xem lại';
                finishReviewBtn.id = 'finish-review-btn';
                finishReviewBtn.onclick = () => {
                    quizScreen.classList.remove('active');
                    resultScreen.classList.add('active');
                    // Hide filters when going back
                    const filterContainer = document.getElementById('review-filters');
                    if (filterContainer) filterContainer.classList.add('hidden');
                };
                document.querySelector('.footer-actions').appendChild(finishReviewBtn);
            }
            submitBtn.classList.add('hidden');
        }
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
        let existingFinish = document.getElementById('finish-review-btn');
        if (existingFinish) existingFinish.remove();
    }
}

function renderStandardQuestion(question) {
    const optionsList = document.createElement('div');
    optionsList.className = 'options-list';

    question.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';

        const marker = document.createElement('div');
        marker.className = 'option-marker';
        // Add checkbox class for multiple choice questions
        if (question.type === 'multiple') {
            marker.classList.add('checkbox');
        }
        marker.innerText = String.fromCharCode(65 + idx);

        const text = document.createElement('span');
        text.innerText = opt;

        card.appendChild(marker);
        card.appendChild(text);

        const userAnswer = userAnswers[question.id];
        const isSelected = question.type === 'single'
            ? userAnswer === idx
            : (userAnswer || []).includes(idx);

        if (isSelected) {
            card.classList.add('selected');
        }

        if (isReviewMode) {
            const isCorrect = question.correct.includes(idx);
            if (isCorrect) {
                card.classList.add('correct');
            } else if (isSelected && !isCorrect) {
                card.classList.add('incorrect');
            }
        }

        if (!isReviewMode) {
            card.addEventListener('click', () => handleOptionClick(question, idx));
        }

        optionsList.appendChild(card);
    });

    questionContainer.appendChild(optionsList);
}

function renderGroupQuestion(question) {
    question.subQuestions.forEach((subQ, subIdx) => {
        const subContainer = document.createElement('div');
        subContainer.className = 'sub-question';

        const subTitle = document.createElement('div');
        subTitle.className = 'sub-question-text';
        subTitle.innerText = subQ.text;
        subContainer.appendChild(subTitle);

        const optionsRow = document.createElement('div');
        optionsRow.style.display = 'flex';
        optionsRow.style.gap = '12px';

        subQ.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'secondary-btn';
            btn.style.flex = '1';
            btn.style.padding = '8px';
            btn.innerText = opt;

            if (!userAnswers[question.id]) userAnswers[question.id] = {};
            const isSelected = userAnswers[question.id][subIdx] === idx;

            if (isSelected) {
                btn.style.background = 'var(--primary-color)';
                btn.style.color = 'white';
                btn.style.borderColor = 'var(--primary-color)';
            }

            if (isReviewMode) {
                const isCorrect = subQ.correct === idx;
                if (isCorrect) {
                    btn.style.background = 'var(--success)';
                    btn.style.color = 'white';
                    btn.style.borderColor = 'var(--success)';
                } else if (isSelected && !isCorrect) {
                    btn.style.background = 'var(--error)';
                    btn.style.color = 'white';
                    btn.style.borderColor = 'var(--error)';
                }
            } else {
                btn.addEventListener('click', () => {
                    userAnswers[question.id][subIdx] = idx;
                    renderQuestion();
                });
            }

            optionsRow.appendChild(btn);
        });

        subContainer.appendChild(optionsRow);
        questionContainer.appendChild(subContainer);
    });
}

// Drag functionality variables
let draggedItem = null;
let selectedItem = null; // For click-to-select functionality

function renderDragDropQuestion(question) {
    const container = document.createElement('div');
    container.className = 'dnd-container';

    // Initialize answer storage if needed
    if (!userAnswers[question.id]) userAnswers[question.id] = {};

    // Local drag state for this question
    let currentDraggedItem = null;

    // 1. Source Pool (Items)
    const sourceContainer = document.createElement('div');
    sourceContainer.className = 'dnd-source';
    sourceContainer.setAttribute('data-target-id', 'source');

    // Click to return selected item to source
    if (!isReviewMode) {
        sourceContainer.addEventListener('click', function (e) {
            if (selectedItem && selectedItem.questionId === question.id) {
                // Move item back to source
                sourceContainer.appendChild(selectedItem.element);

                // Update answer
                if (!userAnswers[question.id]) userAnswers[question.id] = {};
                userAnswers[question.id][selectedItem.element.id] = null;

                // Deselect
                selectedItem.element.classList.remove('selected');
                selectedItem = null;
                console.log('Item returned to source via click');
            }
        });
    }

    // 2. Targets Container (Grid)
    const targetsContainer = document.createElement('div');
    targetsContainer.className = 'dnd-target-group';

    // Create Drop Zones (Vertical Columns)
    question.targets.forEach(target => {
        const zoneWrapper = document.createElement('div');
        zoneWrapper.className = 'dnd-zone';
        zoneWrapper.setAttribute('data-target-id', target.id);

        // Header
        const title = document.createElement('div');
        title.className = 'dnd-zone-title';
        title.innerText = target.text;
        zoneWrapper.appendChild(title);

        // Inner Drop Box
        const dropBox = document.createElement('div');
        dropBox.className = 'dnd-drop-box';

        // Click to drop selected item
        if (!isReviewMode) {
            dropBox.addEventListener('click', function (e) {
                if (selectedItem && selectedItem.questionId === question.id) {
                    // Move item to this drop box
                    dropBox.appendChild(selectedItem.element);

                    // Update answer
                    const targetId = parseInt(zoneWrapper.getAttribute('data-target-id'));
                    if (!userAnswers[question.id]) userAnswers[question.id] = {};
                    userAnswers[question.id][selectedItem.element.id] = targetId;

                    // Deselect
                    selectedItem.element.classList.remove('selected');
                    selectedItem = null;
                    console.log('Item placed via click');
                }
            });
        }

        zoneWrapper.appendChild(dropBox);

        targetsContainer.appendChild(zoneWrapper);
    });

    // Render Items
    question.items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'draggable-item';
        itemEl.innerText = item.text;
        itemEl.id = item.id;

        // CRITICAL: Set draggable attribute explicitly
        if (!isReviewMode) {
            itemEl.setAttribute('draggable', 'true');

            itemEl.addEventListener('dragstart', function (e) {
                console.log('Drag started:', item.id);
                currentDraggedItem = item;
                this.classList.add('dragging');
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData('text/plain', item.id);
            });

            itemEl.addEventListener('dragend', function () {
                console.log('Drag ended');
                currentDraggedItem = null;
                this.classList.remove('dragging');
                document.querySelectorAll('.dnd-drop-box, .dnd-source').forEach(el => el.classList.remove('drag-over'));
            });

            // Touch events for mobile
            let touchStartY = 0;
            let touchStartX = 0;
            let isDragging = false;

            itemEl.addEventListener('touchstart', function (e) {
                console.log('Touch started:', item.id);
                const touch = e.touches[0];
                touchStartX = touch.clientX;
                touchStartY = touch.clientY;
                isDragging = false;

                // Don't set as dragging yet - wait for touchmove
            });

            itemEl.addEventListener('touchmove', function (e) {
                const touch = e.touches[0];
                const deltaX = Math.abs(touch.clientX - touchStartX);
                const deltaY = Math.abs(touch.clientY - touchStartY);

                // Only start dragging if moved more than 10px
                if (deltaX > 10 || deltaY > 10) {
                    isDragging = true;
                    e.preventDefault();

                    if (!this.classList.contains('dragging')) {
                        currentDraggedItem = item;
                        this.classList.add('dragging');
                    }

                    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);

                    // Remove previous drag-over
                    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));

                    // Add drag-over to valid target
                    const dropTarget = elementBelow?.closest('.dnd-drop-box, .dnd-source');
                    if (dropTarget) {
                        dropTarget.classList.add('drag-over');
                    }
                }
            });

            itemEl.addEventListener('touchend', function (e) {
                console.log('Touch ended, isDragging:', isDragging);

                if (isDragging) {
                    // Handle drag and drop
                    const touch = e.changedTouches[0];
                    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
                    const dropTarget = elementBelow?.closest('.dnd-drop-box, .dnd-source');

                    if (dropTarget) {
                        // Move item
                        dropTarget.appendChild(itemEl);

                        // Update answer
                        if (dropTarget.classList.contains('dnd-source')) {
                            if (!userAnswers[question.id]) userAnswers[question.id] = {};
                            userAnswers[question.id][itemEl.id] = null;
                        } else {
                            const wrapper = dropTarget.closest('.dnd-zone');
                            if (wrapper) {
                                const targetId = wrapper.getAttribute('data-target-id');
                                const numericId = parseInt(targetId);
                                if (!userAnswers[question.id]) userAnswers[question.id] = {};
                                userAnswers[question.id][itemEl.id] = numericId;
                                console.log('Touch saved answer:', itemEl.id, '=', numericId);
                            }
                        }
                    }

                    this.classList.remove('dragging');
                    currentDraggedItem = null;
                    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
                } else {
                    // Handle tap (click to select)
                    // Deselect previous item
                    document.querySelectorAll('.draggable-item.selected').forEach(el => el.classList.remove('selected'));

                    // Select this item
                    this.classList.add('selected');
                    selectedItem = { element: itemEl, data: item, questionId: question.id };
                    console.log('Item selected via tap:', item.id);
                }

                isDragging = false;
            });

            // Click to select item
            itemEl.addEventListener('click', function (e) {
                e.stopPropagation();

                // Deselect previous item
                document.querySelectorAll('.draggable-item.selected').forEach(el => el.classList.remove('selected'));

                // Select this item
                this.classList.add('selected');
                selectedItem = { element: itemEl, data: item, questionId: question.id };
                console.log('Item selected:', item.id);
            });
        } else {
            itemEl.setAttribute('draggable', 'false');
        }

        // Place in Correct Box
        const currentLoc = userAnswers[question.id][item.id];

        if (isReviewMode) {
            const correctTarget = item.correctTarget;
            // Only mark as correct/wrong if item is required (not explicitly false)
            if (item.required !== false && currentLoc && currentLoc !== 'source') {
                if (currentLoc == correctTarget) itemEl.classList.add('correct-place');
                else itemEl.classList.add('wrong-place');
            }
        }

        if (currentLoc && currentLoc !== 'source') {
            // Find wrapper then inner box
            const wrapper = targetsContainer.querySelector(`[data-target-id="${currentLoc}"]`);
            if (wrapper) {
                const innerBox = wrapper.querySelector('.dnd-drop-box');
                if (innerBox) innerBox.appendChild(itemEl);
                else sourceContainer.appendChild(itemEl);
            } else {
                sourceContainer.appendChild(itemEl);
            }
        } else {
            sourceContainer.appendChild(itemEl);
        }
    });

    container.appendChild(sourceContainer);
    container.appendChild(targetsContainer);
    questionContainer.appendChild(container);

    if (!isReviewMode) {
        setupDelegatedDrag(container, question, () => currentDraggedItem);
    }
}

function setupDelegatedDrag(container, question, getDraggedItem) {
    // Drop Targets are: .dnd-source AND .dnd-drop-box
    const validTargetsSelector = '.dnd-source, .dnd-drop-box';

    container.addEventListener('dragover', function (e) {
        e.preventDefault();
        const dropTarget = e.target.closest(validTargetsSelector);
        if (dropTarget) {
            e.dataTransfer.dropEffect = "move";
            document.querySelectorAll(validTargetsSelector).forEach(el => el.classList.remove('drag-over'));
            dropTarget.classList.add('drag-over');
        }
    });

    container.addEventListener('drop', function (e) {
        e.preventDefault();
        console.log('Drop event triggered');

        const dropTarget = e.target.closest(validTargetsSelector);
        if (!dropTarget) {
            console.log('No valid drop target');
            return;
        }

        dropTarget.classList.remove('drag-over');

        const id = e.dataTransfer.getData('text/plain');
        let itemEl = document.getElementById(id);
        const draggedItem = getDraggedItem();

        if (!itemEl && draggedItem) itemEl = document.getElementById(draggedItem.id);
        if (!itemEl) {
            console.log('No item element found');
            return;
        }

        console.log('Moving item:', itemEl.id, 'to', dropTarget.className);

        // Move Item
        dropTarget.appendChild(itemEl);

        // Determine Logic ID
        if (dropTarget.classList.contains('dnd-source')) {
            if (!userAnswers[question.id]) userAnswers[question.id] = {};
            userAnswers[question.id][itemEl.id] = null;
        } else {
            // If dropping into dnd-drop-box, get ID from parent .dnd-zone
            const wrapper = dropTarget.closest('.dnd-zone');
            if (wrapper) {
                const targetId = wrapper.getAttribute('data-target-id');
                const numericId = parseInt(targetId);

                if (!userAnswers[question.id]) userAnswers[question.id] = {};
                userAnswers[question.id][itemEl.id] = numericId;
                console.log('Saved answer:', itemEl.id, '=', numericId);
            }
        }
    });
}

function handleOptionClick(question, optionIdx) {
    if (question.type === 'single') {
        userAnswers[question.id] = optionIdx;
    } else {
        if (!userAnswers[question.id]) userAnswers[question.id] = [];
        const currentSelected = userAnswers[question.id];
        const indexInArray = currentSelected.indexOf(optionIdx);

        if (indexInArray > -1) {
            currentSelected.splice(indexInArray, 1);
        } else {
            currentSelected.push(optionIdx);
        }
    }
    renderQuestion();
}

function navigate(direction) {
    if (filteredQuestions.length > 0) {
        // Navigate through filtered questions (both review mode and retry wrong mode)
        const newFilteredIndex = currentFilteredIndex + direction;
        if (newFilteredIndex >= 0 && newFilteredIndex < filteredQuestions.length) {
            currentFilteredIndex = newFilteredIndex;
            currentQuestionIndex = filteredQuestions[currentFilteredIndex];
            renderQuestion();
            updateProgress();
        }
    } else {
        // Normal navigation
        const newIndex = currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < questions.length) {
            currentQuestionIndex = newIndex;
            renderQuestion();
            updateProgress();
        }
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function calculateScore() {
    let score = 0;
    questions.forEach(q => {
        if (q.type === 'single') {
            if (userAnswers[q.id] === q.correct[0]) score++;
        } else if (q.type === 'multiple') {
            const user = userAnswers[q.id] || [];
            const correct = q.correct;
            const isMatch = user.length === correct.length && correct.every(val => user.includes(val));
            if (isMatch) score++;
        } else if (q.type === 'group') {
            let subScore = 0;
            q.subQuestions.forEach((sub, idx) => {
                const uAns = userAnswers[q.id] ? userAnswers[q.id][idx] : undefined;
                if (uAns === sub.correct) subScore++;
            });
            score += (subScore / q.subQuestions.length);
        } else if (q.type === 'drag_drop') {
            // Check each item
            let itemsCorrect = 0;
            q.items.forEach(item => {
                const uTarget = userAnswers[q.id] ? userAnswers[q.id][item.id] : null;
                if (uTarget === item.correctTarget) itemsCorrect++;
            });
            // Partial score per item or all-or-nothing?
            // Let's do partial: 1 point total, split by items.
            score += (itemsCorrect / q.items.length);
        }
    });
    return Math.round(score * 10) / 10;
}

function submitQuiz() {
    if (isRetryMode) {
        submitRetryQuiz();
    } else {
        submitMainQuiz();
    }
}

function submitMainQuiz() {
    const score = calculateScore();
    const totalQuestions = questions.length;

    // Hide quiz screen, show result screen
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // Display score
    scoreDisplay.innerText = score;

    // Display message based on score
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) {
        resultMessage.innerText = 'Xuất sắc! Bạn đã nắm vững kiến thức!';
    } else if (percentage >= 60) {
        resultMessage.innerText = 'Khá tốt! Hãy tiếp tục cố gắng!';
    } else if (percentage >= 40) {
        resultMessage.innerText = 'Cần cố gắng thêm!';
    } else {
        resultMessage.innerText = 'Hãy ôn tập kỹ hơn nhé!';
    }

    // Update score circle gradient
    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
        const deg = (score / totalQuestions) * 360;
        scoreCircle.style.background = `conic-gradient(var(--primary-color) ${deg}deg, #e2e8f0 ${deg}deg)`;
    }

    // Show normal result buttons
    showMainResultButtons();
}

function submitRetryQuiz() {
    // Calculate score for retry questions only
    let retryScore = 0;
    filteredQuestions.forEach(idx => {
        const q = questions[idx];
        if (isQuestionCorrect(q)) {
            retryScore++;
        }
    });

    const totalRetryQuestions = filteredQuestions.length;

    // Hide quiz screen, show result screen
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // Display retry score
    scoreDisplay.innerText = retryScore;

    // Display message based on retry score
    const percentage = (retryScore / totalRetryQuestions) * 100;
    if (percentage === 100) {
        resultMessage.innerText = 'Hoàn hảo! Bạn đã làm đúng tất cả! 🎉';
    } else if (percentage >= 80) {
        resultMessage.innerText = 'Rất tốt! Tiến bộ rõ rệt!';
    } else if (percentage >= 60) {
        resultMessage.innerText = 'Khá hơn rồi! Cố gắng thêm nhé!';
    } else {
        resultMessage.innerText = 'Hãy thử lại lần nữa!';
    }

    // Update score circle gradient
    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
        const deg = (retryScore / totalRetryQuestions) * 360;
        scoreCircle.style.background = `conic-gradient(var(--primary-color) ${deg}deg, #e2e8f0 ${deg}deg)`;
    }

    // Show retry result buttons
    showRetryResultButtons();
}

function showMainResultButtons() {
    // Show normal buttons
    reviewBtn.style.display = 'inline-block';
    retryWrongBtn.style.display = 'inline-block';
    retryBtn.style.display = 'inline-block';

    // Hide retry-specific buttons if they exist
    const retryAllBtn = document.getElementById('retry-all-retried-btn');
    const backToMainBtn = document.getElementById('back-to-main-results-btn');
    if (retryAllBtn) retryAllBtn.style.display = 'none';
    if (backToMainBtn) backToMainBtn.style.display = 'none';
}

function showRetryResultButtons() {
    // Hide normal buttons
    reviewBtn.style.display = 'none';
    retryWrongBtn.style.display = 'none';
    retryBtn.style.display = 'none';

    // Create or show retry-specific buttons
    let retryAllBtn = document.getElementById('retry-all-retried-btn');
    let backToMainBtn = document.getElementById('back-to-main-results-btn');

    if (!retryAllBtn) {
        retryAllBtn = document.createElement('button');
        retryAllBtn.id = 'retry-all-retried-btn';
        retryAllBtn.className = 'secondary-btn retry-wrong';
        retryAllBtn.innerText = 'Làm Lại Các Câu Này';
        retryAllBtn.onclick = retryAllRetriedQuestions;
        document.querySelector('.result-actions').appendChild(retryAllBtn);
    } else {
        retryAllBtn.style.display = 'inline-block';
    }

    if (!backToMainBtn) {
        backToMainBtn = document.createElement('button');
        backToMainBtn.id = 'back-to-main-results-btn';
        backToMainBtn.className = 'primary-btn';
        backToMainBtn.innerText = 'Làm Lại Tất Cả';
        backToMainBtn.onclick = resetToFullQuiz;
        document.querySelector('.result-actions').appendChild(backToMainBtn);
    } else {
        backToMainBtn.style.display = 'inline-block';
    }
}

function retryAllRetriedQuestions() {
    // Clear all answers for the filtered questions
    filteredQuestions.forEach(idx => {
        const q = questions[idx];
        delete userAnswers[q.id];
    });

    // Reset to first question
    currentFilteredIndex = 0;
    currentQuestionIndex = filteredQuestions[0];

    // Switch to quiz screen
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');

    // Render first question
    renderQuestion();
    updateProgress();
}

function resetToFullQuiz() {
    // Restore original questions if in shuffle mode
    if (isShuffleMode && originalQuestions.length > 0) {
        questions.length = 0;
        questions.push(...JSON.parse(JSON.stringify(originalQuestions)));
        isShuffleMode = false;
    }

    // Reset all state
    isRetryMode = false;
    filteredQuestions = [];
    currentFilteredIndex = 0;
    currentQuestionIndex = 0;
    userAnswers = {};
    originalUserAnswers = {};

    // Go back to start screen
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}
