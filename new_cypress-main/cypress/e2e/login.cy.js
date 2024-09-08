describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Найти кнопку Войти и нажать на нее
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Найти текст и проверить Авторизация прошла успешно
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
        })
        it('Восстановить пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Нашли кнопку Забыли пароль и проверили ее цвет
            cy.get('#forgotEmailButton').click();// Найти кнопку Забыли пароль и нажать на нее
            cy.get('#forgotForm > .header').contains('Восстановите пароль'); // Найти текст и проверить Восстановите пароль
            cy.get('#forgotForm > .header').should('be.visible'); // Текст виден пользователю
            cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
            cy.get('#mailForgot').type('new@password.ru'); // Ввели любой логин
            cy.get('#restoreEmailButton').click();// Найти кнопку Отправить код и нажать на нее
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Найти текст и проверить Успешно отправили пароль на e-mail
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        })
        it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
            cy.get('#pass').type('iLoveqastudio'); // Ввели неверный пароль
            cy.get('#loginButton').click(); // Найти кнопку Войти и нажать на нее
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Найти текст и проверить Такого логина или пароля нет
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
           })

           it('Неверный логин верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#mail').type('german@dolniko.ru'); // Ввели неверный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Найти кнопку Войти и нажать на нее
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Найти текст и проверить Такого логина или пароля нет
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
           })
           it('Невалидный логин без @', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#mail').type('germandolnikov.ru'); // Ввели невалидный логин без @
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Найти кнопку Войти и нажать на нее
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Найти текст и проверить Нужно исправить проблему валидации
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
           })
           it('Проверка строчные и заглавные буквы в логине', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин с заглавными буквами
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Найти кнопку Войти и нажать на нее
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Найти текст и проверить Авторизация прошла успешно
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
           })
 
 })