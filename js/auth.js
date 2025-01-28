// Authentication related functionality
const auth = {
    user: null,
    isLoggedIn: false,

    login(email, password) {
        // Simulate login
        this.user = {
            id: 1,
            email,
            username: email.split('@')[0],
            avatar: 'https://via.placeholder.com/40'
        };
        this.isLoggedIn = true;
        return Promise.resolve(this.user);
    },

    signup(username, email, password) {
        // Simulate signup
        this.user = {
            id: Date.now(),
            email,
            username,
            avatar: 'https://via.placeholder.com/40'
        };
        this.isLoggedIn = true;
        return Promise.resolve(this.user);
    },

    logout() {
        this.user = null;
        this.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
    },

    validatePassword(password) {
        // Password must be at least 8 characters long and contain at least one number
        return password.length >= 8 && /\d/.test(password);
    }
}; 

// Modal toggle functions
function toggleLoginModal() {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    signupModal.classList.add('hidden');
    loginModal.classList.remove('hidden');
}

function toggleSignupModal() {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    loginModal.classList.add('hidden');
    signupModal.classList.remove('hidden');
}

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    try {
        // Validate inputs
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }
        
        if (!auth.validatePassword(password)) {
            throw new Error('Password must be at least 8 characters long and contain at least one number');
        }

        // Show loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Creating account...';
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Create account
        await auth.signup(username, email, password);
        
        // Update UI
        document.getElementById('signupModal').classList.add('hidden');
        document.getElementById('loginBtn').textContent = 'Profile';
        
        // Store auth state
        localStorage.setItem('isLoggedIn', 'true');
        
    } catch (error) {
        console.error('Signup failed:', error);
        alert(error.message || 'Signup failed. Please try again.');
        
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}); 