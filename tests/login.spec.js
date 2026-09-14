const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');

const loginData = require('../test-data/loginData.json');


test.describe('Login Test Suite', () => {


    test('Verify valid login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.openLoginPage();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await expect(page).toHaveURL(
            /inventory/
        );

    });


    test('Verify invalid login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.openLoginPage();

        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );

        await expect(
            loginPage.errorMessage
        ).toBeVisible();

    });

});
