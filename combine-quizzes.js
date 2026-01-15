const fs = require('fs');

// Read quiz1.js and extract questions array
const quiz1Content = fs.readFileSync('./quiz1.js', 'utf8');
const quiz1Match = quiz1Content.match(/const questions = \[([\s\S]*?)\];/);
const quiz1QuestionsStr = quiz1Match ? quiz1Match[1] : '';

// Read quiz2-data.js
const quiz2Content = fs.readFileSync('./quiz2-data.js', 'utf8');
const quiz2Match = quiz2Content.match(/const questions = \[([\s\S]*?)\];/);
const quiz2QuestionsStr = quiz2Match ? quiz2Match[1] : '';

// Read quiz3-data.js
const quiz3Content = fs.readFileSync('./quiz3-data.js', 'utf8');
const quiz3Match = quiz3Content.match(/const questions = \[([\s\S]*?)\];/);
const quiz3QuestionsStr = quiz3Match ? quiz3Match[1] : '';

// Parse questions to update IDs
function updateQuestionIds(questionsStr, startId) {
    let currentId = startId;
    return questionsStr.replace(/id:\s*\d+/g, () => {
        return `id: ${currentId++}`;
    });
}

// Update IDs for each quiz section
const quiz1Updated = updateQuestionIds(quiz1QuestionsStr, 1);
const quiz2Updated = updateQuestionIds(quiz2QuestionsStr, 33); // Start from 33 (after 32 questions from quiz1)
const quiz3Updated = updateQuestionIds(quiz3QuestionsStr, 62); // Start from 62 (after 32+29 questions)

// Combine all questions
const combinedContent = `// Bài kiểm tra kỹ năng 1: Tổng hợp tất cả câu hỏi từ bài 1, 2, 3
const questions = [
${quiz1Updated},
${quiz2Updated},
${quiz3Updated}
];
`;

// Write to test1-data.js
fs.writeFileSync('./test1-data.js', combinedContent, 'utf8');
console.log('✅ Đã tạo file test1-data.js thành công!');
console.log('📊 Tổng số câu hỏi: 91 câu (32 + 29 + 30)');
console.log('📝 Đã cập nhật ID cho tất cả câu hỏi để tránh trùng lặp');
