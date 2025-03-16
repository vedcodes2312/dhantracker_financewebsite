
let incomeSources = [];
let chart;

// Initialize Chart.js pie chart
function initChart() {
    const ctx = document.getElementById('incomeChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                    '#FF9F40', '#C9CBCF'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Income Sources Breakdown (INR)' }
            }
        }
    });
}

// Add a new income source
function addIncomeSource() {
    const name = document.getElementById('sourceName').value.trim();
    const amount = parseFloat(document.getElementById('sourceAmount').value);

    if (name && !isNaN(amount) && amount > 0) {
        incomeSources.push({ name, amount });
        updateIncomeList();
        updateChart();
        clearInputs();
    } else {
        alert('Please enter a valid name and amount.');
    }
}

// Format number in Indian style (e.g., 1,00,000)
function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    }).format(amount);
}

// Update the income list display
function updateIncomeList() {
    const incomeList = document.getElementById('incomeList');
    incomeList.innerHTML = '';
    incomeSources.forEach(source => {
        const div = document.createElement('div');
        div.className = 'flex justify-between p-3 bg-gray-50 border-b border-gray-200';
        div.innerHTML = `<span>${source.name}</span><span>${formatINR(source.amount)}</span>`;
        incomeList.appendChild(div);
    });
}

// Update the pie chart
function updateChart() {
    chart.data.labels = incomeSources.map(source => source.name);
    chart.data.datasets[0].data = incomeSources.map(source => source.amount);
    chart.update();
}

// Clear input fields
function clearInputs() {
    document.getElementById('sourceName').value = '';
    document.getElementById('sourceAmount').value = '';
}

// Initialize the chart when the page loads
window.onload = initChart;


// let incomeSources = [];
// let chart;

// // Initialize Chart.js pie chart
// function initChart() {
//     const ctx = document.getElementById('incomeChart').getContext('2d');
//     chart = new Chart(ctx, {
//         type: 'pie',
//         data: {
//             labels: [],
//             datasets: [{
//                 data: [],
//                 backgroundColor: [
//                     '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
//                     '#FF9F40', '#C9CBCF'
//                 ]
//             }]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: { position: 'top' },
//                 title: { display: true, text: 'Income Sources Breakdown' }
//             }
//         }
//     });
// }

// // Add a new income source
// function addIncomeSource() {
//     const name = document.getElementById('sourceName').value.trim();
//     const amount = parseFloat(document.getElementById('sourceAmount').value);

//     if (name && !isNaN(amount) && amount > 0) {
//         incomeSources.push({ name, amount });
//         updateIncomeList();
//         updateChart();
//         clearInputs();
//     } else {
//         alert('Please enter a valid name and amount.');
//     }
// }

// // Update the income list display
// function updateIncomeList() {
//     const incomeList = document.getElementById('incomeList');
//     incomeList.innerHTML = '';
//     incomeSources.forEach(source => {
//         const div = document.createElement('div');
//         div.className = 'income-item';
//         div.innerHTML = `<span>${source.name}</span><span>$${source.amount.toFixed(2)}</span>`;
//         incomeList.appendChild(div);
//     });
// }

// // Update the pie chart
// function updateChart() {
//     chart.data.labels = incomeSources.map(source => source.name);
//     chart.data.datasets[0].data = incomeSources.map(source => source.amount);
//     chart.update();
// }

// // Clear input fields
// function clearInputs() {
//     document.getElementById('sourceName').value = '';
//     document.getElementById('sourceAmount').value = '';
// }

// // Initialize the chart when the page loads
// window.onload = initChart;

