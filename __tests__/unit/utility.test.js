import * as utility from "../../src/utility/utility";


describe("Testing functionality of the utility functiosn used throughout the app separately from the rest of the project", () => {

    test("Ensure uuid generator produces correct results", () => {

        const uid0 = utility.uuid(5);
        expect(uid0.length).toBe(5);
        const uid1 = utility.uuid(0);
        expect(uid1.length).toEqual(0);

    });

    test("Ensure the date formatter provides the correct date format", () => {

        const today = new Date();
        const target = new Date(today);
        const date = utility.formatDate(target);
        expect(date.length).toBe(10);
        expect(date.split("-").length).toBe(3);
        expect(date.split("-")[0].length).toBe(4);
        expect(date.split("-")[1].length).toBe(2);
        expect(date.split("-")[2].length).toBe(2);

    });

});
