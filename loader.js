fetch('https://api.github.com/repos/darkl78-gif/smart-order-assistant/commits/main')
.then(r => r.json())
.then(d => {

    let userId = prompt("Enter Access ID:");

    fetch('https://cdn.jsdelivr.net/gh/darkl78-gif/smart-order-assistant@main/access.json')
    .then(r => r.json())
    .then(data => {

        if (!data.users.includes(userId)) {
            alert("❌ Access Denied");
            return;
        }

        let script = document.createElement("script");
        script.src = 'https://cdn.jsdelivr.net/gh/darkl78-gif/smart-order-assistant@' + d.sha + '/assistant.js';

        document.body.appendChild(script);

        alert("✅ Access Granted");
    });

});
