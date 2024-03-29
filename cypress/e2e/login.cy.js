
describe('Автотест на авторизацию', function () {
    
    it(' Верный логин и верный пароль ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN'); //вводим логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
        cy.get('#pass').type('USER_PASSWORD'); //вводим пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка пликабельная
        cy.get('#loginButton').click();  //нажали кнопку войти

        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //выводим текст "авторизация прошла успешно""
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
         })




it(' Верный логин и неверный пароль ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN'); //вводим логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
        cy.get('#pass').type('USER_PASSWORD'); //вводим пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка пликабельная
        cy.get('#loginButton').click();  //нажали кнопку войти

        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //выводим текст "авторизация прошла успешно""
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
         })


it(' Неверный логин и верный пароль ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN1'); //вводим логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
        cy.get('#pass').type('USER_PASSWORD'); //вводим пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка пликабельная
        cy.get('#loginButton').click();  //нажали кнопку войти

        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //выводим текст "авторизация прошла успешно""
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
         })
     

it(' Проверка валидациии ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN'); //вводим логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
        cy.get('#pass').type('USER_PASSWORD'); //вводим пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка пликабельная
        cy.get('#loginButton').click();  //нажали кнопку войти

        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //выводим текст "авторизация прошла успешно""
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
         })


it(' Разный регистр букв в логине ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN'); //вводим логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
        cy.get('#pass').type('USER_PASSWORD'); //вводим пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка пликабельная
        cy.get('#loginButton').click();  //нажали кнопку войти

        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //выводим текст "авторизация прошла успешно""
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
         })


it(' Забыли пароль ', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();  //нажали кнопку забыли пароль
      cy.get('#forgotForm > .header').contains('Восстановите пароль'); // видим окно восстановите пароль
       cy.get('#mailForgot').type('USER_LOGIN'); //вводим логин
       cy.get('#restoreEmailButton').should('be.enabled'); //кнопка пликабельная
     cy.get('#restoreEmailButton').click();  //нажали кнопку отправить код
      cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //выводим текст "авторизация прошла успешно""
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
       })

          


})