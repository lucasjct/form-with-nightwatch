module.exports = {

    '@tags':['testForm'],
    "test case"(browser) {

        const mainQuery = 'Tests';
        const mainQueryInputSelector = 'input[name="user[name]"]';
        
        browser
            .url("https://automacaocombatista.herokuapp.com/users/new")
            .setValue(mainQueryInputSelector, mainQuery)
            .setValue('input[name="user[lastname]"]','NightWatch')
            .setValue('input[id="user_email"]', 'test_automation@test.com')
            .setValue('input[name="user[address]"]','Street Machado de Assis, 27')
            .setValue('input[name="user[university]"]', 'University Studys')
            .setValue('input[name="user[profile]"]', 'Quality Assurance')
            .setValue('input[id="user_gender"]', 'Male')
            .setValue('input[name="user[age]"]', 30)
            .click('input[type="submit"]')
            .saveScreenshot('tests_output/evidences.png')
        
        }
}