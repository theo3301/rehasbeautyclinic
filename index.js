function openCity(event, serviceName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    if (serviceName === 'allServices') {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
        }
        document.getElementById('bridal').style.display = "none"; // Hide Bridal section explicitly
        document.getElementById('groomingService').style.display = "block"; // Show Grooming section
    } else if (serviceName === 'Professional') {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(serviceName).style.display = "block";
        document.getElementById('groomingService').style.display = "none"; // Hide Grooming section
    } else {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(serviceName).style.display = "block";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}
