// 移动端菜单交互
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// 点击页面其他地方关闭菜单
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// 字数统计
const promptInput = document.querySelector('.prompt-input');
const wordCount = document.querySelector('.word-count');

promptInput.addEventListener('input', () => {
    const count = promptInput.value.length;
    wordCount.textContent = `${count}/500`;
});

// 清空按钮
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    promptInput.value = '';
    wordCount.textContent = '0/500';
});

// 数量选择器
const quantityBtns = document.querySelectorAll('.quantity-btn');
const quantityDisplay = document.querySelector('.quantity');
let quantity = 4;

quantityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent === '+' && quantity < 8) {
            quantity++;
        } else if (btn.textContent === '-' && quantity > 1) {
            quantity--;
        }
        quantityDisplay.textContent = quantity;
    });
});

// 图片加载动画
document.querySelectorAll('.gallery-item img').forEach(img => {
    if (img.complete) {
        img.classList.add('loaded');
    } else {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    }
});

// 筛选按钮切换
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
    });
}); 