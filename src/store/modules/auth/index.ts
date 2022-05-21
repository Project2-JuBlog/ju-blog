import axios from "../../../axios";
import router from "../../../router";
let timer: any;
export default {
    namespaced: true,
    state: {
        token: "",
        tokenExpiration: "",
        user: {
            name: "test test",
            email: "",
            image: "rawanimage.png",
            role: "student",
            userId: "",
            major: "",
            collage: "",
            phoneNo: "",
            gradYear: "",
            status: "",
            acadYear: "",
        },
    },
    getters: {
        user(state: any) {
            return state.user;
        },
        token(state: any) {
            return state.token;
        },
        isAuthenticated(state: any) {
            return state.token ? true : false;
        },
    },
    mutations: {
        setUser(state: any, payload: any) {
            state.token = payload.token;
            state.user.userId = payload.userId;
        },
        setUserInfo(state: any, payload: any) {
            const user: any = axios.post(`users.json`, {
                id: state.user.userId,
                role: payload.role,
                firstName: payload.firstName,
                lastName: payload.lastName,
                phoneNumber: payload.phoneNumber,
                email: payload.email,
                collage: payload.collage,
                major: payload.major,
                gradYear: payload.gradYear,
                status: payload.status,
                acadYear: payload.acadYear,
            });
            if (user) {
                if (payload.role == "student") {
                    router.push({ name: "Feed" });
                }
                state.user.name = payload.firstName + " " + payload.lastName;
                state.user.email = payload.email;
                state.user.role = payload.role;
                state.user.phoneNo = payload.phoneNumber;
                state.user.collage = payload.collage;
                state.user.major = payload.major;
                state.user.gradYear = payload.gradYear;
                state.user.status = payload.status;
                state.user.acadYear = payload.acadYear;
            }
        },
    },
    actions: {
        async login(context: any, payload: any) {
            await context.dispatch("auth", { ...payload, mode: "login" });


            router.push({ name: "Feed" });

        },

        async signup(context: any, payload: any) {
            await context.dispatch("auth", { ...payload, mode: "signup" });

            context.dispatch("setUser", payload);

        },

        setUser(context: any, payload: any) {
            context.commit("setUserInfo", payload);
        },


        async auth(context: any, payload: any) {
            const mode = payload.mode;
            let url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnBaHK8T68A0HUD1tYaJBJFU_8tPjuTBk";
            if (mode == "signup") {
                url =
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnBaHK8T68A0HUD1tYaJBJFU_8tPjuTBk";
            }

            const login = await axios.post(url, {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            });


            const expiresIn = +login.data.expiresIn * 1000;
            const expirestionDate = new Date().getTime() + expiresIn;
            localStorage.setItem('token', login.data.idToken);
            localStorage.setItem('userId', login.data.localId);
            localStorage.setItem('tokenExpiration', expirestionDate.toString());
            timer = setTimeout(() => {
                context.dispatch('logOut');
            }, expiresIn)

            context.commit("setUser", {
                userId: login.data.localId,
                token: login.data.idToken,
                tokenExpiration: expirestionDate,
            });
        },
        tryLogin(context: any) {
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('userId')
            const tokenExpiration: any = localStorage.getItem('tokenExpiration');
            const expiresIn = +tokenExpiration - new Date().getTime();
            if (expiresIn < 0) {
                return;
            }
            timer = setTimeout(() => {
                context.dispatch('logOut');
            }, expiresIn)
            if (token && userId) {
                context.commit('setUser', { token: token, userId: userId })
            }
        },

        logOut(context: any) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('tokenExpiration');
            clearTimeout(timer);
            context.commit("setUser", {
                token: null,
                userId: null,
            });
            location.reload();
        },
    },
};
