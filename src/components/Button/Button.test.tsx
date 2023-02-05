import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "styled-components";

describe("button component", () => {
  test("button renders", () => {
    const testText = "testText";
    render(
      <ThemeProvider theme={theme}>
        <Button>{testText}</Button>
      </ThemeProvider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
