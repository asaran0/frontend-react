export default function PrivateRoute({ children }) {
    const isAuthenticated = true; // Replace with actual authentication logic

    if (!isAuthenticated) {
        return <h1>Access Denied. Please log in.</h1>;
    }

    return children;
}