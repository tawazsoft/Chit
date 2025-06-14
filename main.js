//  // Mobile menu functionality
//         const mobileMenuBtn = document.getElementById('mobileMenuBtn');
//         const navLinks = document.getElementById('navLinks');

//         mobileMenuBtn.addEventListener('click', () => {
//             navLinks.classList.toggle('mobile');
//             navLinks.classList.toggle('active');
//             mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
//         });

//         // Close mobile menu when clicking on a link
//         document.querySelectorAll('.nav-links a').forEach(link => {
//             link.addEventListener('click', () => {
//                 navLinks.classList.remove('active');
//                 mobileMenuBtn.textContent = '☰';
//             });
//         });

//         // Smooth scrolling for navigation links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const target = document.querySelector(this.getAttribute('href'));
//                 if (target) {
//                     target.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 }
//             });
//         });

//         // Header background change on scroll
//         window.addEventListener('scroll', () => {
//             const header = document.querySelector('header');
//             if (window.scrollY > 100) {
//                 header.style.background = 'rgb(38, 140, 67)';
//             } else {
//                 header.style.background = 'linear-gradient(135deg, #268c43, #145828FF)';
//             }
//         });

//         // Fade in animation on scroll
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: '0px 0px -50px 0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                 }
//             });
//         }, observerOptions);

//         document.querySelectorAll('.fade-in').forEach(el => {
//             observer.observe(el);
//         });

//         // WhatsApp functionality
//         const whatsappBtn = document.getElementById('whatsappBtn');
        
//         function sendWhatsApp() {
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const phone = document.getElementById('phone').value;
//             const interest = document.getElementById('interest').value;
//             const message = document.getElementById('message').value;
            
//             if (!name || !email || !interest || !message) {
//                 alert('Please fill in all required fields before sending WhatsApp message.');
//                 return;
//             }
            
//             const whatsappMessage = `Hello Mitchtin Foods!

// *New Inquiry Details:*
// 📝 Name: ${name}
// 📧 Email: ${email}
// 📞 Phone: ${phone || 'Not provided'}
// 🎯 Interest: ${interest}

// 💬 Message:
// ${message}

// Thank you!`;
            
//             // Replace with your actual WhatsApp number (include country code without + sign)
//             const whatsappNumber = '263XXXXXXXXX'; // Update this with your actual number
//             const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
//             window.open(whatsappUrl, '_blank');
//         }

//         whatsappBtn.addEventListener('click', sendWhatsApp);

//         // Email form submission
//         document.querySelector('.contact-form').addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form data
//             const formData = new FormData(this);
//             const name = formData.get('name');
//             const email = formData.get('email');
//             const phone = formData.get('phone');
//             const interest = formData.get('interest');
//             const message = formData.get('message');
            
//             // Simple validation
//             if (name && email && interest && message) {
//                 // Create email content
//                 const emailSubject = `New Inquiry from ${name} - ${interest}`;
//                 const emailBody = `Name: ${name}
// Email: ${email}
// Phone: ${phone || 'Not provided'}
// Interest Area: ${interest}

// Message:
// ${message}`;
                
//                 // Create mailto link
//                 const mailtoLink = `mailto:mitchtin@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                
//                 // Simulate form submission
//                 const submitBtn = this.querySelector('.submit-btn');
//                 const originalText = submitBtn.textContent;
                
//                 submitBtn.textContent = 'Opening Email...';
//                 submitBtn.disabled = true;
                
//                 // Open email client
//                 window.location.href = mailtoLink;
                
//                 setTimeout(() => {
//                     submitBtn.textContent = 'Email Sent!';
//                     submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
                    
//                     setTimeout(() => {
//                         submitBtn.textContent = originalText;
//                         submitBtn.disabled = false;
//                         submitBtn.style.background = '';
//                         this.reset();
//                     }, 3000);
//                 }, 1000);
//             } else {
//                 alert('Please fill in all required fields before submitting.');
//             }
//         });

//         // Add floating crop elements
//         function createFloatingElement() {
//             const elements = ['🍠', '🥜', '🌱', '🌾'];
//             const element = document.createElement('div');
//             element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
//             element.style.position = 'absolute';
//             element.style.fontSize = Math.random() * 25 + 15 + 'px';
//             element.style.opacity = '0.3';
//             element.style.left = Math.random() * 100 + '%';
//             element.style.top = '100%';
//             element.style.animation = `floatUp ${Math.random() * 8 + 12}s linear infinite`;
//             element.style.pointerEvents = 'none';
//             element.style.zIndex = '1';
            
//             document.querySelector('.hero').appendChild(element);
            
//             setTimeout(() => {
//                 element.remove();
//             }, 20000);
//         }

//         // Add floating elements periodically
//         setInterval(createFloatingElement, 4000);

//         // Handle window resize for mobile menu
//         window.addEventListener('resize', () => {
//             if (window.innerWidth > 768) {
//                 navLinks.classList.remove('mobile', 'active');
//                 mobileMenuBtn.textContent = '☰';
//             }
//         });

//         // CSS for floating animation
//         const style = document.createElement('style');
//         style.textContent = `
//             @keyframes floatUp {
//                 0% {
//                     transform: translateY(0) rotate(0deg);
//                     opacity: 0.3;
//                 }
//                 50% {
//                     opacity: 0.6;
//                 }
//                 100% {
//                     transform: translateY(-100vh) rotate(360deg);
//                     opacity: 0;
//                 }
//             }
//         `;
//         document.head.appendChild(style);


// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile');
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgb(38, 140, 67)';
    } else {
        header.style.background = 'linear-gradient(135deg, #268c43, #145828FF)';
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// WhatsApp functionality
const whatsappBtn = document.getElementById('whatsappBtn');

function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !interest || !message) {
        alert('Please fill in all required fields before sending WhatsApp message.');
        return;
    }
    
    const whatsappMessage = `Hello Mitchtin Foods!

*New Inquiry Details:*
📝 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone || 'Not provided'}
🎯 Interest: ${interest}

💬 Message:
${message}

Thank you!`;
    
    // Replace with your actual WhatsApp number (include country code without + sign)
    const whatsappNumber = '263712313156'; // Updated with your phone number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Only add event listener if WhatsApp button exists
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', sendWhatsApp);
}

// Email form submission - COMPLETELY FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // CRITICAL: Prevent the default form submission
            e.preventDefault();
            e.stopPropagation();
            
            // Get form data using direct element access
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value.trim();
            
            // Validation
            if (!name || !email || !interest || !message) {
                showErrorNotification('Please fill in all required fields before submitting.');
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showErrorNotification('Please enter a valid email address.');
                return false;
            }
            
            // Get submit button
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.background = 'linear-gradient(45deg, #ff9800, #ff5722)';
            
            // Create email content
            const emailSubject = `New Inquiry from ${name} - ${interest}`;
            const emailBody = `Dear Mitchtin Foods Team,

You have received a new inquiry through your website:

==== INQUIRY DETAILS ====
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Interest Area: ${interest}

Message:
${message}

==========================

Please respond to this inquiry as soon as possible.

Best regards,
Website Contact Form`;
            
            // Simulate processing time
            setTimeout(() => {
                try {
                    // Create mailto link
                    const mailtoLink = `mailto:mashandatawanda@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                    
                    // Open email client
                    window.location.href = mailtoLink;
                    
                    // Show success state
                    submitBtn.textContent = 'Email Client Opened!';
                    submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
                    
                    // Reset form and show success message
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        contactForm.reset();
                        
                        showSuccessNotification('Your email client has been opened with your message. Please send the email to complete your inquiry.');
                    }, 2000);
                    
                } catch (error) {
                    console.error('Error opening email client:', error);
                    
                    // Fallback: show email details
                    submitBtn.textContent = 'Email Ready';
                    submitBtn.style.background = 'linear-gradient(45deg, #2196F3, #03A9F4)';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        
                        showInfoNotification(`Please send an email to: mitchtin@gmail.com with the subject: "${emailSubject}"`);
                    }, 2000);
                }
            }, 1000);
            
            // Prevent any default behavior
            return false;
        });
    }
});

// Success notification function
function showSuccessNotification(message) {
    createNotification(message, 'success', '✅');
}

// Error notification function
function showErrorNotification(message) {
    createNotification(message, 'error', '❌');
}

// Info notification function
function showInfoNotification(message) {
    createNotification(message, 'info', 'ℹ️');
}

// Generic notification creator
function createNotification(message, type, icon) {
    // Remove any existing notifications
    const existingNotifications = document.querySelectorAll('.custom-notification');
    existingNotifications.forEach(notif => notif.remove());
    
    const colors = {
        success: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
        error: 'linear-gradient(45deg, #f44336, #ff5722)',
        info: 'linear-gradient(45deg, #2196F3, #03A9F4)'
    };
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: 500;
            max-width: 350px;
            font-size: 14px;
            line-height: 1.4;
            animation: slideIn 0.3s ease-out;
            cursor: pointer;
        " onclick="this.parentElement.remove()">
            ${icon} ${message}
            <div style="font-size: 12px; margin-top: 8px; opacity: 0.9;">Click to dismiss</div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove notification after 6 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 6000);
}

// Add floating crop elements
function createFloatingElement() {
    // const elements = ['', '🥜', '🌱', '🌾', ''];
    const element = document.createElement('div');
    element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
    element.style.position = 'absolute';
    element.style.fontSize = Math.random() * 25 + 15 + 'px';
    element.style.opacity = '0.3';
    element.style.left = Math.random() * 100 + '%';
    element.style.top = '100%';
    element.style.animation = `floatUp ${Math.random() * 8 + 12}s linear infinite`;
    element.style.pointerEvents = 'none';
    element.style.zIndex = '1';
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.appendChild(element);
        
        setTimeout(() => {
            if (element.parentElement) {
                element.remove();
            }
        }, 20000);
    }
}

// Add floating elements periodically
setInterval(createFloatingElement, 4000);

// Handle window resize for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('mobile', 'active');
        mobileMenuBtn.textContent = '☰';
    }
});

// CSS for floating animation and notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .custom-notification {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
`;
document.head.appendChild(style);