import { render, screen } from "@testing-library/react";
import { GenresList } from "./GenresList";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "styled-components";

describe("GenersList component", () => {
  const data = [
    { name: "test", id: 1 },
    { name: "test2", id: 2 },
  ];

  test("GenresList renders", () => {
    render(
      <ThemeProvider theme={theme}>
        <GenresList genres={data} />
      </ThemeProvider>
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  test("GeneresList with data renders", () => {
    render(
      <ThemeProvider theme={theme}>
        <GenresList genres={data} />
      </ThemeProvider>
    );
    data.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
  test("GeneresList without data renders", () => {
    render(
      <ThemeProvider theme={theme}>
        <GenresList genres={[]} />
      </ThemeProvider>
    );
    expect(screen.queryByRole("list")).toBeNull();
  });
});
