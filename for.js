// Form Code Templates - 24 Forms
const formTemplates = {
  // Original 12 Forms
  login: {
    title: "تسجيل الدخول",
    html: `<form class="login-form">
    <div class="form-group">
        <input type="text" id="username" placeholder="اسم المستخدم" required>
    </div>
    <div class="form-group">
        <input type="password" id="password" placeholder="كلمة المرور" required>
    </div>
    <button type="submit" class="submit-btn">دخول</button>
</form>`,
    css: `.login-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.login-form .form-group input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; font-size: 14px; background: #0d0d0d; color: #fff; }
.login-form .form-group input:focus { outline: none; border-color: #00d9ff; }
.login-form .submit-btn { padding: 12px; background: #00d9ff; color: #0d0d0d; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.login-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم تسجيل الدخول!'); });`,
  },
  register: {
    title: "تسجيل جديد",
    html: `<form class="register-form">
    <div class="form-group"><input type="text" id="name" placeholder="الاسم الكامل" required></div>
    <div class="form-group"><input type="email" id="email" placeholder="البريد الإلكتروني" required></div>
    <div class="form-group"><input type="password" id="password" placeholder="كلمة المرور" required></div>
    <button type="submit" class="submit-btn">تسجيل</button>
</form>`,
    css: `.register-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.register-form .form-group input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.register-form .form-group input:focus { outline: none; border-color: #ff6b6b; }
.register-form .submit-btn { padding: 12px; background: #ff6b6b; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.register-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم التسجيل بنجاح!'); });`,
  },
  contact: {
    title: "تواصل معنا",
    html: `<form class="contact-form">
    <div class="form-group"><input type="text" id="name" placeholder="الاسم" required></div>
    <div class="form-group"><input type="email" id="email" placeholder="البريد الإلكتروني" required></div>
    <div class="form-group"><textarea id="message" placeholder="الرسالة" rows="5" required></textarea></div>
    <button type="submit" class="submit-btn">إرسال</button>
</form>`,
    css: `.contact-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.contact-form .form-group input, .contact-form .form-group textarea { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; resize: none; }
.contact-form .form-group textarea:focus, .contact-form .form-group input:focus { outline: none; border-color: #4facfe; }
.contact-form .submit-btn { padding: 12px; background: #4facfe; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.contact-form').addEventListener('submit', function(e) { e.preventDefault(); alert('شكراً لتواصلكم معنا!'); });`,
  },
  search: {
    title: "بحث",
    html: `<form class="search-form">
    <input type="search" id="search" placeholder="ابحث هنا..." required>
    <button type="submit" class="search-btn">بحث</button>
</form>`,
    css: `.search-form { display: flex; gap: 10px; padding: 20px; }
.search-form input { flex: 1; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.search-form input:focus { outline: none; border-color: #00f2fe; }
.search-form .search-btn { padding: 12px 25px; background: #00f2fe; color: #0d0d0d; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.search-form').addEventListener('submit', function(e) { e.preventDefault(); alert('جاري البحث...'); });`,
  },
  survey: {
    title: "استطلاع رأي",
    html: `<form class="survey-form">
    <div class="form-group"><input type="text" id="name" placeholder="اسمك" required></div>
    <div class="form-group"><select id="category" required><option value="">اختر...</option><option value="excellent">ممتاز</option><option value="good">جيد</option></select></div>
    <div class="form-group"><textarea id="feedback" placeholder="رأيك مهم لنا" rows="4"></textarea></div>
    <button type="submit" class="submit-btn">إرسال</button>
</form>`,
    css: `.survey-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.survey-form .form-group select, .survey-form .form-group input, .survey-form .form-group textarea { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.survey-form .submit-btn { padding: 12px; background: #fddb92; color: #333; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.survey-form').addEventListener('submit', function(e) { e.preventDefault(); alert('شكراً لمشاركتنا رأيك!'); });`,
  },
  checkout: {
    title: "الدفع",
    html: `<form class="checkout-form">
    <div class="form-group"><input type="text" id="cardName" placeholder="اسم صاحب البطاقة" required></div>
    <div class="form-group"><input type="text" id="cardNumber" placeholder="رقم البطاقة" maxlength="16" required></div>
    <div class="form-row"><div class="form-group"><input type="text" id="expiry" placeholder="MM/YY" maxlength="5" required></div><div class="form-group"><input type="text" id="cvv" placeholder="CVV" maxlength="3" required></div></div>
    <button type="submit" class="submit-btn">دفع الآن</button>
</form>`,
    css: `.checkout-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.checkout-form .form-row { display: flex; gap: 10px; }
.checkout-form .form-group { flex: 1; }
.checkout-form input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.checkout-form input:focus { outline: none; border-color: #fff; }
.checkout-form .submit-btn { padding: 14px; background: #fff; color: #0d0d0d; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.checkout-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم الدفع بنجاح!'); });`,
  },
  subscription: {
    title: "اشتراك",
    html: `<form class="subscription-form">
    <input type="email" id="email" placeholder="بريدك الإلكتروني" required>
    <button type="submit" class="submit-btn">اشتراك</button>
</form>`,
    css: `.subscription-form { display: flex; gap: 10px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px; }
.subscription-form input { flex: 1; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.subscription-form input:focus { outline: none; border-color: #71c9ce; }
.subscription-form .submit-btn { padding: 12px 25px; background: #71c9ce; color: #0d0d0d; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.subscription-form').addEventListener('submit', function(e) { e.preventDefault(); alert('شكراً لاشتراكك!'); });`,
  },
  profile: {
    title: "الملف الشخصي",
    html: `<form class="profile-form">
    <div class="form-group"><input type="text" id="name" placeholder="الاسم" required></div>
    <div class="form-group"><input type="email" id="email" placeholder="البريد الإلكتروني" required></div>
    <div class="form-group"><input type="tel" id="phone" placeholder="رقم الهاتف"></div>
    <button type="submit" class="submit-btn">حفظ التغييرات</button>
</form>`,
    css: `.profile-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.profile-form input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.profile-form input:focus { outline: none; border-color: #4caf50; }
.profile-form .submit-btn { padding: 12px; background: #4caf50; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.profile-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم حفظ التغييرات!'); });`,
  },
  settings: {
    title: "الإعدادات",
    html: `<form class="settings-form">
    <label class="setting-item"><input type="checkbox" id="darkMode"><span>الوضع الليلي</span></label>
    <label class="setting-item"><input type="checkbox" id="notifications" checked><span>الإشعارات</span></label>
    <label class="setting-item"><input type="checkbox" id="language"><span>اللغة</span></label>
    <button type="submit" class="submit-btn">حفظ</button>
</form>`,
    css: `.settings-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.settings-form .setting-item { display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer; }
.settings-form input[type="checkbox"] { width: 20px; height: 20px; accent-color: #e040fb; cursor: pointer; }
.settings-form .submit-btn { padding: 12px; background: #e040fb; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; margin-top: 10px; }`,
    js: `document.querySelector('.settings-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم حفظ الإعدادات!'); });`,
  },
  booking: {
    title: "حجز",
    html: `<form class="booking-form">
    <div class="form-group"><input type="text" id="name" placeholder="الاسم" required></div>
    <div class="form-group"><input type="date" id="date" required></div>
    <div class="form-group"><input type="number" id="guests" placeholder="عدد الأشخاص" min="1" required></div>
    <button type="submit" class="submit-btn">تأكيد الحجز</button>
</form>`,
    css: `.booking-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.booking-form input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.booking-form input:focus { outline: none; border-color: #9c27b0; }
.booking-form .submit-btn { padding: 12px; background: #9c27b0; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.booking-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم تأكيد حجزكم!'); });`,
  },
  newsletter: {
    title: "النشرة البريدية",
    html: `<form class="newsletter-form">
    <input type="email" id="email" placeholder="بريدك الإلكتروني" required>
    <select id="category"><option value="">اختر الفئة...</option><option value="news">أخبار</option><option value="offers">عروض</option></select>
    <button type="submit" class="submit-btn">إرسال</button>
</form>`,
    css: `.newsletter-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.newsletter-form input, .newsletter-form select { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.newsletter-form input:focus, .newsletter-form select:focus { outline: none; border-color: #f44336; }
.newsletter-form .submit-btn { padding: 12px; background: #f44336; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.newsletter-form').addEventListener('submit', function(e) { e.preventDefault(); alert('شكراً لاشتراكك في النشرة!'); });`,
  },
  comment: {
    title: "تعليق",
    html: `<form class="comment-form">
    <div class="form-group"><input type="text" id="name" placeholder="اسمك" required></div>
    <div class="form-group"><textarea id="comment" placeholder="اكتب تعليقك" rows="4" required></textarea></div>
    <button type="submit" class="submit-btn">إرسال التعليق</button>
</form>`,
    css: `.comment-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.comment-form input, .comment-form textarea { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; resize: none; }
.comment-form input:focus, .comment-form textarea:focus { outline: none; border-color: #8d6e63; }
.comment-form .submit-btn { padding: 12px; background: #8d6e63; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.comment-form').addEventListener('submit', function(e) { e.preventDefault(); alert('شكراً على تعليقك!'); });`,
  },

  // New Forms 13-24
  reset: {
    title: "استعادة كلمة المرور",
    html: `<form class="reset-form">
    <div class="form-group"><input type="email" id="email" placeholder="بريدك الإلكتروني" required></div>
    <button type="submit" class="submit-btn">إرسال رابط الاستعادة</button>
</form>`,
    css: `.reset-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.reset-form input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.reset-form input:focus { outline: none; border-color: #607d8b; }
.reset-form .submit-btn { padding: 12px; background: #607d8b; color: #fff; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.reset-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم إرسال رابط الاستعادة!'); });`,
  },
  upload: {
    title: "رفع ملف",
    html: `<form class="upload-form">
    <div class="form-group"><input type="file" id="file" required></div>
    <button type="submit" class="submit-btn">رفع الملف</button>
</form>`,
    css: `.upload-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.upload-form input[type="file"] { padding: 12px; border: 2px dashed #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.upload-form .submit-btn { padding: 12px; background: #2ecc71; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.upload-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم رفع الملف!'); });`,
  },
  rating: {
    title: "تقييم",
    html: `<form class="rating-form">
    <div class="form-group"><input type="text" id="name" placeholder="اسمك" required></div>
    <div class="rating-options"><label><input type="radio" name="rating" value="5"> ممتاز</label><label><input type="radio" name="rating" value="4"> جيد جداً</label><label><input type="radio" name="rating" value="3"> جيد</label></div>
    <button type="submit" class="submit-btn">إرسال التقييم</button>
</form>`,
    css: `.rating-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.rating-form input[type="text"] { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.rating-options { display: flex; flex-direction: column; gap: 8px; }
.rating-options label { display: flex; align-items: center; gap: 8px; cursor: pointer; }
.rating-form input[type="radio"] { accent-color: #f1c40f; }
.rating-form .submit-btn { padding: 12px; background: #f1c40f; color: #333; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.rating-form').addEventListener('submit', function(e) { e.preventDefault(); alert('شكراً على تقييمك!'); });`,
  },
  date: {
    title: "اختر التاريخ",
    html: `<form class="date-form">
    <div class="form-group"><input type="date" id="eventDate" required></div>
    <div class="form-group"><input type="text" id="eventName" placeholder="اسم الحدث" required></div>
    <button type="submit" class="submit-btn">تأكيد</button>
</form>`,
    css: `.date-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.date-form input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.date-form input:focus { outline: none; border-color: #3498db; }
.date-form .submit-btn { padding: 12px; background: #3498db; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.date-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم تأكيد التاريخ!'); });`,
  },
  dropdown: {
    title: "اختيار من قائمة",
    html: `<form class="dropdown-form">
    <div class="form-group"><input type="text" id="name" placeholder="اسمك" required></div>
    <div class="form-group"><select id="option" required><option value="">اختر...</option><option value="1">الخيار 1</option><option value="2">الخيار 2</option><option value="3">الخيار 3</option></select></div>
    <button type="submit" class="submit-btn">تأكيد</button>
</form>`,
    css: `.dropdown-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.dropdown-form input, .dropdown-form select { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.dropdown-form input:focus, .dropdown-form select:focus { outline: none; border-color: #e91e63; }
.dropdown-form .submit-btn { padding: 12px; background: #e91e63; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.dropdown-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم التأكيد!'); });`,
  },
  download: {
    title: "تحميل",
    html: `<form class="download-form">
    <div class="form-group"><input type="text" id="url" placeholder="رابط الملف" required></div>
    <button type="submit" class="submit-btn">تحميل</button>
</form>`,
    css: `.download-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.download-form input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.download-form input:focus { outline: none; border-color: #ffeb3b; }
.download-form .submit-btn { padding: 12px; background: #ffeb3b; color: #333; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.download-form').addEventListener('submit', function(e) { e.preventDefault(); alert('جاري التحميل...'); });`,
  },
  quiz: {
    title: "اختبار",
    html: `<form class="quiz-form">
    <div class="form-group"><input type="text" id="name" placeholder="اسمك" required></div>
    <div class="quiz-options"><label><input type="radio" name="answer" value="a"> أ</label><label><input type="radio" name="answer" value="b"> ب</label><label><input type="radio" name="answer" value="c"> ج</label><label><input type="radio" name="answer" value="d"> د</label></div>
    <button type="submit" class="submit-btn">إرسال الإجابة</button>
</form>`,
    css: `.quiz-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.quiz-form input[type="text"] { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.quiz-options { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.quiz-options label { display: flex; align-items: center; gap: 8px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer; }
.quiz-form input[type="radio"] { accent-color: #e74c3c; }
.quiz-form .submit-btn { padding: 12px; background: #e74c3c; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.quiz-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم إرسال إجابتك!'); });`,
  },
  filter: {
    title: "تصفية",
    html: `<form class="filter-form">
    <div class="form-group"><select id="category"><option value="">كل الفئات</option><option value="electronics">إلكترونيات</option><option value="clothing">ملابس</option></select></div>
    <div class="form-group"><select id="price"><option value="">السعر</option><option value="low">منخفض</option><option value="high">مرتفع</option></select></div>
    <button type="submit" class="submit-btn">تصفية</button>
</form>`,
    css: `.filter-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.filter-form select { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.filter-form select:focus { outline: none; border-color: #27ae60; }
.filter-form .submit-btn { padding: 12px; background: #27ae60; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.filter-form').addEventListener('submit', function(e) { e.preventDefault(); alert('جاري التصفية...'); });`,
  },
  calc: {
    title: "حاسبة",
    html: `<form class="calc-form">
    <div class="form-group"><input type="number" id="num1" placeholder="الرقم الأول" required></div>
    <div class="form-group"><input type="number" id="num2" placeholder="الرقم الثاني" required></div>
    <button type="submit" class="submit-btn">احسب</button>
</form>`,
    css: `.calc-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.calc-form input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.calc-form input:focus { outline: none; border-color: #9b59b6; }
.calc-form .submit-btn { padding: 12px; background: #9b59b6; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.calc-form').addEventListener('submit', function(e) { e.preventDefault(); const n1=parseFloat(document.getElementById('num1').value); const n2=parseFloat(document.getElementById('num2').value); alert('النتيجة: ' + (n1+n2)); });`,
  },
  color: {
    title: "اختر لون",
    html: `<form class="color-form">
    <div class="form-group"><input type="text" id="name" placeholder="اسمك" required></div>
    <div class="form-group"><input type="color" id="color" value="#ff0000" required></div>
    <button type="submit" class="submit-btn">حفظ</button>
</form>`,
    css: `.color-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.color-form input[type="text"] { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.color-form input[type="color"] { width: 100%; height: 50px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; cursor: pointer; }
.color-form input:focus { outline: none; border-color: #e74c3c; }
.color-form .submit-btn { padding: 12px; background: #e74c3c; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.color-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم حفظ اللون!'); });`,
  },
  time: {
    title: "اختر الوقت",
    html: `<form class="time-form">
    <div class="form-group"><input type="text" id="event" placeholder="الموعد" required></div>
    <div class="form-group"><input type="time" id="eventTime" required></div>
    <button type="submit" class="submit-btn">تأكيد</button>
</form>`,
    css: `.time-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.time-form input { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.time-form input:focus { outline: none; border-color: #00b4d8; }
.time-form .submit-btn { padding: 12px; background: #00b4d8; color: #0d0d0d; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.time-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم تأكيد الوقت!'); });`,
  },
  range: {
    title: "مستوى",
    html: `<form class="range-form">
    <div class="form-group"><input type="text" id="name" placeholder="اسمك" required></div>
    <div class="form-group"><input type="range" id="level" min="1" max="100" value="50"></div>
    <button type="submit" class="submit-btn">إرسال</button>
</form>`,
    css: `.range-form { display: flex; flex-direction: column; gap: 15px; padding: 20px; }
.range-form input[type="text"] { width: 100%; padding: 12px 15px; border: 2px solid #444; border-radius: 8px; background: #0d0d0d; color: #fff; }
.range-form input[type="range"] { width: 100%; height: 30px; accent-color: #636e72; cursor: pointer; }
.range-form input:focus { outline: none; border-color: #636e72; }
.range-form .submit-btn { padding: 12px; background: #636e72; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }`,
    js: `document.querySelector('.range-form').addEventListener('submit', function(e) { e.preventDefault(); alert('تم إرسال المستوى!'); });`,
  },
};

// DOM Elements
const pageBtns = document.querySelectorAll(".page-btn");
const pages = document.querySelectorAll(".page");
const openBtns = document.querySelectorAll(".open-btn");
const getCodeBtns = document.querySelectorAll(".get-code-btn");
const formModal = document.getElementById("formModal");
const codeModal = document.getElementById("codeModal");
const modalFormContainer = document.getElementById("modalFormContainer");
const codeDisplay = document.getElementById("codeDisplay");
const copyBtn = document.getElementById("copyCode");
const codeTabs = document.querySelectorAll(".code-tab");
const closeModal = document.querySelector(".close-modal");
const closeCodeModal = document.querySelector(".close-code-modal");

let currentFormType = "login";
let currentCodeType = "html";

// Pagination
pageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const pageNum = btn.dataset.page;
    pageBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    pages.forEach((page) => {
      page.classList.remove("active");
      if (page.dataset.page === pageNum) {
        page.classList.add("active");
      }
    });
  });
});

// Open Form Modal
openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const formType = btn.dataset.form;
    const template = formTemplates[formType];
    modalFormContainer.innerHTML = `<h2 style="text-align:center;margin-bottom:20px;color:#00d9ff;">${template.title}</h2>${template.html}`;
    const style = document.createElement("style");
    style.textContent = template.css;
    modalFormContainer.appendChild(style);
    const script = document.createElement("script");
    script.textContent = template.js;
    modalFormContainer.appendChild(script);
    formModal.classList.add("active");
  });
});

// Get Code Modal
getCodeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFormType = btn.dataset.form;
    currentCodeType = "html";
    updateCodeDisplay();
    codeModal.classList.add("active");
  });
});

// Update Code Display
function updateCodeDisplay() {
  const template = formTemplates[currentFormType];
  let code = "";
  switch (currentCodeType) {
    case "html":
      code = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.title}</title>
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
${template.css}
    </style>
</head>
<body>
    ${template.html}
    <script>
${template.js}
    </script>
</body>
</html>`;
      break;
    case "css":
      code = template.css;
      break;
    case "js":
      code = template.js;
      break;
  }
  codeDisplay.textContent = code;
  codeTabs.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.dataset.type === currentCodeType) tab.classList.add("active");
  });
}

// Code Tabs
codeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentCodeType = tab.dataset.type;
    updateCodeDisplay();
  });
});

// Copy Code
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(codeDisplay.textContent).then(() => {
    copyBtn.textContent = "تم النسخ!";
    setTimeout(() => {
      copyBtn.textContent = "نسخ الكود";
    }, 2000);
  });
});

// Close Modals
closeModal.addEventListener("click", () =>
  formModal.classList.remove("active"),
);
closeCodeModal.addEventListener("click", () =>
  codeModal.classList.remove("active"),
);
formModal.addEventListener("click", (e) => {
  if (e.target === formModal) formModal.classList.remove("active");
});
codeModal.addEventListener("click", (e) => {
  if (e.target === codeModal) codeModal.classList.remove("active");
});

// Navbar Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
