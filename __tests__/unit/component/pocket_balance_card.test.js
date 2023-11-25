import { render, screen } from "@testing-library/react-native";
import PocketBalanceCard from "../../../src/components/PocketBalanceCard";


describe("Testing functionality of the pocket balance card component separately from the rest of the project", () => {

    test("Input value must reflect on the card", () => {

        let value = 123.45;
        render(<PocketBalanceCard amount={value} />);
        let result = screen.getByTestId("pocket-balance-amount");
        expect(result.props.children.join("")).toBe("R" + value.toString());

    });

    test("Input value must be rounded off to 2 decimal places", () => {

        let value = 12345.6789;
        render(<PocketBalanceCard amount={value} />);
        let result = screen.getByTestId("pocket-balance-amount");
        expect(result.props.children[1]).toEqual(value.toFixed(2).toString());

    });

});
