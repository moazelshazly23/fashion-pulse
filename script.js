document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('productsSection').classList.add('hidden');
});

document.getElementById('productsLink').addEventListener('click', function() {
    document.getElementById('productsSection').classList.remove('hidden');
    document.getElementById('loginSection').classList.add('hidden');
    loadProducts();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // هنا يمكنك إضافة كود للتحقق من بيانات تسجيل الدخول
    alert(`تم تسجيل الدخول بنجاح! مرحبًا، ${email}`);
});

function loadProducts() {
    const products = [
        { name: 'قميص أنيق', price: 100 },
        { name: 'حذاء رياضي', price: 250 },
        { name: 'فستان صيفي', price: 200 }
    ];
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h3>${product.name}</h3><p>السعر: ${product.price} ريال</p>`;
        productsDiv.appendChild(productDiv);
    });
}
