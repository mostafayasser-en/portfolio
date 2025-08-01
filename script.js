const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const resumeBtns = document.querySelectorAll('.resume-btn');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
    
    
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');
    header.classList.remove('active');


    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

    setTimeout(() => {
        header.classList.add('active');
    }, 1100)
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    barsBox.classList.remove('active');

    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100)

    sections.forEach(section => {
        section.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100)
            
        };
    });
});

const logo = document.querySelector('header .logo');
logo.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
                sections[0].classList.add('active');
        }, 1100)
    };
});



resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeSections = document.querySelectorAll('.resume-details');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeSections.forEach(section => {
            section.classList.remove('active');
        });
        resumeSections[idx].classList.add('active');
    
    });
});


// Portfolio Navigation
const initPortfolioNavigation = () => {
    const portfolioDetails = document.querySelectorAll('.portofolio-details');
    const imgItems = document.querySelectorAll('.img-item');
    const arrowRight = document.querySelector('.portofolio-box .navigation .right-arrow');
    const arrowLeft = document.querySelector('.portofolio-box .navigation .left-arrow');
    
    let currentIndex = 0;
    const totalItems = portfolioDetails.length;

    // Initialize first item as active
    if (portfolioDetails.length > 0) {
        portfolioDetails[0].classList.add('active');
        if (imgItems[0]) imgItems[0].classList.add('active');
    }

    // Update navigation state
    const updateNavigation = () => {
        if (arrowLeft) arrowLeft.classList.toggle('disabled', currentIndex === 0);
        if (arrowRight) arrowRight.classList.toggle('disabled', currentIndex === totalItems - 1);
    };

    // Initialize navigation state
    updateNavigation();

    // Function to show specific slide
    const showSlide = (index) => {
        // Update image slider
        const imgSlide = document.querySelector('.img-slide');
        if (imgSlide) {
            imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
        }
        
        // Update active state for images
        imgItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update active state for details
        portfolioDetails.forEach((detail, i) => {
            if (i === index) {
                detail.classList.add('active');
            } else {
                detail.classList.remove('active');
            }
        });

        currentIndex = index;
        updateNavigation();
    };

    // Navigation event listeners
    if (arrowRight) {
        arrowRight.addEventListener('click', () => {
            if (currentIndex < totalItems - 1) {
                showSlide(currentIndex + 1);
            }
        });
    }

    if (arrowLeft) {
        arrowLeft.addEventListener('click', () => {
            if (currentIndex > 0) {
                showSlide(currentIndex - 1);
            }
        });
    }

    // Add click event to images to navigate
    imgItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            showSlide(index);
        });
    });
};

// Initialize portfolio navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initPortfolioNavigation();
});