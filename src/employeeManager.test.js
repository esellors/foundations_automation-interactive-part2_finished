const { Builder, Capabilities, By } = require("selenium-webdriver"); // necessary for setting up selenium
require('chromedriver'); // necessary for setting up selenium. Don't need to save this 'require' to a variable since we just want to import it once and forget about it.
const empInfo = require('./employeeInfo'); // importing the employee data we plan to test
const empVerify = require('./empVerify'); // importing the function we set up that will be used to test each employee sent into it (invocation used in a for loop at bottom of this file);

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async function () {
    await driver.get('http://localhost:3000/')
})

afterAll(async function () {
    await driver.quit();
})

test('Can click employee 4', async function () {
    const emp4 = await driver.findElement(By.name('employee4'));
    await driver.sleep(5000)
    await emp4.click();
    await driver.sleep(5000)
})

test('Verify Each Employee', async () => {
    // Now we want to use that empVerify function that we wrote in another file

    for (let i = 0; i < empInfo.length; i++) {
        await empVerify(driver, i)
    }
})