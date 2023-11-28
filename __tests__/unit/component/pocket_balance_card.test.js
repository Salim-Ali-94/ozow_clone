import { render, screen } from "@testing-library/react-native";
// import "@testing-library/jest-native/extend-expect";
import PocketBalanceCard from "../../../src/components/PocketBalanceCard";
import { useNavigation } from "@react-navigation/native";


jest.mock("@react-navigation/native", () => ({ ...jest.requireActual("@react-navigation/native"), useNavigation: jest.fn() }));

describe("Testing functionality of the pocket balance card component separately from the rest of the project", () => {

    test("Input value must reflect on the card", () => {

        useNavigation.mockReturnValue({});
        let value = 123.45;
        render(<PocketBalanceCard shadow={true} amount={value} />);
        let result = screen.getByTestId("pocket-balance-amount");
        expect(result.props.children.join("")).toBe("R" + value.toString());

    });

    test("Input value must be rounded off to 2 decimal places", () => {

        useNavigation.mockReturnValue({});
        let value = 12345.6789;
        render(<PocketBalanceCard shadow={false} amount={value} />);
        let result = screen.getByTestId("pocket-balance-amount");
        expect(result.props.children[1]).toEqual(value.toFixed(2).toString());

    });

    // test("Input value must be truncated if length exceeds 1 text line", () => {

        // useNavigation.mockReturnValue({});
    //     let value = 1234567890987654.3210;
    //     render(<PocketBalanceCard shadow={true} amount={value} />);
    //     let result = screen.getByTestId("pocket-balance-amount");
    //     expect(result).toHaveStyle({ overflow: "hidden" });

    // });

});
