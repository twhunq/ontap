// Bài 6: Lý luận nhận thức của chủ nghĩa duy vật biện chứng
const questions = [
    {
        id: 1,
        type: 'multiple',
        text: 'Câu 1: Phản ánh tích cực, sáng tạo thế giới vật chất vào bộ óc của con người là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Quá trình có phát triển, bổ sung và hoàn thiện',
            'Quá trình phức tạp, làm nảy sinh và giải quyết mâu thuẫn',
            'Quá trình máy móc đơn giản, thụ động và nhất thời',
            'Quá trình diễn ra ở mọi sự vật, hiện tượng'
        ],
        correct: [0, 1]
    },
    {
        id: 2,
        type: 'single',
        text: 'Câu 2: Theo chủ nghĩa duy vật biện chứng, nguồn gốc của nhận thức là:',
        options: [
            'Thế giới khách quan',
            'Thế giới ý niệm',
            'Bản thân con người',
            'Thế giới vật chất và ý niệm tuyệt đối'
        ],
        correct: [0]
    },
    {
        id: 3,
        type: 'single',
        text: 'Câu 3: Trong nhận thức lý tính, hình thức nào là cao nhất?',
        options: [
            'Phán đoán',
            'Suy lý',
            'Khái niệm',
            'Trí giác'
        ],
        correct: [1]
    },
    {
        id: 4,
        type: 'multiple',
        text: 'Câu 4: Tri giác là hình thức nhận thức nào?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Phản ánh thuộc tính riêng lẻ của sự vật',
            'Phản ánh sự vật trong trạng thái tĩnh',
            'Phản ánh một cách tổng hợp các thuộc tính của sự vật',
            'Phản ánh trực tiếp sự vật qua các giác quan con người'
        ],
        correct: [2, 3]
    },
    {
        id: 5,
        type: 'single',
        text: 'Câu 5: Tri giác khác với cảm giác ở điểm nào?',
        options: [
            'Là hình ảnh trừu tượng của sự vật',
            'Tổng hợp của nhiều cảm giác, phản ánh sự vật trọn vẹn hơn',
            'Không phản ánh sự vật',
            'Không liên quan đến giác quan'
        ],
        correct: [1]
    },
    {
        id: 6,
        type: 'multiple',
        text: 'Câu 6: Hình thức của tư duy trừu tượng là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Khái niệm',
            'Trị giác',
            'Biểu tượng',
            'Suy lý'
        ],
        correct: [0, 3]
    },
    {
        id: 7,
        type: 'multiple',
        text: 'Câu 7: Trong quá trình nhận thức, thực tiễn có vai trò gì?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Là giai đoạn cuối cùng và không lặp lại',
            'Không liên quan đến lý tính',
            'Là cơ sở của nhận thức',
            'Là động lực, mục đích và tiêu chuẩn kiểm tra chân lý'
        ],
        correct: [2, 3]
    },
    {
        id: 8,
        type: 'multiple',
        text: 'Câu 8: Vì sao nhận thức lý tính có thể xa rời hiện thực?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Vì chỉ dựa vào cảm giác',
            'Vì phản ánh gián tiếp và khái quát',
            'Vì có thể tách rời thực tiễn',
            'Vì không dựa vào giác quan'
        ],
        correct: [1, 2]
    },
    {
        id: 9,
        type: 'multiple',
        text: 'Câu 9: Mối quan hệ giữa nhận thức cảm tính và lý tính là gì?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Thống nhất với nhau',
            'Bổ sung cho nhau',
            'Cái này thay thế cái kia',
            'Đối lập nhau hoàn toàn'
        ],
        correct: [0, 1]
    },
    {
        id: 10,
        type: 'single',
        text: 'Câu 10: Vì sao nhận thức lý tính cần gắn liền với thực tiễn?',
        options: [
            'Vì thực tiễn là mục đích duy nhất của nhận thức',
            'Vì thực tiễn tạo ra mọi hình thức nhận thức',
            'Vì nhận thức lý tính không thể tồn tại độc lập',
            'Vì lý tính có nguy cơ xa rời hiện thực nếu không được kiểm tra bởi thực tiễn'
        ],
        correct: [3]
    },
    {
        id: 11,
        type: 'single',
        text: 'Câu 11: Trong con đường biện chứng của sự nhận thức chân lý, ba yếu tố nào sau đây là các giai đoạn chính?',
        options: [
            'Trực quan sinh động – Tư duy trừu tượng – Thực tiễn',
            'Cảm giác – Tri giác – Biểu tượng',
            'Trực giác – Lý trí – Trải nghiệm',
            'Khái niệm – Phán đoán – Suy lý'
        ],
        correct: [0]
    },
    {
        id: 12,
        type: 'single',
        text: 'Câu 12: Nếu tuyệt đối hóa vai trò của nhận thức cảm tính và phủ nhận vai trò của nhận thức lý tính, sẽ dẫn đến quan điểm nào?',
        options: [
            'Chủ nghĩa thực chứng',
            'Chủ nghĩa duy lý',
            'Chủ nghĩa kinh nghiệm',
            'Chủ nghĩa duy cảm'
        ],
        correct: [3]
    },
    {
        id: 13,
        type: 'multiple',
        text: 'Câu 13: Nhận định nào sau đây đúng về vai trò của nhận thức lý tính đối với nhận thức cảm tính?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Giúp con người nhận thức bản chất của sự vật',
            'Là hình thức cảm tính gián tiếp của sự vật',
            'Là khâu trung gian giữa cảm giác và biểu tượng',
            'Giúp con người nhận thức sâu sắc hơn về sự vật'
        ],
        correct: [0, 3]
    },
    {
        id: 14,
        type: 'single',
        text: 'Câu 14: Nhận định nào sau đây thể hiện đúng mối quan hệ giữa nhận thức và thực tiễn?',
        options: [
            'Thực tiễn kiểm nghiệm, hoàn thiện và thúc đẩy nhận thức phát triển sâu sắc hơn',
            'Nhận thức không cần kiểm nghiệm thực tiễn nếu đã được tư duy lý tính chứng minh',
            'Nhận thức càng phát triển thì vai trò của thực tiễn càng giảm',
            'Thực tiễn và nhận thức là hai quá trình hoàn toàn độc lập'
        ],
        correct: [0]
    },
    {
        id: 15,
        type: 'multiple',
        text: 'Câu 15: Hình thức của nhận thức cảm tính gồm:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Khái niệm',
            'Phán đoán',
            'Biểu tượng',
            'Cảm giác'
        ],
        correct: [2, 3]
    },
    {
        id: 16,
        type: 'single',
        text: 'Câu 16: Khái niệm là hình thức nhận thức nào?',
        options: [
            'Nhận thức thông thường',
            'Nhận thức cảm tính',
            'Nhận thức lý tính',
            'Nhận thức kinh nghiệm'
        ],
        correct: [2]
    },
    {
        id: 17,
        type: 'multiple',
        text: 'Câu 17: Theo chủ nghĩa duy vật biện chứng, nhận thức là một quá trình như thế nào?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Phức tạp và luôn phát triển',
            'Đơn giản và ngừng phát triển',
            'Đơn giản và bất biến',
            'Diễn ra theo đường xoáy ốc'
        ],
        correct: [0, 3]
    },
    {
        id: 18,
        type: 'single',
        text: 'Câu 18: Cảm giác là hình thức đầu tiên của quá trình nhận thức nào?',
        options: [
            'Nhận thức lý tính',
            'Nhận thức cảm tính',
            'Nhận thức kinh nghiệm',
            'Nhận thức khoa học'
        ],
        correct: [1]
    },
    {
        id: 19,
        type: 'single',
        text: 'Câu 19: Giai đoạn đầu tiên trong quá trình nhận thức là gì?',
        options: [
            'Tư duy trừu tượng',
            'Thực tiễn',
            'Nhận thức cảm tính',
            'Nhận thức lý tính'
        ],
        correct: [2]
    },
    {
        id: 20,
        type: 'multiple',
        text: 'Câu 20: Phán đoán là hình thức nào của tư duy trừu tượng?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Phản ánh khái quát sự vật',
            'Phản ánh cảm tính sự vật',
            'Phản ánh gián tiếp sự vật',
            'Phản ánh trực tiếp sự vật'
        ],
        correct: [0, 2]
    },
    {
        id: 21,
        type: 'single',
        text: 'Câu 21: Trong quá trình nhận thức, hình thức nào sau đây xuất hiện trước?',
        options: [
            'Khái niệm',
            'Phán đoán',
            'Cảm giác',
            'Suy lý'
        ],
        correct: [2]
    },
    {
        id: 22,
        type: 'single',
        text: 'Câu 22: Nhận thức được chia thành mấy loại chính theo lý luận nhận thức của chủ nghĩa duy vật biện chứng?',
        options: [
            '5 loại',
            '2 loại',
            '3 loại',
            '4 loại'
        ],
        correct: [1]
    },
    {
        id: 23,
        type: 'multiple',
        text: 'Câu 23: Đặc điểm nào dưới đây không phải là của hoạt động thực tiễn?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Mang tính khái quát - lý tính',
            'Nhằm cải tạo tự nhiên và xã hội',
            'Mang tính lịch sử - xã hội',
            'Là hoạt động tư duy trừu tượng'
        ],
        correct: [0, 3]
    },
    {
        id: 24,
        type: 'single',
        text: 'Câu 24: Nguồn gốc "duy nhất và cuối cùng" của nhận thức theo triết học Mác - Lênin là gì?',
        options: [
            'Khoa học',
            'Thế giới khách quan',
            'Ý thức con người',
            'Tri giác của con người'
        ],
        correct: [1]
    },
    {
        id: 25,
        type: 'multiple',
        text: 'Câu 25: Nguyên tắc xây dựng lý luận nhận thức của chủ nghĩa duy vật biện chứng là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Ý thức con người có vai trò quyết định và chi phối thế giới khách quan',
            'Cảm giác, tri giác, ý thức nói chung là hình ảnh của thế giới khách quan',
            'Thừa nhận sự vật khách quan tồn tại bên ngoài và độc lập với ý thức con người',
            'Con người nhận thức được bề ngoài sinh động của sự vật hiện tượng, không nhận thức được bản chất của chúng'
        ],
        correct: [1, 2]
    },
    {
        id: 26,
        type: 'multiple',
        text: 'Câu 26: Khách thể của nhận thức là gì?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Hiện thực khách quan',
            'Thế giới vật chất',
            'Tư tưởng của con người',
            'Tri giác của con người'
        ],
        correct: [0, 1]
    },
    {
        id: 27,
        type: 'single',
        text: 'Câu 27: Theo quan điểm của chủ nghĩa duy vật biện chứng, kết quả của nhận thức kinh nghiệm là gì?',
        options: [
            'Tri thức thực nghiệm khoa học hoặc tri thức khái quát bản chất sự vật',
            'Những tri thức kinh nghiệm thông thường hoặc tri thức thực nghiệm khoa học',
            'Những tri thức kinh nghiệm thông thường hoặc tri thức mang tính quy luật',
            'Những tri thức kinh nghiệm thông thường hoặc tri thức khái quát bản chất sự vật'
        ],
        correct: [1]
    },
    {
        id: 28,
        type: 'single',
        text: 'Câu 28: Thực tiễn không bao gồm dạng hoạt động nào sau đây?',
        options: [
            'Hoạt động thực nghiệm khoa học',
            'Hoạt động sản xuất vật chất',
            'Hoạt động tư duy lý tính',
            'Hoạt động chính trị xã hội'
        ],
        correct: [2]
    },
    {
        id: 29,
        type: 'group',
        text: 'Câu 29: Chỉ ra các phát biểu đúng/sai:',
        subQuestions: [
            {
                text: '1) Thực tiễn là cơ sở của nhận thức',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '2) Thực tiễn là tiêu chuẩn của chân lý',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '3) Thực tiễn là mục đích của nhận thức',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '4) Thực tiễn là một loại nhận thức độc lập',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            }
        ]
    },
    {
        id: 30,
        type: 'group',
        text: 'Câu 30: Chỉ ra các phát biểu đúng/sai:',
        subQuestions: [
            {
                text: '1) Nếu nhiều người cùng có chung một trải nghiệm thì điều đó chắc chắn đúng',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '2) Nhận thức kinh nghiệm là nền tảng ban đầu cho quá trình hình thành tri thức của con người',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            },
            {
                text: '3) Nhận thức kinh nghiệm luôn đúng vì nó dựa trên những gì ta đã trải qua',
                options: ['Đúng', 'Sai'],
                correct: 1 // Sai
            },
            {
                text: '4) Theo quan điểm của chủ nghĩa duy vật biện chứng, nhận thức kinh nghiệm là nhận thức dựa trên sự quan sát trực tiếp các sự vật, hiện tượng hay các thí nghiệm, thực nghiệm khoa học',
                options: ['Đúng', 'Sai'],
                correct: 0 // Đúng
            }
        ]
    }
];
