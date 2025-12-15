
export interface User {
    id: number;
    email: String;
    Name: String;
}
export interface AppData {
    authToken?: String;
    isAuthenticated: boolean;
    isAdmin: boolean;
    isLoading: boolean;
    loginMessage: String;
    counter: number;
}