// Global state
let userPhoto = null;
let clothingPhoto = null;

// DOM elements
const userUpload = document.getElementById('user-upload');
const clothingUpload = document.getElementById('clothing-upload');
const userFileInput = document.getElementById('user-file');
const clothingFileInput = document.getElementById('clothing-file');
const testButton = document.getElementById('test-button');
const uploadMessage = document.getElementById('upload-message');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeUploadAreas();
    initializeNavigation();
    addAnimations();
});

// Initialize upload areas
function initializeUploadAreas() {
    // User photo upload
    userUpload.addEventListener('click', () => {
        userFileInput.click();
    });

    userFileInput.addEventListener('change', (e) => {
        handleFileSelect(e, 'user');
    });

    // Clothing photo upload
    clothingUpload.addEventListener('click', () => {
        clothingFileInput.click();
    });

    clothingFileInput.addEventListener('change', (e) => {
        handleFileSelect(e, 'clothing');
    });

    // Test button
    testButton.addEventListener('click', handleTest);
}

// Handle file selection
function handleFileSelect(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.');
        return;
    }

    // Store the file and display preview
    if (type === 'user') {
        userPhoto = file;
        displayImagePreview(file, userUpload);
    } else {
        clothingPhoto = file;
        displayImagePreview(file, clothingUpload);
    }

    // Update button state
    updateTestButton();
}

// Display image preview
function displayImagePreview(file, uploadArea) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Clear existing content
        uploadArea.innerHTML = '';
        
        // Create image element
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = 'Preview da imagem selecionada';
        
        // Add image to upload area
        uploadArea.appendChild(img);
        uploadArea.classList.add('has-image');
    };
    
    reader.readAsDataURL(file);
}

// Update test button state
function updateTestButton() {
    const hasAllImages = userPhoto && clothingPhoto;
    
    testButton.disabled = !hasAllImages;
    
    if (hasAllImages) {
        uploadMessage.textContent = '';
    } else {
        uploadMessage.textContent = 'Selecione ambas as imagens para começar o teste';
    }
}

// Handle test button click
function handleTest() {
    if (!userPhoto || !clothingPhoto) {
        alert('Por favor, selecione ambas as imagens antes de testar!');
        return;
    }

    // Show loading state
    const originalText = testButton.innerHTML;
    testButton.innerHTML = `
        <svg class="btn-icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12a9 9 0 11-6.219-8.56"/>
        </svg>
        Processando...
    `;
    testButton.disabled = true;

    // Simulate processing time
    setTimeout(() => {
        // Reset button
        testButton.innerHTML = originalText;
        testButton.disabled = false;
        
        // Show result
        alert('Função de teste será implementada em breve! 🚀');
        
        // Update test button state
        updateTestButton();
    }, 3000);
}

// Initialize smooth navigation
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation item on scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

// Update active navigation item
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Add entrance animations
function addAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .upload-card, .result-card, .pricing-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Add spin animation for loading states
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    .nav-menu a.active {
        color: hsl(var(--primary));
    }
`;
document.head.appendChild(style);