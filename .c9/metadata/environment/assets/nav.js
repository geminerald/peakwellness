{"filter":false,"title":"nav.js","tooltip":"/assets/nav.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":18,"column":11},"action":"insert","lines":["const navSlide = () => {","    const burger = document.querySelector('.burger');","    const nav = document.querySelector('.nav-links');","    const navLinks = document.querySelectorAll('.nav-links li');","","    burger.addEventListener('click', () => {","        nav.classList.toggle('nav-active');","        navLinks.forEach((link, index) => {","            if (link.style.animation) {","                link.style.animation = '';","            } else {","                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`;","            }","        });","        burger.classList.toggle('toggle');","    });","}","","navSlide();"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":11},"end":{"row":18,"column":11},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1564056803699,"hash":"03a80a1e0d076eee2b9581488db9550f42c38180"}