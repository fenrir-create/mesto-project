// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу




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


function handlerLikeButton(evt){
    evt.target.classList.toggle('card__like-button_is-active');
}
const imagePopup_src = document.querySelector('.popup__image');
const imagePopup_title = document.querySelector('.popup__caption');

const cardTemplate = document.querySelector('#card-template').content;

function createCard(info){
    const cards = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cards.querySelector('.card__image');
    const cardTitle = cards.querySelector('.card__title');
    const deleteButton = cards.querySelector('.card__delete-button');
    const likeButton = cards.querySelector('.card__like-button');

    cardImage.src = info.link;
    cardImage.alt = info.name;
    cardTitle.textContent = info.name;

    likeButton.addEventListener('click',handlerLikeButton);
    deleteButton.addEventListener('click',function(){
        const del = deleteButton.closest('.places__item');
        del.remove();
    });

    cardImage.addEventListener('click',function(){
        imagePopup_src.src = info.link;
        imagePopup_src.alt = info.name;
        imagePopup_title.textContent = info.name;
        openModal(imagePopup);
    });

    return cards;


}




const newPlaceForm = document.forms['new-place'];
const cardPlace = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');
const listCards = document.querySelector('.places__list')
// занесение созданной карты
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newPlace = cardPlace.value;
    const newLink = cardLink.value;

    const newCard = createCard({
        name: newPlace,
        link: newLink
    });
    
    listCards.prepend(newCard);
    closeModal(newCardPopup);
    newPlaceForm.reset();
}
newPlaceForm.addEventListener('submit', handleCardFormSubmit);


initialCards.forEach(function(item){
    listCards.append(createCard(item));
})

const newcardpopup = document.querySelector('.profile__add-button');

newcardpopup.addEventListener('click',function(){
    openModal(newCardPopup);
})

profileEditPopup.classList.add('.popup_is-animated');
newCardPopup.classList.add('.popup_is-animated');
imagePopup.classList.add('.popup_is-animated');


