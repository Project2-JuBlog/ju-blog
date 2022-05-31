import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";
import firebase from 'firebase/compat/app';

let timer: any;
export default {
    namespaced: true,
    state: {
        token: "",
        tokenExpiration: "",
        userInfo: {},
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
        userInfo(state: any) {
            return state.userInfo;

        },
        token(state: any) {
            return state.token;
        },
        isAuthenticated(state: any) {
            return state.token ? true : false;
        },
        userGroup(state: any) {
            return state.userInfo.groups;
        }
    },
    mutations: {
        setUser(state: any, payload: any) {
            state.token = payload.token;
            state.user.userId = payload.userId;

        },
        setUserInfo(state: any, payload: any) {
            const groups = [];
            groups.push(payload.major);
            groups.push(payload.collage);
            db.collection("users").doc(state.user.userId).set({
                id: state.user.userId,
                role: payload.role,
                firstName: payload.firstName,
                lastName: payload.lastName,
                phoneNumber: payload.phoneNumber,
                email: payload.email,
                collage: payload.collage.name,
                major: payload.major.name,
                gradYear: payload.gradYear,
                status: payload.status,
                acadYear: payload.acadYear,
                groups: groups,
                file: ""

            })
            db.collection("cv").doc(state.user.userId).set({
                id: state.user.userId,
                role: payload.role,
                firstName: payload.firstName,
                lastName: payload.lastName,
                phoneNumber: payload.phoneNumber,
                email: payload.email,
                collage: payload.collage.name,
                major: payload.major.name,
                gradYear: payload.gradYear,
                status: payload.status,
                acadYear: payload.acadYear,
                file: "",
                Certificate: [],
                experiense: [],
                languages: [],
                recommendation: [],
                skills: [],
                volunteer: []

            })
            for (let i = 0; i < groups.length; i++) {

                db.collection("GroupMember").doc(groups[i].id).update({
                    memebers: firebase.firestore.FieldValue.arrayUnion({
                        fname: payload.firstName,
                        id: state.user.userId,
                        image: "",
                        lname: payload.lastName,
                        role: payload.role,
                        status: payload.status
                    })
                })
            }




            if (payload.role == "student") {
                router.push({ name: "Feed" });
            }


        },
        async getUserInfo(state: any, payload: any) {
            await db.collection("users").doc(state.user.userId).get().then((snapshot: any) => {
                const document: any = snapshot.data();
                state.userInfo = document

            })


        }

    },
    actions: {
        getUser(context: any, payload: any) {

            context.commit('getUserInfo', payload)

        },
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
