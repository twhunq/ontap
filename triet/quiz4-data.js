// Bài 4: Hai nguyên lý, sáu cặp phạm trù của phép biện chứng duy vật
const questions = [
    {
        id: 1,
        type: 'multiple',
        text: 'Câu 1: Điền cụm từ thích hợp vào chỗ trống để hoàn chỉnh khái niệm \'liên hệ\' trong triết học: "Liên hệ là phạm trù triết học chỉ …… giữa các sự vật, hiện tượng hay giữa các mặt của một hiện tượng trong thế giới."\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Sự di chuyển',
            'Sự quy định',
            'Sự ràng buộc',
            'Sự tác động qua lại, sự chuyển hoá lẫn nhau'
        ],
        correct: [1, 3]
    },
    {
        id: 2,
        type: 'single',
        text: 'Câu 2: Trong những luận điểm sau, đâu là định nghĩa về sự phát triển theo quan điểm của chủ nghĩa duy vật biện chứng?',
        options: [
            'Phát triển là phạm trù chỉ quá trình vận động tiến lên từ thấp đến cao, từ đơn giản đến phức tạp, từ kém hoàn thiện đến hoàn thiện hơn của các sự vật',
            'Phát triển là phạm trù chỉ sự liên hệ giữa các sự vật',
            'Phát triển là phạm trù chỉ sự vận động của các sự vật',
            'Nguyện vọng, ý chí của con người tự nó tác động đến sự phát triển'
        ],
        correct: [0]
    },
    {
        id: 3,
        type: 'multiple',
        text: 'Câu 3: Theo quan điểm của chủ nghĩa duy vật biện chứng, sự phát triển có những đặc điểm:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Phát triển bao hàm cả trong nó những quanh co phức tạp nhất định',
            'Diễn ra theo đường xoáy ốc',
            'Chỉ là sự tăng, giảm về lượng',
            'Phát triển chỉ là tăng, giảm đơn thuần về mặt lượng, mà không có sự biến đổi về chất'
        ],
        correct: [0, 1]
    },
    {
        id: 4,
        type: 'single',
        text: 'Câu 4: Quan điểm nào đánh tráo các mối liên hệ cơ bản thành không cơ bản hoặc ngược lại?',
        options: [
            'Phép duy tâm',
            'Chủ nghĩa thực dụng',
            'Thuật ngụy biện',
            'Trường phái vô thần'
        ],
        correct: [2]
    },
    {
        id: 5,
        type: 'multiple',
        text: 'Câu 5: Nguyên lý phát triển đòi hỏi khi xem xét sự vật phải:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Xem xét sự vật trong trạng thái động',
            'Xem xét sự vật tách rời mối liên hệ với các sự vật khác',
            'Tìm ra xu hướng vận động biến đổi chuyển hóa của sự vật',
            'Phủ nhận sự ra đời của cái mới'
        ],
        correct: [0, 2]
    },
    {
        id: 6,
        type: 'multiple',
        text: 'Câu 6: Vận dụng quan điểm toàn diện và quan điểm phát triển trong việc đánh giá thành công của một người, chúng ta nên:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Bỏ qua yếu tố may mắn và hoàn cảnh xã hội',
            'Xem xét sự phát triển của người đó qua các giai đoạn khác nhau của cuộc đời',
            'Đánh giá người đó trong mối quan hệ với nhiều khía cạnh của cuộc sống',
            'Nhìn vào thành tích hiện tại'
        ],
        correct: [1, 2]
    },
    {
        id: 7,
        type: 'single',
        text: 'Câu 7: Luận điểm sau đây thuộc trường phái triết học nào: "Mối liên hệ nhân quả là do cảm giác con người quy định"?',
        options: [
            'Chủ nghĩa duy vật biện chứng',
            'Chủ nghĩa duy tâm khách quan',
            'Chủ nghĩa duy vật siêu hình',
            'Chủ nghĩa duy tâm chủ quan'
        ],
        correct: [3]
    },
    {
        id: 8,
        type: 'single',
        text: 'Câu 8: Luận điểm sau đây là của trường phái triết học nào: Mối liên hệ nhân quả tồn tại khách quan phổ biến và tất yếu trong thế giới vật chất.',
        options: [
            'Chủ nghĩa duy vật siêu hình',
            'Chủ nghĩa duy tâm chủ quan',
            'Chủ nghĩa duy tâm khách quan',
            'Chủ nghĩa duy vật biện chứng'
        ],
        correct: [3]
    },
    {
        id: 9,
        type: 'single',
        text: 'Câu 9: Điền cụm từ thích hợp vào chỗ trống của câu sau để được khái niệm ngẫu nhiên: "Ngẫu nhiên là phạm trù triết học dùng để chỉ (1) ……, do nguyên nhân, (2) …… quy định nên có thể xuất hiện, có thể không xuất hiện; có thể xuất hiện thế này hoặc có thể xuất hiện thế khác".',
        options: [
            '1- nguyên nhân, 2- hoàn cảnh bên ngoài',
            '1- Mối liên hệ không bản chất, 2- Hoàn cảnh bên ngoài',
            '1- mối liên hệ bên ngoài, 2- mối liên hệ ngẫu nhiên',
            '1- mối liên hệ bên ngoài, 2- mối liên hệ bên trong'
        ],
        correct: [1]
    },
    {
        id: 10,
        type: 'single',
        text: 'Câu 10: Việc áp dụng máy móc các nguyên tắc chung vào mọi hoàn cảnh cụ thể mà không xét đến đặc điểm riêng của từng trường hợp sẽ dẫn đến sai lầm nào sau đây?',
        options: [
            'Bệnh thành tích',
            'Bệnh hình thức',
            'Bệnh giáo điều',
            'Bệnh kinh nghiệm'
        ],
        correct: [2]
    },
    {
        id: 11,
        type: 'single',
        text: 'Câu 11: Luận điểm sau đây về nguồn gốc của sự phát triển thuộc trường phái triết học nào: "Mâu thuẫn tồn tại khách quan trong chính sự vật quy định sự phát triển của sự vật".',
        options: [
            'Chủ nghĩa duy vật biện chứng',
            'Chủ nghĩa duy tâm chủ quan',
            'Chủ nghĩa duy tâm khách quan',
            'Chủ nghĩa duy vật siêu hình'
        ],
        correct: [0]
    },
    {
        id: 12,
        type: 'multiple',
        text: 'Câu 12: Theo quan điểm duy vật biện chứng, tính khách quan của sự phát triển được thể hiện ở:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Sự phát triển do lực lượng siêu nhiên quyết định',
            'Sự phát triển là do sự thay đổi về lượng của sự vật gây nên',
            'Nguồn gốc phát triển nằm ngay trong bản thân sự vật',
            'Sự phát triển không phụ thuộc vào ý thức con người'
        ],
        correct: [2, 3]
    },
    {
        id: 13,
        type: 'multiple',
        text: 'Câu 13: Khi vận dụng quan điểm toàn diện và quan điểm phát triển để giải quyết khó khăn, chúng ta cần:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Bình tĩnh xem xét mọi nhân tố tác động',
            'Chỉ tập trung vào một khía cạnh của vấn đề',
            'Bỏ qua các yếu tố không quan trọng',
            'Tìm kiếm hướng giải quyết hợp lý'
        ],
        correct: [0, 3]
    },
    {
        id: 14,
        type: 'single',
        text: 'Câu 14: Luận điểm sau đây thuộc lập trường triết học nào: Tất nhiên và ngẫu nhiên tồn tại khách quan nhưng tách rời nhau, không có liên quan gì với nhau.',
        options: [
            'Chủ nghĩa duy vật siêu hình',
            'Chủ nghĩa duy tâm khách quan',
            'Chủ nghĩa duy vật biện chứng',
            'Chủ nghĩa duy tâm chủ quan'
        ],
        correct: [0]
    },
    {
        id: 15,
        type: 'single',
        text: 'Câu 15: Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là đúng?',
        options: [
            'Những hiện tượng nhận thức được nguyên nhân đều trở thành cái tất yếu.',
            'Chỉ có cái tất yếu mới có nguyên nhân.',
            'Những hiện tượng chưa nhận thức được nguyên nhân là cái ngẫu nhiên.',
            'Ngẫu nhiên và tất nhiên đều có nguyên nhân'
        ],
        correct: [3]
    },
    {
        id: 16,
        type: 'single',
        text: 'Câu 16: Trong xã hội, yếu tố nào đóng vai trò quan trọng trong việc biến khả năng thành hiện thực?',
        options: [
            'Các quy luật tự nhiên',
            'Điều kiện tự nhiên',
            'Hoạt động có ý thức của con người',
            'Yếu tố khách quan'
        ],
        correct: [2]
    },
    {
        id: 17,
        type: 'single',
        text: 'Câu 17: Một hình thức có thể chứa đựng nhiều nội dung khác nhau. Điều này thể hiện:',
        options: [
            'Mối quan hệ biện chứng giữa nội dung và hình thức',
            'Tính độc lập tuyệt đối giữa nội dung và hình thức',
            'Sự thống nhất hoàn toàn giữa nội dung và hình thức',
            'Mối quan hệ bất biến giữa nội dung và hình thức'
        ],
        correct: [0]
    },
    {
        id: 18,
        type: 'multiple',
        text: 'Câu 18: Theo quan điểm của chủ nghĩa duy vật biện chứng, mối liên hệ là gì?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Là chỉ sự ảnh hưởng qua lại của các yếu tố, bộ phận trong sự vật và giữa các sự vật, hiện tượng',
            'Là sự thừa nhận rằng các mặt của sự vật, hiện tượng và giữa các sự vật với nhau trong thực tế khách quan không có mối liên hệ nào cả',
            'Là sự tác động lẫn nhau, chi phối, chuyển hoá lẫn nhau một cách khách quan, phổ biến, nhiều vẻ giữa các mặt, quá trình của sự vật, hiện tượng hoặc giữa các sự vật, hiện tượng',
            'Là sự tác động lẫn nhau, có tính khách quan, phổ biến, nhiều vẻ, không thể chuyển hoá cho nhau'
        ],
        correct: [0, 2]
    },
    {
        id: 19,
        type: 'single',
        text: 'Câu 19: Nguyên lý cơ bản của phép biện chứng duy vật là nguyên lý nào?',
        options: [
            'Nguyên lý về sự vận động và đứng im của các sự vật',
            'Nguyên lý về sự tồn tại khách quan của vật chất',
            'Nguyên lý về tính liên tục và tính gián đoạn của thế giới vật chất',
            'Nguyên lý về mối liên hệ phổ biến và về sự phát triển'
        ],
        correct: [3]
    },
    {
        id: 20,
        type: 'multiple',
        text: 'Câu 20: Theo quan điểm duy vật biện chứng, đối với sự vận động và phát triển của sự vật, các mối liên hệ:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Đều có vai trò như nhau',
            'Không thể thay đổi',
            'Có thể chuyển hoá lẫn nhau',
            'Có vai trò và vị trí khác nhau'
        ],
        correct: [2, 3]
    },
    {
        id: 21,
        type: 'multiple',
        text: 'Câu 21: Theo quan điểm duy vật biện chứng, nguồn gốc của sự phát triển là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Nguồn gốc phát triển nằm ngay trong bản thân sự vật',
            'Ý thức con người',
            'Sự đấu tranh của các mặt đối lập trong bản thân sự vật',
            'Lực lượng siêu nhiên'
        ],
        correct: [0, 2]
    },
    {
        id: 22,
        type: 'single',
        text: 'Câu 22: Đâu là quan điểm của chủ nghĩa duy vật biện chứng về mối quan hệ giữa cái chung và cái riêng?',
        options: [
            'Cái chung tồn tại khách quan, bên ngoài cái riêng',
            'Không có cái chung thuần tuý tồn tại ngoài cái riêng, cái chung tồn tại thông qua cái riêng',
            'Cái riêng không bao chứa cái chung nào',
            'Cái riêng tồn tại khách quan không bao chứa cái chung'
        ],
        correct: [1]
    },
    {
        id: 23,
        type: 'single',
        text: 'Câu 23: Theo quan điểm của chủ nghĩa duy vật biện chứng, vì sao khi cải tạo sự vật, ta cần căn cứ vào bản chất?',
        options: [
            'Vì bản chất là yếu tố bề ngoài',
            'Vì bản chất quy định sự phát triển của sự vật',
            'Vì bản chất dễ thay đổi',
            'Vì bản chất không quan trọng bằng hiện tượng'
        ],
        correct: [1]
    },
    {
        id: 24,
        type: 'single',
        text: 'Câu 24: Theo quan điểm của chủ nghĩa duy vật biện chứng, trong quan hệ biện chứng giữa nội dung và hình thức, yếu tố nào giữ vai trò quyết định?',
        options: [
            'Phương pháp',
            'Hình thức',
            'Điều kiện',
            'Nội dung'
        ],
        correct: [3]
    },
    {
        id: 25,
        type: 'multiple',
        text: 'Câu 25: Theo quan điểm duy vật biện chứng, vận dụng trong nhận thức và hoạt động thực tiễn phải dựa vào cái chung vì:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Vì cái chung dễ hiểu và dễ áp dụng hơn cái riêng',
            'Vì cái chung là bản chất, sâu sắc, chi phối cái riêng',
            'Vì cái chung mang tính khách quan',
            'Vì cái chung luôn đúng trong mọi hoàn cảnh'
        ],
        correct: [1, 2]
    },
    {
        id: 26,
        type: 'single',
        text: 'Câu 26: Theo quan điểm của chủ nghĩa duy vật biện chứng, trong quan hệ biện chứng giữa khả năng và hiện thực là:',
        options: [
            'Không thể chuyển hóa cho nhau trong quá trình phát triển của sự vật',
            'Chỉ có khả năng mới biến thành hiện thực',
            'Chỉ có hiện thực mới biến thành khả năng',
            'Có thể chuyển hóa cho nhau trong quá trình phát triển của sự vật'
        ],
        correct: [3]
    },
    {
        id: 27,
        type: 'single',
        text: 'Câu 27: Thêm cụm từ nào vào chỗ trống của câu sau để được một luận điểm của chủ nghĩa duy vật biện chứng: "Quan hệ giữa phạm trù triết học và phạm trù của các khoa học cụ thể là quan hệ giữa …… (1) …… và …… (2) ……"',
        options: [
            '1- cái riêng, 2- cái chung',
            '1- cái chung, 2- cái riêng',
            '1- cái chung, 2- cái chung',
            '1- cái riêng, 2- cái riêng'
        ],
        correct: [1]
    },
    {
        id: 28,
        type: 'group',
        text: 'Câu 28: Chỉ ra các luận điểm đúng, luận điểm nào sai:',
        subQuestions: [
            {
                text: '1) Một nguyên nhân có thể gây ra nhiều kết quả khác nhau tùy thuộc vào hoàn cảnh cụ thể',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '2) Nguyên nhân giống nhau trong những điều kiện giống nhau thì kết quả về cơ bản giống nhau',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '3) Một kết quả chỉ có thể được gây nên do các nguyên nhân khác nhau',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '4) Một nguyên nhân nhất định trong những điều kiện hoàn cảnh nhất định chỉ có thể gây ra kết quả nhất định',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            }
        ]
    },
    {
        id: 29,
        type: 'group',
        text: 'Câu 29: Chỉ ra các phát biểu đúng, phát biểu nào sai:',
        subQuestions: [
            {
                text: '1) Chủ nghĩa duy tâm khách quan cho rằng con người có thể tự mình xây dựng nên mối liên hệ giữa các sự vật hiện tượng thông qua kinh nghiệm cảm tính',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '2) Chủ nghĩa duy tâm khách quan cho rằng mối liên hệ giữa các sự vật, hiện tượng trong thế giới là biểu hiện của mối liên hệ giữa các ý niệm.',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '3) Chủ nghĩa duy tâm khách quan cho rằng các mối liên hệ giữa sự vật, hiện tượng là kết quả của quá trình vận động và phát triển nội tại của chính bản thân chúng',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '4) Chủ nghĩa duy tâm khách quan cho rằng các sự vật, hiện tượng không có mối liên hệ với nhau, mà tồn tại một cách độc lập, biệt lập',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            }
        ]
    },
    {
        id: 30,
        type: 'group',
        text: 'Câu 30: Chỉ ra các phát biểu đúng, phát biểu nào sai:',
        subQuestions: [
            {
                text: '1) Chủ nghĩa duy vật biện chứng khẳng định mọi sự vật đều tồn tại trong mối liên hệ với các sự vật khác',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '2) Chủ nghĩa duy vật biện chứng khẳng định chỉ có một số sự vật nhất định mới tồn tại trong mối liên hệ với nhau, còn lại là độc lập',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '3) Chủ nghĩa duy vật biện chứng khẳng định mối liên hệ giữa các sự vật là kết quả của sự tác động qua lại và chuyển hóa lẫn nhau',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '4) Chủ nghĩa duy vật biện chứng khẳng định nguồn gốc mối liên hệ giữa các sự vật và hiện tượng là do tính thống nhất vật chất của thế giới',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            }
        ]
    }
];
