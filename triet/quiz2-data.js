// Bài 2: Quan niệm của chủ nghĩa duy vật biện chứng về vật chất, ý thức
const questions = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
        type: 'drag_drop',
        text: 'Câu 25: Kéo thả các nội dung đã liệt kê dưới đây vào cột tương ứng:',
        targets: [
            { id: 1, text: 'Trong nguồn gốc xã hội của ý thức, ngôn ngữ là hệ thống tín hiệu gì?' },
            { id: 2, text: 'Vật chất là một phạm trù triết học dùng để chỉ:' }
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
        id: 26,
        type: 'drag_drop',
        text: 'Câu 26: Kéo thả các đáp án khớp với các phát biểu từ 1-4 về trại dưới đây:',
        targets: [
            { id: 1, text: 'Nhà triết học nào coi lửa là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?' },
            { id: 2, text: 'Nhà triết học nào coi nước là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?' },
            { id: 3, text: 'Nhà triết học nào coi nguyên tử là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?' },
            { id: 4, text: 'Nhà triết học nào coi không khí là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?' }
        ],
        items: [
            { id: 'item5', text: 'Hê-ra-clit - chủ nghĩa duy vật tự phát', correctTarget: 1 },
            { id: 'item6', text: 'Talét - chủ nghĩa duy vật tự phát', correctTarget: 2 },
            { id: 'item7', text: 'Đê-mô-crít - chủ nghĩa duy vật tự phát', correctTarget: 3 },
            { id: 'item8', text: 'Ana-ximên - chủ nghĩa duy vật tự phát', correctTarget: 4 }
        ]
    },
    {
        id: 27,
        type: 'drag_drop',
        text: 'Câu 27: Kéo thả nội dung đã liệt kê dưới đây vào cột tương ứng:',
        targets: [
            { id: 1, text: '1) Theo quan điểm của chủ nghĩa duy vật biện chứng, tính sáng tạo của ý thức thể hiện ở khía cạnh nào sau đây:' },
            { id: 2, text: '2) Theo quan điểm của chủ nghĩa duy vật biện chứng, ý thức có thể tạo ra:' }
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
        id: 28,
        type: 'drag_drop',
        text: 'Câu 28: Kéo thả các nội dung đã liệt kê dưới đây vào cột tương ứng:',
        targets: [
            { id: 1, text: 'Theo quan điểm duy vật biện chứng, nguồn gốc tự nhiên của ý thức:' },
            { id: 2, text: 'Theo quan điểm duy vật biện chứng, nguồn gốc xã hội của ý thức:' }
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
        id: 29,
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
];
