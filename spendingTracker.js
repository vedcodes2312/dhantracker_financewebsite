let expenseHistory = [];

function trackSpending() {
    let expenseInput = document.getElementById("expense");
    let amount = parseFloat(expenseInput.value);
    let spendingOutput = document.getElementById("spending-output");

    if (isNaN(amount) || amount <= 0) {
        spendingOutput.innerHTML = "<p>Please enter a valid amount.</p>";
        return;
    }

    expenseHistory.push(amount);

    let averageSpending = expenseHistory.reduce((sum, val) => sum + val, 0) / expenseHistory.length;
    let warningMessage = "";

    if (amount > averageSpending * 1.5) {
        warningMessage = `<p style="color: red;">⚠️ This seems expensive! Are you sure you need this purchase?</p>`;
    }

    spendingOutput.innerHTML = `<p>₹${amount} added to expenses. ${warningMessage}</p>`;
    expenseInput.value = ""; // Reset input
}
