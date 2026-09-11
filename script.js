const menu=document.getElementById('menuBtn'),nav=document.getElementById('navLinks'),theme=document.getElementById('themeBtn');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const saved=localStorage.getItem('theme');if(saved==='light'){document.body.classList.add('light');theme.textContent='☀'}
theme.addEventListener('click',()=>{document.body.classList.toggle('light');const light=document.body.classList.contains('light');theme.textContent=light?'☀':'☾';localStorage.setItem('theme',light?'light':'dark')});
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.nav nav a')];
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55%'});sections.forEach(s=>obs.observe(s));
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;const n=f.name.value,m=f.message.value;const subject=encodeURIComponent('Portfolio contact from '+n);const body=encodeURIComponent(m+'\n\nFrom: '+n+' ('+f.email.value+')');window.location.href=`mailto:ayushsagar583@gmail.com?subject=${subject}&body=${body}`;document.getElementById('formStatus').textContent='Opening your email app…'});
