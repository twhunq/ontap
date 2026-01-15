// Bài kiểm tra kỹ năng 1: Tổng hợp tất cả câu hỏi từ bài 1, 2, 3
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
            { id: 15, text: "1) Triết học Mác - Lênin là cơ sở lý luận khoa học:" },
            { id: 16, text: "2) Triết học Mác - Lênin là thế giới quan, phương pháp luận khoa học và cách mạng:" }
        ],
        items: [
            { id: 'item1', text: "Của công cuộc xây dựng chủ nghĩa xã hội trên thế giới", correctTarget: 1 },
            { id: 'item2', text: "Sự nghiệp đổi mới theo định hướng xã hội chủ nghĩa ở Việt Nam", correctTarget: 1 },
            { id: 'item3', text: "Cho con người trong nhận thức và thực tiễn", correctTarget: 2 }
        ]
    },
    {
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
        text: "Câu 21: Kéo thả các nội dung liệt kê dưới đây vào cột tương ứng:",
        type: "drag_drop",
        targets: [
            { id: 24, text: "1) Chức năng phương pháp luận là:" },
            { id: 25, text: "2) Chức năng thế giới quan là:" }
        ],
        items: [
            { id: 'item4', text: "Giúp con người phát triển tư duy khoa học", correctTarget: 1 },
            { id: 'item5', text: "Định hướng cho con người nhận thức", correctTarget: 2 }
        ]
    },
    {
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
,

    {
        id: 33,
        type: 'multiple',
        text: 'Câu 1: Theo V.I. Lênin, ngoài thuộc tính tồn tại khách quan thì vật chất dưới những dạng tồn tại cụ thể của nó là cái có thể:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Gây nên cảm giác ở con người',
            'Tồn tại trong cảm giác của con người',
            'Tồn tại không lệ thuộc vào cảm giác',
            'Tồn tại trong ý thức của con người'
        ],
        correct: [0, 2]
    },
    {
        id: 34,
        type: 'single',
        text: 'Câu 2: Theo chủ nghĩa duy vật biện chứng, thuộc tính cơ bản, phổ biến nhất của mọi dạng vật chất là:',
        options: [
            'Vừa tồn tại khách quan, vừa tồn tại chủ quan',
            'Tồn tại',
            'Tồn tại khách quan',
            'Tồn tại chủ quan'
        ],
        correct: [2]
    },
    {
        id: 35,
        type: 'multiple',
        text: 'Câu 3: Giá trị định nghĩa vật chất của V.I. Lênin trong bối cảnh khoa học hiện đại:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Vẫn giữ nguyên giá trị khoa học và triết học',
            'Đã trở nên không còn phù hợp với các phát hiện khoa học mới',
            'Được củng cố thêm bởi những thành tựu của khoa học tự nhiên và xã hội hiện đại',
            'Chỉ có giá trị trong phạm vi triết học mà không có ý nghĩa đối với khoa học thực nghiệm'
        ],
        correct: [0, 2]
    },
    {
        id: 36,
        type: 'single',
        text: 'Câu 4: Theo chủ nghĩa duy vật biện chứng, hình thức vận động xã hội cao nhất là?',
        options: [
            'Là vận động của các hiện tượng kinh tế',
            'Là vận động của các hệ tư tưởng trong lịch sử',
            'Là vận động của lực lượng sản xuất',
            'Là vận động của các hình thái kinh tế - xã hội'
        ],
        correct: [3]
    },
    {
        id: 37,
        type: 'single',
        text: 'Câu 5: Định nghĩa về vật chất của Lênin được nêu trong tác phẩm nào?',
        options: [
            'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán',
            'Biện chứng của tự nhiên',
            'Nhà nước và cách mạng',
            'Bút ký triết học'
        ],
        correct: [0]
    },
    {
        id: 38,
        type: 'single',
        text: 'Câu 6: Theo V.I.Lênin những phát minh của khoa học tự nhiên cuối thế kỷ XIX đầu thế kỷ XX đã làm tiêu tan cái gì?',
        options: [
            'Tiêu tan dạng tồn tại cụ thể của vật chất',
            'Ý thức tiêu tan',
            'Tiêu tan vật chất nói chung',
            'Tiêu tan giới hạn hiểu biết trước đây về vật chất'
        ],
        correct: [3]
    },
    {
        id: 39,
        type: 'single',
        text: 'Câu 7: Đặc điểm chung của quan niệm duy vật về vật chất ở thời kỳ cổ đại là gì?',
        options: [
            'Đồng nhất vật chất nói chung với nguyên tử',
            'Đồng nhất vật chất nói chung với một dạng cụ thể hữu hình, cảm tính của vật chất',
            'Đồng nhất vật chất với khối lượng',
            'Đồng nhất vật chất với ý thức'
        ],
        correct: [1]
    },
    {
        id: 40,
        type: 'single',
        text: 'Câu 8: Định nghĩa vật chất của V.I. Lênin đã góp phần như thế nào trong việc thống nhất hai bộ phận của triết học Mác - Lênin?',
        options: [
            'Góp phần hợp nhất chủ nghĩa duy vật với chủ nghĩa duy tâm',
            'Làm rõ mối liên hệ giữa phép biện chứng và chủ nghĩa duy vật lịch sử',
            'Thống nhất chủ nghĩa duy vật biện chứng với chủ nghĩa duy vật lịch sử thành một hệ thống lý luận',
            'Phân tách rõ ràng giữa tự nhiên và xã hội trong nghiên cứu triết học'
        ],
        correct: [2]
    },
    {
        id: 41,
        type: 'single',
        text: 'Câu 9: Điều khẳng định nào sau đây là sai?',
        options: [
            'Chủ nghĩa duy vật biện chứng cho rằng động vật bậc cao chưa có ý thức',
            'Chủ nghĩa duy vật biện chứng cho rằng động vật bậc cao cũng có ý thức',
            'Chủ nghĩa duy vật biện chứng cho rằng chỉ có con người mới có ý thức',
            'Chủ nghĩa duy vật đều cho ý thức là sự phản ánh hiện thực khách quan vào óc con người'
        ],
        correct: [1]
    },
    {
        id: 42,
        type: 'single',
        text: 'Câu 10: Chọn câu trả lời đúng theo quan điểm duy vật biện chứng:',
        options: [
            'Ý thức có nguồn gốc từ mọi dạng vật chất giống như gan tiết ra mật',
            'Ý thức của con người là hiện tượng bẩm sinh',
            'Ý thức con người hình thành từ lao động sản xuất vật chất',
            'Ý thức, tinh thần vốn của con người đã bị trừu tượng hóa, tách khỏi con người hiện thực thành một lực lượng thần bí'
        ],
        correct: [2]
    },
    {
        id: 43,
        type: 'single',
        text: 'Câu 11: Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc của ý thức là:',
        options: [
            'Nguồn gốc tự nhiên và nguồn gốc xã hội',
            'Nguồn gốc kinh tế và nguồn gốc văn hóa',
            'Nguồn gốc xã hội và nguồn gốc kinh tế',
            'Nguồn gốc tự nhiên và nguồn gốc nhận thức'
        ],
        correct: [0]
    },
    {
        id: 44,
        type: 'single',
        text: 'Câu 12: Trường phái triết học nào coi ý thức là hình ảnh chủ quan về thế giới khách quan?',
        options: [
            'Chủ nghĩa duy vật biện chứng',
            'Chủ nghĩa duy vật siêu hình',
            'Chủ nghĩa duy tâm chủ quan',
            'Chủ nghĩa duy tâm khách quan'
        ],
        correct: [0]
    },
    {
        id: 45,
        type: 'multiple',
        text: 'Câu 13: Điều khẳng định nào sau đây là sai?\n\n( Câu trả lời lựa chọn 2 đáp án sai )',
        options: [
            'Chủ nghĩa duy vật biện chứng cho rằng động vật bậc cao chưa có ý thức',
            'Chủ nghĩa duy vật biện chứng cho rằng động vật bậc cao cũng có ý thức',
            'Chủ nghĩa duy vật biện chứng cho rằng chỉ có con người mới có ý thức',
            'Chủ nghĩa duy vật đều cho ý thức có nguồn gốc xã hội và nguồn gốc kinh tế'
        ],
        correct: [1, 3]
    },
    {
        id: 46,
        type: 'multiple',
        text: 'Câu 14: Yếu tố nào sau đây là đặc trưng riêng của ý thức con người mà trí tuệ nhân tạo không có?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Khả năng xử lý số liệu nhanh chóng',
            'Phản ánh năng động, sáng tạo hiện thực khách quan thông qua hoạt động nhận thức và thực tiễn',
            'Khả năng lưu trữ thông tin lâu dài',
            'Là sự phản ánh hiện thực khách quan vào bộ óc con người nhưng có sự sáng tạo, cải biến của chủ thể nhận thức.'
        ],
        correct: [1, 3]
    },
    {
        id: 47,
        type: 'multiple',
        text: 'Câu 15: Khẳng định nào sau đây là SAI về tình hình triết học và khoa học đầu thế kỷ XX?\n\n( Câu trả lời lựa chọn 2 đáp án sai )',
        options: [
            'Nhiều nhà khoa học đã trượt từ chủ nghĩa duy vật máy móc sang chủ nghĩa tương đối rồi rơi vào chủ nghĩa duy tâm',
            'Những phát hiện mới về nguyên tử đã chứng minh tính đúng đắn của chủ nghĩa duy tâm',
            'Chủ nghĩa duy vật siêu hình đã đủ khả năng giải thích các phát hiện mới của khoa học tự nhiên',
            'Cuộc khủng hoảng trong vật lý học là minh chứng cho sự sụp đổ của chủ nghĩa duy vật nói chung'
        ],
        correct: [1, 2]
    },
    {
        id: 48,
        type: 'multiple',
        text: 'Câu 16: Định nghĩa vật chất của V.I. Lênin trong bối cảnh khoa học hiện đại:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Vẫn giữ nguyên giá trị khoa học và triết học',
            'Đã trở nên không còn phù hợp với các phát hiện khoa học mới',
            'Chỉ có giá trị trong phạm vi triết học mà không có ý nghĩa đối với khoa học thực nghiệm',
            'Được củng cố thêm bởi những thành tựu của khoa học tự nhiên và xã hội hiện đại'
        ],
        correct: [0, 2]
    },
    {
        id: 49,
        type: 'multiple',
        text: 'Câu 17: Theo chủ nghĩa duy vật biện chứng: Các yếu tố cơ bản, trực tiếp tạo thành nguồn gốc xã hội của ý thức là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Lao động',
            'Ngôn ngữ',
            'Tri thức và ý chí',
            'Kinh tế và văn hóa'
        ],
        correct: [0, 1]
    },
    {
        id: 50,
        type: 'single',
        text: 'Câu 18: Theo quan điểm của chủ nghĩa duy vật biện chứng, quá trình hình thành ý thức là quá trình nào?',
        options: [
            'Tiếp thu sự tác động của thế giới bên ngoài',
            'Sáng tạo thuần tuý trong tư duy con người',
            'Hoạt động chủ động cải tạo thế giới và phản ánh sáng tạo thế giới',
            'Ý thức là sự phản ánh hiện thực khách quan vào bộ óc con người'
        ],
        correct: [2]
    },
    {
        id: 51,
        type: 'single',
        text: 'Câu 19: Đâu là quan điểm của chủ nghĩa duy vật biện chứng về bản chất của ý thức?',
        options: [
            'Ý thức là sự phản ánh hiện thực khách quan vào bộ óc con người',
            'Ý thức là sự phản ánh sáng tạo hiện thực khách quan vào bộ óc con người',
            'Ý thức là năng lực của mọi dạng vật chất',
            'Ý thức là hình ảnh phản chiếu về thế giới khách quan'
        ],
        correct: [1]
    },
    {
        id: 52,
        type: 'multiple',
        text: 'Câu 20: Hiện tượng phóng xạ mà khoa học tự nhiên phát hiện ra trong cuộc cách mạng trong khoa học tự nhiên cuối thế kỷ XIX, đầu thế kỷ XX chứng minh điều gì?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Nguyên tử là điện tử',
            'Nguyên tử là bất biến',
            'Cái bị tiêu tan không phải "vật chất tiêu tan"',
            'Dấu hiệu của một cuộc cách mạng trong khoa học tự nhiên'
        ],
        correct: [2, 3]
    },
    {
        id: 53,
        type: 'single',
        text: 'Câu 21: Luận điểm cho: "tồn tại tức là được cảm giác" là của ai và thuộc lập trường triết học nào?',
        options: [
            'Của Hêghen, thuộc lập trường của chủ nghĩa duy tâm khách quan',
            'Của Béc-cơ-li, thuộc lập trường chủ nghĩa duy tâm chủ quan',
            'Của Pla-tôn, thuộc lập trường chủ nghĩa duy tâm khách quan',
            'Của A-ri-xtốt, thuộc lập trường chủ nghĩa duy vật'
        ],
        correct: [1]
    },
    {
        id: 54,
        type: 'multiple',
        text: 'Câu 22: Bộ phim hoạt hình "Dế mèn: Cuộc phiêu lưu tới xóm lầy lội" là sự phản ánh:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Là kết quả của việc tái hiện một cách trung thực hiện thực khách quan vào bộ óc con người.',
            'Là sự phản ánh hiện thực khách quan vào bộ óc con người nhưng có sự sáng tạo, cải biến của chủ thể nhận thức.',
            'Là quá trình phản ánh năng động, sáng tạo hiện thực khách quan thông qua hoạt động nhận thức và thực tiễn.',
            'Là hình ảnh phản chiếu trực tiếp thế giới khách quan lên ý thức con người như một tấm gương.'
        ],
        correct: [1, 2]
    },
    {
        id: 55,
        type: 'single',
        text: 'Câu 23: Trong lĩnh vực xã hội, vật chất được hiểu theo nghĩa nào theo định nghĩa của V.I. Lênin?',
        options: [
            'Là các yếu tố tinh thần như tư tưởng, tôn giáo và văn hóa',
            'Là các điều kiện sinh hoạt vật chất và các quan hệ vật chất xã hội',
            'Là những chính sách do nhà nước ban hành',
            'Là ý thức và hoạt động có mục đích của con người'
        ],
        correct: [1]
    },
    {
        id: 56,
        type: 'multiple',
        text: 'Câu 24: Luận điểm nào sau đây là của chủ nghĩa duy vật biện chứng về nguồn gốc của ý thức?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Có não người, có sự tác động của thế giới vào não người là có sự hình thành và phát triển ý thức',
            'Không cần sự tác động của thế giới vật chất vào não người vẫn hình thành được ý thức',
            'Có não người, có sự tác động của thế giới bên ngoài vẫn chưa đủ điều kiện để hình thành và phát triển ý thức',
            'Nguồn gốc tự nhiên là điều kiện cần, còn nguồn gốc xã hội là điều kiện đủ để hình thành ý thức'
        ],
        correct: [2, 3]
    },
    {
        id: 57,
        type: 'drag_drop',
        text: 'Câu 25: Kéo thả các nội dung đã liệt kê dưới đây vào cột tương ứng:',
        targets: [
            { id: 58, text: 'Trong nguồn gốc xã hội của ý thức, ngôn ngữ là hệ thống tín hiệu gì?' },
            { id: 59, text: 'Vật chất là một phạm trù triết học dùng để chỉ:' }
        ],
        items: [
            { id: 'item1', text: 'Thế giới khách quan', correctTarget: 2, required: false },
            { id: 'item2', text: 'Giới tự nhiên', correctTarget: 2, required: false },
            { id: 'item3', text: 'Xã hội loài người', correctTarget: 2, required: false },
            { id: 'item4', text: 'Tín hiệu ý thức', correctTarget: 1, required: false },
            { id: 'item5', text: 'Tín hiệu truyền thông tin', correctTarget: 1, required: false },
            { id: 'item6', text: 'Tín hiệu vật chất mang một dạng ý thức', correctTarget: 1, required: true },
            { id: 'item7', text: 'Thực tại khách quan', correctTarget: 2, required: true }
        ]
    },
    {
        id: 60,
        type: 'drag_drop',
        text: 'Câu 26: Kéo thả các đáp án khớp với các phát biểu từ 1-4 về trại dưới đây:',
        targets: [
            { id: 61, text: 'Nhà triết học nào coi lửa là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?' },
            { id: 62, text: 'Nhà triết học nào coi nước là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?' },
            { id: 63, text: 'Nhà triết học nào coi nguyên tử là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?' },
            { id: 64, text: 'Nhà triết học nào coi không khí là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?' }
        ],
        items: [
            { id: 'item5', text: 'Hê-ra-clit - chủ nghĩa duy vật tự phát', correctTarget: 1 },
            { id: 'item6', text: 'Talét - chủ nghĩa duy vật tự phát', correctTarget: 2 },
            { id: 'item7', text: 'Đê-mô-crít - chủ nghĩa duy vật tự phát', correctTarget: 3 },
            { id: 'item8', text: 'Ana-ximên - chủ nghĩa duy vật tự phát', correctTarget: 4 }
        ]
    },
    {
        id: 65,
        type: 'drag_drop',
        text: 'Câu 27: Kéo thả nội dung đã liệt kê dưới đây vào cột tương ứng:',
        targets: [
            { id: 66, text: '1) Theo quan điểm của chủ nghĩa duy vật biện chứng, tính sáng tạo của ý thức thể hiện ở khía cạnh nào sau đây:' },
            { id: 67, text: '2) Theo quan điểm của chủ nghĩa duy vật biện chứng, ý thức có thể tạo ra:' }
        ],
        items: [
            { id: 'item9', text: 'Là năng lực của một dạng vật chất', correctTarget: 1, required: false },
            { id: 'item10', text: 'Là hình ảnh phản chiếu về thế giới khách quan', correctTarget: 1, required: false },
            { id: 'item11', text: 'Biến các đối tượng vật chất được phản ánh thành hình ảnh tâm thức trong tâm trí của con người', correctTarget: 1, required: true },
            { id: 'item12', text: 'Khả năng tiếp nhận và xử lý thông tin', correctTarget: 2, required: false },
            { id: 'item13', text: 'Trí thức mới, ý vật mới đưa vào kiến thức khách quan đã có', correctTarget: 2, required: true }
        ]
    },
    {
        id: 68,
        type: 'drag_drop',
        text: 'Câu 28: Kéo thả các nội dung đã liệt kê dưới đây vào cột tương ứng:',
        targets: [
            { id: 69, text: 'Theo quan điểm duy vật biện chứng, nguồn gốc tự nhiên của ý thức:' },
            { id: 70, text: 'Theo quan điểm duy vật biện chứng, nguồn gốc xã hội của ý thức:' }
        ],
        items: [
            { id: 'item14', text: 'Công cụ lao động', correctTarget: 2, required: false },
            { id: 'item15', text: 'Giác quan', correctTarget: 1, required: false },
            { id: 'item16', text: 'Hệ thần kinh', correctTarget: 1, required: false },
            { id: 'item17', text: 'Thế giới khách quan và bộ óc người', correctTarget: 1, required: true },
            { id: 'item18', text: 'Lao động và ngôn ngữ', correctTarget: 2, required: true }
        ]
    },
    {
        id: 71,
        type: 'group',
        text: 'Câu 29: Chỉ ra các phát biểu nào đúng, phát biểu nào sai:',
        subQuestions: [
            {
                text: '1) Bản chất của ý thức theo quan điểm của chủ nghĩa duy vật biện chứng là sự phản ánh sáng tạo hiện thực khách quan vào bộ óc con người.',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '2) Bản chất của ý thức theo quan điểm của chủ nghĩa duy vật biện chứng là sự phản ánh hiện thực khách quan vào bộ óc con người.',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '3) Bản chất của ý thức là năng lực của mọi dạng vật chất.',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '4) Bản chất của ý thức là hình ảnh phản chiếu về thế giới khách quan.',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            }
        ]
    }
,

    {
        id: 62,
        type: 'multiple',
        text: 'Câu 1: Quan điểm của chủ nghĩa duy vật siêu hình về mối quan hệ giữa vật chất và ý thức?\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Vật chất sinh ra ý thức, phủ nhận tính độc lập tương đối của ý thức',
            'Ý thức quyết định vật chất',
            'Tuyệt đối hoá yếu tố vật chất',
            'Vật chất và ý thức tôn tại song song'
        ],
        correct: [0, 2]
    },
    {
        id: 63,
        type: 'multiple',
        text: 'Câu 2: Theo triết học Mác - Lênin, nguyên tắc phương pháp luận rút ra từ mối quan hệ giữa vật chất và ý thức là:\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Tách biệt giữa tính khách quan và tính chủ quan',
            'Tôn trọng tính khách quan là chính',
            'Phát huy tính năng động chủ quan',
            'Tôn trọng tính khách quan'
        ],
        correct: [2, 3]
    },
    {
        id: 64,
        type: 'single',
        text: 'Câu 3: Theo triết học Mác - Lênin, ý thức là sự phản ánh thế giới vật chất vào trong đầu óc con người là:',
        options: [
            'Bắt chước hoàn toàn hiện thực',
            'Chỉ ghi nhận những gì đang tồn tại',
            'Phản ánh máy móc như "soi gương"',
            'Phản ánh có chọn lọc, phân tích, tổng hợp và dự báo'
        ],
        correct: [3]
    },
    {
        id: 65,
        type: 'single',
        text: 'Câu 4: Nguyên tắc phương pháp luận nào sau đây không đúng trong mối quan hệ giữa vật chất và ý thức?',
        options: [
            'Phát huy tính năng động, sáng tạo của con người',
            'Hành động theo ý chí, cảm tính',
            'Kết hợp hài hòa lợi ích cá nhân và tập thể',
            'Xuất phát từ thực tế khách quan'
        ],
        correct: [1]
    },
    {
        id: 66,
        type: 'single',
        text: 'Câu 5: Theo quan điểm duy vật biện chứng, điều gì xảy ra khi ý thức phản ánh đúng hiện thực?',
        options: [
            'Làm sai lệch hiện thực',
            'Góp phần cải tạo hiện thực',
            'Gây tổn thất cho thực tiễn',
            'Làm chậm tiên bộ xã hội'
        ],
        correct: [1]
    },
    {
        id: 67,
        type: 'single',
        text: 'Câu 6: Nếu chỉ tôn trọng tính khách quan mà không phát huy tính năng động chủ quan sẽ dẫn đến:',
        options: [
            'Đổi mới mạnh mẽ',
            'Sáng tạo đột phá',
            'Tiên bộ xã hội nhanh chóng',
            'Tư duy máy móc, thụ động, trì trệ'
        ],
        correct: [3]
    },
    {
        id: 68,
        type: 'single',
        text: 'Câu 7: Để vận dụng giải quyết đúng đắn mối quan hệ giữa vật chất và ý thức, chúng ta phải biết kết hợp hài hòa:',
        options: [
            'Giữa chủ quan và khách quan',
            'Giữa lý luận và thực tiễn',
            'Giữa lợi ích cá nhân, lợi ích tập thể, lợi ích xã hội',
            'Giữa vật chất và ý thức'
        ],
        correct: [2]
    },
    {
        id: 69,
        type: 'single',
        text: 'Câu 8: Theo quan điểm duy vật biện chứng, ý thức có thể làm biến đổi hoàn cảnh vật chất vì:',
        options: [
            'Vì ý thức là vật chất',
            'Vì ý thức là lực lượng vật chất',
            'Vì ý thức chỉ đạo hoạt động thực tiễn của con người',
            'Vì ý thức tồn tại độc lập với vật chất'
        ],
        correct: [2]
    },
    {
        id: 70,
        type: 'single',
        text: 'Câu 9: Theo quan điểm của chủ nghĩa duy vật biện chứng, tính độc lập tương đối của ý thức có nghĩa là:',
        options: [
            'Ý thức luôn phản ánh chính xác vật chất',
            'Ý thức có đời sống riêng, có quy luật vận động riêng, không lệ thuộc máy móc vào vật chất',
            'Ý thức không thể tác động trở lại vật chất',
            'Ý thức hoàn toàn độc lập với vật chất'
        ],
        correct: [1]
    },
    {
        id: 71,
        type: 'single',
        text: 'Câu 10: Theo quan điểm duy vật biện chứng, ý thức thường thay đổi chậm hơn so với sự biến đổi của thế giới vật chất vì:',
        options: [
            'Vì vật chất không quyết định ý thức',
            'Vì con người không muốn thay đổi ý thức',
            'Vì ý thức không có tính ổn định',
            'Vì ý thức có tính độc lập tương đối, có đời sống riêng'
        ],
        correct: [3]
    },
    {
        id: 72,
        type: 'single',
        text: 'Câu 11: Tại sao xã hội càng phát triển thì vai trò của ý thức ngày càng to lớn?',
        options: [
            'Vì trong thời đại thông tin, kinh tế tri thức, tri thức khoa học đã trở thành lực lượng sản xuất trực tiếp',
            'Vì trình độ giáo dục ngày càng cao',
            'Vì con người ngày càng ít phụ thuộc vào tự nhiên',
            'Vì con người ngày càng thông minh hơn'
        ],
        correct: [0]
    },
    {
        id: 73,
        type: 'multiple',
        text: 'Câu 12: Ý thức quyết định thành công hay thất bại của hoạt động con người như thế nào?\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Ý thức không ảnh hưởng đến kết quả hoạt động',
            'Ý thức luôn dẫn đến thành công',
            'Ý thức đúng sẽ dẫn đến thành công, ý thức sai sẽ dẫn đến thất bại',
            'Khi phản ánh đúng hiện thực, ý thức có thể dự báo, tiên đoán một cách chính xác cho hiện thực'
        ],
        correct: [2, 3]
    },
    {
        id: 74,
        type: 'multiple',
        text: 'Câu 13: Theo quan điểm triết học Mác - Lênin, mối quan hệ giữa vật chất và ý thức là:\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Vật chất và ý thức tôn tại song song',
            'Vật chất quyết định ý thức',
            'Ý thức có tính độc lập tương đối, tác động tích cực trở lại vật chất',
            'Ý thức quyết định vật chất'
        ],
        correct: [1, 2]
    },
    {
        id: 75,
        type: 'multiple',
        text: 'Câu 14: Vận dụng mối quan hệ giữa vật chất và ý thức theo quan điểm của triết học Mác - Lênin, muốn đạt hiệu quả trong hoạt động thực tiễn, cần:\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Hành động theo ý chí chủ quan',
            'Dựa vào niềm tin tôn giáo',
            'Phát huy tính năng động, sáng tạo của con người thông qua hoạt động thực tiễn',
            'Xuất phát từ thực tế khách quan'
        ],
        correct: [2, 3]
    },
    {
        id: 76,
        type: 'multiple',
        text: 'Câu 15: Từ mối quan hệ giữa vật chất và ý thức, hãy chọn 2 đáp án trả lời đúng cho nội dung đoạn thơ sau:\n\n"Không giam được trí óc\nĐế quốc tù ta, ta chẳng từ\nTa còn bộ óc, ta không lo\nGiam người khóa cả chân tay lại\nChẳng thể ngăn ta nghĩ tự do"\n\n(Không giam được trí óc - Xuân Thủy)\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Vật chất quyết định màu sắc của ý thức',
            'Vật chất quyết định nội dung của ý thức',
            'Vai trò của vật chất với ý thức',
            'Ý thức có tính độc lập tương đối, tác động trở lại vật chất'
        ],
        correct: [2, 3]
    },
    {
        id: 77,
        type: 'drag_drop',
        text: 'Câu 16: Kéo thả các nội dung dưới đây vào ở tương ứng:',
        targets: [
            { id: 78, text: 'Dân gian có câu: "Có thực mới vực được đạo", theo quan điểm duy vật biện chứng, đó là nội dung:' },
            { id: 79, text: 'Dân gian có câu: "Ngọc kia chuốt mãi cũng tròn/Sắt kia mài mãi cũng còn nên kim", theo quan điểm duy vật biện chứng, đó là nội dung:' }
        ],
        items: [
            { id: 'item1', text: 'Vai trò của vật chất với ý thức', correctTarget: 1 },
            { id: 'item2', text: 'Ý thức có tính độc lập tương đối, tác động trở lại vật chất', correctTarget: 2 }
        ]
    },
    {
        id: 80,
        type: 'group',
        text: 'Câu 17: Chỉ ra các phát biểu nào đúng, phát biểu nào sai:',
        subQuestions: [
            {
                text: '1. Ý thức có thể tồn tại mà không cần có sự phản ánh hiện thực khách quan thông qua bộ não:',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '2. Con người là kết quả của quá trình tiến hóa tự nhiên, do giới tự nhiên sinh ra nên ý thức cũng do vật chất sinh ra:',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '3. Ý thức - một thuộc tính của bộ phận con người - cũng do giới tự nhiên, vật chất sinh ra:',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '4. Ý thức là thuộc tính của con người nhưng hoàn toàn tách rời khỏi thế giới vật chất và không bị chi phối bởi nó:',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            }
        ]
    },
    {
        id: 81,
        type: 'drag_drop',
        text: 'Câu 18: Kéo thả các nội dung liệt kê dưới đây vào các cột tương ứng:',
        targets: [
            { id: 82, text: 'Theo quan điểm của chủ nghĩa duy vật biện chứng, mối quan hệ giữa vật chất và ý thức là:' },
            { id: 83, text: 'Theo quan điểm của chủ nghĩa duy vật biện chứng, ý thức có tính độc lập tương đối và tác động trở lại vật chất là:' }
        ],
        items: [
            { id: 'item3', text: 'Vật chất quyết định ý thức, còn ý thức tác động tích cực trở lại vật chất', correctTarget: 1 },
            { id: 'item4', text: 'Ý thức là sự phản ánh thế giới vật chất vào trong đầu óc con người', correctTarget: 2 }
        ]
    },
    {
        id: 84,
        type: 'single',
        text: 'Câu 19: Theo triết học Mác - Lênin, trong nhận thức và hoạt động thực tiễn, mọi chủ trương, đường lối, kế hoạch, mục tiêu đều phải xuất phát từ:',
        options: [
            'Lý thuyết trừu tượng',
            'Kinh nghiệm lịch sử',
            'Ý muốn chủ quan',
            'Thực tế khách quan'
        ],
        correct: [3]
    },
    {
        id: 85,
        type: 'multiple',
        text: 'Câu 20: Theo quan điểm của chủ nghĩa duy vật biện chứng, tính độc lập tương đối của ý thức thể hiện rõ nhất ở điểm nào?\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Luôn đi sát với hiện thực',
            'Có quy luật vận động riêng, không lệ thuộc một cách máy móc vào vật chất',
            'Có tính độc lập tương đối, tác động trở lại thế giới vật chất',
            'Được sinh ra trực tiếp từ vật chất'
        ],
        correct: [1, 2]
    },
    {
        id: 86,
        type: 'multiple',
        text: 'Câu 21: Theo quan điểm của chủ nghĩa duy vật biện chứng, vai trò của bộ óc người trong mối quan hệ giữa vật chất và ý thức là:\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Là một dạng vật chất có tổ chức cao nhất, là cơ quan phản ánh để hình thành ý thức',
            'Không liên quan đên ý thức, ý thức của con người đã bị trừu tượng hóa',
            'Ý thức tồn tại phụ thuộc vào hoạt động thần kinh của bộ não trong quá trình phản ánh hiện thực khách quan',
            'Là ý thức tỉnh thân sinh ra thế giới vật chât'
        ],
        correct: [0, 2]
    },
    {
        id: 87,
        type: 'single',
        text: 'Câu 22: Theo quan điểm duy vật biện chứng, ý thức tác động trở lại vật chất có nghĩa là:',
        options: [
            'Ý thức và vật chất không liên quan đến nhau',
            'Ý thức quyết định vật chất',
            'Ý thức có thể làm biến đổi những điều kiện, hoàn cảnh vật chất thông qua hoạt động thực tiễn',
            'Ý thức tạo ra vật chất'
        ],
        correct: [2]
    },
    {
        id: 88,
        type: 'single',
        text: 'Câu 23: Khía cạnh nào dưới đây không thuộc vai trò quyết định của vật chất đối với ý thức?',
        options: [
            'Vật chất quyết định nội dung của ý thức',
            'Vật chất quyết định màu sắc của ý thức',
            'Vật chất quyết định nguồn gốc của ý thức',
            'Vật chất quyết định sự vận động, phát triển của ý thức'
        ],
        correct: [1]
    },
    {
        id: 89,
        type: 'single',
        text: 'Câu 24: Theo quan điểm của chủ nghĩa duy vật biện chứng, vật chất quyết định nguồn gốc của ý thức vì:',
        options: [
            'Ý thức là sản phẩm của vật chất',
            'Vật chất là thuộc tính của ý thức',
            'Ý thức có trước vật chất',
            'Sự vận động của thế giới vật chất là yếu tố quyết định sự ra đời của ý thức'
        ],
        correct: [3]
    },
    {
        id: 90,
        type: 'single',
        text: 'Câu 25: Theo quan điểm duy vật biện chứng, việc con người tạo ra "thiên nhiên thứ hai" là nhờ:',
        options: [
            'Sự phát triển của khoa học tự nhiên',
            'Ý thức và hoạt động thực tiễn của con người',
            'Di sản văn hóa dân tộc',
            'Các hiện tượng siêu nhiên'
        ],
        correct: [1]
    },
    {
        id: 91,
        type: 'multiple',
        text: 'Câu 26: Nguyên tắc phương pháp luận "tôn trọng tính khách quan kết hợp phát huy tính năng động chủ quan" có ý nghĩa gì?\n\n(Chọn 2 đáp án đúng)',
        options: [
            'Chỉ cần xuất phát từ hiện thực khách quan',
            'Chỉ cần phát huy tính năng động chủ quan',
            'Tôn trọng tính khách quan',
            'Phát huy tính năng động chủ quan'
        ],
        correct: [2, 3]
    },
    {
        id: 92,
        type: 'drag_drop',
        text: 'Câu 27: Kéo thả các nội dung khớp với các nội dung từ 1-4 về trái dưới đây:',
        targets: [
            { id: 93, text: 'Quan điểm nào coi ý thức, tinh thần vốn của con người đã bị trừu tượng hóa, tách khỏi con người hiện thực thành một lực lượng thần bí?' },
            { id: 94, text: 'Quan điểm nào tuyệt đối hoá yếu tố vật chất, chỉ nhấn mạnh một chiều vai trò của vật chất sinh ra ý thức?' },
            { id: 95, text: 'Quan điểm nào phủ nhận tính khách quan, cường điệu vai trò của nhân tổ chủ quan, duy ý chí?' },
            { id: 96, text: 'Quan điểm nào cho rằng ý thức có tính độc lập tương đối và tác động trở lại vật chất?' }
        ],
        items: [
            { id: 'item5', text: 'Chủ nghĩa duy tâm khách quan', correctTarget: 1 },
            { id: 'item6', text: 'Chủ nghĩa duy vật siêu hình', correctTarget: 2 },
            { id: 'item7', text: 'Chủ nghĩa duy tâm chủ quan', correctTarget: 3 },
            { id: 'item8', text: 'Chủ nghĩa duy vật biện chứng', correctTarget: 4 }
        ]
    },
    {
        id: 97,
        type: 'single',
        text: 'Câu 28: Để tránh rơi vào chủ nghĩa duy tâm, cần làm gì?',
        options: [
            'Dựa vào điều kiện vật chất thực tế, tôn trọng quy luật khách quan',
            'Tin tưởng tuyệt đối vào ý thức',
            'Coi trọng lý thuyết hơn thực hành',
            'Tập trung vào suy nghĩ cá nhân'
        ],
        correct: [0]
    },
    {
        id: 98,
        type: 'single',
        text: 'Câu 29: Khẳng định "vật chất sinh ra, cho nên lẽ tất nhiên, ý thức - một thuộc tính của bộ phận con người - cũng do giới tự nhiên, vật chất sinh ra" thể hiện vai trò quyết định của vật chất ở khía cạnh nào?',
        options: [
            'Vật chất quyết định nguồn gốc của ý thức',
            'Vật chất quyết định bản chất của ý thức',
            'Vật chất quyết định sự vận động, phát triển của ý thức',
            'Vật chất quyết định nội dung của ý thức'
        ],
        correct: [0]
    },
    {
        id: 99,
        type: 'single',
        text: 'Câu 30: Khẳng định "Vật chất thay đổi thì sớm hay muộn, ý thức cũng phải thay đổi theo" là nội dung:',
        options: [
            'Vật chất quyết định màu sắc của ý thức',
            'Vật chất quyết định sự vận động, phát triển của ý thức',
            'Vật chất quyết định nội dung của ý thức',
            'Vật chất quyết định nguồn gốc của ý thức'
        ],
        correct: [1]
    }

];
