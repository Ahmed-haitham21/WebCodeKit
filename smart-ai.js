/* =====================================================
   WEBCODEKIT — AI ASSISTANT  smart-ai.js
   Demo mode with 8 built-in templates.
   API-ready: set AI_CONFIG.useAPI = true + apiKey
   ===================================================== */
"use strict";

/* ── CONFIG ─────────────────────────────────────────── */
/* المفتاح محفوظ بأمان على السيرفر (server.js) في ملف .env
   ومش ظاهر للمتصفح خالص. الموقع والسيرفر دلوقتي مدمجين على
   نفس الدومين، فمسار الـ API نسبي تلقائياً ("/api/..."). */
const AI_CONFIG = {
  useAPI:     true,   // true = استخدام الذكاء الحقيقي عبر السيرفر
  backendUrl: ""      // فاضي = نفس الدومين الحالي (مفيش حاجة تتغيّر هنا)
};

/* ── TEMPLATES ──────────────────────────────────────── */
const TEMPLATES = [
  /* BUTTON */
  {
    keywords: ["button","btn","زر","كليك","ضغط"],
    exclude:  ["login","form","تسجيل","register","signup"],
    name: "Stylish Button",
    html: `<div class="demo-wrap">
  <button class="demo-btn primary-btn">
    <span>Get Started</span>
    <i class="arrow fas fa-arrow-right"></i>
  </button>
  <button class="demo-btn outline-btn">Learn More</button>
  <button class="demo-btn ghost-btn">
    <i class="fas fa-heart"></i> Like
  </button>
</div>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f1419; font-family: 'Segoe UI', sans-serif; }

.demo-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  padding: 30px;
}

/* Shared base */
.demo-btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 0.94rem;
  font-weight: 700;
  font-family: 'Segoe UI', sans-serif;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.28s ease;
  position: relative;
  overflow: hidden;
}

.demo-btn::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
  transition: left 0.44s ease;
}
.demo-btn:hover::after { left: 100%; }

/* Primary */
.primary-btn {
  background: rgb(36, 75, 114);
  color: #fff;
  box-shadow: 0 4px 16px rgba(36,75,114,0.4);
}
.primary-btn:hover {
  background: rgb(67, 136, 207);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(67,136,207,0.45);
}
.primary-btn .arrow { transition: transform 0.25s; }
.primary-btn:hover .arrow { transform: translateX(4px); }

/* Outline */
.outline-btn {
  background: transparent;
  color: rgb(67, 136, 207);
  border-color: rgb(67, 136, 207);
}
.outline-btn:hover {
  background: rgb(67, 136, 207);
  color: #fff;
  transform: translateY(-2px);
}

/* Ghost */
.ghost-btn {
  background: rgba(255,255,255,0.05);
  color: #e2e8f0;
  border-color: rgba(255,255,255,0.12);
}
.ghost-btn:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.25);
  transform: translateY(-2px);
}
.ghost-btn i { color: #f43f5e; }`,
    js: ""
  },

  /* PRODUCT CARD */
  {
    keywords: ["product card","product","منتج","بطاقة منتج","card product","item card"],
    name: "Product Card",
    html: `<div class="product-card">
  <div class="product-badge">New</div>
  <div class="product-img-wrap">
    <img src="https://via.placeholder.com/280x160/244b72/ffffff?text=Product" alt="Product">
    <button class="product-fav" title="Wishlist">♡</button>
  </div>
  <div class="product-body">
    <span class="product-cat">Electronics</span>
    <h3 class="product-name">Premium Wireless Headphones</h3>
    <p class="product-desc">Crystal-clear sound with 30-hour battery life and noise cancellation.</p>
    <div class="product-rating">
      <span>★★★★★</span> <small>(128 reviews)</small>
    </div>
    <div class="product-footer">
      <div>
        <span class="price-new">$49.99</span>
        <span class="price-old">$79.99</span>
      </div>
      <button class="product-cart-btn">Add to Cart</button>
    </div>
  </div>
</div>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f1419; display: flex; justify-content: center; padding: 20px; font-family: 'Segoe UI', sans-serif; }

.product-card {
  position: relative;
  background: #1e293b;
  border-radius: 14px;
  overflow: hidden;
  width: 280px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.28);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(67,136,207,0.22);
}

.product-badge {
  position: absolute;
  top: 12px; left: 12px;
  background: rgb(36, 75, 114);
  color: #fff;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 700;
  z-index: 1;
}

.product-img-wrap { position: relative; }
.product-img-wrap img { width: 100%; height: 160px; object-fit: cover; display: block; }

.product-fav {
  position: absolute;
  top: 10px; right: 10px;
  width: 32px; height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.45);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.22s;
  line-height: 1;
}
.product-fav:hover { background: rgba(244,63,94,0.7); }

.product-body { padding: 16px; }

.product-cat {
  font-size: 0.7rem;
  color: rgb(67, 136, 207);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.7px;
}

.product-name {
  font-size: 0.96rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 7px 0 6px;
  line-height: 1.3;
}

.product-desc {
  font-size: 0.78rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 10px;
}

.product-rating { font-size: 0.78rem; color: #f59e0b; margin-bottom: 14px; }
.product-rating small { color: #64748b; margin-left: 4px; }

.product-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; }

.price-new { font-size: 1.1rem; font-weight: 900; color: #10b981; }
.price-old { font-size: 0.76rem; color: #64748b; text-decoration: line-through; margin-left: 6px; }

.product-cart-btn {
  background: rgb(36, 75, 114);
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 7px;
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.22s;
  font-family: 'Segoe UI', sans-serif;
  white-space: nowrap;
}
.product-cart-btn:hover { background: rgb(67, 136, 207); transform: scale(1.04); }`,
    js: ""
  },

  /* LOGIN FORM */
  {
    keywords: ["login","sign in","تسجيل دخول","دخول","login form","auth"],
    name: "Login Form",
    html: `<div class="auth-wrap">
  <div class="auth-box">
    <div class="auth-logo"><i class="fas fa-code"></i></div>
    <h2>Welcome Back</h2>
    <p class="auth-sub">Sign in to continue</p>
    <div class="field">
      <label>Email</label>
      <div class="field-inner">
        <i class="fas fa-envelope fi"></i>
        <input type="email" placeholder="you@example.com">
      </div>
    </div>
    <div class="field">
      <label>Password</label>
      <div class="field-inner">
        <i class="fas fa-lock fi"></i>
        <input type="password" placeholder="••••••••">
        <button class="eye-btn" onclick="togglePwd(this)" type="button">
          <i class="fas fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="auth-opts">
      <label class="chk"><input type="checkbox"> Remember me</label>
      <a href="#" class="forgot">Forgot password?</a>
    </div>
    <button class="auth-btn" onclick="handleLogin(this)">Sign In</button>
    <p class="auth-footer">No account? <a href="#">Create one free</a></p>
  </div>
</div>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f1419; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: 'Segoe UI', sans-serif; }

.auth-box {
  background: #1e293b;
  border-radius: 16px;
  padding: 36px 30px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.35);
  border: 1px solid rgba(102,126,234,0.1);
}

.auth-logo {
  width: 50px; height: 50px;
  background: rgb(36, 75, 114);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 1.3rem;
  margin: 0 auto 16px;
}

.auth-box h2 { text-align: center; color: #f1f5f9; font-size: 1.4rem; margin-bottom: 4px; }
.auth-sub { text-align: center; color: #64748b; font-size: 0.82rem; margin-bottom: 24px; }

.field { margin-bottom: 16px; }
.field label { display: block; color: #94a3b8; font-size: 0.78rem; font-weight: 600; margin-bottom: 6px; }

.field-inner { position: relative; display: flex; align-items: center; }

.fi {
  position: absolute; left: 12px;
  color: #475569; font-size: 0.82rem; pointer-events: none;
}

.field-inner input {
  width: 100%;
  padding: 11px 38px 11px 36px;
  background: #0f1419;
  border: 2px solid rgba(102,126,234,0.14);
  border-radius: 9px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.25s;
  font-family: 'Segoe UI', sans-serif;
}
.field-inner input:focus { border-color: rgb(67, 136, 207); }
.field-inner input::placeholder { color: #475569; }

.eye-btn {
  position: absolute; right: 10px;
  background: none; border: none;
  color: #475569; cursor: pointer;
  font-size: 0.82rem;
  transition: color 0.2s;
  padding: 4px;
}
.eye-btn:hover { color: rgb(67, 136, 207); }

.auth-opts {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 20px;
}
.chk { display: flex; align-items: center; gap: 7px; color: #94a3b8; font-size: 0.78rem; cursor: pointer; }
.forgot { color: rgb(67, 136, 207); font-size: 0.78rem; font-weight: 600; text-decoration: none; }
.forgot:hover { text-decoration: underline; }

.auth-btn {
  width: 100%;
  padding: 13px;
  background: rgb(36, 75, 114);
  border: none; border-radius: 9px;
  color: #fff; font-size: 0.96rem; font-weight: 700;
  cursor: pointer; transition: all 0.26s;
  margin-bottom: 16px;
  font-family: 'Segoe UI', sans-serif;
}
.auth-btn:hover { background: rgb(67, 136, 207); transform: translateY(-2px); box-shadow: 0 6px 18px rgba(67,136,207,0.35); }

.auth-footer { text-align: center; color: #64748b; font-size: 0.8rem; }
.auth-footer a { color: rgb(67, 136, 207); font-weight: 600; text-decoration: none; }`,
    js: `function togglePwd(btn) {
  const inp = btn.closest('.field-inner').querySelector('input');
  const icon = btn.querySelector('i');
  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fas fa-eye';
  }
}
function handleLogin(btn) {
  const email = document.querySelector('input[type="email"]').value;
  const pass  = document.querySelector('input[type="password"]').value;
  if (!email || !pass) { alert('Please fill in all fields.'); return; }
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Welcome back!';
    btn.style.background = '#10b981';
  }, 1200);
}`
  },

  /* NAVBAR */
  {
    keywords: ["navbar","nav bar","navigation","header","شريط تنقل","قائمة تنقل","menu bar"],
    name: "Sticky Navbar",
    html: `<nav class="d-navbar">
  <a href="#" class="d-brand">
    <div class="d-brand-icon"><i class="fas fa-code"></i></div>
    BrandKit
  </a>
  <ul class="d-links">
    <li><a href="#" class="d-active">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">About</a></li>
  </ul>
  <div class="d-actions">
    <button class="d-login">Log In</button>
    <button class="d-signup">Sign Up</button>
  </div>
  <button class="d-burger" onclick="this.closest('nav').querySelector('.d-links').classList.toggle('d-open')">
    <span></span><span></span><span></span>
  </button>
</nav>
<div style="background:#0f1419;height:200px;display:flex;align-items:center;justify-content:center;color:#475569;font-family:'Segoe UI',sans-serif;">
  Page content below the navbar
</div>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }

.d-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  height: 64px;
  background: rgba(15,20,25,0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(102,126,234,0.12);
  box-shadow: 0 2px 16px rgba(0,0,0,0.3);
  position: sticky; top: 0; z-index: 100;
  font-family: 'Segoe UI', sans-serif;
}

.d-brand {
  display: flex; align-items: center; gap: 9px;
  color: #fff; text-decoration: none;
  font-size: 1.1rem; font-weight: 700;
}
.d-brand-icon {
  width: 32px; height: 32px;
  background: rgb(36, 75, 114);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.9rem;
}

.d-links { display: flex; list-style: none; gap: 2px; }
.d-links a {
  display: block; padding: 6px 12px;
  color: rgba(255,255,255,0.72);
  text-decoration: none; font-size: 0.88rem; font-weight: 500;
  border-radius: 7px;
  transition: all 0.22s;
}
.d-links a:hover, .d-links a.d-active {
  color: #fff; background: rgba(67,136,207,0.12);
}

.d-actions { display: flex; gap: 8px; }

.d-login {
  background: transparent;
  border: 1px solid rgba(67,136,207,0.4);
  color: rgb(67, 136, 207);
  padding: 7px 17px; border-radius: 7px;
  font-size: 0.82rem; font-weight: 600; cursor: pointer;
  transition: all 0.22s; font-family: 'Segoe UI', sans-serif;
}
.d-login:hover { background: rgba(67,136,207,0.1); }

.d-signup {
  background: rgb(36, 75, 114);
  border: none;
  color: #fff;
  padding: 7px 17px; border-radius: 7px;
  font-size: 0.82rem; font-weight: 700; cursor: pointer;
  transition: all 0.22s; font-family: 'Segoe UI', sans-serif;
}
.d-signup:hover { background: rgb(67, 136, 207); }

.d-burger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 5px;
}
.d-burger span { display: block; width: 20px; height: 2px; background: #fff; border-radius: 2px; }

@media (max-width: 600px) {
  .d-links {
    display: none; position: absolute; top: 64px; left: 0; right: 0;
    background: rgba(15,20,25,0.98); flex-direction: column;
    padding: 12px 16px; gap: 4px;
    border-bottom: 1px solid rgba(102,126,234,0.12);
  }
  .d-links.d-open { display: flex; }
  .d-actions { display: none; }
  .d-burger { display: flex; }
}`,
    js: ""
  },

  /* PROFILE CARD */
  {
    keywords: ["profile","profile card","ملف شخصي","user card","بطاقة مستخدم","avatar card"],
    name: "Profile Card",
    html: `<div class="p-card">
  <div class="p-cover"></div>
  <div class="p-body">
    <div class="p-avatar-wrap">
      <img class="p-avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=WebKit44" alt="Avatar">
      <span class="p-online"></span>
    </div>
    <h3 class="p-name">Alex Johnson</h3>
    <p class="p-role">Frontend Developer · Remote</p>
    <p class="p-bio">Passionate about building beautiful UIs. Open to collaborations and exciting projects.</p>
    <div class="p-skills">
      <span class="skill">React</span>
      <span class="skill">CSS</span>
      <span class="skill">TypeScript</span>
    </div>
    <div class="p-stats">
      <div class="ps"><span class="ps-n">142</span><span class="ps-l">Projects</span></div>
      <div class="ps-div"></div>
      <div class="ps"><span class="ps-n">8.4k</span><span class="ps-l">Followers</span></div>
      <div class="ps-div"></div>
      <div class="ps"><span class="ps-n">98%</span><span class="ps-l">Rating</span></div>
    </div>
    <div class="p-actions">
      <button class="p-follow" onclick="toggleFollow(this)">Follow</button>
      <button class="p-msg">Message</button>
    </div>
  </div>
</div>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f1419; display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: 'Segoe UI', sans-serif; padding: 20px; }

.p-card {
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 10px 32px rgba(0,0,0,0.3);
  transition: transform 0.28s ease;
  border: 1px solid rgba(102,126,234,0.1);
}
.p-card:hover { transform: translateY(-5px); }

.p-cover {
  height: 88px;
  background: linear-gradient(135deg, rgb(36,75,114) 0%, rgb(67,136,207) 100%);
}

.p-body { padding: 0 20px 22px; }

.p-avatar-wrap {
  position: relative;
  display: inline-block;
  margin-top: -34px;
  margin-bottom: 10px;
}
.p-avatar {
  width: 68px; height: 68px;
  border-radius: 50%;
  border: 3px solid #1e293b;
  background: #0f1419;
  display: block;
}
.p-online {
  position: absolute; bottom: 4px; right: 4px;
  width: 13px; height: 13px;
  background: #10b981;
  border: 2px solid #1e293b;
  border-radius: 50%;
}

.p-name { font-size: 1rem; font-weight: 800; color: #f1f5f9; margin-bottom: 3px; }
.p-role { font-size: 0.76rem; color: rgb(67, 136, 207); font-weight: 600; margin-bottom: 9px; }
.p-bio  { font-size: 0.78rem; color: #94a3b8; line-height: 1.6; margin-bottom: 12px; }

.p-skills { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
.skill {
  font-size: 0.7rem; font-weight: 600;
  padding: 3px 9px;
  background: rgba(67,136,207,0.1);
  color: rgb(67, 136, 207);
  border: 1px solid rgba(67,136,207,0.22);
  border-radius: 4px;
}

.p-stats {
  display: flex; align-items: center; justify-content: space-around;
  padding: 12px 0;
  border-top: 1px solid rgba(102,126,234,0.1);
  border-bottom: 1px solid rgba(102,126,234,0.1);
  margin-bottom: 16px;
}
.ps { text-align: center; }
.ps-n { display: block; font-size: 1rem; font-weight: 800; color: #f1f5f9; }
.ps-l { font-size: 0.68rem; color: #64748b; }
.ps-div { width: 1px; height: 28px; background: rgba(102,126,234,0.15); }

.p-actions { display: flex; gap: 8px; }
.p-follow {
  flex: 1; padding: 9px;
  background: rgb(36, 75, 114);
  border: none; border-radius: 8px;
  color: #fff; font-size: 0.82rem; font-weight: 700;
  cursor: pointer; transition: all 0.22s;
  font-family: 'Segoe UI', sans-serif;
}
.p-follow:hover { background: rgb(67, 136, 207); }
.p-follow.following { background: #10b981; }

.p-msg {
  flex: 1; padding: 9px;
  background: transparent;
  border: 1px solid rgba(102,126,234,0.28);
  color: rgb(67, 136, 207);
  border-radius: 8px; font-size: 0.82rem; font-weight: 600;
  cursor: pointer; transition: all 0.22s;
  font-family: 'Segoe UI', sans-serif;
}
.p-msg:hover { background: rgba(102,126,234,0.08); }`,
    js: `function toggleFollow(btn) {
  if (btn.classList.toggle('following')) {
    btn.textContent = '✓ Following';
  } else {
    btn.textContent = 'Follow';
  }
}`
  },

  /* STATS */
  {
    keywords: ["stats","statistics","dashboard","لوحة","إحصائيات","counter","أرقام","metrics","analytics"],
    name: "Stats Dashboard",
    html: `<div class="sd-wrap">
  <div class="sd-header">
    <div>
      <h2 class="sd-title">Dashboard Overview</h2>
      <p class="sd-sub">Real-time performance metrics</p>
    </div>
    <span class="sd-live">● Live</span>
  </div>
  <div class="sd-grid">
    <div class="sd-card">
      <div class="sd-top">
        <div class="sd-icon blue"><i class="fas fa-users"></i></div>
        <span class="sd-trend up"><i class="fas fa-arrow-up"></i> 12%</span>
      </div>
      <span class="sd-val" data-target="12480">0</span>
      <span class="sd-lbl">Total Users</span>
      <div class="sd-bar"><div class="sd-fill" style="width:72%;background:rgb(67,136,207)"></div></div>
    </div>
    <div class="sd-card">
      <div class="sd-top">
        <div class="sd-icon green"><i class="fas fa-dollar-sign"></i></div>
        <span class="sd-trend up"><i class="fas fa-arrow-up"></i> 8.4%</span>
      </div>
      <span class="sd-val" data-target="84320">0</span>
      <span class="sd-lbl">Revenue ($)</span>
      <div class="sd-bar"><div class="sd-fill" style="width:84%;background:#10b981"></div></div>
    </div>
    <div class="sd-card">
      <div class="sd-top">
        <div class="sd-icon purple"><i class="fas fa-box"></i></div>
        <span class="sd-trend up"><i class="fas fa-arrow-up"></i> 5.1%</span>
      </div>
      <span class="sd-val" data-target="3240">0</span>
      <span class="sd-lbl">Orders</span>
      <div class="sd-bar"><div class="sd-fill" style="width:60%;background:#a855f7"></div></div>
    </div>
    <div class="sd-card">
      <div class="sd-top">
        <div class="sd-icon yellow"><i class="fas fa-star"></i></div>
        <span class="sd-trend up"><i class="fas fa-arrow-up"></i> 2%</span>
      </div>
      <span class="sd-val" data-target="98">0</span>
      <span class="sd-lbl">Satisfaction %</span>
      <div class="sd-bar"><div class="sd-fill" style="width:98%;background:#f59e0b"></div></div>
    </div>
  </div>
</div>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f1419; padding: 20px; font-family: 'Segoe UI', sans-serif; }

.sd-wrap {
  background: #1a1a2e;
  border-radius: 16px;
  padding: 24px;
  max-width: 560px;
  border: 1px solid rgba(102,126,234,0.1);
}

.sd-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
.sd-title  { color: #f1f5f9; font-size: 1.1rem; font-weight: 800; margin-bottom: 3px; }
.sd-sub    { color: #64748b; font-size: 0.76rem; }
.sd-live   { font-size: 0.72rem; font-weight: 700; color: #10b981; background: rgba(16,185,129,0.1); padding: 4px 10px; border-radius: 5px; }

.sd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

.sd-card {
  background: #1e293b;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(102,126,234,0.08);
  transition: transform 0.24s, border-color 0.24s;
}
.sd-card:hover { transform: translateY(-3px); border-color: rgba(102,126,234,0.28); }

.sd-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }

.sd-icon {
  width: 36px; height: 36px;
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.95rem;
}
.sd-icon.blue   { background: rgba(67,136,207,0.15); color: rgb(67,136,207); }
.sd-icon.green  { background: rgba(16,185,129,0.15); color: #10b981; }
.sd-icon.purple { background: rgba(168,85,247,0.15); color: #a855f7; }
.sd-icon.yellow { background: rgba(245,158,11,0.15); color: #f59e0b; }

.sd-trend {
  font-size: 0.7rem; font-weight: 700;
  padding: 3px 7px; border-radius: 5px;
  display: flex; align-items: center; gap: 3px;
}
.sd-trend.up { background: rgba(16,185,129,0.1); color: #10b981; }
.sd-trend.down { background: rgba(244,63,94,0.1); color: #f43f5e; }

.sd-val { display: block; font-size: 1.5rem; font-weight: 900; color: #f1f5f9; line-height: 1; margin-bottom: 3px; }
.sd-lbl { font-size: 0.72rem; color: #64748b; display: block; margin-bottom: 10px; }

.sd-bar  { height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden; }
.sd-fill { height: 100%; border-radius: 2px; transition: width 1.2s ease; }`,
    js: `document.querySelectorAll('.sd-val').forEach(el => {
  const target = parseInt(el.dataset.target);
  const step   = target / 60;
  let cur = 0;
  const go = () => {
    cur = Math.min(cur + step, target);
    el.textContent = Math.floor(cur).toLocaleString();
    if (cur < target) requestAnimationFrame(go);
  };
  new IntersectionObserver(([e]) => { if (e.isIntersecting) go(); }, { threshold: 0.5 }).observe(el);
});`
  },

  /* REGISTER FORM */
  {
    keywords: ["register","signup","sign up","إنشاء حساب","تسجيل حساب","create account","new account"],
    name: "Register Form",
    html: `<div class="rg-wrap">
  <div class="rg-box">
    <h2>Create Account</h2>
    <p class="rg-sub">Join thousands of developers today</p>
    <div class="rg-row">
      <div class="rg-field"><label>First Name</label><input type="text" placeholder="John"></div>
      <div class="rg-field"><label>Last Name</label><input type="text" placeholder="Doe"></div>
    </div>
    <div class="rg-field"><label>Email</label><input type="email" placeholder="you@example.com"></div>
    <div class="rg-field">
      <label>Password</label>
      <input type="password" placeholder="Min 8 characters" id="rg-pwd" oninput="checkPwd(this.value)">
      <div class="pwd-strength"><div id="pwd-bar" class="pwd-bar"></div></div>
    </div>
    <div class="rg-field"><label>Confirm Password</label><input type="password" placeholder="Repeat password"></div>
    <label class="rg-terms"><input type="checkbox" id="rg-agree"> I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a></label>
    <button class="rg-btn" onclick="handleRegister(this)">Create Account</button>
    <p class="rg-login">Already have an account? <a href="#">Sign in</a></p>
  </div>
</div>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f1419; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; padding: 30px 20px; font-family: 'Segoe UI', sans-serif; }

.rg-box {
  background: #1e293b;
  border-radius: 16px;
  padding: 32px 28px;
  width: 100%; max-width: 420px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.3);
  border: 1px solid rgba(102,126,234,0.1);
}

.rg-box h2 { color: #f1f5f9; font-size: 1.4rem; margin-bottom: 4px; }
.rg-sub { color: #64748b; font-size: 0.82rem; margin-bottom: 22px; }

.rg-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

.rg-field { margin-bottom: 14px; }
.rg-field label { display: block; color: #94a3b8; font-size: 0.77rem; font-weight: 600; margin-bottom: 6px; }
.rg-field input {
  width: 100%;
  padding: 10px 13px;
  background: #0f1419;
  border: 2px solid rgba(102,126,234,0.14);
  border-radius: 8px;
  color: #e2e8f0; font-size: 0.88rem;
  outline: none; transition: border-color 0.24s;
  font-family: 'Segoe UI', sans-serif;
}
.rg-field input:focus { border-color: rgb(67, 136, 207); }
.rg-field input::placeholder { color: #475569; }

.pwd-strength { height: 3px; background: rgba(255,255,255,0.06); border-radius: 2px; margin-top: 6px; overflow: hidden; }
.pwd-bar { height: 100%; width: 0; border-radius: 2px; transition: width 0.3s, background 0.3s; }

.rg-terms { display: flex; align-items: center; gap: 8px; color: #94a3b8; font-size: 0.77rem; margin-bottom: 18px; cursor: pointer; }
.rg-terms a { color: rgb(67, 136, 207); text-decoration: none; }

.rg-btn {
  width: 100%; padding: 13px;
  background: rgb(36, 75, 114);
  border: none; border-radius: 9px;
  color: #fff; font-size: 0.96rem; font-weight: 700;
  cursor: pointer; transition: all 0.26s;
  margin-bottom: 14px; font-family: 'Segoe UI', sans-serif;
}
.rg-btn:hover { background: rgb(67, 136, 207); transform: translateY(-2px); box-shadow: 0 6px 18px rgba(67,136,207,0.35); }

.rg-login { text-align: center; color: #64748b; font-size: 0.79rem; }
.rg-login a { color: rgb(67, 136, 207); font-weight: 600; text-decoration: none; }`,
    js: `function checkPwd(val) {
  const bar = document.getElementById('pwd-bar');
  const len = val.length;
  if (len === 0)      { bar.style.width='0%'; bar.style.background=''; }
  else if (len < 4)   { bar.style.width='25%'; bar.style.background='#f43f5e'; }
  else if (len < 8)   { bar.style.width='55%'; bar.style.background='#f59e0b'; }
  else if (len < 12)  { bar.style.width='80%'; bar.style.background='#3b82f6'; }
  else                { bar.style.width='100%'; bar.style.background='#10b981'; }
}
function handleRegister(btn) {
  const pwds = document.querySelectorAll('.rg-box input[type="password"]');
  const agreed = document.getElementById('rg-agree').checked;
  if (!agreed) { alert('Please accept the terms.'); return; }
  if (pwds[0].value !== pwds[1].value) { alert('Passwords do not match.'); pwds[1].style.borderColor='#f43f5e'; return; }
  pwds[1].style.borderColor='#10b981';
  btn.textContent = '✓ Account Created!';
  btn.style.background = '#10b981';
  btn.disabled = true;
}`
  },

  /* ALERT CARDS */
  {
    keywords: ["alert","alerts","notification","تنبيه","إشعار","toast","message","warning","error"],
    name: "Alert Cards",
    html: `<div class="al-stack">
  <div class="al-card al-success">
    <i class="fas fa-circle-check al-ico"></i>
    <div class="al-text">
      <strong>Success!</strong>
      <span>Your profile has been updated successfully.</span>
    </div>
    <button class="al-close" onclick="this.closest('.al-card').remove()"><i class="fas fa-xmark"></i></button>
  </div>
  <div class="al-card al-warning">
    <i class="fas fa-triangle-exclamation al-ico"></i>
    <div class="al-text">
      <strong>Warning</strong>
      <span>Your storage is 80% full. Consider upgrading your plan.</span>
    </div>
    <button class="al-close" onclick="this.closest('.al-card').remove()"><i class="fas fa-xmark"></i></button>
  </div>
  <div class="al-card al-error">
    <i class="fas fa-circle-xmark al-ico"></i>
    <div class="al-text">
      <strong>Error</strong>
      <span>Connection failed. Please check your network and retry.</span>
    </div>
    <button class="al-close" onclick="this.closest('.al-card').remove()"><i class="fas fa-xmark"></i></button>
  </div>
  <div class="al-card al-info">
    <i class="fas fa-circle-info al-ico"></i>
    <div class="al-text">
      <strong>Update Available</strong>
      <span>Version 2.1.0 is ready to install with new features.</span>
    </div>
    <button class="al-close" onclick="this.closest('.al-card').remove()"><i class="fas fa-xmark"></i></button>
  </div>
</div>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f1419; padding: 20px; font-family: 'Segoe UI', sans-serif; }

.al-stack { display: flex; flex-direction: column; gap: 12px; max-width: 460px; }

.al-card {
  display: flex; align-items: flex-start; gap: 13px;
  padding: 15px 16px;
  border-radius: 11px;
  border: 1px solid;
  animation: alSlide 0.32s ease both;
  transition: transform 0.22s, opacity 0.22s;
}
.al-card:hover { transform: translateX(4px); }

@keyframes alSlide {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

.al-success { background: rgba(16,185,129,0.07); border-color: rgba(16,185,129,0.28); }
.al-warning { background: rgba(245,158,11,0.07); border-color: rgba(245,158,11,0.28); }
.al-error   { background: rgba(244,63,94,0.07);  border-color: rgba(244,63,94,0.28);  }
.al-info    { background: rgba(67,136,207,0.07); border-color: rgba(67,136,207,0.28); }

.al-ico { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }
.al-success .al-ico { color: #10b981; }
.al-warning .al-ico { color: #f59e0b; }
.al-error   .al-ico { color: #f43f5e; }
.al-info    .al-ico { color: rgb(67, 136, 207); }

.al-text { flex: 1; display: flex; flex-direction: column; gap: 3px; }
.al-text strong { font-size: 0.85rem; font-weight: 700; color: #f1f5f9; }
.al-text span   { font-size: 0.78rem; color: #94a3b8; line-height: 1.5; }

.al-close {
  background: none; border: none; color: #64748b;
  cursor: pointer; padding: 2px 5px; border-radius: 5px;
  font-size: 0.82rem; line-height: 1; flex-shrink: 0;
  transition: color 0.2s, background 0.2s;
}
.al-close:hover { color: #f1f5f9; background: rgba(255,255,255,0.06); }`,
    js: ""
  }
];

/* ── FALLBACK ────────────────────────────────────────── */
const DEFAULT_TEMPLATE = {
  name: "Custom Component",
  html: `<div class="gen-card">
  <div class="gen-head">
    <i class="fas fa-cube gen-icon"></i>
    <span class="gen-tag">Component</span>
  </div>
  <h3 class="gen-title">Your Component</h3>
  <p class="gen-desc">A customizable component ready for you to edit. Modify the HTML, CSS and JS below to suit your needs.</p>
  <div class="gen-actions">
    <button class="gen-primary" onclick="this.textContent='Clicked!'">Primary Action</button>
    <button class="gen-outline">Secondary</button>
  </div>
</div>`,
  css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f1419; display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: 'Segoe UI', sans-serif; padding: 20px; }

.gen-card {
  background: #1e293b;
  border: 1px solid rgba(102,126,234,0.15);
  border-radius: 14px;
  padding: 26px;
  max-width: 320px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.2);
  transition: transform 0.26s, box-shadow 0.26s;
}
.gen-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(67,136,207,0.15);
}

.gen-head { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }

.gen-icon { color: rgb(67, 136, 207); font-size: 1.1rem; }

.gen-tag {
  font-size: 0.7rem; font-weight: 700;
  color: rgb(67, 136, 207);
  background: rgba(67,136,207,0.1);
  padding: 3px 9px; border-radius: 4px;
  text-transform: uppercase; letter-spacing: 0.5px;
}

.gen-title {
  font-size: 1.05rem; font-weight: 800;
  color: #f1f5f9; margin-bottom: 9px;
}
.gen-desc {
  font-size: 0.82rem; color: #94a3b8;
  line-height: 1.65; margin-bottom: 20px;
}

.gen-actions { display: flex; gap: 10px; }

.gen-primary {
  flex: 1; padding: 9px;
  background: rgb(36, 75, 114);
  border: none; border-radius: 8px;
  color: #fff; font-size: 0.82rem; font-weight: 700;
  cursor: pointer; transition: all 0.22s;
  font-family: 'Segoe UI', sans-serif;
}
.gen-primary:hover { background: rgb(67, 136, 207); transform: scale(1.03); }

.gen-outline {
  flex: 1; padding: 9px;
  background: transparent;
  border: 1px solid rgba(102,126,234,0.28);
  color: rgb(67, 136, 207); border-radius: 8px;
  font-size: 0.82rem; font-weight: 600;
  cursor: pointer; transition: all 0.22s;
  font-family: 'Segoe UI', sans-serif;
}
.gen-outline:hover { background: rgba(102,126,234,0.08); }`,
  js: ""
};

/* ── MATCHER ──────────────────────────────────────────── */
function matchTemplate(prompt) {
  const q = prompt.toLowerCase().trim();
  for (const t of TEMPLATES) {
    const excluded = t.exclude && t.exclude.some(ex => q.includes(ex));
    if (excluded) continue;
    if (t.keywords.some(kw => q.includes(kw))) return t;
  }
  for (const t of TEMPLATES) {
    if (t.keywords.some(kw => q.includes(kw))) return t;
  }
  return DEFAULT_TEMPLATE;
}

/* ── CONVERSATION HISTORY ─────────────────────────────── */
const conversationHistory = [];
let lastCodeResult = null;
let currentTab = 'html';

function addToHistory(role, content) {
  conversationHistory.push({ role, content });
  if (conversationHistory.length > 30) conversationHistory.splice(0, 2);
}

/* ── CODE INTENT DETECTION ───────────────────────────── */
function isCodeRequest(text) {
  const t = text.toLowerCase();
  const codeKeywords = [
    'اعمل','اصنع','اعملي','ابني','ولّد','generate','create','build','make','code',
    'كود','برمجة','component','مكون','زر','button','فورم','form','كارد','card',
    'navbar','قائمة','لوحة','dashboard','modal','نموذج','صفحة','page','layout',
    'اكتب لي','اكتبلي','write','design'
  ];
  return codeKeywords.some(k => t.includes(k));
}

/* ── API CALL — CHAT MODE ─────────────────────────────── */
async function callChatAI(userMessage) {
  if (!AI_CONFIG.useAPI) return null;
  try {
    const res = await fetch(`${AI_CONFIG.backendUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: userMessage,
        history: conversationHistory
      })
    });
    if (!res.ok) throw new Error(`Server responded ${res.status}`);
    const data = await res.json();
    return data.reply || null;
  } catch (e) {
    console.warn('Chat API error:', e);
    return null;
  }
}

/* ── API CALL — CODE MODE ─────────────────────────────── */
async function callCodeAI(prompt) {
  if (!AI_CONFIG.useAPI) return null;
  try {
    const res = await fetch(`${AI_CONFIG.backendUrl}/api/code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        history: conversationHistory
      })
    });
    if (!res.ok) throw new Error(`Server responded ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn('Code API error:', e);
    return null;
  }
}

/* ── SEND MESSAGE ─────────────────────────────────────── */
async function sendMessage() {
  const ta = document.getElementById('aiPrompt');
  const text = ta.value.trim();
  if (!text) return;

  ta.value = '';
  ta.style.height = 'auto';

  appendUserMsg(text);
  addToHistory('user', text);

  const typing = appendBotTyping();
  const useAPI = AI_CONFIG.useAPI && AI_CONFIG.apiKey;

  if (isCodeRequest(text)) {
    // CODE MODE
    if (useAPI) await delay(400);
    const result = useAPI ? ((await callCodeAI(text)) || matchTemplate(text)) : matchTemplate(text);
    lastCodeResult = result;

    typing.remove();
    appendBotMsg(`تفضل! ولّدت لك <strong>${result.name || 'Component'}</strong> ✨ شوف الكود والـ preview أدناه 👇`);
    addToHistory('assistant', `Generated component: ${result.name || 'Component'}`);
    renderCodeOutput(result);
  } else {
    // CHAT MODE
    let reply;
    if (useAPI) {
      await delay(300);
      reply = await callChatAI(text);
    }
    if (!reply) reply = getFallbackReply(text);
    typing.remove();
    appendBotMsg(reply);
    addToHistory('assistant', reply);
  }
}

/* ── FALLBACK REPLIES (demo mode) ────────────────────── */
function getFallbackReply(text) {
  const t = text.toLowerCase().trim();

  if (/مرحب|أهلا|هاي|hello|hi|hey/.test(t))
    return 'أهلاً بيك! 👋 أنا مساعدك الذكي. اسألني أي سؤال عن HTML وCSS وJavaScript، أو قولي <strong>"اعمل كود..."</strong> وهولّدلك مكون جاهز فوراً ⚡';

  if (/شكر|thanks|thank you|ممنون/.test(t))
    return 'العفو! 😊 في أي وقت تحتاج مساعدة أنا هنا.';

  if (/flexbox|flex/.test(t))
    return 'Flexbox هو نظام layout أحادي الاتجاه، مثالي لتوزيع العناصر في صف أو عمود.<br><br>أساسيات:<br>• <code>display: flex</code> على الـ container<br>• <code>justify-content</code> للمحاذاة الأفقية<br>• <code>align-items</code> للمحاذاة العمودية<br>• <code>gap</code> للمسافة بين العناصر 💡';

  if (/grid/.test(t))
    return 'CSS Grid هو نظام layout ثنائي الاتجاه (صفوف + أعمدة).<br><br>أساسيات:<br>• <code>display: grid</code> على الـ container<br>• <code>grid-template-columns: repeat(3, 1fr)</code> لـ 3 أعمدة متساوية<br>• <code>gap</code> للمسافة بين الخلايا<br><br>Grid أقوى من Flexbox للتصاميم المعقدة 🎯';

  if (/responsive|موبايل|mobile|media query/.test(t))
    return 'لعمل Responsive Design:<br><br>• استخدم <code>%</code> و<code>vw/vh</code> بدل <code>px</code> ثابتة<br>• <code>@media (max-width: 768px) { ... }</code> للموبايل<br>• <code>flexbox</code> أو <code>grid</code> بدل الـ float<br>• <code>meta viewport</code> في الـ head دايماً:<br><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code> 📱';

  if (/position|absolute|relative|fixed|sticky/.test(t))
    return 'أنواع الـ position في CSS:<br><br>• <code>relative</code> — يتحرك نسبةً لنفسه، ويظل في التدفق الطبيعي<br>• <code>absolute</code> — يتحرك نسبةً لأقرب parent عنده <code>position</code><br>• <code>fixed</code> — ثابت نسبةً للشاشة (زي الـ navbar الثابت)<br>• <code>sticky</code> — relative + fixed معاً، بيتثبت عند الـ scroll 📌';

  if (/z-index|زد اندكس/.test(t))
    return 'الـ <code>z-index</code> بيتحكم في ترتيب العناصر عمودياً (من الشاشة للداخل).<br><br>مهم: يشتغل بس مع العناصر اللي عندها <code>position</code> (relative/absolute/fixed/sticky).<br>الأعلى في القيمة = أمام العناصر التانية 🔢';

  if (/animation|@keyframes|transition/.test(t))
    return 'الفرق بين الـ transition والـ animation:<br><br>• <code>transition</code> — أبسط، بس بيشتغل عند حدث (hover مثلاً):<br><code>transition: all 0.3s ease;</code><br><br>• <code>@keyframes + animation</code> — أقوى، بيشتغل لوحده بدون trigger:<br><code>animation: name 1s ease infinite;</code> 🎬';

  if (/variable|متغير|custom property|--/.test(t))
    return 'CSS Variables (Custom Properties) بتخليك تعرّف قيم مرة وتستخدمها في كل الـ CSS:<br><br><code>:root {<br>&nbsp;&nbsp;--primary: #667eea;<br>&nbsp;&nbsp;--bg: #1a1a2e;<br>}</code><br><br><code>.btn { background: var(--primary); }</code><br><br>مفيدة جداً لعمل dark/light themes 🎨';

  if (/javascript|js|جافا/.test(t))
    return 'JavaScript هي لغة البرمجة للـ web! تستخدمها لـ:<br><br>• التحكم في الـ DOM: <code>document.querySelector()</code><br>• الأحداث: <code>element.addEventListener("click", fn)</code><br>• Fetch API للتواصل مع السيرفر<br>• ES6+: arrow functions, destructuring, async/await 🚀';

  if (/سيو|seo/.test(t))
    return 'أساسيات SEO للـ HTML:<br><br>• عنوان واضح: <code>&lt;title&gt;</code><br>• وصف: <code>&lt;meta name="description"&gt;</code><br>• عنوان رئيسي واحد: <code>&lt;h1&gt;</code><br>• Alt للصور: <code>&lt;img alt="وصف"&gt;</code><br>• semantic HTML: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code> 🔍';

  if (/performance|سرعة|تحسين|optimize/.test(t))
    return 'لتسريع صفحتك:<br><br>• ضغط الصور (WebP بدل PNG/JPG)<br>• minify الـ CSS والـ JS<br>• استخدم <code>loading="lazy"</code> للصور<br>• CSS في الـ <code>&lt;head&gt;</code>، JS في نهاية الـ <code>&lt;body&gt;</code> أو بـ <code>defer</code><br>• قلّل الـ HTTP requests ⚡';

  if (/اسم|اسمك|من انت|who are you/.test(t))
    return 'أنا مساعد WebCodeKit الذكي! 🤖 متخصص في HTML وCSS وJavaScript وتصميم الـ UI. قولي إيه اللي تريد تعمله وهساعدك 💪';

  if (/كيف|how/.test(t))
    return 'سؤال ممتاز! 🤔 ممكن تكون أكثر تحديداً عشان أفيدك أكتر؟ مثلاً: "كيف أعمل navbar responsive" أو "كيف أستخدم flexbox" 😊';

  // Default
  return 'فهمتك! 😊 لو عندك سؤال تاني عن HTML أو CSS أو JavaScript أنا هنا. أو قولي <strong>"اعمل كود..."</strong> وهولّدلك مكون UI جاهز فوراً ⚡';
}

/* ── REGENERATE ───────────────────────────────────────── */
async function regenerateCode() {
  if (!lastCodeResult) return;
  const lastUserMsg = [...conversationHistory].reverse().find(m => m.role === 'user');
  if (!lastUserMsg) return;
  const typing = appendBotTyping();
  const result = (await callCodeAI(lastUserMsg.content)) || matchTemplate(lastUserMsg.content);
  lastCodeResult = result;
  typing.remove();
  renderCodeOutput(result);
  appendBotMsg('تم إعادة التوليد! ✨');
}

function closeCodePanel() {
  document.getElementById('outputPanel').style.display = 'none';
}

/* ── DOM HELPERS ──────────────────────────────────────── */
function appendUserMsg(text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg--user';
  div.innerHTML = `<div class="ai-msg__bubble">${escapeHtml(text)}</div>`;
  msgs.appendChild(div);
  scrollChat();
}

function appendBotMsg(html) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg--bot';
  div.innerHTML = `<div class="ai-msg__avatar"><i class="fas fa-robot"></i></div><div class="ai-msg__bubble">${html}</div>`;
  msgs.appendChild(div);
  scrollChat();
  return div;
}

function appendBotTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg--bot';
  div.innerHTML = `<div class="ai-msg__avatar"><i class="fas fa-robot"></i></div><div class="ai-msg__bubble ai-typing"><span></span><span></span><span></span></div>`;
  msgs.appendChild(div);
  scrollChat();
  return div;
}

function scrollChat() {
  const msgs = document.getElementById('chatMessages');
  msgs.scrollTop = msgs.scrollHeight;
}

function escapeHtml(t) {
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ── RENDER CODE OUTPUT ───────────────────────────────── */
function renderCodeOutput(result) {
  document.getElementById('htmlCode').textContent = result.html || '';
  document.getElementById('cssCode').textContent  = result.css  || '';
  document.getElementById('jsCode').textContent   = result.js   || '';
  document.getElementById('jsTabBtn').style.display = result.js ? '' : 'none';

  const iframe = document.getElementById('previewFrame');
  iframe.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>body{margin:0;padding:0;}${result.css||''}</style></head>
<body>${result.html||''}<script>${result.js||''}<\/script></body></html>`;

  iframe.onload = () => {
    try {
      const h = iframe.contentDocument.body.scrollHeight;
      iframe.style.minHeight = Math.max(200, h + 28) + 'px';
    } catch(e) {}
  };

  const panel = document.getElementById('outputPanel');
  panel.style.display = 'block';
  switchTab('html', document.querySelector('.ai-tab-btn'));
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
}

/* ── TAB SWITCHER ─────────────────────────────────────── */
function switchTab(tab, btn) {
  currentTab = tab;
  document.querySelectorAll('.ai-tab-pane').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.ai-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tab + 'Code').style.display = 'block';
  if (btn) btn.classList.add('active');
}

function copyCurrentTab() {
  const el = document.getElementById(currentTab + 'Code');
  navigator.clipboard.writeText(el.textContent).then(() => showToast('Copied! ✅'));
}

/* ── CLEAR ────────────────────────────────────────────── */
function clearHistory() {
  conversationHistory.length = 0;
  lastCodeResult = null;
  document.getElementById('chatMessages').innerHTML = `
    <div class="ai-msg ai-msg--bot">
      <div class="ai-msg__avatar"><i class="fas fa-robot"></i></div>
      <div class="ai-msg__bubble">
        <p>تم مسح المحادثة ✨ كيف يمكنني مساعدتك؟</p>
      </div>
    </div>`;
  document.getElementById('outputPanel').style.display = 'none';
  showToast('تم مسح المحادثة 🔄');
}

/* ── COPY ─────────────────────────────────────────────── */
function copyCode(id, btn) {
  navigator.clipboard.writeText(document.getElementById(id).textContent).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    btn.classList.add('copied');
    showToast('Copied to clipboard! ✅');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
  });
}

function copyAll() {
  const html = document.getElementById('htmlCode').textContent;
  const css  = document.getElementById('cssCode').textContent;
  const js   = document.getElementById('jsCode').textContent;
  let out = `<!-- HTML -->\n${html}\n\n/* CSS */\n${css}`;
  if (js) out += `\n\n// JavaScript\n${js}`;
  navigator.clipboard.writeText(out).then(() => showToast('All code copied! 🎉'));
}

/* ── FILL PROMPT ──────────────────────────────────────── */
function fillPrompt(text) {
  const ta = document.getElementById('aiPrompt');
  ta.value = text;
  ta.style.height = 'auto';
  ta.style.height = ta.scrollHeight + 'px';
  ta.focus();
}

function tryExample(text) {
  fillPrompt(text);
  window.scrollTo({ top: document.getElementById('aiPrompt').getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  setTimeout(sendMessage, 400);
}

function generateCode() { sendMessage(); }

/* ── EVENTS ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();

  const ta = document.getElementById('aiPrompt');
  if (!ta) return;

  // Auto-resize textarea
  ta.addEventListener('input', () => {
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 150) + 'px';
  });

  // Enter to send (Shift+Enter for new line)
  ta.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
});
