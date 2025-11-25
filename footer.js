
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #8B5E34;
padding: 5rem 0 3rem;
                    position: relative;
                }
                
                footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(to right, #fdf4d9, #d8af48);
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                    font-weight: 600;
                }
                
                .logo-icon {
                    color: #e4c06a;
                }
                
                .brand {
                    background: linear-gradient(to right, #e4c06a, #d8af48);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                
                .footer-about {
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background: #e4c06a;
                    transform: translateY(-3px);
                }
                
                .social-link i {
                    color: rgba(255, 255, 255, 0.9);
                }
                
                .social-link:hover i {
                    color: #1a1a1a;
                }
                
                .footer-heading {
                    color: #e4c06a;
                    font-size: 1.25rem;
                    margin-bottom: 1.5rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background: linear-gradient(to right, #e4c06a, #d8af48);
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: rgba(255, 255, 255, 0.8);
                    transition: all 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #e4c06a;
                    padding-left: 5px;
                }
                
                .footer-contact-item {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                }
                
                .contact-icon {
                    color: #e4c06a;
                    margin-top: 0.25rem;
                }
                
                .contact-text {
                    color: rgba(255, 255, 255, 0.8);
                }
                
                .hours-item {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 0.5rem;
                    margin-bottom: 0.5rem;
                    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
                }
                
                .hours-day {
                    color: rgba(255, 255, 255, 0.8);
                }
                
                .hours-time {
                    color: #e4c06a;
                }
                
                .footer-bottom {
                    text-align: center;
                    padding-top: 3rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-container">
                    <div class="footer-grid">
                        <div>
                            <a href="#" class="footer-logo">
                                <i data-feather="coffee" class="logo-icon"></i>
                                <span class="brand">Café J'adore</span>
                            </a>
                            <p class="footer-about">
                                Where taste meets elegance. Beautiful ambience, delicious dishes, unforgettable service.
                            </p>
                            <div class="social-links">
                                <a href="#" class="social-link">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="facebook"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="twitter"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="footer-heading">Quick Links</h3>
                            <div class="footer-links">
                                <a href="#" class="footer-link">Home</a>
                                <a href="#about" class="footer-link">About</a>
                                <a href="#menu" class="footer-link">Menu</a>
                                <a href="#gallery" class="footer-link">Gallery</a>
                                <a href="#book" class="footer-link">Reservations</a>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="footer-heading">Contact Us</h3>
                            <div class="footer-contact">
                                <div class="footer-contact-item">
                                    <i data-feather="map-pin" class="contact-icon"></i>
                                    <span class="contact-text">123 Gourmet Avenue<br>Foodville, 12345</span>
                                </div>
                                <div class="footer-contact-item">
                                    <i data-feather="phone" class="contact-icon"></i>
                                    <span class="contact-text">+1 (555) 123-4567</span>
                                </div>
                                <div class="footer-contact-item">
                                    <i data-feather="mail" class="contact-icon"></i>
                                    <span class="contact-text">hello@cafejadore.com</span>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="footer-heading">Opening Hours</h3>
                            <div class="footer-hours">
                                <div class="hours-item">
                                    <span class="hours-day">Monday - Friday</span>
                                    <span class="hours-time">8AM - 10PM</span>
                                </div>
                                <div class="hours-item">
                                    <span class="hours-day">Saturday</span>
                                    <span class="hours-time">9AM - 11PM</span>
                                </div>
                                <div class="hours-item">
                                    <span class="hours-day">Sunday</span>
                                    <span class="hours-time">9AM - 9PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        &copy; 2025 Café J'adore. All rights reserved.
                    </div>
                </div>
            </footer>
        `;
}
}

customElements.define('custom-footer', CustomFooter);