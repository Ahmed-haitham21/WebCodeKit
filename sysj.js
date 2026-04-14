// بيانات الأنظمة الـ 12
const systemsData = {
  1: {
    name: "نظام تسجيل دخول",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام تسجيل دخول</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-box">
        <h2>تسجيل الدخول</h2>
        <form>
            <input type="text" placeholder="اسم المستخدم">
            <input type="password" placeholder="كلمة المرور">
            <button type="button">دخول</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.login-box {
    width: 300px;
    padding: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: #fff;
    margin: 50px auto;
}

.login-box h2 {
    text-align: center;
    margin-bottom: 25px;
}

.login-box input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.9);
}

.login-box button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: #fff;
    color: #667eea;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s;
}

.login-box button:hover {
    transform: scale(1.02);
}`,
    js: `// لا يوجد JavaScript مطلوب`,
  },
  2: {
    name: "نظام البطاقات",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام البطاقات</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <div class="profile-img"></div>
        <h3>الاسم</h3>
        <p>وصف قصير</p>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #f5f5f5;
    min-height: 100vh;
}

.card {
    width: 250px;
    padding: 30px;
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    border-radius: 20px;
    text-align: center;
    color: #333;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.profile-img {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    margin: 0 auto 20px;
    border: 4px solid #fff;
}

.card h3 {
    margin-bottom: 10px;
}`,
    js: `// لا يوجد JavaScript مطلوب`,
  },
  3: {
    name: "نظام القائمة",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام القائمة</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="menu">
        <div class="menu-item">الرئيسية</div>
        <div class="menu-item">من نحن</div>
        <div class="menu-item">خدماتنا</div>
        <div class="menu-item">اتصل بنا</div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 30px;
    background: #2d3436;
    min-height: 100vh;
}

.menu {
    background: linear-gradient(135deg, #2d3436 0%, #636e72 100%);
    padding: 15px 25px;
    border-radius: 10px;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.menu-item {
    color: #fff;
    padding: 12px 25px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.menu-item:hover {
    background: rgba(255, 255, 255, 0.3);
}`,
    js: `// JavaScript للقائمة
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-item').forEach(i => i.style.background = 'rgba(255, 255, 255, 0.1)');
        this.style.background = 'rgba(255, 255, 255, 0.3)';
    });
});`,
  },
  4: {
    name: "نظام الآلة الحاسبة",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الآلة الحاسبة</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" class="calc-display" readonly>
        <div class="calc-buttons">
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('+')">+</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('-')">-</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('*')">*</button>
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="calculate()">=</button>
            <button onclick="appendToDisplay('/')">/</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #dfe6e9;
}

.calculator {
    background: #2d3436;
    padding: 20px;
    border-radius: 15px;
    width: 250px;
}

.calc-display {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    border: none;
    border-radius: 8px;
    text-align: left;
    font-size: 1.5rem;
    background: #fff;
}

.calc-buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
}

.calc-buttons button {
    padding: 15px;
    border: none;
    border-radius: 8px;
    background: #636e72;
    color: #fff;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.2s;
}

.calc-buttons button:hover {
    background: #00cec9;
}`,
    js: `let display = document.querySelector('.calc-display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'خطأ';
    }
}`,
  },
  5: {
    name: "نظام قائمة المهام",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>قائمة المهام</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="todo-list">
        <h3>قائمة المهام</h3>
        <input type="text" id="taskInput" placeholder="مهمة جديدة">
        <ul id="taskList">
            <li>مهمة 1 <span class="delete" onclick="this.parentElement.remove()">×</span></li>
            <li>مهمة 2 <span class="delete" onclick="this.parentElement.remove()">×</span></li>
        </ul>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.todo-list {
    width: 350px;
    padding: 20px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
}

.todo-list h3 {
    color: #333;
    margin-bottom: 15px;
    text-align: center;
}

.todo-list input {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
}

.todo-list ul {
    list-style: none;
}

.todo-list li {
    padding: 12px;
    background: #f5f5f5;
    margin-bottom: 8px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.delete {
    color: #ff4757;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
}`,
    js: `const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = this.value + ' <span class="delete" onclick="this.parentElement.remove()">×</span>';
        taskList.appendChild(li);
        this.value = '';
    }
});`,
  },
  6: {
    name: "نظام نموذج الاتصال",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نموذج اتصال</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form-box">
        <h3>نموذج اتصال</h3>
        <input type="text" placeholder="الاسم">
        <input type="email" placeholder="البريد الإلكتروني">
        <textarea placeholder="الرسالة"></textarea>
        <button>إرسال</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.form-box {
    width: 350px;
    padding: 25px;
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    border-radius: 15px;
    margin: 0 auto;
}

.form-box h3 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

.form-box input,
.form-box textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-family: inherit;
}

.form-box textarea {
    height: 100px;
    resize: none;
}

.form-box button {
    width: 100%;
    padding: 12px;
    background: #6c5ce7;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
}

.form-box button:hover {
    background: #5b4cc4;
}`,
    js: `// JavaScript للنموذج
document.querySelector('.form-box button').addEventListener('click', function() {
    alert('تم إرسال النموذج بنجاح!');
});`,
  },
  7: {
    name: "نظام معرض الصور",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>معرض الصور</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="gallery">
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 15px;
    width: 300px;
    margin: 0 auto;
}

.gallery-item {
    width: 100%;
    aspect-ratio: 1;
    background: linear-gradient(135deg, #ff6b6b, #feca57);
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
}

.gallery-item:hover {
    transform: scale(1.05);
}`,
    js: `// JavaScript لمعرض الصور
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', function() {
        alert('تم النقر على صورة ' + (index + 1));
    });
});`,
  },
  8: {
    name: "نظام القائمة الجانبية",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>القائمة الجانبية</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="sidebar">
        <div class="sidebar-item active">Dashboard</div>
        <div class="sidebar-item">Users</div>
        <div class="sidebar-item">Settings</div>
        <div class="sidebar-item">Logout</div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #2d3436;
    min-height: 100vh;
}

.sidebar {
    width: 200px;
    background: linear-gradient(180deg, #434343 0%, #000000 100%);
    border-radius: 15px;
    padding: 20px 0;
    margin: 30px;
}

.sidebar-item {
    color: #fff;
    padding: 15px 25px;
    cursor: pointer;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.sidebar-item:hover,
.sidebar-item.active {
    background: rgba(255, 255, 255, 0.1);
    border-right-color: #00cec9;
}`,
    js: `// JavaScript للقائمة الجانبية
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});`,
  },
  9: {
    name: "نظام الجداول",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الجداول</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="table-box">
        <table>
            <thead>
                <tr><th>الاسم</th><th>العمر</th><th>البلد</th></tr>
            </thead>
            <tbody>
                <tr><td>أحمد</td><td>25</td><td>مصر</td></tr>
                <tr><td>محمد</td><td>30</td><td>السعودية</td></tr>
                <tr><td>علي</td><td>28</td><td>الإمارات</td></tr>
            </tbody>
        </table>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.table-box {
    width: 100%;
    max-width: 500px;
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 15px;
    text-align: center;
}

th {
    background: #6c5ce7;
    color: #fff;
}

td {
    background: #f5f5f5;
    border-bottom: 1px solid #ddd;
}

tr:hover td {
    background: #e8e8e8;
}`,
    js: `// JavaScript للجدول
document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('click', function() {
        const cells = this.querySelectorAll('td');
        alert('الاسم: ' + cells[0].textContent);
    });
});`,
  },
  10: {
    name: "نظام النافذة المنبثقة",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>النافذة المنبثقة</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="modal-example">
        <button id="openModal">اضغط هنا</button>
        <div class="modal" id="myModal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>مرحباً!</h2>
                <p>هذه نافذة منبثقة جميلة</p>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.modal-example {
    padding: 50px;
    text-align: center;
}

#openModal {
    padding: 15px 40px;
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.1rem;
    color: #333;
    transition: transform 0.3s;
}

#openModal:hover {
    transform: scale(1.05);
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
}

.close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 25px;
    cursor: pointer;
}`,
    js: `const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const span = document.querySelector('.close');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}`,
  },
  11: {
    name: "نظام السلايدر",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>السلايدر</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="slider-container">
        <div class="slider">
            <div class="slide active">1</div>
            <div class="slide">2</div>
            <div class="slide">3</div>
        </div>
        <div class="dots">
            <span class="dot active" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.slider-container {
    width: 350px;
    margin: 0 auto;
}

.slider {
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    opacity: 0;
    transition: opacity 0.5s;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.slide:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.slide:nth-child(3) {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.slide.active {
    opacity: 1;
}

.dots {
    text-align: center;
    margin-top: 15px;
}

.dot {
    height: 12px;
    width: 12px;
    margin: 0 5px;
    background: #bbb;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
}

.dot.active {
    background: #6c5ce7;
}`,
    js: `let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

// تغيير تلقائي كل 3 ثوان
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);`,
  },
  12: {
    name: "نظام البطاقات التسعيرية",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>البطاقات التسعيرية</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="pricing-container">
        <div class="price-card">
            <h3>الأساسي</h3>
            <div class="price">$9<span>/شهر</span></div>
            <ul>
                <li>✓ مستخدم واحد</li>
                <li>✓ 10GB تخزين</li>
                <li>✓ دعم فني</li>
            </ul>
            <button>اشترك الآن</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.pricing-container {
    padding: 30px;
}

.price-card {
    width: 300px;
    padding: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.price-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.price {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.price span {
    font-size: 1rem;
}

.price-card ul {
    list-style: none;
    text-align: right;
    margin-bottom: 25px;
}

.price-card li {
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.price-card button {
    width: 100%;
    padding: 15px;
    background: #fff;
    color: #667eea;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s;
}

.price-card button:hover {
    transform: scale(1.05);
}`,
    js: `// JavaScript لبطاقات التسعير
document.querySelector('.price-card button').addEventListener('click', function() {
    alert('شكراً لاهتمامك! سيتم توجيهك للاشتراك.');
});`,
  },
  13: {
    name: "نظام البحث",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام البحث</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="search-box">
        <input type="text" placeholder="بحث...">
        <button><i class="fa-solid fa-search"></i></button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-box {
    display: flex;
    gap: 5px;
    background: #fff;
    padding: 5px;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.search-box input {
    padding: 12px 20px;
    border: none;
    border-radius: 25px;
    width: 200px;
    font-size: 1rem;
    outline: none;
}

.search-box button {
    padding: 12px 20px;
    background: #6c5ce7;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
}

.search-box button:hover {
    background: #5b4cc4;
}`,
    js: `// JavaScript للبحث
document.querySelector('.search-box button').addEventListener('click', function() {
    const query = document.querySelector('.search-box input').value;
    if (query) {
        alert('جاري البحث عن: ' + query);
    }
});`,
  },
  14: {
    name: "نظام الطقس",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام الطقس</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="weather-widget">
        <div class="weather-icon"><i class="fa-solid fa-sun"></i></div>
        <div class="weather-temp">25°</div>
        <div class="weather-city">القاهرة</div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.weather-widget {
    background: linear-gradient(135deg, #74b9ff, #0984e3);
    padding: 30px 50px;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.weather-icon {
    font-size: 3rem;
    margin-bottom: 15px;
}

.weather-temp {
    font-size: 3.5rem;
    font-weight: bold;
}

.weather-city {
    font-size: 1.2rem;
    margin-top: 5px;
}`,
    js: `// JavaScript للطقس
// يمكن إضافة تحديث تلقائي للطقس هنا`,
  },
  15: {
    name: "نظام الساعة",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام الساعة</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="clock-widget">
        <div class="time">12:00</div>
        <div class="date">الثلاثاء</div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.clock-widget {
    background: #2d3436;
    padding: 30px 50px;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.time {
    font-size: 4rem;
    font-weight: bold;
    font-family: monospace;
}

.date {
    font-size: 1.2rem;
    color: #636e72;
    margin-top: 10px;
}`,
    js: `// JavaScript للساعة
function updateClock() {
    const now = new Date();
    const timeEl = document.querySelector('.time');
    const dateEl = document.querySelector('.date');
    
    const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'Saturday'];
    const arabicDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    timeEl.textContent = hours + ':' + minutes;
    dateEl.textContent = arabicDays[now.getDay()];
}

setInterval(updateClock, 1000);
updateClock();`,
  },
  16: {
    name: "نظام شريط التقدم",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شريط التقدم</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="progress-container">
        <div class="progress-bar">
            <div class="progress" style="width: 75%"></div>
        </div>
        <p class="progress-text">75% مكتمل</p>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress-container {
    width: 300px;
    text-align: center;
}

.progress-bar {
    width: 100%;
    height: 25px;
    background: #dfe6e9;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
}

.progress {
    height: 100%;
    background: linear-gradient(135deg, #00b894, #00cec9);
    border-radius: 15px;
    transition: width 0.5s ease;
}

.progress-text {
    margin-top: 15px;
    color: #2d3436;
    font-weight: bold;
}`,
    js: `// JavaScript لشريط التقدم
// يمكن إضافة تحريك هنا`,
  },
  17: {
    name: "نظام التقييم",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام التقييم</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="rating">
        <span class="star" data-value="1">★</span>
        <span class="star" data-value="2">★</span>
        <span class="star" data-value="3">★</span>
        <span class="star" data-value="4">★</span>
        <span class="star" data-value="5">★</span>
    </div>
    <p class="rating-text">4 من 5</p>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.rating {
    display: flex;
    gap: 10px;
}

.star {
    font-size: 2.5rem;
    color: #dfe6e9;
    cursor: pointer;
    transition: color 0.3s;
}

.star:hover,
.star.active {
    color: #fdcb6e;
}

.rating-text {
    margin-top: 15px;
    color: #2d3436;
    font-weight: bold;
}`,
    js: `// JavaScript للتقييم
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    star.addEventListener('click', function() {
        const value = this.dataset.value;
        stars.forEach((s, i) => {
            s.classList.toggle('active', i < value);
        });
        document.querySelector('.rating-text').textContent = value + ' من 5';
    });
});`,
  },
  18: {
    name: "نظام الإشعارات",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام الإشعارات</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="notification">
        <i class="fa-solid fa-bell"></i>
        <span class="badge">3</span>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.notification {
    position: relative;
    font-size: 3rem;
    color: #2d3436;
    cursor: pointer;
}

.badge {
    position: absolute;
    top: -5px;
    right: -10px;
    background: #ff4757;
    color: #fff;
    font-size: 0.8rem;
    padding: 5px 10px;
    border-radius: 50%;
    font-weight: bold;
}`,
    js: `// JavaScript للإشعارات
document.querySelector('.notification').addEventListener('click', function() {
    const badge = this.querySelector('.badge');
    if (badge) {
        badge.textContent = '0';
    }
    alert('تم عرض جميع الإشعارات!');
});`,
  },
  19: {
    name: "نظام التبويبات",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام التبويبات</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="tabs">
        <div class="tab active" data-tab="1">تبويب 1</div>
        <div class="tab" data-tab="2">تبويب 2</div>
        <div class="tab" data-tab="3">تبويب 3</div>
    </div>
    <div class="tab-content">
        <div class="tab-pane active">المحتوى الأول</div>
        <div class="tab-pane">المحتوى الثاني</div>
        <div class="tab-pane">المحتوى الثالث</div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
}

.tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.tab {
    padding: 12px 30px;
    background: #dfe6e9;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
}

.tab.active {
    background: #6c5ce7;
    color: #fff;
}

.tab-content {
    background: #fff;
    padding: 30px;
    border-radius: 0 10px 10px 10px;
}

.tab-pane {
    display: none;
}

.tab-pane.active {
    display: block;
}`,
    js: `// JavaScript للتبويبات
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        
        this.classList.add('active');
        document.querySelector('.tab-pane:nth-child(' + tabId + ')').classList.add('active');
    });
});`,
  },
  20: {
    name: "نظام المسارات",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام المسارات</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="breadcrumbs">
        <a href="#">الرئيسية</a>
        <span>/</span>
        <a href="#">المنتجات</a>
        <span>/</span>
        <span>التفاصيل</span>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.breadcrumbs {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    background: #fff;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.breadcrumbs a {
    color: #6c5ce7;
    text-decoration: none;
    transition: color 0.3s;
}

.breadcrumbs a:hover {
    color: #5b4cc4;
}

.breadcrumbs span {
    color: #636e72;
}`,
    js: `// JavaScript للمسارات
document.querySelectorAll('.breadcrumbs a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('تم النقر على: ' + this.textContent);
    });
});`,
  },
  21: {
    name: "نظام التلميحات",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام التلميحات</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="tooltip-container">
        <button class="tooltip-btn">مرر الماوس</button>
        <span class="tooltip-text">هذا تلميح!</span>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tooltip-container {
    position: relative;
    display: inline-block;
}

.tooltip-btn {
    padding: 15px 40px;
    background: #6c5ce7;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
}

.tooltip-btn:hover {
    background: #5b4cc4;
}

.tooltip-text {
    visibility: hidden;
    background: #2d3436;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip-text::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #2d3436 transparent transparent transparent;
}

.tooltip-container:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
}`,
    js: `// JavaScript للتلميحات
// CSS يوفر التلميح تلقائياً`,
  },
  22: {
    name: "نظام التواصل الاجتماعي",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>التواصل الاجتماعي</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="social-icons">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-icons {
    display: flex;
    gap: 20px;
}

.social-icons a {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    color: #2d3436;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-icons a:hover {
    transform: translateY(-5px);
}

.social-icons a:nth-child(1):hover {
    background: #1877f2;
    color: #fff;
}

.social-icons a:nth-child(2):hover {
    background: #1da1f2;
    color: #fff;
}

.social-icons a:nth-child(3):hover {
    background: #e4405f;
    color: #fff;
}

.social-icons a:nth-child(4):hover {
    background: #0077b5;
    color: #fff;
}`,
    js: `// JavaScript للتواصل الاجتماعي
document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('تم النقر على رابط التواصل الاجتماعي');
    });
});`,
  },
  23: {
    name: "نظام الخطوات",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام الخطوات</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="stepper">
        <div class="step active">1</div>
        <div class="step active">2</div>
        <div class="step">3</div>
        <div class="step">4</div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.stepper {
    display: flex;
    align-items: center;
    gap: 10px;
}

.step {
    width: 50px;
    height: 50px;
    background: #dfe6e9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: #636e72;
    position: relative;
}

.step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    width: 30px;
    height: 3px;
    background: #dfe6e9;
    z-index: 1;
}

.step.active {
    background: #6c5ce7;
    color: #fff;
}

.step.active:not(:last-child)::after {
    background: #6c5ce7;
}`,
    js: `// JavaScript للخطوات
document.querySelectorAll('.step').forEach((step, index) => {
    step.addEventListener('click', function() {
        const steps = document.querySelectorAll('.step');
        steps.forEach((s, i) => {
            s.classList.toggle('active', i <= index);
        });
    });
});`,
  },
  24: {
    name: "نظام الصور الشخصية",
    html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الصور الشخصية</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="avatar-group">
        <div class="avatar">أ</div>
        <div class="avatar">م</div>
        <div class="avatar">ع</div>
        <div class="avatar more">+2</div>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 50px;
    background: #dfe6e9;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar-group {
    display: flex;
}

.avatar {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    border: 3px solid #fff;
    margin-left: -15px;
    cursor: pointer;
    transition: transform 0.3s;
}

.avatar:first-child {
    margin-left: 0;
}

.avatar:hover {
    transform: scale(1.1);
    z-index: 10;
}

.avatar.more {
    background: #636e72;
    font-size: 1rem;
}`,
    js: `// JavaScript للصور الشخصية
document.querySelectorAll('.avatar').forEach(avatar => {
    avatar.addEventListener('click', function() {
        alert('تم النقر على المستخدم');
    });
});`,
  },
};

// فتح النظام
function openSystem(id) {
  const system = systemsData[id];
  const viewContainer = document.getElementById("systemView");
  viewContainer.innerHTML = `
        <style>${system.css}</style>
        ${system.html}
        <script>${system.js}<\/script>
    `;
  document.getElementById("viewModal").style.display = "flex";
}

// إغلاق نافذة العرض
function closeModal() {
  document.getElementById("viewModal").style.display = "none";
}

// عرض الكود
let currentSystemCode = null;
let currentTab = "html";

function getCode(id) {
  currentSystemCode = systemsData[id];
  currentTab = "html";
  document.getElementById("codeTitle").textContent =
    "كود - " + currentSystemCode.name;
  updateCodeDisplay();
  document.getElementById("codeModal").style.display = "flex";
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelector(".tab-btn").classList.add("active");
}

function showCode(type) {
  currentTab = type;
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  updateCodeDisplay();
}

function updateCodeDisplay() {
  const output = document.getElementById("codeOutput");
  if (currentTab === "html") {
    output.textContent = currentSystemCode.html;
  } else if (currentTab === "css") {
    output.textContent = currentSystemCode.css;
  } else if (currentTab === "js") {
    output.textContent = currentSystemCode.js;
  }
}

// نسخ الكود
function copyCode() {
  const code = document.getElementById("codeOutput").textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("تم نسخ الكود!");
  });
}

// إغلاق نافذة الكود
function closeCodeModal() {
  document.getElementById("codeModal").style.display = "none";
}

// إغلاق عند النقر خارج النافذة
window.onclick = function (event) {
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("code-modal")
  ) {
    event.target.style.display = "none";
  }
};
