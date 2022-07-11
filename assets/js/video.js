let videoList = document.querySelectorAll('.video-list-jk .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-jk .main-video').src = src;
      document.querySelector('.main-video-jk .main-video').play();
      document.querySelector('.main-video-jk .main-vid-title').innerHTML = title;
   };
});