// Card Data - Complete HTML Template and CSS for each card
const cardData = {
  1: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Your CSS File -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-1">
    <div class="card-icon"><i class="fas fa-rocket"></i></div>
    <h3>🚀 إطلاق جديد</h3>
    <p>اكتشف أحدث منتجاتنا المتميزة التي ستغير طريقة عملك</p>
    <button>اطلب الآن</button>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-1 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: linear-gradient(145deg, #ffffff, #f0f0f0);
    color: #333;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 35px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-1:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-1 .card-icon {
    font-size: 50px;
    color: #4a90d9;
    margin-bottom: 20px;
}

.card-1 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-1 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-1 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(135deg, #4a90d9, #357abd);
    color: white;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}

.card-1 button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}`,
  },
  2: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-2">
    <div class="card-icon"><i class="fas fa-gift"></i></div>
    <h3>🎁 عرض خاص</h3>
    <p>خصم 50% على جميع المنتجات لمدة أيام محدودة</p>
    <button>احصل على العرض</button>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-2 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: linear-gradient(145deg, #ff6b6b, #ee5a5a);
    color: white;
    border: 4px solid #fff;
    box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
    padding: 35px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-2:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-2 .card-icon {
    font-size: 50px;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.card-2 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-2 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-2 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: white;
    color: #ff6b6b;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}

.card-2 button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}`,
  },
  3: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-3">
    <div class="card-badge">جديد</div>
    <div class="card-icon"><i class="fas fa-star"></i></div>
    <h3>⭐ منتج مميز</h3>
    <p>الأكثر مبيعاً هذا الشهر - جودة استثنائية</p>
    <button>تصفح المزيد</button>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-3 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    padding: 35px 30px 50px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
    position: relative;
}

.card-3:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-3 .card-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #ff6b6b;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
}

.card-3 .card-icon {
    font-size: 50px;
    color: #ffd700;
    margin-bottom: 20px;
}

.card-3 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-3 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-3 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: white;
    color: #667eea;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}

.card-3 button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}`,
  },
  4: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-4">
    <div class="card-icon"><i class="fas fa-crown"></i></div>
    <h3>👑 باقة VIP</h3>
    <p>العضوية الحصرية واحصل على مميزات لا نهائية</p>
    <button>اشترك الآن</button>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-4 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: linear-gradient(145deg, #1e1e2f, #2d2d44);
    color: white;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 215, 0, 0.3);
    padding: 35px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-4:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-4 .card-icon {
    font-size: 50px;
    color: #ffd700;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
    margin-bottom: 20px;
}

.card-4 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-4 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-4 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(135deg, #ffd700, #ffaa00);
    color: #1e1e2f;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}

.card-4 button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}`,
  },
  5: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-5">
    <div class="card-icon"><i class="fas fa-leaf"></i></div>
    <h3>🌿 صديق للبيئة</h3>
    <p>منتجات طبيعية 100% آمنة على صحتك والبيئة</p>
    <button>اعرف المزيد</button>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-5 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 35px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-5:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-5 .card-icon {
    font-size: 50px;
    color: #00d4aa;
    margin-bottom: 20px;
}

.card-5 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-5 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-5 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(135deg, #00d4aa, #00a885);
    color: white;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}

.card-5 button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}`,
  },
  6: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-6">
    <div class="card-stripe"></div>
    <div class="card-icon"><i class="fas fa-bolt"></i></div>
    <h3>⚡ سرعة البرق</h3>
    <p>توصيل خلال ساعة واحدة - طلبك في بابك</p>
    <button>اطلب سريعاً</button>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-6 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: linear-gradient(145deg, #4ecdc4, #44a08d);
    color: white;
    position: relative;
    overflow: hidden;
    padding: 35px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-6::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
}

.card-6:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-6 .card-icon {
    font-size: 50px;
    color: #2c3e50;
    margin-bottom: 20px;
}

.card-6 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-6 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-6 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: white;
    color: #4ecdc4;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}

.card-6 button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}`,
  },
  7: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-7">
    <div class="card-icon"><i class="fas fa-shield-alt"></i></div>
    <h3>🛡️ أمان تام</h3>
    <p>ضمان 5 سنوات على جميع منتجاتنا - اطمئن</p>
    <button>شاهد الضمان</button>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-7 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: linear-gradient(145deg, #a8edea, #fed6e3);
    color: #333;
    border: 3px solid transparent;
    background-clip: padding-box;
    position: relative;
    padding: 35px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-7::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
    border-radius: 23px;
    z-index: -1;
}

.card-7:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-7 .card-icon {
    font-size: 50px;
    color: #667eea;
    margin-bottom: 20px;
}

.card-7 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-7 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-7 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}

.card-7 button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}`,
  },
  8: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-8">
    <div class="card-icon"><i class="fas fa-magic"></i></div>
    <h3>✨ سحر خاص</h3>
    <p>تجربة تسوق سحرية مع عروضنا الحصرية</p>
    <button>ابدأ التجربة</button>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-8 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: #0d0d0d;
    color: white;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1);
    border: 1px solid rgba(0, 255, 255, 0.5);
    padding: 35px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-8:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-8 .card-icon {
    font-size: 50px;
    color: #00ffff;
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
    animation: neonPulse 2s infinite;
    margin-bottom: 20px;
}

@keyframes neonPulse {
    0%, 100% { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; }
    50% { text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff; }
}

.card-8 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-8 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-8 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: transparent;
    color: #00ffff;
    border: 2px solid #00ffff;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}

.card-8 button:hover {
    background: #00ffff;
    color: #0d0d0d;
}`,
  },
  9: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-9">
    <div class="card-top">
        <div class="card-icon"><i class="fas fa-fire"></i></div>
    </div>
    <div class="card-bottom">
        <h3>🔥 الأكثر شعبية</h3>
        <p>انضم لألف عميل سعيد - رضاهم يتحدث</p>
        <button>انضم لهم</button>
    </div>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-9 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: transparent;
    padding: 0;
    color: white;
    overflow: hidden;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-9:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-9 .card-top {
    background: linear-gradient(135deg, #ff9a56, #ff6b6b);
    padding: 30px;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
    padding-bottom: 50px;
}

.card-9 .card-bottom {
    background: linear-gradient(135deg, #2d2d44, #1a1a2e);
    padding: 30px;
    margin-top: -30px;
}

.card-9 .card-icon {
    font-size: 50px;
    color: white;
    margin-bottom: 20px;
}

.card-9 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-9 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-9 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(135deg, #ff9a56, #ff6b6b);
    color: white;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}`,
  },
  10: {
    html: `<!-- Complete HTML Template -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card card-10">
    <div class="card-content">
        <div class="card-icon"><i class="fas fa-gem"></i></div>
        <h3>💎 قيمة استثنائية</h3>
        <p>جودة عالية بسعر لا يُصدق - وفر أكثر</p>
        <button>تسوق الآن</button>
    </div>
</div>

</body>
</html>`,
    css: `/* Card Styles */
.card-10 {
    width: 350px;
    height: auto;
    min-height: 320px;
    background: linear-gradient(rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
    color: white;
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    padding: 35px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s ease;
    font-family: 'Cairo', sans-serif;
    margin: 20px;
}

.card-10:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-10 .card-icon {
    font-size: 50px;
    color: #ffd700;
    margin-bottom: 20px;
}

.card-10 h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
}

.card-10 p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    opacity: 0.9;
}

.card-10 button {
    padding: 14px 35px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: white;
    color: #667eea;
    font-family: 'Cairo', sans-serif;
    transition: all 0.3s ease;
}`,
  },
};

// For cards 11-40, use card 1 as template
for (let i = 11; i <= 40; i++) {
  cardData[i] = cardData[1];
}

// Function to show code modal
function showCode(cardNumber) {
  const modal = document.getElementById("codeModal");
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");
  const modalTitle = document.getElementById("modalTitle");

  const data = cardData[cardNumber] || cardData[1];

  modalTitle.textContent = `Card ${cardNumber} - Full Code (Width: 350px, Height: auto)`;
  htmlCode.textContent = data.html;
  cssCode.textContent = data.css;

  modal.style.display = "flex";
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById("codeModal");
  modal.style.display = "none";
}

// Function to copy code to clipboard
function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("codeModal");
  if (event.target == modal) {
    closeModal();
  }
};

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!menuBtn.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("active");
      }
    });
  }
});
