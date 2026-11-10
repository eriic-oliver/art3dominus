const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const track=document.getElementById('galleryTrack');
let slideIndex=0;
const visibleCards=()=>[...track.querySelectorAll('.work-card:not(.hidden)')];
function moveGallery(direction){const cards=visibleCards();if(!cards.length)return;const gap=18;const cardWidth=cards[0].getBoundingClientRect().width;const max=Math.max(0,cards.length-Math.max(1,Math.floor(track.parentElement.clientWidth/(cardWidth+gap))));slideIndex=Math.max(0,Math.min(max,slideIndex+direction));track.style.transform=`translateX(-${slideIndex*(cardWidth+gap)}px)`;}
document.querySelector('.gallery-next')?.addEventListener('click',()=>moveGallery(1));
document.querySelector('.gallery-prev')?.addEventListener('click',()=>moveGallery(-1));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');button.classList.add('active');const filter=button.dataset.filter;track.querySelectorAll('.work-card').forEach(card=>card.classList.toggle('hidden',filter!=='todos'&&card.dataset.category!==filter));slideIndex=0;track.style.transform='translateX(0)';}));
window.addEventListener('resize',()=>{slideIndex=0;track.style.transform='translateX(0)';});
document.getElementById('year').textContent=new Date().getFullYear();

// Visualizador acessível de fotografias
const lightbox=document.getElementById('lightbox');
const lightboxImage=lightbox.querySelector('.lightbox-image');
let previousFocus=null;
document.querySelectorAll('.photo-button').forEach(button=>button.addEventListener('click',()=>{previousFocus=document.activeElement;lightboxImage.src=button.dataset.full;lightboxImage.alt=button.dataset.title;lightbox.querySelector('.lightbox-title').textContent=button.dataset.title;lightbox.hidden=false;document.body.style.overflow='hidden';lightbox.querySelector('.lightbox-close').focus();}));
function closeLightbox(){lightbox.hidden=true;lightboxImage.removeAttribute('src');document.body.style.overflow='';previousFocus?.focus();}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox();});
document.addEventListener('keydown',event=>{if(lightbox.hidden)return;if(event.key==='Escape')closeLightbox();if(event.key==='Tab'){event.preventDefault();lightbox.querySelector('.lightbox-close').focus();}});

// As coleções da página inicial abrem a galeria já filtrada.
document.querySelectorAll('[data-gallery-filter]').forEach(card=>{
  card.addEventListener('click',event=>{
    const filter=card.dataset.galleryFilter;
    const filterButton=document.querySelector(`.filter[data-filter="${filter}"]`);
    if(!filterButton)return;
    event.preventDefault();
    filterButton.click();
    document.getElementById('galeria')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  });
});
