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

    logout() {
        this.user = null;
        this.isLoggedIn = false;
    }
}; 