describe('ene Покемон покупка аватара', function () {

    it('ene Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/'); // Зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN') // Найти и ввести верный логин
         cy.get('#password').type('USER_PASSWORD') // Найти и ввести верный пароль
         cy.get('.auth__button').click(); // Найти и нажать кнопку Войти
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Найти и зайти в личный кабинет
         cy.get('[href="/shop"]').click();// Найти и зайти в магазин
         cy.get('.available > button').first().click({ force: true });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');// Находим и вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Находим и вводим срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //Находим и вводим cvc
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');// Находим и вводим имя
         cy.get('.pay-btn').click(); //Находим кнопку Оплатить и нажимаем на нее
         cy.get('#cardnumber').type('56456'); //Находим и вводим код из смс
         cy.get('.payment__submit-button').click();//Находим кнопку Отправить и нажимаем на нее
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');// Найти текст и проверить Покупка прошла успешно
         cy.get('.payment__font-for-success').should('be.visible'); // Текст виден пользователю
        })
        
       
          
           
           
 
 })