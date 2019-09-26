// day names array
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
    
    // Long month names array
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const lastupdated = new Date();
    const dayName = daynames[lastupdated.getDay()];
    const monthName = months[lastupdated.getMonth()];
    const year = lastupdated.getFullYear;
    const currentdate = dayName + ", " + lastupdated.getDate() + " " + monthName + ", " + lastupdated.getFullYear();
    
    document.getElementById('lastupdated').textContent = currentdate;