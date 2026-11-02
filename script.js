// Requirement 2: Work with Multiple Records (Array to store expenses)
let expenses = [];

// Setting a sample budget limit for demonstration
const budgetLimit = 200.00;

// DOM Elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');
const budgetFeedbackDisplay = document.getElementById('budget-feedback');

// Requirement 5: Handle User Interactions (Event Listener for Form Submission)
expenseForm.addEventListener('submit', function(event) {
    // Prevent default form reload behavior
    event.preventDefault();

    // Capture user input
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name && !isNaN(amount) && amount > 0) {
        // Create a new expense object
        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        };

        // Add to array
        expenses.push(newExpense);

        // Reset form inputs
        expenseForm.reset();

        // Update the UI
        updateDashboard();
    }
});

// Function to update the entire application view
function updateDashboard() {
    // Clear current list in DOM before re-rendering
    expenseList.innerHTML = '';

    let totalExpenses = 0;

    // Requirement 3: Process Data with Loops
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        totalExpenses += expense.amount;

        // Requirement 4: Update the Dashboard Dynamically (Create list items)
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span><strong>${expense.name}</strong></span>
            <span>$${expense.amount.toFixed(2)}</span>
        `;
        expenseList.appendChild(listItem);
    }

    // Update total amount text
    totalAmountDisplay.textContent = `$${totalExpenses.toFixed(2)}`;

    // Requirement 1: Implement Decision Making (Conditional feedback based on spending)
    if (totalExpenses === 0) {
        budgetFeedbackDisplay.textContent = "No expenses recorded yet.";
        budgetFeedbackDisplay.style.color = "#333";
    } else if (totalExpenses <= budgetLimit) {
        budgetFeedbackDisplay.textContent = "Great job! You are within your budget limit.";
        budgetFeedbackDisplay.style.color = "#27ae60"; // Green
    } else {
        budgetFeedbackDisplay.textContent = "Warning: You have exceeded your budget limit!";
        budgetFeedbackDisplay.style.color = "#c0392b"; // Red
    }
}
