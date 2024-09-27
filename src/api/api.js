import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ab83e082-0f84-4ed8-95f4-a04747445e5c'
    }
});

export const usersAPI = {
    getUsersPage(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getUser(userId) {
        return instance.get(`users/${userId}`)
            .then(response => response.data);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getLogin() {
        return instance.get(`auth/me`);
    },
};
