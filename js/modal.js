import modalData from './modalData.js';

document.querySelector('.grid-box').innerHTML = modalData
  .map(
    (data, index) => `
<div class="box">
<img src="${data.snapshoot}" alt="Project image" class="banner">
<div class="desktop-box">
  <h3>${data.projectName}</h3>
  <ul class="dot">
    <li class="dot1">${data.frame[0]}</li>
    <li><img src="${data.dot}"></li>
    <li class="dot2">${data.frame[1]}</li>
    <li><img src="${data.dot}"></li>
    <li class="dot3">${data.frame[2]}</li>
  </ul>
  <p class="box-text">
    ${data.para}
  </p>
  <ul class="tagul mediaTag">
    <li class="tag">${data.technologies[0]}</li>
    <li class="tag">${data.technologies[1]}</li>
    <li class="tag">${data.technologies[2]}</li>
  </ul>
  <button
    class="sm-btn"
    aria-label="Enter here to see this project."
    id="project_${index}"
    data-target="modal">
    ${data.smBtnText}
  </button>
</div>
</div>
`,
  )
  .join('');

const displayModal = (data) => {
  const modalSection = document.querySelector('.modal');
  modalSection.innerHTML = `
  <div class="overlay overlay-hid"></div>
  <div class="modal-hid__content">
    <div class="modal-hid__content__upper">
      <div class="modal-hid__content__upper__head">
     <h3>${data.projectName}</h3>
      <button class="closeBtn">&times;</button>
      </div>
        <ul class="dot">
          <li class="dot1">${data.frame[0]}</li>
          <li><img src="${data.dot}"></li>
          <li class="dot2">${data.frame[1]}</li>
          <li><img src="${data.dot}"></li>
          <li class="dot3">${data.frame[2]}</li>
        </ul>
        <div class="popPic-container">
          <img src="${data.popPic}" alt="Project image" class="banner popPic">
        </div>
    </div>
    <div class ="popPart">
      <div class="modal-hid__content__mid">
           <p class="box-text">
           ${data.description}
            </p>
      </div>
        <div class ="popPart2">
         <ul class="tagul popTag">
              <li class="tag">${data.technologies[0]}</li>
              <li class="tag">${data.technologies[1]}</li>
               <li class="tag">${data.technologies[2]}</li>
         </ul>
     
         <img src="${data.separator}" class="sep">
            <div class="modal-hid__content__lower">
               <button class="sm-btn lowerBtn">See live <img src="${data.liveLogo}"></button>
              <button class="sm-btn lowerBtn">See Source <img src="${data.sourceLogo}"></button>
            </div>
        </div>
    </div>
</div>
  `;

  modalSection.style.display = 'block';
  modalSection.querySelectorAll('.closeBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.modal').style.display = 'none';
    });
  });
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const modalBody = document.querySelector('.modal-hid__content');

  overlay.style.display = 'block';
  const closeModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    modalBody.classList.toggle('hidden');
    modal.style.display = 'none';
  };

  overlay.addEventListener('click', closeModal);
};

const projectButtons = document.querySelectorAll('.sm-btn');
projectButtons.forEach((projectButton) => {
  projectButton.addEventListener('click', (f) => {
    const index = f.target.id.split('_')[1];
    displayModal(modalData[index]);
  });
});
