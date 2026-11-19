import { jdFromDate, parseDateStr } from '../utils/lunarHelper';

export const FEATURED_DAYS = {
  '2026-09-05': {
    date: '2026-09-05',
    badge: 'Ngày Khai Giảng Hợp Lưu',
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__9750_57b67b5f.jpg',
    photoCaption: 'Sân trường rộn rã nụ cười ngày hội tụ dưới mái trường chung',
    oceanSignal:
      'Sáng nay gió biển Đông thổi căng buồm rồi đó thuyền viên ơi! Hai dòng sông Hồ Nghinh và Lý Thường Kiệt chính thức hợp lưu ra biển lớn — chuẩn bị tinh thần "slay" trọn năm học 2026–2027 nào.',
    confluenceStory:
      'Sân trường sáng 5/9 bỗng rộng vui gấp đôi: bạn cũ Lý Thường Kiệt bắt tay bạn mới Hồ Nghinh, chung một màu áo trắng và chung nhịp trống khai trường vang tới tận sóng biển Đà Nẵng.',
  },
  '2026-11-17': {
    date: '2026-11-17',
    badge: 'Sóng Tri Ân',
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__7200_ce893c9a.jpg',
    photoCaption: 'Giờ học đầy tập trung trong lớp học ngập nắng sáng',
    oceanSignal:
      'Tín hiệu từ ngọn hải đăng Sơn Trà: Mấy bữa nay kiểm tra giữa kỳ hơi căng đúng không? Hít một hơi thật sâu vị gió biển, nạp lại "pin mặt trời" rồi từ từ gỡ từng bài nhé!',
    confluenceStory:
      'Góc hành lang tầng 2 giờ ra chơi: hội mê Toán Hồ Nghinh và team Văn Lý Thường Kiệt lập "liên minh giải cứu bài tập", chỉ nhau bí kíp học nhanh mà vẫn kịp đá cầu 10 phút.',
  },
  '2026-11-18': {
    date: '2026-11-18',
    badge: 'Nhịp Hải Lưu',
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__6750_6af313f4.jpg',
    photoCaption: 'Ban nhạc học sinh tỏa sáng trong tiết Âm nhạc & Cuộc sống',
    oceanSignal:
      'Cá heo vừa báo tin: Hôm nay là ngày siêu hợp để hoàn thành một việc nhỏ bạn cứ hẹn mãi "để mai làm". Chỉ cần mở vở 25 phút là đã vượt qua 80% sự lười biếng rồi!',
    confluenceStory:
      'Bí mật nhỏ ở căn-tin trường hợp lưu: món bánh mì ốp-la buổi sáng vẫn ngon y như cũ, chỉ khác là giờ có thêm tiếng cười rôm rả của cả hai bên sân trường nhập lại.',
  },
  '2026-11-19': {
    date: '2026-11-19',
    badge: 'Hải Trình Hôm Nay',
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__6900_f33f3dc6.jpg',
    photoCaption: 'Thả tim rạng rỡ tiếp thêm năng lượng tích cực mỗi ngày đến lớp',
    oceanSignal:
      'Biển hôm nay êm như mặt gương, cực kỳ hợp để chốt sổ bài tập trước thềm 20/11. Đừng so sánh tốc độ bơi của mình với ai cả — mỗi chú rùa biển đều có hải trình riêng để về đích!',
    confluenceStory:
      'Chiều nay các lớp đang rục rịch vẽ báo tường "Hợp Lưu Ra Biển Lớn". Bạn vẽ sóng Hoàng Sa, bạn nắn nót từng dòng tri ân thầy cô — nhìn lộn xộn mà thương muốn xỉu.',
  },
  '2026-11-20': {
    date: '2026-11-20',
    badge: 'Ngày Nhà Giáo Việt Nam 20/11',
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__8550_e432eff5.jpg',
    photoCaption: 'Tri ân những người lái đò thầm lặng bên bục giảng thân thương',
    oceanSignal:
      'Tín hiệu đặc biệt nhất tháng 11: Hôm nay thầy cô chính là những người giữ hải đăng thầm lặng. Một lời cảm ơn chân thành hay nụ cười ngoan trên lớp đủ làm thầy cô vui nguyên cả tuần!',
    confluenceStory:
      'Ngày 20/11 đầu tiên dưới mái trường chung Hồ Nghinh x Lý Thường Kiệt: thầy cô hai trường cùng đứng chung một sân khấu, nhận hoa từ hàng trăm học trò vừa lạ mà vừa thân như người một nhà.',
  },
  '2026-11-21': {
    date: '2026-11-21',
    badge: 'Gió Mùa Đông Bắc Nhẹ',
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__8400_1d4d1d4e.jpg',
    photoCaption: 'Nhiệt huyết sân bóng rổ cuối tuần của tuổi trẻ học đường',
    oceanSignal:
      'Sáng thứ Bảy trời Đà Nẵng se se lạnh, sóng Mỹ Khê vỗ rì rào nghe cực chill. Học xong buổi sáng nhớ cho mắt nghỉ ngơi, rời màn hình 30 phút để ngắm mây trời nhé!',
    confluenceStory:
      'CLB Đọc sách cuối tuần phát hiện một điểm chung siêu thú vị: học sinh Hồ Nghinh và Lý Thường Kiệt đều mê truyện phiêu lưu biển đảo và cực giỏi giải đố nhanh.',
  },
  '2026-11-22': {
    date: '2026-11-22',
    badge: 'Chủ Nhật Nạp Năng Lượng',
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__7350_c914de31.jpg',
    photoCaption: 'Trang nghiêm và tự hào trong giờ chào cờ đầu tuần trên sân trường',
    oceanSignal:
      'Thông điệp từ rạn san hô: Chủ Nhật là ngày để tái tạo năng lượng, không phải để "cày" xuyên trưa bỏ bữa. Ăn ngon, ngủ đủ, soạn sẵn cặp sách tối nay là thứ Hai auto mượt!',
    confluenceStory:
      'Chiều Chủ Nhật dạo biển nghe tiếng sóng, tự nhiên thấy năm học mới trôi nhanh thật: từ bỡ ngỡ ngày đầu sáp nhập, giờ đã có thêm bao nhiêu bạn thân cùng chung một màu cờ lớp.',
  },
};

const FALLBACK_PHOTOS = [
  {
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__6900_f33f3dc6.jpg',
    photoCaption: 'Nụ cười rạng rỡ cùng bạn bè dưới mái trường hợp lưu',
  },
  {
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__6750_6af313f4.jpg',
    photoCaption: 'Khoảnh khắc âm nhạc rộn ràng sau giờ học căng thẳng',
  },
  {
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__7200_ce893c9a.jpg',
    photoCaption: 'Khung cửa sổ đầy nắng và những trang vở chăm ngoan',
  },
  {
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__8400_1d4d1d4e.jpg',
    photoCaption: 'Vận động hết mình trên sân thể thao cùng đồng đội',
  },
  {
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__9750_57b67b5f.jpg',
    photoCaption: 'Sân trường rộn tiếng cười của tập thể học sinh thân thương',
  },
  {
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__7350_c914de31.jpg',
    photoCaption: 'Nét đẹp truyền thống dưới sân trường rợp bóng cây xanh',
  },
  {
    photo:
      '/assets/aistudio/K__ni_m_10_n_m_x_y_d_ng_v__ph_t_tri_n_tr__ng_THCS_H__Nghinh__2015-2025__8550_e432eff5.jpg',
    photoCaption: 'Cô trò cùng nhau vun đắp từng giờ học ý nghĩa',
  },
];

const FALLBACK_SIGNALS = [
  'Sóng biển không bao giờ đi đường thẳng mà vẫn chạm tới bờ. Hôm nay lỡ giải sai một câu Toán cũng đừng nản nha, coi như một lần chỉnh la bàn!',
  'Tín hiệu từ đảo Lý Sơn: Cây tỏi vẫn lớn lên trên cát trắng gió mặn, còn bạn thì đang mạnh mẽ hơn mỗi ngày nhờ từng giờ học nghiêm túc.',
  'Gió biển hôm nay thổi theo hướng tích cực: thử mỉm cười với người bạn ngồi bàn bên xem, biết đâu lại nhận được một cái gật đầu tiếp sức siêu ấm áp!',
  'Đàn cá nhỏ đi cùng nhau sẽ chẳng ngại đại dương rộng. Ở mái trường hợp lưu Hồ Nghinh x Lý Thường Kiệt, bạn luôn có thầy cô và bạn bè đồng hành.',
  'Nhắc nhẹ từ chú Rùa xanh Côn Đảo: Uống đủ nước lọc thay vì uống trà sữa quá trễ tối nay nhé, giữ phong độ đỉnh cao cho tiết học ngày mai!',
  'Ngoài khơi Trường Sa trời xanh lắm! Giữ tâm trạng tươi như nắng sớm Đà Nẵng để giải quyết gọn ghẽ mọi bài kiểm tra tuần này nào.',
  'Mỗi trang vở ghi chép cẩn thận hôm nay chính là một viên gạch xây nên ngọn hải đăng tương lai của riêng bạn. Tiến lên thuyền viên!',
];

const FALLBACK_STORIES = [
  'Bật mí: Từ ngày hai trường về chung một nhà, góc sân có cây bàng xanh bỗng trở thành "tọa độ quốc dân" để các bạn trao đổi vở ghi và kể chuyện vui giờ ra chơi.',
  'Hội học sinh hai trường từng tranh luận xem bên nào đi học sớm hơn — kết quả hòa 1-1 vì cả hai đều thích đến sớm ngắm nắng sáng rọi qua hàng lang lớp học.',
  'Thầy Giám thị bảo điều đáng yêu nhất năm học 2026–2027 là nghe học sinh gọi nhau "bạn trường mình ơi" thân thương như đã học chung từ lớp 1.',
  'Mỗi chiều tan trường, hai dòng xe đạp nối đuôi nhau ra cổng tạo thành một bức tranh thanh xuân rộn ràng bậc nhất khu phố Đà Nẵng.',
  'Trong thư viện trường có một kệ sách riêng về biển đảo quê hương, lúc nào cũng có vài bạn ngồi đọc say sưa đến sát giờ trống vào lớp.',
  'Bí kíp gắn kết cực nhanh của các lớp hợp lưu: chia nhóm trực nhật xen kẽ, làm xong sớm cả nhóm kéo nhau xuống sân đá cầu cười vang cả góc trời.',
];

export function getCalendarDayData(dateStr) {
  if (FEATURED_DAYS[dateStr]) {
    return {
      ...FEATURED_DAYS[dateStr],
      isFeatured: true,
    };
  }
  const { year, month, day } = parseDateStr(dateStr);
  const seed = jdFromDate(day, month, year);
  const fallbackVisual = FALLBACK_PHOTOS[seed % FALLBACK_PHOTOS.length];
  return {
    date: dateStr,
    badge: 'Nhật Ký Hải Trình',
    photo: fallbackVisual.photo,
    photoCaption: fallbackVisual.photoCaption,
    oceanSignal: FALLBACK_SIGNALS[seed % FALLBACK_SIGNALS.length],
    confluenceStory: FALLBACK_STORIES[(seed * 3) % FALLBACK_STORIES.length],
    isFeatured: false,
  };
}
