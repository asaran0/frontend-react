
export interface User {
    id: number
    username: string
    email: string
    fullname: string
    mobile_no?: string
    created_at: string
}

export interface Category {
    id: number
    name: string
}

export interface Question {
    id: number
    category_id: number
    question: string
    answer?: string
    is_locked: boolean
}

export interface Course {
    id: number
    name: string
    description?: string
    price: number
    subjects?: Subject[]
}

export interface Subject {
    id: number
    name: string
    category_id?: number

}

export interface Subscription {
    id: number
    user_id: number
    course_id: number
    active: boolean
    starts_at: string
    expires_at: string
}

export interface AuthResponse {
    access_token: string
    token_type: string
    user: User
}