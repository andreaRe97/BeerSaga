export const animate = () => {
  const card = document.querySelector('.card');
  const container = document.querySelector('.container');
  const title = document.querySelector('.card-title');
  const beer = document.querySelector('.beer img');

  container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(180px)';
    beer.style.transform = 'translateZ(220px) rotateZ(-20deg)';
  });

  container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    beer.style.transform = 'translateZ(0px) rotateZ(0deg)';
  });
};
