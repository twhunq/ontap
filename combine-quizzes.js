const fs = require('fs');

// Read all three quiz files
const quiz1Content = fs.readFileSync('./quiz1.js', 'utf8');
const quiz2Content = fs.readFileSync('./quiz2-data.js', 'utf8');
const quiz3Content = fs.readFileSync('./quiz3-data.js', 'utf8');

// Extract questions arrays
const quiz1Match = quiz1Content.match(/const questions = \[([\s\S]*?)\];\s*$/m);
const quiz2Match = quiz2Content.match(/const questions = \[([\s\S]*?)\];\s*$/m);
const quiz3Match = quiz3Content.match(/const questions = \[([\s\S]*?)\];\s*$/m);

if (!quiz1Match || !quiz2Match || !quiz3Match) {
    console.error('❌ Không thể tìm thấy questions array trong một hoặc nhiều file');
    process.exit(1);
}

// Parse questions to update IDs properly
function updateQuestionIds(questionsStr, startId) {
    let currentId = startId;
    let result = '';
    let depth = 0;
    let inQuestion = false;
    let questionStart = 0;

    for (let i = 0; i < questionsStr.length; i++) {
        const char = questionsStr[i];

        if (char === '{') {
            depth++;
            if (depth === 1) {
                inQuestion = true;
                questionStart = i;
            }
        } else if (char === '}') {
            depth--;
            if (depth === 0 && inQuestion) {
                // We've found a complete question object
                let questionStr = questionsStr.substring(questionStart, i + 1);
                // Only replace the first occurrence of "id: number" in this question
                questionStr = questionStr.replace(/(\s+)id:\s*\d+/, `$1id: ${currentId}`);
                result += questionStr;
                currentId++;
                inQuestion = false;
            }
        }

        if (depth > 0 && !inQuestion) {
            result += char;
        } else if (depth === 0 && !inQuestion) {
            result += char;
        }
    }

    return result;
}

const quiz1Updated = updateQuestionIds(quiz1Match[1], 1);
const quiz2Updated = updateQuestionIds(quiz2Match[1], 33); // Start from 33 (after 32 questions)
const quiz3Updated = updateQuestionIds(quiz3Match[1], 62); // Start from 62 (after 32+29=61 questions)

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

// Verify the result
const verifyContent = fs.readFileSync('./test1-data.js', 'utf8');
const idMatches = verifyContent.match(/^\s+id:\s*\d+/gm);
const ids = idMatches ? idMatches.map(m => parseInt(m.match(/\d+/)[0])) : [];
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

console.log('✅ Đã tạo file test1-data.js thành công!');
console.log('📊 Tổng số câu hỏi:', ids.length);
console.log('🔢 ID đầu tiên:', ids[0]);
console.log('🔢 ID cuối cùng:', ids[ids.length - 1]);
if (duplicates.length > 0) {
    console.log('⚠️  ID bị trùng:', [...new Set(duplicates)]);
} else {
    console.log('✅ Không có ID trùng lặp!');
}
