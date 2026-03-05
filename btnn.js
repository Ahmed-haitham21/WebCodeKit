// Required CSS for all buttons (shared styles)
const sharedCSS = `/* Required CSS for all buttons */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-icon i {
  font-size: 1.1em;
}
`;

// Button Data - Contains all button HTML and CSS codes
const buttonData = {};

// Button 1 - Sliding Letters
buttonData[1] = {
  html: `<button class="btn-1">
  <div class="original btn-icon"><i class="fas fa-user-plus"></i><span>Signup</span></div>
  <div class="letters"><span>s</span><span>i</span><span>g</span><span>n</span><span>U</span><span>P</span></div>
</button>`,
  css: `.btn-1 { background-color: #000; color: #fff; border: 1px solid; border-radius: 999px; font-weight: 900; padding: 1rem 2rem; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; position: relative; overflow: hidden; width: 160px; height: 54px; display: flex; align-items: center; justify-content: center; }
.btn-1 .original, .btn-1 .letters { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; transition: transform 0.3s cubic-bezier(0.87, 0, 0.13, 1); }
.btn-1 .original { background: #fff; color: #000; }
.btn-1 .letters { color: #fff; }
.btn-1:hover .original { transform: translateY(-100%); }
.btn-1:hover .letters { transform: translateY(0); }
.btn-1 .letters span { opacity: 0; transform: translateY(15px); transition: transform 0.3s, opacity 0.3s; display: inline-block; }
.btn-1:hover .letters span { opacity: 1; transform: translateY(0); }
.btn-1:hover .letters span:nth-child(1) { transition-delay: 0.1s; }
.btn-1:hover .letters span:nth-child(2) { transition-delay: 0.15s; }
.btn-1:hover .letters span:nth-child(3) { transition-delay: 0.2s; }
.btn-1:hover .letters span:nth-child(4) { transition-delay: 0.25s; }
.btn-1:hover .letters span:nth-child(5) { transition-delay: 0.3s; }
.btn-1:hover .letters span:nth-child(6) { transition-delay: 0.35s; }`,
  js: `// No JavaScript required - CSS handles the animation`,
};

// Button 2 - Skew Fill
buttonData[2] = {
  html: `<button class="btn-2"><span class="btn-icon"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>`,
  css: `.btn-2 { padding: 0 40px; width: 150px; height: 56px; background: black; color: white; border: none; border-radius: 28px; font-size: 18px; font-weight: bold; cursor: pointer; position: relative; overflow: hidden; z-index: 1; display: flex; align-items: center; justify-content: center; gap: 10px; }
.btn-2:hover { color: black; }
.btn-2:after { content: ""; background: white; position: absolute; z-index: -1; left: -20%; right: -20%; top: 0; bottom: 0; transform: skewX(-45deg) scale(0, 1); transition: all 0.5s; }
.btn-2:hover:after { transform: skewX(-45deg) scale(1, 1); }`,
  js: `// No JavaScript required - CSS handles the animation`,
};

// Button 3 - Gradient Border
buttonData[3] = {
  html: `<button class="btn-3"><span class="btn-icon"><i class="fas fa-compass"></i><span>Explore</span></button>`,
  css: `.btn-3 { padding: 14px 30px; border: none; border-radius: 30px; background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff); background-size: 300% 300%; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; animation: gradientMove 3s ease infinite; }
@keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
.btn-3:hover { transform: scale(1.05); }`,
  js: `// No JavaScript required - CSS handles the animation`,
};

// Button 4 - Glow Effect
buttonData[4] = {
  html: `<button class="btn-4"><span class="btn-icon"><i class="fas fa-download"></i><span>Download</span></button>`,
  css: `.btn-4 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(135deg, #11998e, #38ef7d); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; box-shadow: 0 0 0 0 rgba(56, 239, 125, 0.7); }
.btn-4:hover { transform: scale(1.05); box-shadow: 0 0 20px 5px rgba(56, 239, 125, 0.5); }`,
  js: `// No JavaScript required`,
};

// Button 5 - 3D Press
buttonData[5] = {
  html: `<button class="btn-5"><span class="btn-icon"><i class="fas fa-paper-plane"></i><span>Send</span></button>`,
  css: `.btn-5 { padding: 14px 30px; border: none; border-radius: 25px; background: #02a2f8; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.1s; box-shadow: 0 6px 0 #0180d1; }
.btn-5:hover { transform: translateY(-2px); box-shadow: 0 8px 0 #0180d1; }
.btn-5:active { transform: translateY(4px); box-shadow: 0 2px 0 #0180d1; }`,
  js: `// No JavaScript required`,
};

// Button 6 - Neon Glow
buttonData[6] = {
  html: `<button class="btn-6"><span class="btn-icon"><i class="fas fa-rocket"></i><span>Get Started</span></button>`,
  css: `.btn-6 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(135deg, #fc466b, #3f5efb); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; box-shadow: 0 0 10px rgba(63, 94, 251, 0.5); }
.btn-6:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(63, 94, 251, 0.8), 0 0 60px rgba(252, 70, 107, 0.4); }`,
  js: `// No JavaScript required`,
};

// Button 7 - Outline Fill
buttonData[7] = {
  html: `<button class="btn-7"><span class="btn-icon"><i class="fas fa-info-circle"></i><span>Learn More</span></button>`,
  css: `.btn-7 { padding: 14px 30px; border: 2px solid #8e44ad; border-radius: 25px; background: transparent; color: #8e44ad; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; position: relative; overflow: hidden; }
.btn-7::before { content: ""; position: absolute; inset: 0; background: #8e44ad; transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; z-index: -1; }
.btn-7:hover { color: white; }
.btn-7:hover::before { transform: scaleX(1); }`,
  js: `// No JavaScript required`,
};

// Button 8 - Pulse Animation
buttonData[8] = {
  html: `<button class="btn-8"><span class="btn-icon"><i class="fas fa-bell"></i><span>Subscribe</span></button>`,
  css: `.btn-8 { padding: 14px 30px; border: none; border-radius: 25px; background: #e67e22; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(230, 126, 34, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(230, 126, 34, 0); } 100% { box-shadow: 0 0 0 0 rgba(230, 126, 34, 0); } }
.btn-8:hover { background: #d35400; animation: none; transform: scale(1.05); }`,
  js: `// No JavaScript required`,
};

// Button 9 - Slide Icon
buttonData[9] = {
  html: `<button class="btn-9"><span class="btn-icon"><i class="fas fa-envelope"></i><span>Contact Us</span></button>`,
  css: `.btn-9 { padding: 14px 30px; border: 2px solid #1abc9c; border-radius: 50px; background: transparent; color: #1abc9c; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; overflow: hidden; }
.btn-9 i { transition: transform 0.3s ease; }
.btn-9:hover { background: #1abc9c; color: white; }
.btn-9:hover i { transform: translateX(5px); }`,
  js: `// No JavaScript required`,
};

// Button 10 - Skew Transform
buttonData[10] = {
  html: `<button class="btn-10"><span class="btn-icon"><i class="fas fa-shopping-cart"></i><span>Shop Now</span></button>`,
  css: `.btn-10 { padding: 14px 30px; border: none; border-radius: 25px; background: #e91e63; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; transform: skewX(-10deg); }
.btn-10:hover { background: #c2185b; transform: skewX(-10deg) translateX(10px); }
.btn-10 span, .btn-10 i { transform: skewX(10deg); }`,
  js: `// No JavaScript required`,
};

// Buttons 11-20 - HTML + CSS Format
buttonData[11] = {
  html: `<button class="btn-11"><span class="btn-icon"><i class="fas fa-users"></i><span>Join Now</span></button>`,
  css: `.btn-11 { padding: 14px 30px; border: none; border-radius: 25px; background: #2c3e50; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }
.btn-11 i { width: 28px; height: 28px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
.btn-11:hover { background: #34495e; transform: translateY(-3px); }
.btn-11:hover i { background: white; color: #2c3e50; }`,
  js: `// No JavaScript required`,
};

buttonData[12] = {
  html: `<button class="btn-12"><span class="btn-icon"><i class="fas fa-book-reader"></i><span>Read More</span></button>`,
  css: `.btn-12 { padding: 14px 30px; border: none; border-radius: 25px; background: #ffc107; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; position: relative; overflow: hidden; }
.btn-12::after { content: ""; position: absolute; top: -50%; left: -100%; width: 50%; height: 200%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transform: skewX(-25deg); transition: left 0.5s; }
.btn-12:hover::after { left: 150%; }
.btn-12:hover { transform: translateY(-2px); }`,
  js: `// No JavaScript required`,
};

buttonData[13] = {
  html: `<button class="btn-13"><span class="btn-icon"><i class="fas fa-user-plus"></i><span>Register</span></button>`,
  css: `.btn-13 { padding: 14px 30px; border: none; border-radius: 25px; background: #00bcd4; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }
.btn-13 i { transition: transform 0.3s; }
.btn-13:hover { background: #00acc1; }
.btn-13:hover i { animation: bounce 0.5s ease infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }`,
  js: `// No JavaScript required`,
};

buttonData[14] = {
  html: `<button class="btn-14"><span class="btn-icon"><i class="fas fa-user-circle"></i><span>View Profile</span></button>`,
  css: `.btn-14 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }
.btn-14:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(102,126,234,0.5); }`,
  js: `// No JavaScript required`,
};

buttonData[15] = {
  html: `<button class="btn-15"><span class="btn-icon"><i class="fas fa-arrow-right"></i><span>Continue</span></button>`,
  css: `.btn-15 { padding: 14px 30px; border: none; border-radius: 25px; background: #8bc34a; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }
.btn-15 i { transition: transform 0.3s; }
.btn-15:hover { background: #7cb342; }
.btn-15:hover i { transform: scale(1.3); }`,
  js: `// No JavaScript required`,
};

buttonData[16] = {
  html: `<button class="btn-16"><span class="btn-icon"><i class="fas fa-cart-plus"></i><span>Add to Cart</span></button>`,
  css: `.btn-16 { padding: 14px 30px; border: none; border-radius: 25px; background: #3f51b5; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }
.btn-16 i { transition: transform 0.3s; }
.btn-16:hover { background: #303f9f; }
.btn-16:hover i { transform: rotate(360deg); }`,
  js: `// No JavaScript required`,
};

buttonData[17] = {
  html: `<button class="btn-17"><span class="btn-icon"><i class="fas fa-credit-card"></i><span>Buy Now</span></button>`,
  css: `.btn-17 { padding: 14px 30px; border: none; border-radius: 25px; background: #f44336; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }
.btn-17 i { transition: transform 0.3s; }
.btn-17:hover { background: #d32f2f; }
.btn-17:hover i { transform: translateX(-5px); }`,
  js: `// No JavaScript required`,
};

buttonData[18] = {
  html: `<button class="btn-18"><span class="btn-icon"><i class="fas fa-play"></i><span>Start Free</span></button>`,
  css: `.btn-18 { padding: 14px 30px; border: none; border-radius: 25px; background: #4caf50; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; box-shadow: 0 0 15px rgba(76,175,80,0.4); }
.btn-18:hover { transform: translateY(-3px); box-shadow: 0 0 25px rgba(76,175,80,0.6); }`,
  js: `// No JavaScript required`,
};

buttonData[19] = {
  html: `<button class="btn-19"><span class="btn-icon"><i class="fas fa-flask"></i><span>Try It Free</span></button>`,
  css: `.btn-19 { padding: 14px 30px; border: none; border-radius: 25px; background: #ffeb3b; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }
.btn-19:hover { background: #fdd835; transform: skewX(-15deg); }
.btn-19 span, .btn-19 i { transition: transform 0.3s; }
.btn-19:hover span, .btn-19:hover i { transform: skewX(15deg); }`,
  js: `// No JavaScript required`,
};

buttonData[20] = {
  html: `<button class="btn-20"><span class="btn-icon"><i class="fas fa-ellipsis-h"></i><span>See More</span></button>`,
  css: `.btn-20 { padding: 14px 30px; border: none; border-radius: 25px; background: #795548; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; position: relative; overflow: hidden; }
.btn-20::before { content: ""; position: absolute; width: 100%; height: 100%; top: 0; left: 0; background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%); transform: scale(0); transition: transform 0.5s; }
.btn-20:hover::before { transform: scale(2); }
.btn-20:hover { transform: translateY(-3px); }`,
  js: `// No JavaScript required`,
};

// Buttons 21-100 - HTML + CSS Format
buttonData[21] = {
  html: `<button class="btn-21"><span class="btn-icon"><i class="fas fa-chevron-right"></i><span>Next</span></button>`,
  css: `.btn-21 { padding: 14px 30px; border: none; border-radius: 25px; background: #03a9f4; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[22] = {
  html: `<button class="btn-22"><span class="btn-icon"><i class="fas fa-chevron-left"></i><span>Previous</span></button>`,
  css: `.btn-22 { padding: 14px 30px; border: none; border-radius: 25px; background: #9e9e9e; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[23] = {
  html: `<button class="btn-23"><span class="btn-icon"><i class="fas fa-check-circle"></i><span>Submit</span></button>`,
  css: `.btn-23 { padding: 14px 30px; border: none; border-radius: 25px; background: #607d8b; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[24] = {
  html: `<button class="btn-24"><span class="btn-icon"><i class="fas fa-save"></i><span>Save</span></button>`,
  css: `.btn-24 { padding: 14px 30px; border: none; border-radius: 25px; background: #0d47a1; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[25] = {
  html: `<button class="btn-25"><span class="btn-icon"><i class="fas fa-trash"></i><span>Delete</span></button>`,
  css: `.btn-25 { padding: 14px 30px; border: none; border-radius: 25px; background: #cddc39; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[26] = {
  html: `<button class="btn-26"><span class="btn-icon"><i class="fas fa-edit"></i><span>Edit</span></button>`,
  css: `.btn-26 { padding: 14px 30px; border: none; border-radius: 25px; background: #f06292; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[27] = {
  html: `<button class="btn-27"><span class="btn-icon"><i class="fas fa-share-alt"></i><span>Share</span></button>`,
  css: `.btn-27 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff5722; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[28] = {
  html: `<button class="btn-28"><span class="btn-icon"><i class="fas fa-user-plus"></i><span>Follow</span></button>`,
  css: `.btn-28 { padding: 14px 30px; border: none; border-radius: 25px; background: #9c27b0; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[29] = {
  html: `<button class="btn-29"><span class="btn-icon"><i class="fas fa-heart"></i><span>Like</span></button>`,
  css: `.btn-29 { padding: 14px 30px; border: none; border-radius: 25px; background: #00e676; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[30] = {
  html: `<button class="btn-30"><span class="btn-icon"><i class="fas fa-comment"></i><span>Comment</span></button>`,
  css: `.btn-30 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff80ab; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};

// Continue buttons 31-100
buttonData[31] = {
  html: `<button class="btn-31"><span class="btn-icon"><i class="fas fa-comment-dots"></i><span>Message</span></button>`,
  css: `.btn-31 { padding: 14px 30px; border: none; border-radius: 25px; background: #18ffff; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[32] = {
  html: `<button class="btn-32"><span class="btn-icon"><i class="fas fa-phone"></i><span>Call Now</span></button>`,
  css: `.btn-32 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, #f093fb, #f5576c) border-box; border: 2px solid transparent; color: #f5576c; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[33] = {
  html: `<button class="btn-33"><span class="btn-icon"><i class="fas fa-at"></i><span>Email Us</span></button>`,
  css: `.btn-33 { padding: 14px 30px; border: none; border-radius: 25px; background: #ffff00; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[34] = {
  html: `<button class="btn-34"><span class="btn-icon"><i class="fas fa-map-marker-alt"></i><span>Visit Us</span></button>`,
  css: `.btn-34 { padding: 14px 30px; border: 2px solid #ffab40; border-radius: 25px; background: transparent; color: #ffab40; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[35] = {
  html: `<button class="btn-35"><span class="btn-icon"><i class="fas fa-calendar-check"></i><span>Book Now</span></button>`,
  css: `.btn-35 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff5252; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[36] = {
  html: `<button class="btn-36"><span class="btn-icon"><i class="fas fa-clipboard-list"></i><span>Order Now</span></button>`,
  css: `.btn-36 { padding: 14px 30px; border: 3px solid #e91e63; border-radius: 30px; background: transparent; color: #e91e63; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[37] = {
  html: `<button class="btn-37"><span class="btn-icon"><i class="fas fa-calendar-alt"></i><span>Reserve</span></button>`,
  css: `.btn-37 { padding: 14px 30px; border: none; border-radius: 25px; background: #00bcd4; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[38] = {
  html: `<button class="btn-38"><span class="btn-icon"><i class="fas fa-clock"></i><span>Schedule</span></button>`,
  css: `.btn-38 { padding: 14px 30px; border: none; border-radius: 25px; background: #9c27b0; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[39] = {
  html: `<button class="btn-39"><span class="btn-icon"><i class="fas fa-calendar-plus"></i><span>Book Appointment</span></button>`,
  css: `.btn-39 { padding: 14px 30px; border: none; border-radius: 25px; background: #673ab7; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[40] = {
  html: `<button class="btn-40"><span class="btn-icon"><i class="fas fa-file-invoice-dollar"></i><span>Get Quote</span></button>`,
  css: `.btn-40 { padding: 14px 30px; border: none; border-radius: 50px; background: #4caf50; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};

// Buttons 41-60
buttonData[41] = {
  html: `<button class="btn-41"><span class="btn-icon"><i class="fas fa-stopwatch"></i><span>Start Trial</span></button>`,
  css: `.btn-41 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff9800; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[42] = {
  html: `<button class="btn-42"><span class="btn-icon"><i class="fas fa-sign-in"></i><span>Sign In</span></button>`,
  css: `.btn-42 { width: 140px; height: 50px; border: none; border-radius: 25px; background: #3f51b5; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.5s; }`,
};
buttonData[43] = {
  html: `<button class="btn-43"><span class="btn-icon"><i class="fas fa-door-open"></i><span>Log In</span></button>`,
  css: `.btn-43 { padding: 14px 30px; border: none; border-radius: 5px; background: #009688; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transform: skewX(-20deg); transition: all 0.3s; }`,
};
buttonData[44] = {
  html: `<button class="btn-44"><span class="btn-icon"><i class="fas fa-user-check"></i><span>Sign Up Free</span></button>`,
  css: `.btn-44 { padding: 14px 30px; border: none; border-radius: 25px; background: #673ab7; color: white; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[45] = {
  html: `<button class="btn-45"><span class="btn-icon"><i class="fas fa-user-cog"></i><span>Create Account</span></button>`,
  css: `.btn-45 { padding: 14px 30px; border: 4px solid #f44336; border-radius: 30px; background: transparent; color: #f44336; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[46] = {
  html: `<button class="btn-46"><span class="btn-icon"><i class="fas fa-gift"></i><span>Get Started Free</span></button>`,
  css: `.btn-46 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6b8dd6 100%); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; background-size: 200% 200%; }`,
};
buttonData[47] = {
  html: `<button class="btn-47"><span class="btn-icon"><i class="fas fa-folder-open"></i><span>Start Project</span></button>`,
  css: `.btn-47 { padding: 14px 30px; border: none; border-radius: 25px; background: #000; color: #0ff; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; box-shadow: 0 0 10px #0ff, 0 0 20px #0ff; }`,
};
buttonData[48] = {
  html: `<button class="btn-48"><span class="btn-icon"><i class="fas fa-rocket"></i><span>Launch</span></button>`,
  css: `.btn-48 { padding: 14px 30px; border: none; border-radius: 25px; background: rgba(255, 255, 255, 0.1); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); transition: all 0.3s; }`,
};
buttonData[49] = {
  html: `<button class="btn-49"><span class="btn-icon"><i class="fas fa-cloud-upload-alt"></i><span>Deploy</span></button>`,
  css: `.btn-49 { padding: 14px 30px; border: none; border-radius: 25px; background: #2196f3; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.1s; box-shadow: 0 6px 0 #1976d2; }`,
};
buttonData[50] = {
  html: `<button class="btn-50"><span class="btn-icon"><i class="fas fa-download"></i><span>Install</span></button>`,
  css: `.btn-50 { padding: 14px 30px; border: 2px dashed #9c27b0; border-radius: 25px; background: transparent; color: #9c27b0; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};

// Buttons 51-70
buttonData[51] = {
  html: `<button class="btn-51"><span class="btn-icon"><i class="fas fa-arrow-up"></i><span>Upgrade</span></button>`,
  css: `.btn-51 { padding: 14px 30px; border: none; border-radius: 30px; background: linear-gradient(45deg, #11998e, #38ef7d); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[52] = {
  html: `<button class="btn-52"><span class="btn-icon"><i class="fas fa-sync"></i><span>Renew</span></button>`,
  css: `.btn-52 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff6b6b; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[53] = {
  html: `<button class="btn-53"><span class="btn-icon"><i class="fas fa-redo"></i><span>Refresh</span></button>`,
  css: `.btn-53 { padding: 14px 30px; border: none; border-radius: 25px; background: #48dbfb; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[54] = {
  html: `<button class="btn-54"><span class="btn-icon"><i class="fas fa-undo"></i><span>Reload</span></button>`,
  css: `.btn-54 { padding: 14px 30px; border: none; border-radius: 25px; background: #1dd1a1; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(29, 209, 161, 0.4); }`,
};
buttonData[55] = {
  html: `<button class="btn-55"><span class="btn-icon"><i class="fas fa-cloud-download-alt"></i><span>Update</span></button>`,
  css: `.btn-55 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff9ff3; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[56] = {
  html: `<button class="btn-56"><span class="btn-icon"><i class="fas fa-sync-alt"></i><span>Sync</span></button>`,
  css: `.btn-56 { padding: 14px 30px; border: none; border-radius: 25px; background: #54a0ff; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[57] = {
  html: `<button class="btn-57"><span class="btn-icon"><i class="fas fa-file-export"></i><span>Export</span></button>`,
  css: `.btn-57 { padding: 14px 30px; border: none; border-radius: 30px; background: #5f27cd; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[58] = {
  html: `<button class="btn-58"><span class="btn-icon"><i class="fas fa-file-import"></i><span>Import</span></button>`,
  css: `.btn-58 { padding: 14px 30px; border: none; border-radius: 25px; background: #c8d6e5; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[59] = {
  html: `<button class="btn-59"><span class="btn-icon"><i class="fas fa-cloud-upload-alt"></i><span>Upload</span></button>`,
  css: `.btn-59 { padding: 14px 30px; border: none; border-radius: 25px; background: #222f3e; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[60] = {
  html: `<button class="btn-60"><span class="btn-icon"><i class="fas fa-mobile-alt"></i><span>Download App</span></button>`,
  css: `.btn-60 { padding: 14px 30px; border: none; border-radius: 50px; background: #feca57; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};

// Buttons 61-80
buttonData[61] = {
  html: `<button class="btn-61"><span class="btn-icon"><i class="fas fa-play"></i><span>Play</span></button>`,
  css: `.btn-61 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff6348; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[62] = {
  html: `<button class="btn-62"><span class="btn-icon"><i class="fas fa-pause"></i><span>Pause</span></button>`,
  css: `.btn-62 { padding: 14px 30px; border: none; border-radius: 25px; background: #2e86de; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(46, 134, 222, 0.4); }`,
};
buttonData[63] = {
  html: `<button class="btn-63"><span class="btn-icon"><i class="fas fa-stop"></i><span>Stop</span></button>`,
  css: `.btn-63 { padding: 14px 30px; border: none; border-radius: 25px; background: #a55eea; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[64] = {
  html: `<button class="btn-64"><span class="btn-icon"><i class="fas fa-forward"></i><span>Skip</span></button>`,
  css: `.btn-64 { padding: 14px 30px; border: none; border-radius: 30px; background: #26de81; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[65] = {
  html: `<button class="btn-65"><span class="btn-icon"><i class="fas fa-backward"></i><span>Back</span></button>`,
  css: `.btn-65 { padding: 14px 30px; border: none; border-radius: 25px; background: #fed330; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[66] = {
  html: `<button class="btn-66"><span class="btn-icon"><i class="fas fa-arrow-right"></i><span>Forward</span></button>`,
  css: `.btn-66 { padding: 14px 30px; border: 3px solid #4bcffa; border-radius: 30px; background: transparent; color: #4bcffa; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[67] = {
  html: `<button class="btn-67"><span class="btn-icon"><i class="fas fa-expand"></i><span>Expand</span></button>`,
  css: `.btn-67 { padding: 14px 30px; border: none; border-radius: 25px; background: #0fb9b1; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[68] = {
  html: `<button class="btn-68"><span class="btn-icon"><i class="fas fa-compress"></i><span>Collapse</span></button>`,
  css: `.btn-68 { padding: 14px 30px; border: none; border-radius: 25px; background: #575fcf; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[69] = {
  html: `<button class="btn-69"><span class="btn-icon"><i class="fas fa-search-plus"></i><span>Zoom In</span></button>`,
  css: `.btn-69 { padding: 14px 30px; border: none; border-radius: 25px; background: #f53b57; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[70] = {
  html: `<button class="btn-70"><span class="btn-icon"><i class="fas fa-search-minus"></i><span>Zoom Out</span></button>`,
  css: `.btn-70 { padding: 14px 30px; border: none; border-radius: 25px; background: #0be881; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};

// Buttons 71-90
buttonData[71] = {
  html: `<button class="btn-71"><span class="btn-icon"><i class="fas fa-expand-arrows-alt"></i><span>Fullscreen</span></button>`,
  css: `.btn-71 { padding: 14px 30px; border: none; border-radius: 30px; background: #3c40c6; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[72] = {
  html: `<button class="btn-72"><span class="btn-icon"><i class="fas fa-print"></i><span>Print</span></button>`,
  css: `.btn-72 { padding: 14px 30px; border: none; border-radius: 25px; background: #d1ccc0; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[73] = {
  html: `<button class="btn-73"><span class="btn-icon"><i class="fas fa-eye"></i><span>Preview</span></button>`,
  css: `.btn-73 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff7f50; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[74] = {
  html: `<button class="btn-74"><span class="btn-icon"><i class="fas fa-upload"></i><span>Publish</span></button>`,
  css: `.btn-74 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(135deg, #12c2e9, #c471ed, #f64f59); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[75] = {
  html: `<button class="btn-75"><span class="btn-icon"><i class="fas fa-file-medical"></i><span>Save Draft</span></button>`,
  css: `.btn-75 { padding: 14px 30px; border: none; border-radius: 25px; background: #f64f59; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[76] = {
  html: `<button class="btn-76"><span class="btn-icon"><i class="fas fa-paper-plane"></i><span>Post</span></button>`,
  css: `.btn-76 { padding: 14px 30px; border: none; border-radius: 30px; background: #c8d6e5; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[77] = {
  html: `<button class="btn-77"><span class="btn-icon"><i class="fas fa-file-upload"></i><span>Upload File</span></button>`,
  css: `.btn-77 { padding: 14px 30px; border: none; border-radius: 25px; background: #222f3e; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[78] = {
  html: `<button class="btn-78"><span class="btn-icon"><i class="fas fa-paper-plane"></i><span>Send Message</span></button>`,
  css: `.btn-78 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff9ff3; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[79] = {
  html: `<button class="btn-79"><span class="btn-icon"><i class="fas fa-search"></i><span>Search</span></button>`,
  css: `.btn-79 { padding: 14px 30px; border: none; border-radius: 25px; background: #54a0ff; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[80] = {
  html: `<button class="btn-80"><span class="btn-icon"><i class="fas fa-filter"></i><span>Filter</span></button>`,
  css: `.btn-80 { padding: 14px 30px; border: none; border-radius: 30px; background: #5f27cd; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(95, 39, 205, 0.4); }`,
};

// Buttons 81-100
buttonData[81] = {
  html: `<button class="btn-81"><span class="btn-icon"><i class="fas fa-sort"></i><span>Sort</span></button>`,
  css: `.btn-81 { padding: 14px 30px; border: none; border-radius: 25px; background: #01a3a4; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[82] = {
  html: `<button class="btn-82"><span class="btn-icon"><i class="fas fa-check-square"></i><span>Select</span></button>`,
  css: `.btn-82 { padding: 14px 30px; border: none; border-radius: 25px; background: #ee5253; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[83] = {
  html: `<button class="btn-83"><span class="btn-icon"><i class="fas fa-check-double"></i><span>Select All</span></button>`,
  css: `.btn-83 { padding: 14px 30px; border: none; border-radius: 25px; background: #0abde3; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[84] = {
  html: `<button class="btn-84"><span class="btn-icon"><i class="fas fa-times-circle"></i><span>Clear</span></button>`,
  css: `.btn-84 { padding: 14px 30px; border: none; border-radius: 30px; background: #f368e0; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[85] = {
  html: `<button class="btn-85"><span class="btn-icon"><i class="fas fa-undo-alt"></i><span>Reset</span></button>`,
  css: `.btn-85 { padding: 14px 30px; border: none; border-radius: 25px; background: #2e86de; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[86] = {
  html: `<button class="btn-86"><span class="btn-icon"><i class="fas fa-ban"></i><span>Cancel</span></button>`,
  css: `.btn-86 { padding: 14px 30px; border: none; border-radius: 25px; background: #c8d6e5; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[87] = {
  html: `<button class="btn-87"><span class="btn-icon"><i class="fas fa-check-double"></i><span>Confirm</span></button>`,
  css: `.btn-87 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff6348; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[88] = {
  html: `<button class="btn-88"><span class="btn-icon"><i class="fas fa-check-circle"></i><span>Approve</span></button>`,
  css: `.btn-88 { padding: 14px 30px; border: none; border-radius: 25px; background: #1dd1a1; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(29, 209, 161, 0.4); }`,
};
buttonData[89] = {
  html: `<button class="btn-89"><span class="btn-icon"><i class="fas fa-times-circle"></i><span>Reject</span></button>`,
  css: `.btn-89 { padding: 14px 30px; border: none; border-radius: 30px; background: #fed330; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[90] = {
  html: `<button class="btn-90"><span class="btn-icon"><i class="fas fa-check"></i><span>Accept</span></button>`,
  css: `.btn-90 { padding: 14px 30px; border: none; border-radius: 25px; background: #ff5252; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};

// Buttons 91-100
buttonData[91] = {
  html: `<button class="btn-91"><span class="btn-icon"><i class="fas fa-minus-circle"></i><span>Decline</span></button>`,
  css: `.btn-91 { padding: 14px 30px; border: none; border-radius: 25px; background: #4bcffa; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[92] = {
  html: `<button class="btn-92"><span class="btn-icon"><i class="fas fa-check-square"></i><span>Allow</span></button>`,
  css: `.btn-92 { padding: 14px 30px; border: none; border-radius: 25px; background: #05c46b; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[93] = {
  html: `<button class="btn-93"><span class="btn-icon"><i class="fas fa-ban"></i><span>Block</span></button>`,
  css: `.btn-93 { padding: 14px 30px; border: none; border-radius: 30px; background: #485460; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[94] = {
  html: `<button class="btn-94"><span class="btn-icon"><i class="fas fa-toggle-on"></i><span>Enable</span></button>`,
  css: `.btn-94 { padding: 14px 30px; border: none; border-radius: 25px; background: #d2dae2; color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[95] = {
  html: `<button class="btn-95"><span class="btn-icon"><i class="fas fa-toggle-off"></i><span>Disable</span></button>`,
  css: `.btn-95 { padding: 14px 30px; border: none; border-radius: 25px; background: #808e9b; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[96] = {
  html: `<button class="btn-96"><span class="btn-icon"><i class="fas fa-lock"></i><span>Lock</span></button>`,
  css: `.btn-96 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[97] = {
  html: `<button class="btn-97"><span class="btn-icon"><i class="fas fa-lock-open"></i><span>Unlock</span></button>`,
  css: `.btn-97 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[98] = {
  html: `<button class="btn-98"><span class="btn-icon"><i class="fas fa-eye-slash"></i><span>Hide</span></button>`,
  css: `.btn-98 { padding: 14px 30px; border: none; border-radius: 30px; background: linear-gradient(to right, #fa709a 0%, #fee140 100%); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[99] = {
  html: `<button class="btn-99"><span class="btn-icon"><i class="fas fa-eye"></i><span>Show</span></button>`,
  css: `.btn-99 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%); color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};
buttonData[100] = {
  html: `<button class="btn-100"><span class="btn-icon"><i class="fas fa-check-double"></i><span>Done</span></button>`,
  css: `.btn-100 { padding: 14px 30px; border: none; border-radius: 25px; background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); color: #333; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }`,
};

// Modal and Copy Functions
const modal = document.getElementById("codeModal");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".get-code").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const btnNum = this.getAttribute("data-btn");
    const btnInfo = buttonData[btnNum];

    if (btnInfo) {
      let htmlCode = "";
      let cssCode = "";
      let jsCode = "";

      // Links for HTML
      const links = `<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">`;

      if (btnInfo.code) {
        // Already full HTML - use as is for HTML tab
        htmlCode = btnInfo.code;
        // Extract CSS from full code
        const cssMatch = btnInfo.code.match(/<style>([\s\S]*?)<\/style>/);
        if (cssMatch) {
          cssCode = cssMatch[1].trim();
        }
        jsCode = "// No JavaScript required";
      } else if (btnInfo.html && btnInfo.css) {
        // Create full HTML template with head, body
        htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button</title>
  ${links}
  <style>
${btnInfo.css}
  </style>
</head>
<body>
  ${btnInfo.html}
</body>
</html>`;
        cssCode = btnInfo.css;
      }

      // JavaScript section
      if (btnNum === "1") {
        jsCode = `/* No JavaScript required - CSS handles the animation */`;
      } else if (btnNum === "3") {
        jsCode = `/* No JavaScript required - CSS handles the animation */`;
      } else if (btnNum === "8") {
        jsCode = `/* No JavaScript required - CSS handles the animation */`;
      } else if (btnNum === "13") {
        jsCode = `/* No JavaScript required - CSS handles the animation */`;
      } else {
        jsCode = "// No JavaScript required for this button";
      }

      document.getElementById("htmlCode").textContent = htmlCode;
      document.getElementById("cssCode").textContent = cssCode;
      document.getElementById("jsCode").textContent = jsCode;
      modal.style.display = "block";
    }
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Tab functionality
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const tabName = this.getAttribute("data-tab");

    // Remove active class from all buttons and contents
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));

    // Add active class to clicked button and corresponding content
    this.classList.add("active");
    document.getElementById("tab-" + tabName).classList.add("active");
  });
});

function copyCode(elementId, btn) {
  const codeText = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(codeText).then(
    function () {
      // Show success feedback
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      btn.style.background = "#4caf50";

      setTimeout(function () {
        btn.innerHTML = originalText;
        btn.style.background = "";
      }, 2000);
    },
    function (err) {
      console.error("Could not copy text: ", err);
    },
  );
}

function copyAllCode() {
  const htmlCode = document.getElementById("htmlCode").textContent;
  const cssCode = document.getElementById("cssCode").textContent;
  const jsCode = document.getElementById("jsCode").textContent;

  // Copy full HTML as is
  navigator.clipboard.writeText(htmlCode).then(
    function () {
      // Show success feedback
      const btn = document.querySelector(".copy-all-btn");
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      btn.style.background = "#4caf50";

      setTimeout(function () {
        btn.innerHTML = originalText;
        btn.style.background = "";
      }, 2000);
    },
    function (err) {
      console.error("Could not copy text: ", err);
    },
  );
}

// Category Filter Functionality
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const category = this.getAttribute("data-category");

    // Update active button
    document
      .querySelectorAll(".category-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    // Filter buttons
    document.querySelectorAll(".button-item").forEach((item) => {
      if (
        category === "all" ||
        item.getAttribute("data-category") === category
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
