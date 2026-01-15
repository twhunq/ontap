// Bài 2: Quan niệm của chủ nghĩa duy vật biện chứng về vật chất, ý thức
const questions = [
    {
        id: 1,
        type: 'multiple',
        text: 'Câu 1: Theo V.I. Lênin, người thước tính lĩnh lãi khách quan thì vật chất dưới những dạng tồn tại cụ thể của nó là gì cơ thể:',
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
        text: 'Câu 3: Giá trị định nghĩa vật chất của V.I. Lênin trong bối cảnh khoa học hiện đại:',
        options: [
            'Vẫn giữ nguyên giá trị khoa học và triết học',
            'Đã trở nên không còn phù hợp với các phát hiện khoa học mới',
            'Được củng cố thêm bởi những thành tựu của khoa học tự nhiên và xã hội hiện đại',
            'Chỉ có giá trị trong phạm vi triết học mà không có ý nghĩa đối với khoa học nghiên cứu'
        ],
        correct: [0, 2]
    },
    {
        id: 4,
        type: 'single',
        text: 'Câu 4: Theo chủ nghĩa duy vật biện chứng, hình thức vận động xã hội cao nhất là:',
        options: [
            'Là vận động của các hiện tượng kinh tế',
            'Là vận động của các lệ tự tưởng trong lịch sử',
            'Là vận động của lực lượng sản xuất',
            'Là vận động của các hình thái kinh tế - xã hội'
        ],
        correct: [3]
    },
    {
        id: 5,
        type: 'single',
        text: 'Câu 5: Định nghĩa về vật chất của I.cảnh được nêu trong lúc phẩm nào?',
        options: [
            'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán',
            'Biểu chứng của tư nhiên',
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
            'Tiêu tan dạng bất tử của vật chất',
            'Ý thức tiêu tán',
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
            'Làm rõ mối liên hệ giữa pháp biện chứng và chủ nghĩa duy vật lịch sử',
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
            'Chủ nghĩa duy vật biện chứng cho rằng đồng vật bậc cao của chúa cơ ý thức',
            'Chủ nghĩa duy vật biện chứng cho rằng đồng vật bậc cao của chúa cơ ý thức',
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
            'Ý thức có nguồn gốc từ một dạng vật chất giống như gạo tạo ra mồi',
            'Ý thức của con người là hiện tượng bẩm sinh',
            'Ý thức của người hình thành từ lao động sản xuất vật chất',
            'Ý thức của con người chỉ có nguồn gốc xã hội và người gốc kinh tế'
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
            'Nguồn gốc tự nhiên và nguồn gốc nhân thức'
        ],
        correct: [0]
    },
    {
        id: 12,
        type: 'single',
        text: 'Câu 12: Trong phạm trù triết học nào cơi ý thức ta hình ảnh chủ quan về thế giới khách quan?',
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
        text: 'Câu 13: Điều khẳng định nào sau đây là sai?',
        options: [
            'Chủ nghĩa duy vật biện chứng cho rằng đồng vật bậc cao của chúa cơ ý thức',
            'Chủ nghĩa duy vật biện chứng cho rằng đồng vật bậc cao của chúa cơ ý thức',
            'Chủ nghĩa duy vật biện chứng cho rằng chỉ có con người mới có ý thức',
            'Chủ nghĩa duy vật đều cho ý thức là sự phản ánh hiện thực khách quan vào óc con người và người gốc kinh tế'
        ],
        correct: [1, 3]
    },
    {
        id: 14,
        type: 'multiple',
        text: 'Câu 14: Vì sao nào sau đây là đặc trưng riêng của ý thức con người mà trí tuệ nhận tạo không có:',
        options: [
            'Khả năng xử lý số liệu nhanh chóng',
            'Phản ánh năng động, sáng tạo học hiện thực khách quan thông qua hoạt động nhận thức và thực tiễn',
            'Khả năng lưu trữ thông tin lâu dài',
            'Là sự phản ánh hiện thực khách quan vào bộ óc con người nhưng có sự sáng tạo, cải biến của chủ thể nhận thức'
        ],
        correct: [1, 3]
    },
    {
        id: 15,
        type: 'multiple',
        text: 'Câu 15: Khẳng định nào sau đây là SAI về tính hình trực học và khoa học của thế kỷ XX?',
        options: [
            'Nhiều nhà khoa học đã trượt từ chủ nghĩa duy vật mộc sang chủ nghĩa tưởng đối rồi rơi vào chủ nghĩa duy tâm',
            'Những phát hiện mới của khoa học tự nhiên đã chứng minh tính đúng đắn của chủ nghĩa duy tâm',
            'Chủ nghĩa duy vật siêu hình đã bị khả năng giải thích các phát hiện mới của khoa học tự nhiên',
            'Cuộc khủng hoảng trong vật lý học là minh chứng cho sự sụp đổ của chủ nghĩa duy vật nói chung'
        ],
        correct: [1, 3]
    },
    {
        id: 16,
        type: 'multiple',
        text: 'Câu 16: Định nghĩa vật chất của V.I. Lênin trong bối cảnh khoa học hiện đại:',
        options: [
            'Vẫn giữ nguyên giá trị khoa học và triết học',
            'Đã trở nên không còn phù hợp với các phát hiện khoa học mới',
            'Được củng cố thêm bởi những thành tựu của khoa học tự nhiên và xã hội hiện đại',
            'Chỉ có giá trị trong phạm vi triết học mà không có ý nghĩa đối với khoa học nghiên cứu'
        ],
        correct: [0, 2]
    },
    {
        id: 17,
        type: 'multiple',
        text: 'Câu 17: Theo chủ nghĩa duy vật biện chứng: Các yếu tố cơ bản, trực tiếp tạo thành nguồn gốc xã hội của ý thức là:',
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
        text: 'Câu 18: Theo quan điểm của chủ nghĩa duy vật biện chứng, quá trình hình thành ý thức là quá trình:',
        options: [
            'Tiếp thu sự tác động của thế giới bên ngoài',
            'Sáng tạo thuần túy trong tư duy con người',
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
            'Ý thức là sự phản ánh âm sáng tạo hiện thực khách quan vào bộ óc con người',
            'Ý thức là năng lực của một dạng vật chất',
            'Ý thức là hình ảnh phản chiếu về thế giới khách quan'
        ],
        correct: [1]
    },
    {
        id: 20,
        type: 'multiple',
        text: 'Câu 20: Hiện tượng phóng xạ mà khoa học tự nhiên phát hiện ra trong cuộc cách mạng trong khoa học tự nhiên cuối thế kỷ XIX, đầu thế kỷ XX chứng minh điều gì?',
        options: [
            'Nguyên tử là điểm tử',
            'Nguyên tử là bất biến',
            'Cái bị tạo tan không phải vật chất tiêu tan',
            'Dẫu kiến của con người cuộc cách mạng trong khoa học tự nhiên'
        ],
        correct: [2, 3]
    },
    {
        id: 21,
        type: 'single',
        text: 'Câu 21: Luận điểm cho: "tồn tại trước là được của giác" là của ai và thuộc lập trường triết học nào?',
        options: [
            'Của Hêghen, thuộc lập trường của chủ nghĩa duy tâm khách quan',
            'Của Bơcơley, thuộc lập trường của chủ nghĩa duy tâm chủ quan',
            'Của Pla-tôn, thuộc lập trường chủ nghĩa duy tâm khách quan',
            'Của A-ri-xtốt, thuộc lập trường chủ nghĩa duy vật'
        ],
        correct: [1]
    },
    {
        id: 22,
        type: 'multiple',
        text: 'Câu 22: Bộ phim hoạt hình "Đế men: Cuộc phiêu lưu tới xứm lỳ lội" là sự phản ánh:',
        options: [
            'Là kết quả của việc tái hiện một cách trung thực hiện thực khách quan vào bộ óc con người',
            'Là sự phản ánh hiện thực khách quan vào bộ óc con người một cách trung thực',
            'Là sự phản ánh hiện thực khách quan vào bộ óc con người nhưng có sự sáng tạo, cải biến của chủ thể nhận thức',
            'Là sự phản ánh hiện thực khách quan vào bộ óc con người một cách máy móc, thụ động'
        ],
        correct: [2]
    },
    {
        id: 23,
        type: 'single',
        text: 'Câu 23: Trong lĩnh vực xã hội, vật chất được hiểu theo nghĩa nào theo định nghĩa của V.I. Lênin?',
        options: [
            'Là các yếu tố tính toán như tư tưởng, tôn giáo và văn hóa',
            'Là các điều kiện sinh hoạt vật chất và các quan hệ vật chất xã hội',
            'Là những chính sách do nhà nước ban hành',
            'Là ý thức và hoạt động có mục đích của con người'
        ],
        correct: [1]
    },
    {
        id: 24,
        type: 'multiple',
        text: 'Câu 24: Luận điểm nào sau đây là của chủ nghĩa duy vật biện chứng về nguồn gốc của ý thức?',
        options: [
            'Có não người, có sự tác động của thế giới vào não người là có sự hình thành và phát triển ý thức',
            'Không cần sự tác động của thế giới vật chất vào não người có hình thành được ý thức',
            'Có não người, có sự tác động của thế giới bên ngoài vào chưa đủ điều kiện để hình thành và phát triển ý thức',
            'Nguồn gốc tự nhiên là điều kiện cần, còn nguồn gốc xã hội là điều kiện đủ để hình thành ý thức'
        ],
        correct: [2, 3]
    },
    {
        id: 25,
        type: 'group',
        text: 'Câu 25: Kéo thả các nội dung đã liệt kê dưới đây vào cột tương ứng:',
        subQuestions: [
            { id: 0, text: 'Thế giới khách quan', correct: 0 },
            { id: 1, text: 'Giới tự nhiên', correct: 0 },
            { id: 2, text: 'Xã hội loài người', correct: 0 },
            { id: 3, text: 'Tín hiểu ý thức', correct: 0 },
            { id: 4, text: 'Tín hiểu truyền thống tín', correct: 1 },
            { id: 5, text: 'Trong nghĩa rộng xã hội của ý thức, nghĩa nội là họ thống ấn thức gì?', correct: 1 },
            { id: 6, text: 'Vật chất là một phạm trù triết học dùng để chỉ:', correct: 1 }
        ],
        targets: [
            { id: 0, text: 'Là năng lực của một dạng vật chất' },
            { id: 1, text: 'Tín hiểu và chất mang một dạng ý thức' }
        ]
    },
    {
        id: 26,
        type: 'group',
        text: 'Câu 26: Kéo thả các đáp án khớp với các phát biểu từ 1-4 về trại dưới đây:',
        subQuestions: [
            { id: 0, text: 'Nhà triết học nào coi bản là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?', correct: 0 },
            { id: 1, text: 'Nhà triết học nào coi nước là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?', correct: 1 },
            { id: 2, text: 'Nhà triết học nào coi nguyên tử là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?', correct: 2 },
            { id: 3, text: 'Nhà triết học nào coi không khí là thực thể đầu tiên của thế giới và đó là lập trường triết học nào?', correct: 3 }
        ],
        targets: [
            { id: 0, text: 'Hê-ra-clit - chủ nghĩa duy vật tự phát' },
            { id: 1, text: 'Talét - chủ nghĩa duy vật tự phát' },
            { id: 2, text: 'Đê mô crít - chủ nghĩa duy vật tự phát' },
            { id: 3, text: 'Ana-ximên - chủ nghĩa duy vật tự phát' }
        ]
    },
    {
        id: 27,
        type: 'group',
        text: 'Câu 27: Kéo thả nội dung đã liệt kê dưới đây vào cột tương ứng:',
        subQuestions: [
            { id: 0, text: '1) Theo quan điểm của chủ nghĩa duy vật biện chứng, tính sáng tạo của ý thức thể hiện ở khía cạnh nào sau đây:', correct: 0 },
            { id: 1, text: '2) Theo quan điểm của chủ nghĩa duy vật biện chứng, ý thức có thể tạo ra:', correct: 1 }
        ],
        targets: [
            { id: 0, text: 'Biến các đối tượng vật chất được phản ánh thành hình ảnh tâm thức trong tâm trí của con người' },
            { id: 1, text: 'Trí thức mới, ý vật mới đưa vào kiến thức khách quan có cơ sở' }
        ]
    },
    {
        id: 28,
        type: 'group',
        text: 'Câu 28: Kéo thả các nội dung đã liệt kê dưới đây vào cột tương ứng:',
        subQuestions: [
            { id: 0, text: 'Công cụ lao động', correct: 0 },
            { id: 1, text: 'Giác quan', correct: 0 },
            { id: 2, text: 'Hệ thần kinh', correct: 0 },
            { id: 3, text: 'Theo quan điểm duy vật biện chứng, nguồn gốc tự nhiên của ý thức:', correct: 1 },
            { id: 4, text: 'Theo quan điểm duy vật biện chứng, nguồn gốc xã hội của ý thức:', correct: 2 }
        ],
        targets: [
            { id: 0, text: 'Thể giới khách quan và bộ óc người' },
            { id: 1, text: 'Lao động và ngôn ngữ' }
        ]
    }
];
