function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.form-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.msg').forEach(m => m.classList.remove('show'));

    if (tab === 'signin') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('signinSection').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('signupSection').classList.add('active');
    }
}

// يمكنك إكمال بقية كود الـ submit كما هو، سيعمل بشكل طبيعي مع العناصر الجديدة.