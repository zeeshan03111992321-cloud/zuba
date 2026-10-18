(function(){
var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);});}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var lb=document.getElementById('lb');
if(lb){var im=lb.querySelector('img');
document.addEventListener('click',function(e){var b=e.target.closest('[data-lb]');if(b){im.src=b.getAttribute('data-lb');lb.classList.add('on');lb.querySelector('button').focus();}
else if(e.target===lb||e.target.closest('.lb button')){lb.classList.remove('on');}});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on');});}
var f=document.getElementById('quoteform');
if(f){f.addEventListener('submit',function(e){e.preventDefault();
var name=f.name.value.trim(),svc=f.service.value,area=f.area.value.trim(),msg=f.msg.value.trim();
if(!name){f.name.focus();f.name.setCustomValidity('');f.name.reportValidity&&f.name.reportValidity();return;}
var text='Hello, my name is '+name+'. I would like a quote for: '+svc+'.'+(area?' Area: '+area+'.':'')+(msg?' Details: '+msg:'');
window.open('https://wa.me/971504384104?text='+encodeURIComponent(text),'_blank','noopener');});}
})();
