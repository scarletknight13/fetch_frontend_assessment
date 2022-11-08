import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from './Register'

test("name input should be rendered", () => {
    render(<Register />);
    const nameInputEl = screen.getByLabelText(/Full Name/i);
    expect(nameInputEl).toBeInTheDocument();
});
test("email input should be rendered", () => {
    render(<Register />);
    const emailInputEl = screen.getByLabelText(/Email/i);
    expect(emailInputEl).toBeInTheDocument();
});
test("password input should be rendered", () => {
    render(<Register />);
    const passwordInputEl = screen.getByTestId(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
});
test("confirmPassword input should be rendered", () => {
    render(<Register />);
    const confirmPasswordInputEl = screen.getByLabelText(/Confirm Password/i);
    expect(confirmPasswordInputEl).toBeInTheDocument();
});
test("occupation select should be rendered", () => {
  render(<Register />);
  const occupationSelectEl = screen.getByLabelText(/Occupation/i);
  expect(occupationSelectEl).toBeInTheDocument();
});
test("state select should be rendered", () => {
  render(<Register />);
  const stateSelectEl = screen.getByLabelText(/State/i);
  expect(stateSelectEl).toBeInTheDocument();
});



test("name input should be empty", () => {
    render(<Register />);
    const nameInputEl = screen.getByLabelText(/Full Name/i);
    expect(nameInputEl.value).toBe('');
});
test("email input should be empty", () => {
    render(<Register />);
    const emailInputEl = screen.getByLabelText(/Email/i);
    expect(emailInputEl.value).toBe('');
});
test("password input should be empty", () => {
    render(<Register />);
    const passwordInputEl = screen.getByTestId(/password/i);
    expect(passwordInputEl.value).toBe('');
});
test("confirmPassword input should be empty", () => {
    render(<Register />);
    const confirmPasswordInputEl = screen.getByLabelText(/Confirm Password/i);
    expect(confirmPasswordInputEl.value).toBe('');
});
test("occupation select should be empty", () => {
  render(<Register />);
  const occupationSelectEl = screen.getByLabelText(/Occupation/i);
  expect(occupationSelectEl.value).toBe('');
});
test("state select should be empty", () => {
  render(<Register />);
  const stateSelectEl = screen.getByLabelText(/State/i);
  expect(stateSelectEl.value).toBe('');
});

test('when form is submitted input fields go blank', () => {
  render(<Register />);
  const submitButtonEl = screen.getByText(/Submit/i);
  fireEvent.click(submitButtonEl);
  const inputEls = screen.getAllByRole(/inputfield/i);
  for(let i = 0; i < inputEls.length; i++) {
    expect(inputEls[i].value).toBe('');
  }
})