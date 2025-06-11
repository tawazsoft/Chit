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
                header.style.background = 'rgba(139, 69, 19, 0.95)';
            } else {
                header.style.background = 'linear-gradient(135deg, #8B4513, #CD853F)';
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
            const whatsappNumber = '263XXXXXXXXX'; // Update this with your actual number
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
        }

        whatsappBtn.addEventListener('click', sendWhatsApp);

        // Email form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const interest = formData.get('interest');
            const message = formData.get('message');
            
            // Simple validation
            if (name && email && interest && message) {
                // Create email content
                const emailSubject = `New Inquiry from ${name} - ${interest}`;
                const emailBody = `Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Interest Area: ${interest}

Message:
${message}`;
                
                // Create mailto link
                const mailtoLink = `mailto:info@mitchtinfoods.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                
                // Simulate form submission
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Opening Email...';
                submitBtn.disabled = true;
                
                // Open email client
                window.location.href = mailtoLink;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Email Sent!';
                    submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        this.reset();
                    }, 3000);
                }, 1000);
            } else {
                alert('Please fill in all required fields before submitting.');
            }
        });

        // Add floating crop elements
        function createFloatingElement() {
            const elements = ['🍠', '🥜', '🌱', '🌾'];
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
            
            document.querySelector('.hero').appendChild(element);
            
            setTimeout(() => {
                element.remove();
            }, 20000);
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

        // CSS for floating animation
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
        `;
        document.head.appendChild(style);