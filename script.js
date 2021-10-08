let countryCode = {};
let countryName = [];
const domainURL = "https://cors-anywhere.herokuapp.com/https://date.nager.at/api/v3";

window.onload = function () {
    /*fetch(domainURL + "/AvailableCountries")
        .then(function (response) {
            if (response.status === 200) {
                return response.json();
            }
        }).then(function (json) {
            for (country of json) {
                countryCode[country["name"]] = country["countryCode"];
            }
        });
    console.log(countryCode);*/

    //preset
    countryCode = {
        "Andorra": "AD",
        "Albania": "AL",
        "Argentina": "AR",
        "Austria": "AT",
        "Australia": "AU",
        "Åland Islands": "AX",
        "Bosnia and Herzegovina": "BA",
        "Barbados": "BB",
        "Belgium": "BE",
        "Bulgaria": "BG",
        "Benin": "BJ",
        "Bolivia": "BO",
        "Brazil": "BR",
        "Bahamas": "BS",
        "Botswana": "BW",
        "Belarus": "BY",
        "Belize": "BZ",
        "Canada": "CA",
        "Switzerland": "CH",
        "Chile": "CL",
        "China": "CN",
        "Colombia": "CO",
        "Costa Rica": "CR",
        "Cuba": "CU",
        "Cyprus": "CY",
        "Czechia": "CZ",
        "Germany": "DE",
        "Denmark": "DK",
        "Dominican Republic": "DO",
        "Ecuador": "EC",
        "Estonia": "EE",
        "Egypt": "EG",
        "Spain": "ES",
        "Finland": "FI",
        "Faroe Islands": "FO",
        "France": "FR",
        "Gabon": "GA",
        "United Kingdom": "GB",
        "Grenada": "GD",
        "Guernsey": "GG",
        "Gibraltar": "GI",
        "Greenland": "GL",
        "Gambia": "GM",
        "Greece": "GR",
        "Guatemala": "GT",
        "Guyana": "GY",
        "Honduras": "HN",
        "Croatia": "HR",
        "Haiti": "HT",
        "Hungary": "HU",
        "Indonesia": "ID",
        "Ireland": "IE",
        "Isle of Man": "IM",
        "Iceland": "IS",
        "Italy": "IT",
        "Jersey": "JE",
        "Jamaica": "JM",
        "Japan": "JP",
        "South Korea": "KR",
        "Liechtenstein": "LI",
        "Lesotho": "LS",
        "Lithuania": "LT",
        "Luxembourg": "LU",
        "Latvia": "LV",
        "Morocco": "MA",
        "Monaco": "MC",
        "Moldova": "MD",
        "Montenegro": "ME",
        "Madagascar": "MG",
        "North Macedonia": "MK",
        "Mongolia": "MN",
        "Montserrat": "MS",
        "Malta": "MT",
        "Mexico": "MX",
        "Mozambique": "MZ",
        "Namibia": "NA",
        "Niger": "NE",
        "Nigeria": "NG",
        "Nicaragua": "NI",
        "Netherlands": "NL",
        "Norway": "NO",
        "New Zealand": "NZ",
        "Panama": "PA",
        "Peru": "PE",
        "Papua New Guinea": "PG",
        "Poland": "PL",
        "Puerto Rico": "PR",
        "Portugal": "PT",
        "Paraguay": "PY",
        "Romania": "RO",
        "Serbia": "RS",
        "Russia": "RU",
        "Sweden": "SE",
        "Singapore": "SG",
        "Slovenia": "SI",
        "Svalbard and Jan Mayen": "SJ",
        "Slovakia": "SK",
        "San Marino": "SM",
        "Suriname": "SR",
        "El Salvador": "SV",
        "Tunisia": "TN",
        "Turkey": "TR",
        "Ukraine": "UA",
        "United States": "US",
        "Uruguay": "UY",
        "Vatican City": "VA",
        "Venezuela": "VE",
        "Vietnam": "VN",
        "South Africa": "ZA",
        "Zimbabwe": "ZW"
    };

};

document.getElementById("countrySubmit").addEventListener("click", function (event) {
    event.preventDefault();
    let country = document.getElementById("countryInput").value;
    let value = countryCode[country];
    let year = document.getElementById("yearInput").value;
    if (year === "") year = new Date().getFullYear();
    const countryURL = domainURL + "/PublicHolidays/" + year + "/" + value;
    const tableHeaders = ["Date", "Local Name", "Name", "is Global", "Type"];

    fetch(countryURL)
        .then(function (response) {
            if (response.status === 200) {
                return response.json();
            }
            else{
                document.getElementById("holidayResults").innerHTML = "";
                "Failed to get the response! Code: " + response.status;
            }
        })
        .then(function (json) {
            console.log(json)
            document.getElementById("holidayHead").innerHTML = 'Public Holidays in ' + country + ' (' + year + ')';
        
            let result = "<tr>";
            for (head of tableHeaders) {
                result += "<th>" + head + "</th>";
            }
            result += "</tr>"
            for (element of json) {
                result += "<tr>";
                result += "<td>" + element.date + "</td>";
                result += "<td>" + element.localName + "</td>";
                result += "<td>" + element.name + "</td>";
                result += "<td>" + (element.global ? "Yes" : "No") + "</td>";
                result += "<td>" + element.types + "</td>";
                result += "</tr>";
            }
            document.getElementById("holidayResults").innerHTML = result;
        });
});