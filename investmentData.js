const schemeData = {
    "PPF": {
        name: "Public Provident Fund (PPF)",
        details: "Interest Rate: 7.1% (tax-free). Lock-in: 15 years. Tax-Free Maturity under Section 80C."
    },
    "EPF": {
        name: "Employee Provident Fund (EPF)",
        details: "Interest Rate: ~8.1%. Employer matches 12% contribution. Tax-free under Section 80C."
    },
    "SSY": {
        name: "Sukanya Samriddhi Yojana (SSY)",
        details: "Interest Rate: ~8.2%. For girl child savings. Tax-Free maturity under Section 80C."
    },
    "NPS": {
        name: "National Pension System (NPS)",
        details: "Market-linked returns (9-12%). Tax benefits under 80CCD. Partial withdrawal allowed."
    },
    "MutualFunds": {
        name: "Mutual Funds (SIP)",
        details: "Returns: ~12-15%. Best for wealth creation. LTCG tax applies above ₹1 lakh returns."
    },
    "FD": {
        name: "Fixed Deposits (FDs)",
        details: "Interest Rate: ~6-7.5%. Low risk. Tax-saving FDs available under Section 80C."
    },
    "SGB": {
        name: "Sovereign Gold Bonds (SGBs)",
        details: "Returns: 2.5% interest + gold price appreciation. No capital gains tax after 8 years."
    },
    "RealEstate": {
        name: "Real Estate Investment",
        details: "High capital growth potential. Good rental income in Tier-1 & Tier-2 cities."
    }
};

document.querySelectorAll('.scheme-box').forEach(box => {
    box.addEventListener('mouseenter', function () {
        const scheme = this.getAttribute('data-scheme');
        const schemeDetails = document.getElementById("scheme-details");
        schemeDetails.innerHTML = `<h2>${schemeData[scheme].name}</h2><p>${schemeData[scheme].details}</p>`;
        schemeDetails.classList.remove("hidden");
        schemeDetails.style.display = "block";
    });

    box.addEventListener('mouseleave', function () {
        document.getElementById("scheme-details").classList.add("hidden");
        document.getElementById("scheme-details").style.display = "none";
    });
});
