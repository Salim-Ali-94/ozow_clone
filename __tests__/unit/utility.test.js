import * as utility from "../../src/utility/utility";


describe("Testing functionality of the utility functions used throughout the app separately from the rest of the project", () => {

    test("Ensure uuid generator produces correct results", () => {

        expect(utility.uuid(5).length).toBe(5);
        expect(utility.uuid(0).length).toEqual(0);
        expect(utility.uuid(10)).not.toEqual(utility.uuid(10));

    });

    test("Ensure the date getter provides the correct date format", () => {

        const today = new Date();
        const date = utility.previousWorkingDay(today);
        expect(date.length).toBe(10);
        expect(date.split("-").length).toBe(3);
        expect((date.match(/-/g) || []).length).toBe(2);
        expect(date.split("-")[0].length).toBe(4);
        expect(date.split("-")[1].length).toBe(2);
        expect(date.split("-")[2].length).toBe(2);

    });

    test("Ensure that the encryption function correctly hides the input text", () => {

        const text = "Lift off!";
        const cipher = utility.encrypt(text, "182");
        expect(cipher).not.toEqual(text);
        expect(utility.encrypt(text, "183")).not.toEqual(cipher);
        expect(cipher.length).toBe(text.length);

    });

});
