function portfolioDrop() {
    var button = document.getElementById("portfolioDropdown");
    var nav = document.getElementById("vertical-nav");
    if (nav.style.display === "none") {
        nav.style.display = "block";
        button.innerHTML = '<i class="fas fa-chevron-down me-2"></i>PORTFOLIO';
    } else {
        nav.style.display = "none";
        button.innerHTML = '<i class="fas fa-chevron-right me-2"></i>PORTFOLIO';
    }
}


function toggleTab(tabId) {
    // Get all tabs
    const tabs = document.querySelectorAll('.nav-link');
    
    // Remove active class from all tabs
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    
    // Get the tab content elements
    const tabContents = document.querySelectorAll('.tab-pane');
    
    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove('show', 'active');
    });
    
    // Find and activate the correct tab
    const targetTab = document.querySelector(`#${tabId}-tab`);
    if (targetTab) {
        targetTab.classList.add('active');
        targetTab.setAttribute('aria-selected', 'true');
    }
    
    // Show the correct content
    const targetContent = document.querySelector(`#${tabId}`);
    if (targetContent) {
        targetContent.classList.add('show', 'active');
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i), 50);
    }
}

const contactJson = {
    "name": "Harshiv Gajjar",
    "email": "harshivpgajjar@gmail.com",
    "phone": "+1 (437) 962-5787",
    "linkedin": "https://www.linkedin.com/in/harshivgajjar",
    "github": "https://github.com/harshivgajjar"
};

document.addEventListener('DOMContentLoaded', (event) => {
    const titleElement = document.getElementById('typing-title');
    const contentElement = document.getElementById('typing-content');
    
    typeWriter(titleElement, "Welcome to My Portfolio");
    setTimeout(() => {
        typeWriter(contentElement, "Hi, I'm Harshiv Gajjar, a passionate developer showcasing my projects and skills.");
    }, 2000);

    document.getElementById('contact-json').textContent = JSON.stringify(contactJson, null, 2);

    // Add click event listeners to side nav icons
    const sideNavLinks = document.querySelectorAll('.side-nav a');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('href').substring(1);
            toggleTab(tabId);
        });
    });
});