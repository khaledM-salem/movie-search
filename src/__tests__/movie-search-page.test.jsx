// src/movie-search-page.test.jsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieSearchPage from "../movie-search-page";
import axios from "axios";

jest.mock("axios");

test("should render search input and button", () => {
  render(<MovieSearchPage />);
  expect(
    screen.getByPlaceholderText("Search for movies...")
  ).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});

test("should show loading and then results on search", async () => {
  const movies = [{ id: 1, title: "fast and furious" }];
  axios.get.mockResolvedValueOnce({ data: { results: movies } });

  render(<MovieSearchPage />);

  fireEvent.change(screen.getByPlaceholderText("Search for movies..."), {
    target: { value: "fast and furious" },
  });

  fireEvent.click(screen.getByText("Search"));

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    const items = screen.getAllByText("fast and furious");
    expect(items).toHaveLength(1);
  });
});

test("should show error message on API error", async () => {
  axios.get.mockRejectedValueOnce(new Error("API Error"));

  render(<MovieSearchPage />);

  fireEvent.change(screen.getByPlaceholderText("Search for movies..."), {
    target: { value: "Inception" },
  });

  fireEvent.click(screen.getByText("Search"));

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    const errorMessage = screen.getByText("Error: API Error");
    expect(errorMessage).toBeInTheDocument();
  });
});
