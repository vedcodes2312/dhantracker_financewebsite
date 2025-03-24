function trackMoodSpending() {
    let mood = document.getElementById("mood").value;
    let moodOutput = document.getElementById("mood-output");

    let spendingTips = {
        "happy": "You're feeling great! Treat yourself, but set a limit. Maybe an Amul ice cream? 🍦",
        "stressed": "Stress spending alert! Instead of online shopping, try a cup of chai ☕ and a walk.",
        "bored": "Bored? Avoid mindless shopping. Call a friend or watch a cricket match instead. 🏏",
        "excited": "Excitement can lead to impulse buys! Make sure your splurge is worth it. Maybe buy an experience instead of a gadget?"
    };

    moodOutput.innerHTML = `<p>${spendingTips[mood]}</p>`;
}
