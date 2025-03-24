// Simulating AI-driven insights
function getAiInsights(mood, city) {
    let insights = {
        "Mumbai": {
            "stressed": "Feeling stressed? Instead of an expensive café visit, try Marine Drive for a free sunset view. 🌅",
            "bored": "Bored? Instead of shopping, explore Mumbai's street food scene for ₹100 or less! 🌯"
        },
        "Delhi": {
            "happy": "You're happy! Maybe invest in a new skill course instead of splurging on shopping? 🎓",
            "excited": "Excited? Plan a budget-friendly day trip to India Gate and Chandni Chowk. 🚲"
        },
        "Bangalore": {
            "stressed": "Instead of impulse tech purchases, unwind at Cubbon Park for free. 🌿",
            "bored": "Try a book café instead of buying new gadgets to kill boredom. 📚☕"
        },
        "Kolkata": {
            "happy": "Spend wisely! A tram ride + street food can make a great day out for ₹50. 🚋🍲",
            "excited": "Excitement can lead to overspending. Maybe explore a free art gallery instead? 🎨"
        },
        "Chennai": {
            "stressed": "Visit Marina Beach for a refreshing break instead of shopping. 🌊",
            "bored": "Explore street markets like Pondy Bazaar for budget-friendly entertainment. 🛍️"
        }
    };

    return insights[city][mood] || "Spend wisely and track your budget. 💰";
}
