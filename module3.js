document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather user input
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const incident = document.getElementById('incident').value;

    // Find the nearest police station (for simplicity, we will use a static message)
    const policeStation = {
        name: "Downtown Police Station",
        address: "123 Main St, Downtown",
        contact: "555-1234"
    };

    // Create a message for the popup
    const message = `Incident reported by ${name} (${phone}) at ${location}.\nDescription: ${incident}\n\nNearest Police Station:\n${policeStation.name}\n${policeStation.address}\nContact: ${policeStation.contact}`;

    // Show the popup with the message
    document.getElementById('popupMessage').innerText = message;
    document.getElementById('popup').style.display = 'flex';
});

 //Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
/*
async function armSystem() {
    await fetch('/arm', { method: 'POST' });
    updateStatus();
}

async function disarmSystem() {
    await fetch('/disarm', { method: 'POST' });
    updateStatus();
}

async function triggerAlert() {
    await fetch('/trigger_alert', { method: 'POST' });
    updateStatus();
}

async function updateStatus() {
    const response = await fetch('/status');
    const data = await response.json();
    document.getElementById('status').innerText = `System is ${data.armed ? 'Armed' : 'Disarmed'}`;
    document.getElementById('alerts').innerText = data.alerts.join(', ') || 'No alerts';
}

window.onload = updateStatus;*/
 // Smooth scrolling effect for anchor links
 document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function signingin_btn(){
    var user=document.getElementById("user").value
    var pass=document.getElementById("pass").value
    var body_part=document.getElementById("form_box")
    var sub_part=document.getElementById("log_boxer")
   // var lobox=document.getElementById("log_boxer")
    var mark=document.getElementById("input_mark")
    if(user==""){
        alert("invalid username")
        } 
        else if(pass==""){
            alert("invalid password")
        }
        else{
           // container.style.display= "none";
            body_part.style.display="block";
            sub_part.style.display="none";
        } 
    }
    document.getElementById("log_btn").addEventListener("click",signingin_btn)
