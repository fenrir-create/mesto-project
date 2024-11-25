// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

const profileEditPopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}



const profileFormElement = document.forms['edit-profile'];
const nameInput = profileFormElement.elements.name;
const jobInput = profileFormElement.elements.description;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// сохранение нового профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    const name = nameInput.value;
    const job = jobInput.value;

    profileTitle.textContent = name;
    profileDescription.textContent = job;

    closeModal(profileEditPopup);

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

const profileEdit = document.querySelector('.profile__edit-button');

// открытие окна редактирования (заполнение полей текущими значениями профиля)
profileEdit.addEventListener('click', function() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openModal(profileEditPopup);

});

// кнопки закрытия 
const closePopup = document.querySelectorAll('.popup__close')
closePopup.forEach(function(popup){
    popup.addEventListener('click',function(){
        const pop = popup.closest('.popup');
        closeModal(pop);
    });
});


function handleCardFormSubmit(evt) {
    evt.preventDefault(); 
    const name = nameInput.value;
    const job = jobInput.value;

    profileTitle.textContent = name;
    profileDescription.textContent = job;

    closeModal(profileEditPopup);

}
profileFormElement.addEventListener('submit', handleCardFormSubmit);
