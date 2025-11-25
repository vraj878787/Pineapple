
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: #8B5E34;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    height: 80px;
                    position: fixed;
                    width: 100%;
                    z-index: 1000;
                    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
                }
.nav-container {
                    max-width: 1200px;
                    height: 100%;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
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
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .nav-link {
                    color: #F7E7CE;
                    font-weight: 500;
                    font-size: 1.1rem;
                    position: relative;
                    padding: 0.5rem 0;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #FFE8B5;
                }
.mobile-menu-btn {
                    display: none;
                    color: #e4c06a;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .mobile-menu {
                        position: absolute;
                        top: 72px;
                        left: 0;
                        width: 100%;
                        background: linear-gradient(to right, #b6824b, #9e6b3f);
                        padding: 1rem 2rem;
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        transform: translateY(-100%);
                        opacity: 0;
                        transition: all 0.3s ease;
                        pointer-events: none;
                    }
                    
                    .mobile-menu.active {
                        transform: translateY(0);
                        opacity: 1;
                        pointer-events: all;
                    }
                    
                    .mobile-link {
                        color: rgba(255, 255, 255, 0.9);
                        padding: 0.5rem 0;
                        transition: color 0.3s ease;
                    }
                    
                    .mobile-link:hover {
                        color: #e4c06a;
                    }
                }
            </style>
            
            <nav>
                <div class="nav-container">
                    <a href="#" class="logo">
                        <i data-feather="coffee" class="logo-icon"></i>
                        <span class="brand">Café J'adore</span>
                    </a>
                    
                    <div class="nav-links">
                        <a href="#" class="nav-link">Home</a>
                        <a href="#about" class="nav-link">About</a>
                        <a href="#menu" class="nav-link">Menu</a>
                        <a href="#gallery" class="nav-link">Gallery</a>
                        <a href="#book" class="nav-link">Reservations</a>
                    </div>
                    
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                </div>
                
                <div class="mobile-menu">
                    <a href="#" class="mobile-link">Home</a>
                    <a href="#about" class="mobile-link">About</a>
                    <a href="#menu" class="mobile-link">Menu</a>
                    <a href="#gallery" class="mobile-link">Gallery</a>
                    <a href="#book" class="mobile-link">Reservations</a>
                </div>
            </nav>
        `;
        
        const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            const icon = this.shadowRoot.querySelector('.mobile-menu-btn i');
            if (mobileMenu.classList.contains('active')) {
                feather.icons.x.toSvg().then(svg => {
                    icon.outerHTML = svg;
                });
            } else {
                feather.icons.menu.toSvg().then(svg => {
                    icon.outerHTML = svg;
                });
            }
        });
}
}

customElements.define('custom-navbar', CustomNavbar);