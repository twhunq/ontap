// Bài 3: Mối quan hệ biện chứng giữa vật chất và ý thức
const questions = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
        type: 'drag_drop',
        text: 'Câu 16: Kéo thả các nội dung dưới đây vào ở tương ứng:',
        targets: [
            { id: 1, text: 'Dân gian có câu: "Có thực mới vực được đạo", theo quan điểm duy vật biện chứng, đó là nội dung:' },
            { id: 2, text: 'Dân gian có câu: "Ngọc kia chuốt mãi cũng tròn/Sắt kia mài mãi cũng còn nên kim", theo quan điểm duy vật biện chứng, đó là nội dung:' }
        ],
        items: [
            { id: 'item1', text: 'Vai trò của vật chất với ý thức', correctTarget: 1 },
            { id: 'item2', text: 'Ý thức có tính độc lập tương đối, tác động trở lại vật chất', correctTarget: 2 }
        ]
    },
    {
        id: 17,
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
        id: 18,
        type: 'drag_drop',
        text: 'Câu 18: Kéo thả các nội dung liệt kê dưới đây vào các cột tương ứng:',
        targets: [
            { id: 1, text: 'Theo quan điểm của chủ nghĩa duy vật biện chứng, mối quan hệ giữa vật chất và ý thức là:' },
            { id: 2, text: 'Theo quan điểm của chủ nghĩa duy vật biện chứng, ý thức có tính độc lập tương đối và tác động trở lại vật chất là:' }
        ],
        items: [
            { id: 'item3', text: 'Vật chất quyết định ý thức, còn ý thức tác động tích cực trở lại vật chất', correctTarget: 1 },
            { id: 'item4', text: 'Ý thức là sự phản ánh thế giới vật chất vào trong đầu óc con người', correctTarget: 2 }
        ]
    },
    {
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
        type: 'drag_drop',
        text: 'Câu 27: Kéo thả các nội dung khớp với các nội dung từ 1-4 về trái dưới đây:',
        targets: [
            { id: 1, text: 'Quan điểm nào coi ý thức, tinh thần vốn của con người đã bị trừu tượng hóa, tách khỏi con người hiện thực thành một lực lượng thần bí?' },
            { id: 2, text: 'Quan điểm nào tuyệt đối hoá yếu tố vật chất, chỉ nhấn mạnh một chiều vai trò của vật chất sinh ra ý thức?' },
            { id: 3, text: 'Quan điểm nào phủ nhận tính khách quan, cường điệu vai trò của nhân tổ chủ quan, duy ý chí?' },
            { id: 4, text: 'Quan điểm nào cho rằng ý thức có tính độc lập tương đối và tác động trở lại vật chất?' }
        ],
        items: [
            { id: 'item5', text: 'Chủ nghĩa duy tâm khách quan', correctTarget: 1 },
            { id: 'item6', text: 'Chủ nghĩa duy vật siêu hình', correctTarget: 2 },
            { id: 'item7', text: 'Chủ nghĩa duy tâm chủ quan', correctTarget: 3 },
            { id: 'item8', text: 'Chủ nghĩa duy vật biện chứng', correctTarget: 4 }
        ]
    },
    {
        id: 28,
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
        id: 29,
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
        id: 30,
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
