document.addEventListener('DOMContentLoaded', () => {
   const userCard = document.createElement('article');
   userCard.className = 'userCard';

   const img = document.createElement('img');
   img.className = 'userImg';
   img.src = 'https://picsum.photos/id/237/600/400';
   img.alt = 'user';

   const infoDiv = document.createElement('div');

   const userName = document.createElement('p');
   userName.className = 'userName';
   userName.textContent = 'Test Testovych';

   const userAge = document.createElement('span');
   userAge.className = 'userAge';
   userAge.textContent = '30';

   infoDiv.appendChild(userName);
   infoDiv.appendChild(userAge);

   const trashIcon = document.createElement('i');
   trashIcon.className = 'fa-solid fa-trash-can trashIcon';
   trashIcon.style.cursor = 'pointer'; // Добавляет курсор "рука" для иконки

   // Добавляем обработчик для удаления карточки пользователя
   trashIcon.addEventListener('click', () => {
      userCard.remove();
   });

   userCard.appendChild(img);
   userCard.appendChild(infoDiv);
   userCard.appendChild(trashIcon);

   document.body.appendChild(userCard);
});
