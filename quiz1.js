const questions = [
    {
        id: 1,
        text: "Câu 1: Triết học ra đời sớm nhất ở đâu?",
        type: "single",
        options: [
            "A. Ai Cập, Hy Lạp, Ấn Độ",
            "B. Ấn Độ, Châu Phi, Nga",
            "C. Ấn Độ, Trung Quốc, Hy Lạp",
            "D. Ai Cập, Ấn Độ, Trung Quốc"
        ],
        correct: [2] // C is index 2
    },
    {
        id: 2,
        text: "Câu 2: Triết học ra đời từ đâu?",
        type: "single",
        options: [
            "A. Từ sự vận động của ý muốn chủ quan của con người",
            "B. Từ sự sáng tạo của nhà tư tưởng",
            "C. Từ sự suy tư của con người về bản thân mình",
            "D. Từ thực tiễn, do nhu cầu của thực tiễn"
        ],
        correct: [3] // D
    },
    {
        id: 3,
        text: "Câu 3: Chỉ ra những phát biểu nào Đúng, phát biểu nào Sai:",
        type: "group",
        subQuestions: [
            {
                text: "1) Khẳng định triết học Mác là sự kết hợp phép biện chứng của Hêghen và chủ nghĩa duy vật của Phoi-ơ-bắc là:",
                options: ["Đúng", "Sai"],
                correct: 1 // Sai
            },
            {
                text: "2) Khẳng định triết học Mác có sự thống nhất giữa phương pháp biện chứng và thế giới quan duy vật là:",
                options: ["Đúng", "Sai"],
                correct: 0 // Đúng
            },
            {
                text: "3) Khẳng định triết học Mác khắc phục tính chất trực quan, siêu hình của chủ nghĩa duy vật cũ và khắc phục tính chất duy tâm, thần bí của phép biện chứng duy tâm là:",
                options: ["Đúng", "Sai"],
                correct: 0 // Đúng
            },
            {
                text: "4) Khẳng định C.Mác và Ph. Ăngghen đã vận dụng và mở rộng quan điểm duy vật biện chứng vào nghiên cứu lịch sử xã hội là:",
                options: ["Sai", "Đúng"],
                correct: 1 // Đúng
            }
        ]
    },
    {
        id: 4,
        text: "Câu 4: Khẳng định nào sau đây về triết học Mác - Lênin là sai?",
        type: "single",
        options: [
            "A. Triết học Mác - Lênin có sự thống nhất giữa phương pháp biện chứng và thế giới quan duy vật",
            "B. Triết học Mác - Lênin kế thừa và cải tạo Phép biện chứng của Hêghen trên cơ sở duy vật",
            "C. Triết học Mác - Lênin là sự kết hợp phép biện chứng của Hêghen và chủ nghĩa duy vật của Phoi-ơ-bắc",
            "D. Triết học Mác - Lênin là chủ nghĩa duy vật biện chứng"
        ],
        correct: [2] // C
    },
    {
        id: 5,
        text: "Câu 5: Các hình thức của chủ nghĩa duy tâm là:",
        type: "single",
        options: [
            "A. Chủ nghĩa duy tâm chất phác và chủ nghĩa duy tâm siêu hình",
            "B. Chủ nghĩa duy tâm biện chứng và chủ nghĩa duy tâm khách quan",
            "C. Chủ nghĩa duy tâm siêu hình và chủ nghĩa duy tâm biện chứng",
            "D. Chủ nghĩa duy tâm khách quan và chủ nghĩa duy tâm chủ quan"
        ],
        correct: [3] // D
    },
    {
        id: 6,
        text: "Câu 6: Những phát minh của khoa học tự nhiên nửa đầu thế kỷ XIX đã cung cấp cơ sở tri thức khoa học cho sự phát triển của cái gì?",
        type: "single",
        options: [
            "A. Phát triển tính thần bí của phép biện chứng duy vật",
            "B. Phát triển phương pháp tư duy siêu hình",
            "C. Phát triển tư duy biện chứng thoát khỏi tính tự phát thời kỳ cổ đại và thoát khỏi cái vỏ thần bí của phép biện chứng duy tâm",
            "D. Phát triển phép biện chứng tự phát"
        ],
        correct: [2] // C
    },
    {
        id: 7,
        text: "Câu 7: Biểu hiện nào sau đây phản ánh đúng bản chất của cuộc cách mạng khoa học và công nghệ hiện đại?",
        type: "single",
        options: [
            "A. Phát triển mạnh mẽ của ngành nông nghiệp, công nghiệp",
            "B. Cơ sở lý luận cho các phát minh khoa học",
            "C. Cải biến về chất các lực lượng sản xuất trên cơ sở tri thức khoa học",
            "D. Tăng trưởng dân số nhanh chóng"
        ],
        correct: [2] // C
    },
    {
        id: 8,
        text: "Câu 8: Trong sự phát triển của xã hội hiện đại, triết học Mác - Lênin đóng vai trò gì?",
        type: "single",
        options: [
            "A. Phân tích xu hướng phát triển của xã hội hiện đại dưới góc nhìn khoa học và cách mạng",
            "B. Hợp thức hóa mọi hình thức hợp tác quốc tế",
            "C. Không thúc đẩy hợp tác giữa các quốc gia",
            "D. Bảo vệ lợi ích của chủ nghĩa tư bản"
        ],
        correct: [0] // A
    },
    {
        id: 9,
        text: "Câu 9: Triết học Mác - Lênin nói chung có giá trị định hướng quan trọng cho con người trong nhận thức và hoạt động thực tiễn của mình vì:",
        type: "single",
        options: [
            "A. Giúp con người thấy trước được phương hướng vận động chung của đối tượng, tránh được những lầm lạc hay mò mẫm",
            "B. Tri thức thực tiễn là yếu tố duy nhất quyết định thành công",
            "C. Kết hợp chặt chẽ tri thức triết học và tri thức khoa học chuyên ngành",
            "D. Triết học Mác - Lênin luôn đúng trong nhận thức và hoạt động thực tiễn"
        ],
        correct: [0] // A
    },
    {
        id: 10,
        text: "Câu 10: Việc vận dụng sai lệch triết học Mác - Lênin dẫn đến hậu quả nào? (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Một trong những nguyên nhân của sự khủng hoảng của chủ nghĩa xã hội thế giới",
            "B. Làm cho tư tưởng trở nên giáo điều, xơ cứng",
            "C. Tăng cường mọi hình thức hợp tác quốc tế",
            "D. Phát triển nhanh chóng nền kinh tế"
        ],
        correct: [0, 1] // A & B
    },
    {
        id: 11,
        text: "Câu 11: Triết học Mác - Lênin có vai trò quan trọng trong việc phân tích các xu thế tiến hóa xã hội vì:",
        type: "single",
        options: [
            "A. Triết học Mác - Lênin làm nền tảng tư tưởng cho sự nghiệp đổi mới theo định hướng xã hội chủ nghĩa",
            "B. Vì cái biến về chất các lực lượng sản xuất trên cơ sở tri thức khoa học",
            "C. Vì triết học Mác - Lênin phân ánh đúng bản chất của các hiện tượng xã hội và quy luật vận động của chúng",
            "D. Kết hợp chặt chẽ tri thức triết học và tri thức khoa học chuyên ngành"
        ],
        correct: [2] // C
    },
    {
        id: 12,
        text: "Câu 12: Mối quan hệ giữa triết học Mác-Lênin và cách mạng khoa học công nghệ được thể hiện như thế nào?",
        type: "single",
        options: [
            "A. Cách mạng khoa học công nghệ làm triết học Mác-Lênin trở nên lạc hậu",
            "B. Triết học Mác-Lênin là cơ sở lý luận truyền bá tri thức khoa học",
            "C. Triết học Mác-Lênin là cơ sở lý luận - phương pháp luận cho các phát minh khoa học",
            "D. Triết học Mác-Lênin là sản phẩm của cách mạng khoa học công nghệ"
        ],
        correct: [2] // C
    },
    {
        id: 13,
        text: "Câu 13: Yếu tố nào là cơ sở để Đảng Cộng sản Việt Nam vận dụng xây dựng công cuộc đổi mới toàn diện xã hội theo định hướng xã hội chủ nghĩa?",
        type: "single",
        options: [
            "A. Chỉ cần phương pháp luận của triết học Mác - Lênin",
            "B. Chỉ cần thế giới quan của triết học Mác - Lênin",
            "C. Cơ sở lý luận khoa học, trong đó hai nhân là phép biện chứng duy vật của triết học Mác - Lênin",
            "D. Kinh nghiệm cá nhân của lãnh đạo và các mô hình kinh tế phương Tây"
        ],
        correct: [2] // C
    },
    {
        id: 14,
        text: "Câu 14: Kéo thả các nội dung liệt kê dưới đây vào các cột tương ứng:",
        type: "drag_drop",
        targets: [
            { id: 1, text: "1) Triết học Mác - Lênin là cơ sở lý luận khoa học:" },
            { id: 2, text: "2) Triết học Mác - Lênin là thế giới quan, phương pháp luận khoa học và cách mạng:" }
        ],
        items: [
            { id: 'item1', text: "Của công cuộc xây dựng chủ nghĩa xã hội trên thế giới", correctTarget: 1 },
            { id: 'item2', text: "Sự nghiệp đổi mới theo định hướng xã hội chủ nghĩa ở Việt Nam", correctTarget: 1 },
            { id: 'item3', text: "Cho con người trong nhận thức và thực tiễn", correctTarget: 2 }
        ]
    },
    {
        id: 15,
        text: "Câu 15: Triết học ra đời trong điều kiện nào? (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Tư duy của con người đạt trình độ tư duy khái quát cao",
            "B. Xã hội phân chia thành giai cấp và xuất hiện tầng lớp lao động trí óc",
            "C. Xã hội phân chia thành giai cấp",
            "D. Xuất hiện tầng lớp lao động trí óc"
        ],
        correct: [0, 1]
    },
    {
        id: 16,
        text: "Câu 16: Chức năng của triết học Mác - Lênin là gì? (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Chức năng khoa học của các khoa học",
            "B. Chức năng thế giới quan",
            "C. Chức năng làm cầu nối cho các khoa học",
            "D. Chức năng phương pháp luận"
        ],
        correct: [1, 3] // B & D
    },
    {
        id: 17,
        text: "Câu 17: Trong sự phát triển của xã hội hiện đại, triết học Mác - Lênin đóng vai trò gì?",
        type: "single",
        options: [
            "A. Không thúc đẩy hợp tác giữa các quốc gia",
            "B. Bảo vệ lợi ích của chủ nghĩa tư bản",
            "C. Phân tích xu hướng phát triển của xã hội hiện đại dưới góc nhìn khoa học và cách mạng",
            "D. Hợp thức hóa mọi hình thức hợp tác quốc tế"
        ],
        correct: [2] // C
    },
    {
        id: 18,
        text: "Câu 18: Chỉ ra khẳng định nào Đúng, khẳng định nào Sai:",
        type: "group",
        subQuestions: [
            {
                text: "1) Khẳng định vai trò của triết học Mác - Lênin làm nền tảng tư tưởng cho sự nghiệp đổi mới theo định hướng xã hội chủ nghĩa là:",
                options: ["Đúng", "Sai"],
                correct: 0 // Đúng
            },
            {
                text: "2) Nhận thức và vận dụng triết học Mác - Lênin một cách máy móc, thiếu sáng tạo không phải là nguyên nhân dẫn đến khủng hoảng trong chủ nghĩa xã hội thế giới.",
                options: ["Đúng", "Sai"],
                correct: 1 // Sai
            },
            {
                text: "3) Việc nhận thức và vận dụng lý luận Mác - Lênin một cách giáo điều, xơ cứng không ảnh hưởng đến sự phát triển của chủ nghĩa xã hội thế giới.",
                options: ["Đúng", "Sai"],
                correct: 1 // Sai
            },
            {
                text: "4) Triết học Mác - Lênin giúp định hướng phát triển xã hội trong điều kiện cuộc cách mạng khoa học và công nghệ hiện đại.",
                options: ["Đúng", "Sai"],
                correct: 0 // Đúng
            }
        ]
    },
    {
        id: 19,
        text: "Câu 19: Điều kiện kinh tế - xã hội cho sự ra đời của triết học Mác - Lênin? (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Thực tiễn cách mạng của giai cấp vô sản là cơ sở chủ yếu nhất cho sự ra đời triết học Mác",
            "B. Sự củng cố và phát triển của phương thức sản xuất tư bản chủ nghĩa",
            "C. Thực tiễn cách mạng của giai cấp tư sản",
            "D. Giai cấp tư sản ra đời và trở thành lực lượng chính trị độc lập"
        ],
        correct: [0, 1] // A & B
    },
    {
        id: 20,
        text: "Câu 20: Vai trò của triết học Mác - Lênin trong cuộc cách mạng khoa học và công nghệ hiện đại?",
        type: "single",
        options: [
            "A. Là cơ sở lý luận - phương pháp luận cho các phát minh khoa học",
            "B. Đề cao triết học, hạ thấp khoa học",
            "C. Để cao các khoa học, hạ thấp triết học",
            "D. Là công cụ đấu tranh giai cấp"
        ],
        correct: [0] // A
    },
    {
        id: 21,
        text: "Câu 21: Kéo thả các nội dung liệt kê dưới đây vào cột tương ứng:",
        type: "drag_drop",
        targets: [
            { id: 1, text: "1) Chức năng phương pháp luận là:" },
            { id: 2, text: "2) Chức năng thế giới quan là:" }
        ],
        items: [
            { id: 'item4', text: "Giúp con người phát triển tư duy khoa học", correctTarget: 1 },
            { id: 'item5', text: "Định hướng cho con người nhận thức", correctTarget: 2 }
        ]
    },
    {
        id: 22,
        text: "Câu 22: Điều kiện kinh tế - xã hội cho sự ra đời của triết học Mác - Lênin? (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Thực tiễn cách mạng của giai cấp tư sản",
            "B. Thực tiễn cách mạng của giai cấp vô sản là cơ sở chủ yếu nhất cho sự ra đời triết học Mác",
            "C. Giai cấp tư sản ra đời và trở thành lực lượng chính trị độc lập",
            "D. Sự củng cố và phát triển của phương thức sản xuất tư bản chủ nghĩa"
        ],
        correct: [1, 3] // B & D
    },
    {
        id: 23,
        text: "Câu 23: Khẳng định nào sau đây là sai? (Chọn 2 đáp án trả lời sai)",
        type: "multiple",
        options: [
            "A. Triết học Mác cho triết học là khoa học của mọi khoa học",
            "B. Triết học Mác có sự thống nhất giữa phương pháp biện chứng và thế giới quan duy vật",
            "C. Theo quan điểm của triết học Mác: sự phát triển của triết học quan hệ chặt chẽ với sự phát triển của khoa học tự nhiên",
            "D. Theo quan điểm của triết học Mác: triết học thay thế được các khoa học cụ thể"
        ],
        correct: [0, 3] // A & D
    },
    {
        id: 24,
        text: "Câu 24: Đối tượng nghiên cứu của triết học là gì?",
        type: "single",
        options: [
            "A. Những quy luật vận động, phát triển của tự nhiên, xã hội và tư duy",
            "B. Những quy luật hình thành của xã hội và tư duy",
            "C. Những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy",
            "D. Những quy luật vận động của tự nhiên, xã hội"
        ],
        correct: [2] // C
    },
    {
        id: 25,
        text: "Câu 25: Những điều kiện lịch sử nào sau đây là cơ sở cho sự ra đời của triết học Mác? (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Phong trào giải phóng dân tộc ở các nước thuộc địa",
            "B. Sự phát triển của chủ nghĩa duy vật siêu hình",
            "C. Sự củng cố và phát triển của phương thức sản xuất tư bản chủ nghĩa",
            "D. Sự xuất hiện của giai cấp vô sản trên vũ đài lịch sử"
        ],
        correct: [2, 3] // C & D
    },
    {
        id: 26,
        text: "Câu 26: Triết học Mác - Lênin là gì? (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Là khoa học nghiên cứu về con người",
            "B. Là thế giới quan và phương pháp luận khoa học, cách mạng của giai cấp công nhân, nhân dân lao động và các lực lượng xã hội tiến bộ trong nhân loại thời đại ngày nay",
            "C. Là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy",
            "D. Là khoa học nghiên cứu những quy luật chung nhất của tự nhiên"
        ],
        correct: [1, 2] // B & C
    },
    {
        id: 27,
        text: "Câu 27: Thực chất và ý nghĩa cuộc cách mạng trong triết học do C.Mác và Ph.Ăngghen thực hiện là khắc phục: (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Tính chất trực quan, siêu hình của phép biện chứng duy tâm",
            "B. Kế thừa tư duy nhân loại",
            "C. Mở rộng quan điểm duy vật siêu hình",
            "D. Tính chất duy tâm, thần bí của chủ nghĩa duy vật cũ"
        ],
        correct: [0, 3] // A & D
    },
    {
        id: 28,
        text: "Câu 28: Vai trò của triết học Mác-Lênin trong bối cảnh toàn cầu hóa là gì?",
        type: "single",
        options: [
            "A. Là công cụ bảo vệ nền văn hóa ngoại lai",
            "B. Là hình thức thúc đẩy toàn cầu hóa",
            "C. Là công cụ đấu tranh chống lại toàn cầu hóa",
            "D. Là cơ sở phân tích xu hướng vận động, phát triển của toàn cầu hóa và xã hội hiện đại"
        ],
        correct: [3] // D
    },
    {
        id: 29,
        text: "Câu 29: Một trong những hạn chế trong việc vận dụng triết học Mác - Lênin trước đây là:",
        type: "single",
        options: [
            "A. Luôn bổ sung, phát triển tư duy lý luận theo tình hình mới",
            "B. Áp dụng một cách máy móc, giáo điều",
            "C. Vận dụng triết học Mác - Lênin để đánh giá cục diện thế giới, các mối quan hệ quốc tế",
            "D. Kết hợp lý luận với thực tiễn"
        ],
        correct: [1] // B
    },
    {
        id: 30,
        text: "Câu 30: Công cuộc đổi mới toàn diện xã hội theo định hướng xã hội chủ nghĩa ở Việt Nam là: (Câu trả lời lựa chọn 2 đáp án đúng)",
        type: "multiple",
        options: [
            "A. Thế giới quan Triết học Mác – Lênin đã giúp Đảng Cộng Sản Việt Nam nhìn nhận con đường đi lên chủ nghĩa xã hội",
            "B. Triết học Mác – Lênin là cơ sở thế giới quan để phân tích xu hướng vận động, phát triển của xã hội hiện đại",
            "C. Giúp con người khi bắt tay vào nghiên cứu và hoạt động cải biến sự vật",
            "D. Được mở đường bằng đội mới tư duy lý luận"
        ],
        correct: [0, 3] // A & D
    },
    {
        id: 31,
        text: "Câu 31: Hình ảnh \"Ông Bụt\" trong các câu truyện cổ tích Việt Nam thể hiện thế giới quan nào trong triết học?",
        type: "single",
        options: [
            "A. Thế giới quan duy tâm",
            "B. Thế giới quan nhân thân",
            "C. Thế giới quan thần thoại",
            "D. Thế giới quan cổ đại"
        ],
        correct: [2] // C
    },
    {
        id: 32,
        text: "Câu 32: Triết học Mác-Lênin là cơ sở lý luận khoa học của sự nghiệp đổi mới theo định hướng xã hội chủ nghĩa ở Việt Nam vì: (Chọn 2 đáp án)",
        type: "multiple",
        options: [
            "A. Là học thuyết duy nhất về phát triển xã hội",
            "B. Triết học Mác – Lênin là cơ sở thế giới quan để phân tích xu hướng vận động, phát triển của xã hội hiện đại",
            "C. Dựa trên cơ sở lý luận khoa học, trong đó hạt nhân là phép biện chứng duy vật",
            "D. Được mở đường bằng đội mới tư duy lý luận"
        ],
        correct: [1, 2] // B & C
    }
];

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
            const uTarget = userAnswers[question.id] ? userAnswers[question.id][item.id] : null;
            if (uTarget !== item.correctTarget) allCorrect = false;
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
        } else {
            itemEl.setAttribute('draggable', 'false');
        }

        // Place in Correct Box
        const currentLoc = userAnswers[question.id][item.id];

        if (isReviewMode) {
            const correctTarget = item.correctTarget;
            if (currentLoc && currentLoc !== 'source') {
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

