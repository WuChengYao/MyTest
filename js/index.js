var oWidth = document.querySelector('#body');
// 選單漢堡條
var oNavBurger = document.querySelector('.navbar_burger')
var oAddClass_1 = document.querySelector('.burger_1')
var oAddClass_2 = document.querySelector('.burger_2')
var oAddClass_3 = document.querySelector('.burger_3')
var oAddClass_BurgerMenu = document.querySelector('.navbar_burger_menu')
//點擊事件涵式
oNavBurger.addEventListener('click', navBtnHandler)

function navBtnHandler() {
    oAddClass_1.classList.toggle('navbar_burger_1a')
    oAddClass_2.classList.toggle('navbar_burger_2a')
    oAddClass_3.classList.toggle('navbar_burger_3a')

    if (oAddClass_BurgerMenu.classList.contains('burger_menu_2') == true) {
        oAddClass_BurgerMenu.classList.remove('burger_menu_2');
    } else {
        oAddClass_BurgerMenu.classList.add('burger_menu_2');
    }

    oWidth.onresize = function () {
        // 如果螢幕寬度轉換大於770上面class全刪除
        var aWidth = window.outerWidth;
        if (aWidth > 770 & oAddClass_BurgerMenu.classList.contains('burger_menu_2') == true) {
            oAddClass_BurgerMenu.classList.remove('burger_menu_2');
            oAddClass_1.classList.remove('navbar_burger_1a');
            oAddClass_2.classList.remove('navbar_burger_2a');
            oAddClass_3.classList.remove('navbar_burger_3a');
        }
    }
}
// navbar下滾隱藏上滾顯示
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var Onavbar = document.querySelector("#navbar");
    if (prevScrollpos > currentScrollPos) {
        Onavbar.classList.add('nav_block');
    } else {
        Onavbar.classList.remove('nav_block');
    }
    prevScrollpos = currentScrollPos;
}
var navbar_off = document.querySelector('#navbar');
var navbar_off_as = navbar_off.querySelectorAll('a');

navbar_off_as.forEach(navbar_off_a => {
    navbar_off_a.onclick =function () {
        oAddClass_BurgerMenu.classList.remove('burger_menu_2');
        oAddClass_1.classList.remove('navbar_burger_1a');
        oAddClass_2.classList.remove('navbar_burger_2a');
        oAddClass_3.classList.remove('navbar_burger_3a');
    }
});

//輪播圖
var oIn = document.querySelector('.section_1_swiper');
var oInner = oIn.querySelector('.swiper-wrapper');
var oBg_img = ['images/swiper_img/swiper_1.jpg', 'images/swiper_img/swiper_2.jpg', 'images/swiper_img/swiper_3.jpg', 'images/swiper_img/swiper_4.jpg', 'images/swiper_img/swiper_5.jpg', 'images/swiper_img/swiper_6.jpg'];

oBg_img.forEach(bg_img => {
    oInner.innerHTML += `<div class="swiper-slide">
           <div class="Slide_bg" style="background-image:url('${bg_img}');"></div>
       </div>`;
});
// swiper重置
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//最新消息標籤顯示頁
var btns = document.querySelectorAll(".tab_btn");
var tab_contents = document.querySelectorAll(".tab_content");

function deleActive() {
    for (let index = 0; index < btns.length; index++) {
        const btn = btns[index];
        const tab_content = tab_contents[index];

        tab_content.classList.remove("active");
        btn.classList.remove("active");
    }
}
btns.forEach((btn, aa) => {
    const tab_content = tab_contents[aa];

    btn.onclick = function () {
        deleActive();
        btn.classList.add('active');
        tab_content.classList.add('active');
    }
});

// 莊園導覽
var pages = new Array('one', 'two', 'three', 'four');
var wrapper = document.querySelector('.wrapper');

function toggleMenu() {
    wrapper.classList.toggle('menu-open');
}

var OnSection = document.querySelectorAll('.section_all');
OnSection.onclick = function () {
    if (wrapper.classList.contains('menu-open') == true) {
        wrapper.classList.remove('menu-open');
    } else {
        wrapper.classList.add('menu-open');
    }
}

function goToPage(page) {
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var sections = wrapper.getElementsByTagName('section');
    sections
    for (i = 0; i < sections.length; i++) {
        sections[i].classList.remove('before', 'after');
        if (i > page) {
            sections[i].classList.add('after');
        }
    }
    wrapper.classList.remove('menu-open', 'page-one', 'page-two');
    wrapper.classList.add('page-' + pages[page]);
}
//莊園導覽內容區
//one
var myOneImg = 0;
carousel();

function carousel() {
    var i;
    var x = document.querySelectorAll(".myone_main");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myOneImg++;
    if (myOneImg > x.length) {
        myOneImg = 1
    }
    x[myOneImg - 1].style.display = "flex";
    setTimeout(carousel, 9000);
}
//two

// three
lightbox.option({
    'resizeDuration': 2000,
    'wrapAround': true,
    'disableScrolling': true,
})

// 交通指南
var bodytop = document.querySelector('#body');
var mywindow = window;
var prevScroll = mywindow.pageYOffset;

mywindow.addEventListener('scroll', scrollBlock);

function scrollBlock() {
    var oScroll_1 = document.documentElement.scrollTop;
    var spin_a = document.querySelector('.spin');
    var spin_img_as = document.querySelectorAll('.spin_img');
    if (oScroll_1 > 815) {
        spin_img_as.forEach(spin_img_a => {
            spin_img_a.classList.add('active');
        });
        spin_a.classList.add('active');
    }
}