# Diary Entry List Application

## Overview

This coding challenge aims to build a diary entry list application utilizing React and Redux. The application serves as a platform where users can view diary entries, sort them by date, and paginate the list of entries. The user interface employs Material-UI components for a professional look, along with additional out-of-the-box functionalities.

## Table of Contents

- [Technical Choices](#technical-choices)
  - [Frontend Framework - React](#frontend-framework---react)
  - [State Management - Redux](#state-management---redux)
  - [Styling - Styled-components and Material-UI](#styling---styled-components-and-material-ui)
  - [Sorting and Pagination](#sorting-and-pagination)
  - [API Connection](#api-connection)
- [Decisions and Motivations](#decisions-and-motivations)
- [How to Run The Project](#how-to-run-the-project)
- [Future Improvements](#future-improvements)

## Technical Choices

### Frontend Framework - React

React was chosen due to its flexibility and massive community support. It is an established framework that facilitates the construction of scalable and maintainable applications.

### State Management - Redux

Redux serves as the state management solution, providing a single source of truth across the app. It excels in managing global state and offers easy extensibility for future features.

### Styling - Styled-components and Material-UI

Styled-components were initially used for dynamic styling based on component props. Material-UI was later introduced for pagination and buttons, to minimize the need for custom CSS and speed up development.

### Sorting and Pagination

JavaScript's native `.sort()` and `.slice()` functions were used for sorting and pagination, respectively. Redux manages the sort order as a piece of global state.

### API Connection

For real-world scalability, the application is configured to connect to a live API. During development, mock data and browser local storage were used to simulate API calls, thereby making the development process smoother and quicker.

## Decisions and Motivations

### Why Dynamic Styling?

Dynamic styling via styled-components was chosen for greater UI customization based on component state or props. This is particularly helpful for UI elements like the sort button, which changes its color based on the sorting order.

### Why Separate Pagination?

A decision was made to segregate pagination into a separate component for better manageability and potential reusability.

### Scalability and Extensibility

The primary focus was to lay a robust foundation that allows for future extensibility. The codebase is structured to be modular and scalable, ensuring that new features can be easily integrated.

## How to Run The Project

1. Clone the repository.
2. Execute `npm install`.
3. Run `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

## Live Demo

https://annikasdiary.netlify.app/

## Future Improvements

1. Implement a search feature to look for specific entries.
2. Introduce user authentication for a more personalized experience.
3. Replace mock data with a live API.

