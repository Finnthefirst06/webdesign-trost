(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('.nav ul');
  if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded','false')})});}
  var f=document.querySelector('#kontaktformular');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    // Statische Seite: kein Server. Öffnet das Mailprogramm mit vorausgefüllter Nachricht.
    var to=f.getAttribute('data-mail');
    if(!to||to.indexOf('[')===0){alert('Entwurf: Bitte zuerst eine echte E-Mail-Adresse eintragen.');return;}
    var n=f.querySelector('[name=name]').value,b2=f.querySelector('[name=betrieb]').value,t=f.querySelector('[name=nachricht]').value;
    location.href='mailto:'+to+'?subject='+encodeURIComponent('Anfrage Website: '+b2)+'&body='+encodeURIComponent(t+'\n\n'+n);
  });}
  var y=document.getElementById('jahr'); if(y) y.textContent=new Date().getFullYear();
})();
