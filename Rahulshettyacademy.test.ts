import { LogOnSteps } from "../steps";
import { test, expect } from "./testFixture";

test.describe('Rahul Shetty Academy tests', () => {

    test('Given user logon to rahulshettyAcademy', async ({ logOnSteps }) => {
        await test.step('When user logs into Application', async () => {
            await logOnSteps.logOntoApplication();
        });

        await test.step('Then user fills other details', async () => {
            const userAndProfessionaltype = {
                usertype: "user",
                professiontype: "Teacher",
            };

            await logOnSteps.fillOtherDetails(userAndProfessionaltype);
        });

        await test.step('Read the product Title names', async () => {
            await logOnSteps.getListofProductName("Nokia Edge", "ind", "India");

        })

    });

});