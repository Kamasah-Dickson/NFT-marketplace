import React from "react";
import Try from "./Try";
import { fireEvent, render } from "@testing-library/react";

let getByTestId;
beforeEach(() => {
	const component = render(<Try />);
	getByTestId = component.getByTestId;
});

test("header renders with correct text", () => {
	const headerEl = getByTestId("header");

	expect(headerEl.textContent).toBe("My counter");
});

test("counter initially starts at 0", () => {
	const element = getByTestId("counter");
	expect(element.textContent).toBe("0");
});

test("input initially starts with 1", () => {
	const inputElement = getByTestId("input");
	expect(inputElement.value).toBe("1");
});

test("add button renders with +", () => {
	const plusButton = getByTestId("plusButton");
	expect(plusButton.textContent).toBe("Increment");
});

test("subtract button renders with -", () => {
	const plusButton = getByTestId("minusButton");
	expect(plusButton.textContent).toBe("Decrement");
});

test("changing value of input work correctly", () => {
	const inputElement = getByTestId("input");
	expect(inputElement.value).toBe("1");

	fireEvent.change(inputElement, {
		target: {
			value: "5",
		},
	});

	expect(inputElement.value).toBe("5");
});

test("clicking on plus button adds 1 to counter", () => {
	const plusButton = getByTestId("plusButton");
	const counterElement = getByTestId("counter");
	expect(counterElement.textContent).toBe("0");
	fireEvent.click(plusButton);
	expect(counterElement.textContent).toBe("1");
});

test("clicking on minus button subtracts 1 to counter", () => {
	const minusButton = getByTestId("minusButton");
	const counterElement = getByTestId("counter");
	expect(counterElement.textContent).toBe("0");
	fireEvent.click(minusButton);
	expect(counterElement.textContent).toBe("-1");
});

test("changing input value then clicking on minus button subtracts - input.value to counter", () => {
	const minusButton = getByTestId("minusButton");
	const counterElement = getByTestId("counter");
	const inputElement = getByTestId("input");

	fireEvent.change(inputElement, {
		target: {
			value: "5",
		},
	});
	fireEvent.click(minusButton);
	expect(counterElement.textContent).toBe("-5");
});

test("changing input value then clicking on plus button adds input.value to counter ", () => {
	const plusButton = getByTestId("plusButton");
	const counterElement = getByTestId("counter");
	const inputElement = getByTestId("input");

	fireEvent.change(inputElement, {
		target: {
			value: "5",
		},
	});
	fireEvent.click(plusButton);
	expect(counterElement.textContent).toBe("5");
});

test("adding and subtracting leads to the correct counter number", () => {
	const minusButton = getByTestId("minusButton");
	const plusButton = getByTestId("plusButton");
	const inputElement = getByTestId("input");
	const counterElement = getByTestId("counter");

	fireEvent.change(inputElement, {
		target: {
			value: "10",
		},
	});

	fireEvent.click(plusButton);
	fireEvent.click(plusButton);
	fireEvent.click(plusButton);
	fireEvent.click(plusButton);
	fireEvent.click(minusButton);
	fireEvent.click(minusButton);
	expect(counterElement.textContent).toBe("20");

	fireEvent.change(inputElement, {
		target: {
			value: "5",
		},
	});

	fireEvent.click(plusButton);
	fireEvent.click(minusButton);
	fireEvent.click(minusButton);
	expect(counterElement.textContent).toBe("15");
});

test("counter contains correct className", () => {
	const minusButton = getByTestId("minusButton");
	const plusButton = getByTestId("plusButton");
	const inputElement = getByTestId("input");
	const counterElement = getByTestId("counter");

	expect(counterElement.textContent).toBe("0");
	fireEvent.change(inputElement, {
		target: {
			value: "100",
		},
	});
	fireEvent.click(plusButton);
	expect(counterElement.textContent).toBe("100");
	expect(counterElement.className).toBe("counter green");

	fireEvent.click(minusButton);
	expect(counterElement.textContent).toBe("0");
	expect(counterElement.className).toBe("counter");

	fireEvent.click(minusButton);
	expect(counterElement.textContent).toBe("-100");
	expect(counterElement.className).toBe("counter red");
});
