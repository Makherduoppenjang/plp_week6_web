# SpendWise Interactive

## Overview
SpendWise Interactive is an upgraded version of the budgeting web application. This project demonstrates core JavaScript fundamentals including decision-making logic, array manipulation, looping structures, DOM updates, and event handling.

## Improvements Made This Week
- Added a dynamic input form to allow users to input custom expense names and amounts.
- Integrated JavaScript arrays to store multiple expense records dynamically instead of static variables.
- Implemented real-time DOM updates so expenses render automatically on the webpage without page refreshes.

## How Concepts Are Implemented
- **Conditionals:** Conditional statements (`if...else if...else`) evaluate the total cumulative expenses against a preset budget threshold to deliver real-time color-coded feedback.
- **Arrays:** An array (`let expenses = []`) is used to hold multiple expense objects securely in memory.
- **Loops:** A standard `for` loop iterates through the array items to calculate totals and populate the DOM list elements efficiently.
- **DOM Manipulation:** Methods like `document.createElement`, `appendChild`, and `innerHTML` are used to dynamically inject content into the browser.
- **Events:** An `addEventListener` monitors form submissions to capture user intent and trigger data updates.

## Challenges and Resolutions
- **Challenge:** Resetting and rendering the list without duplicating previous entries.
- **Resolution:** Cleared the inner HTML of the list container (`expenseList.innerHTML = ''`) at the beginning of the `updateDashboard` function before running the loop to re-render updated data cleanly.
