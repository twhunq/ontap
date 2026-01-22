// Bài 5: Các quy luật cơ bản của phép biện chứng duy vật
const questions = [
    {
        id: 1,
        type: 'single',
        text: 'Câu 1: Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là sai?',
        options: [
            'Chất là tính quy định vốn có của sự vật',
            'Chất tồn tại khách quan gắn liền với sự vật',
            'Chất tồn tại khách quan bên ngoài sự vật',
            'Không có chất thuần tuý bên ngoài sự vật'
        ],
        correct: [2]
    },
    {
        id: 2,
        type: 'single',
        text: 'Câu 2: Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là đúng?',
        options: [
            'Chất không có tác động gì đến sự thay đổi của lượng',
            'Không phải sự biến đổi về chất nào cũng là kết quả của sự biến đổi về lượng',
            'Phát triển của sự vật chỉ bao hàm sự thay đổi về chất',
            'Sự biến đổi về chất là kết quả của sự biến đổi về lượng của sự vật'
        ],
        correct: [3]
    },
    {
        id: 3,
        type: 'single',
        text: 'Câu 3: Câu ca dao: " Một cây làm chẳng nên non; Ba cây chụm lại nên hòn núi cao " thể hiện nội dung quy luật nào của phép biện chứng duy vật?',
        options: [
            'Quy luật phủ định của phủ định',
            'Quy luật chất - lượng',
            'Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại',
            'Quy luật mâu thuẫn'
        ],
        correct: [2]
    },
    {
        id: 4,
        type: 'multiple',
        text: 'Câu 4: Từ nội dung quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại, vận dụng trong hoạt động thực tiễn, cần tránh tư tưởng nào?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Tích cực, chủ động trong việc tạo ra bước nhảy',
            'Linh hoạt trong việc lựa chọn thời điểm thay đổi',
            'Bảo thủ, không dám thực hiện bước nhảy dù lượng đã đủ',
            'Nôn nóng, muốn thay đổi chất ngay lập tức dù lượng chưa đủ'
        ],
        correct: [2, 3]
    },
    {
        id: 5,
        type: 'single',
        text: 'Câu 5: Nội dung quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại thể hiện:',
        options: [
            'Sự thay đổi về chất diễn ra trước sự thay đổi về lượng',
            'Mọi đối tượng đều là sự thống nhất của hai mặt đối lập chất và lượng',
            'Chất mới ra sẽ không tiếp tục tác động trở lại duy trì sự thay đổi của lượng',
            'Chất quyết định lượng một cách tuyệt đối'
        ],
        correct: [1]
    },
    {
        id: 6,
        type: 'single',
        text: 'Câu 6: Lênin nói quy luật mâu thuẫn có vị trí như thế nào trong phép biện chứng duy vật?',
        options: [
            'Vạch ra xu hướng của sự phát triển',
            'Là hạt nhân của phép biện chứng duy vật, vạch ra nguồn gốc bên trong của sự vận động và phát triển',
            'Vạch ra phương thức của sự phát triển',
            'Vạch ra cách thức của sự phát triển'
        ],
        correct: [1]
    },
    {
        id: 7,
        type: 'multiple',
        text: 'Câu 7: Theo quan điểm duy vật biện chứng, nguyên tắc giải quyết mâu thuẫn bằng:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Áp đặt giải pháp chủ quan',
            'Bỏ qua điều kiện khách quan',
            'Không điều hòa mâu thuẫn',
            'Đấu tranh giữa các mặt đối lập'
        ],
        correct: [2, 3]
    },
    {
        id: 8,
        type: 'multiple',
        text: 'Câu 8: Thống nhất giữa các mặt đối lập là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Các mặt đối lập tác động ngang nhau',
            'Sự tác động qua lại theo hướng bài trừ, phủ định lẫn nhau',
            'Sự phát triển diễn ra không ngừng của sự vật, hiện tượng',
            'Các mặt đối lập cần đến nhau, nương tựa vào nhau, làm tiền đề cho nhau tồn tại'
        ],
        correct: [0, 3]
    },
    {
        id: 9,
        type: 'multiple',
        text: 'Câu 9: Theo quy luật thống nhất và đấu tranh của các mặt đối lập, phát triển diễn ra như thế nào?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Các mặt đối lập luôn loại trừ nhau, không thể cùng tồn tại trong một sự vật',
            'Phát triển chỉ xảy ra khi loại bỏ hoàn toàn một mặt đối lập',
            'Phát triển là kết quả của sự đấu tranh và chuyển hóa giữa các mặt đối lập',
            'Thống nhất và đấu tranh giữa các mặt đối lập là nguồn gốc vận động và phát triển của sự vật'
        ],
        correct: [2, 3]
    },
    {
        id: 10,
        type: 'single',
        text: 'Câu 10: Trong xã hội hữu nô lệ, mâu thuẫn giữa giai cấp thống trị (giai cấp chủ nô) và giai cấp bị trị (giai cấp nô lệ) là biểu hiện của quy luật nào?',
        options: [
            'Quy luật lượng - chất',
            'Quy luật thống nhất và đấu tranh giữa các mặt đối lập',
            'Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại',
            'Quy luật phủ định của phủ định'
        ],
        correct: [1]
    },
    {
        id: 11,
        type: 'single',
        text: 'Câu 11: Theo quan điểm của chủ nghĩa duy vật biện chứng, trong phủ định biện chứng, cái mới ra đời như thế nào so với cái cũ?',
        options: [
            'Hoàn toàn khác biệt, không liên quan',
            'Luôn kém tiến bộ hơn',
            'Giống hệt cái cũ',
            'Có kế thừa và cải tạo những yếu tố tích cực'
        ],
        correct: [3]
    },
    {
        id: 12,
        type: 'single',
        text: 'Câu 12: Sự phát triển của xã hội loài người diễn ra bởi sự thay thế lẫn nhau của các hình thái kinh tế - xã hội từ thấp đến cao. Sự thay thế ấy là biểu hiện của quá trình:',
        options: [
            'Nhân quả',
            'Thống nhất và đấu tranh của các mặt đối lập',
            'Phủ định của phủ định',
            'Lượng đổi dẫn đến chất đổi'
        ],
        correct: [2]
    },
    {
        id: 13,
        type: 'single',
        text: 'Câu 13: Từ nội dung quy luật thống nhất và đấu tranh của các mặt đối lập, không nên nóng vội hoặc bảo thủ trong giải quyết mâu thuẫn vì:',
        options: [
            'Vì giải quyết mâu thuẫn phải căn cứ vào điều kiện chín muồi',
            'Vì mâu thuẫn không quan trọng',
            'Vì mâu thuẫn là hiện tượng tạm thời',
            'Vì mâu thuẫn luôn tồn tại mãi mãi'
        ],
        correct: [0]
    },
    {
        id: 14,
        type: 'single',
        text: 'Câu 14: Quy luật phủ định của phủ định phản ánh đặc điểm nào của sự phát triển?',
        options: [
            'Sự thay đổi không kế thừa từ cái cũ',
            'Sự phát triển đi lên theo hình xoáy ốc',
            'Sự phát triển diễn ra một cách ngẫu nhiên',
            'Sự vận động theo chu kỳ khép kín'
        ],
        correct: [1]
    },
    {
        id: 15,
        type: 'multiple',
        text: 'Câu 15: Quá trình xây dựng chủ nghĩa xã hội " bỏ qua chế độ tư bản chủ nghĩa " ở Việt Nam trên cơ sở vận dụng nội dung quy luật phủ định của phủ định được hiểu như thế nào?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Phủ định hoàn toàn hình thái kinh tế - xã hội tư bản chủ nghĩa',
            'Phủ định chủ nghĩa tư bản là yêu cầu của thực tiễn Việt Nam',
            'Phủ định chủ nghĩa tư bản bằng tư duy siêu hình',
            'Phủ định chủ nghĩa tư bản là quá trình khó khăn, phức tạp'
        ],
        correct: [1, 3]
    },
    {
        id: 16,
        type: 'single',
        text: 'Câu 16: Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là sai?',
        options: [
            'Mỗi sự vật có nhiều thuộc tính',
            'Thuộc tính của sự vật không phải là cái vốn có của sự vật',
            'Thuộc tính của sự vật bộc lộ thông qua sự tác động giữa các sự vật',
            'Thuộc tính của sự vật là những đặc tính vốn có của sự vật'
        ],
        correct: [1]
    },
    {
        id: 17,
        type: 'multiple',
        text: 'Câu 17: Ý nghĩa phương pháp luận của quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại, thể hiện ở:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Thực hiện bước nhảy không cần điều kiện chín muồi',
            'Không cần chú ý đến điều kiện khách quan khi thực hiện bước nhảy',
            'Phải biết tích luỹ về lượng để có biến đổi về chất',
            'Cần xác định quy mô và nhịp điệu bước nhảy một cách khách quan, khoa học'
        ],
        correct: [2, 3]
    },
    {
        id: 18,
        type: 'multiple',
        text: 'Câu 18: Mâu thuẫn biện chứng là khái niệm dùng để chỉ:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Sự liên hệ, tác động theo cách vừa thống nhất, vừa đấu tranh giữa các mặt đối lập',
            'Sự đối lập hoàn toàn giữa các sự vật, hiện tượng',
            'Sự tác động theo cách vừa đối hồi, vừa loại trừ, vừa chuyển hoá lẫn nhau giữa các mặt đối lập',
            'Sự thay đổi về chất của sự vật, hiện tượng'
        ],
        correct: [0, 2]
    },
    {
        id: 19,
        type: 'single',
        text: 'Câu 19: Theo quan điểm duy vật biện chứng, sự phát triển của sự vật, hiện tượng là kết quả của yếu tố nào?',
        options: [
            'Sự đồng nhất hoàn toàn giữa các mặt đối lập',
            'Sự ổn định tuyệt đối của sự vật',
            'Sự đấu tranh giữa các mặt đối lập',
            'Sự loại bỏ tất cả các mâu thuẫn'
        ],
        correct: [2]
    },
    {
        id: 20,
        type: 'multiple',
        text: 'Câu 20: Từ nội dung quy luật phủ định của phủ định, đặc điểm nào sau đây không phải của phủ định biện chứng?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Làm tiền đề cho sự phát triển tiếp theo',
            'Tạo ra kết quả cuối cùng trong quá trình vận động',
            'Phủ định sạch trơn, không kế thừa',
            'Có kế thừa những yếu tố tích cực'
        ],
        correct: [1, 2]
    },
    {
        id: 21,
        type: 'multiple',
        text: 'Câu 21: Vị trí của quy luật phủ định của phủ định trong phép biện chứng duy vật?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Chỉ ra khuynh hướng của sự phát triển',
            'Chỉ ra hình thức của sự phát triển',
            'Chỉ ra nguồn gốc của sự phát triển',
            'Chỉ ra cách thức của sự phát triển'
        ],
        correct: [0, 1]
    },
    {
        id: 22,
        type: 'multiple',
        text: 'Câu 22: Từ nội dung quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại, bước nhảy là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Là giai đoạn chuyển hoá cơ bản về chất do sự thay đổi về lượng trước đó gây ra',
            'Là bước ngoặt trong quá trình vận động, chấm dứt giai đoạn thay đổi về lượng',
            'Là sự thay đổi liên tục không gián đoạn trong quá trình phát triển',
            'Là sự tích luỹ nhỏ nhặt về lượng không dẫn đến thay đổi lớn'
        ],
        correct: [0, 1]
    },
    {
        id: 23,
        type: 'single',
        text: 'Câu 23: Luận điểm nào sau đây là sai?',
        options: [
            'Hai mặt đối lập biện chứng của sự vật liên hệ với nhau tạo thành mâu thuẫn biện chứng',
            'Không phải ghép bất kỳ hai mặt đối lập lại với nhau là được mâu thuẫn biện chứng',
            'Các mặt đối lập liên hệ, tác động qua lại với nhau một cách khách quan',
            'Ghép hai mặt đối lập lại với nhau là được mâu thuẫn biện chứng'
        ],
        correct: [3]
    },
    {
        id: 24,
        type: 'multiple',
        text: 'Câu 24: Từ nội dung quy luật phủ định của phủ định, kế thừa biện chứng khác với kế thừa siêu hình ở chỗ nào?\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Giữ lại yếu tố tích cực của cái cũ',
            'Bổ sung yếu tố hợp lý trong cái mới',
            'Giữ nguyên mọi thứ như cái cũ',
            'Loại bỏ hoàn toàn cái cũ'
        ],
        correct: [0, 1]
    },
    {
        id: 25,
        type: 'multiple',
        text: 'Câu 25: Theo quan điểm duy vật biện chứng, mâu thuẫn biện chứng tồn tại khách quan vì:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Vì nó xuất hiện trong mọi lĩnh vực tự nhiên, xã hội và tư duy',
            'Vì nó nằm trong bản thân sự vật, không phụ thuộc ý muốn con người',
            'Vì nó được con người tạo ra để giải thích hiện tượng',
            'Vì nó chỉ tồn tại trong các hiện tượng xã hội phức tạp'
        ],
        correct: [0, 1]
    },
    {
        id: 26,
        type: 'multiple',
        text: 'Câu 26: Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc của sự phát triển là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Nguồn gốc phát triển nằm ngay trong bản thân sự vật',
            'Sự đấu tranh của các mặt đối lập trong bản thân sự vật',
            'Lực lượng siêu nhiên',
            'Ý thức con người'
        ],
        correct: [0, 1]
    },
    {
        id: 27,
        type: 'single',
        text: 'Câu 27: Trong hoạt động thực tiễn, sai lầm của sự chủ quan, nóng vội là do không tôn trọng quy luật nào?',
        options: [
            'Quy luật chất - lượng',
            'Quy luật phủ định của phủ định',
            'Quy luật mâu thuẫn',
            'Quy luật chuyển hoá từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại'
        ],
        correct: [3]
    },
    {
        id: 28,
        type: 'multiple',
        text: 'Câu 28: Yếu tố tạo thành mâu thuẫn biện chứng là:\n\n(Sinh viên chọn 2 phương án đúng nhất)',
        options: [
            'Các mặt đối lập có khuynh hướng biến đổi trái ngược nhau',
            'Sự thống nhất tuyệt đối giữa các mặt đối lập',
            'Các bộ phận, thuộc tính cùng tồn tại khách quan trong mỗi sự vật, hiện tượng',
            'Các yếu tố độc lập không liên quan đến nhau'
        ],
        correct: [0, 2]
    },
    {
        id: 29,
        type: 'single',
        text: 'Câu 29: Theo quan điểm của chủ nghĩa duy vật biện chứng, mỗi lần phủ định diễn ra gắn liền với yếu tố nào?',
        options: [
            'Sự đồng thuận tuyệt đối',
            'Sự đấu tranh giữa các mặt đối lập',
            'Sự giữ nguyên trạng thái cũ',
            'Sự loại bỏ tất cả yếu tố cũ'
        ],
        correct: [1]
    },
    {
        id: 30,
        type: 'single',
        text: 'Câu 30: Sự tác động theo xu hướng nào thì được gọi là sự đấu tranh của các mặt đối lập?',
        options: [
            'Nương tựa nhau',
            'Đấu tranh với nhau',
            'Ràng buộc nhau',
            'Phủ định, bài trừ nhau'
        ],
        correct: [3]
    }
];
