function trackFinance() {
    const income = parseFloat(document.getElementById('income').value);
    const spending = parseFloat(document.getElementById('spending').value);

    if (!income || income <= 0 || !spending || spending <= 0 || spending > income) {
        alert('Please enter valid income and spending amounts (spending ≤ income).');
        return;
    }

    // 50-30-20 Rule Calculation
    const needs = (income * 0.5).toFixed(2);
    const wants = (income * 0.3).toFixed(2);
    const savings = (income * 0.2).toFixed(2);

    // Carbon Footprint Estimation (simplified, based on spending)
    const carbonFootprint = calculateCarbonFootprint(spending);

    // Social Responsibility Insights
    const socialInsights = getSocialInsights(spending, income);

    // Display Results
    document.getElementById('allocation').innerHTML = `
        <p><strong>Needs (50%):</strong> ₹${needs} (e.g., rent, bills)</p>
        <p><strong>Wants (30%):</strong> ₹${wants} (e.g., dining, hobbies)</p>
        <p><strong>Savings (20%):</strong> ₹${savings} (e.g., ethical investments)</p>
    `;
    document.getElementById('carbon').innerHTML = `
        <p>Estimated Monthly Carbon Footprint: ${carbonFootprint.toFixed(2)} kg CO₂e</p>
        <p>(Based on spending patterns; reduce discretionary spending to lower this!)</p>
    `;
    document.getElementById('social').innerHTML = socialInsights;
    document.getElementById('investments').innerHTML = `
        <p><strong>Low Risk:</strong> Green Fixed Deposits (5-7% p.a., supports renewable projects)</p>
        <p><strong>Moderate Risk:</strong> ESG Mutual Funds (e.g., NIFTY 50 ESG, 8-12% avg. return)</p>
        <p><strong>Higher Risk:</strong> Ethical Stocks (e.g., renewable energy firms, 5-10% of savings)</p>
    `;
    document.getElementById('results').style.display = 'block';
}

function calculateCarbonFootprint(spending) {
    // Simplified mock calculation: 0.5 kg CO₂e per ₹100 spent (adjustable with real data)
    const carbonPerRupee = 0.005; // Hypothetical value; real data would come from an API
    return spending * carbonPerRupee;
}

function getSocialInsights(spending, income) {
    const savingsPotential = income - spending;
    let insights = `<p>Based on your spending (₹${spending}), you have ₹${savingsPotential.toFixed(2)} left for savings or investments.</p>`;
    
    if (savingsPotential > income * 0.2) {
        insights += `<p><strong>Insight:</strong> Great job! You’re saving more than the 20% goal. Consider ethical investments to amplify your social impact.</p>`;
    } else {
        insights += `<p><strong>Insight:</strong> Your savings are below 20%. Reducing wants (e.g., dining out) could free up funds for sustainable causes.</p>`;
    }
    return insights;
}