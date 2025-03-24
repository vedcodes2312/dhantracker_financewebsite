function adjustBudget() {
    let city = document.getElementById("city").value;
    let costOutput = document.getElementById("cost-output");

    let costData = {
        "Mumbai": "Mumbai is expensive! Adjust budget for high rent and transport costs. 🏠🚕",
        "Delhi": "Delhi has mixed costs. Street food is cheap, but rent is rising! 🌮🏠",
        "Bangalore": "Bangalore's tech hub means high rents but affordable food. 🍛💻",
        "Kolkata": "Kolkata is one of the most affordable metros. Enjoy cheap food & transport! 🍲🚃",
        "Chennai": "Chennai has stable costs but watch out for seasonal expenses (like festivals). 🎉"
    };

    costOutput.innerHTML = `<p>${costData[city]}</p>`;
}
