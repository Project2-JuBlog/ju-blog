import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";
import firebase from "firebase/compat/app";

export default {
    namespaced: true,
    state: {
        userProfile: {},
    },
    getters: {
        userProfile(state: any) {
            return state.userProfile;
        },
    },
    mutations: {
        setUser(state: any, payload: any) {
            state.userProfile = payload;
        },
        async editUserInfo(state: any, payload: any) {
            let userdata = state.userProfile;
            let newProfileInfor = {
                id: userdata.id,
                role: userdata.role,
                firstName: userdata.firstName,
                lastName: userdata.lastName,
                phoneNumber: userdata.role == 'student' ? payload.info.phone : 'no',
                email: userdata.email,
                collage: userdata.collage,
                major: userdata.major,
                gradYear: userdata.role == 'student' ? userdata.gradYear : "",
                status: userdata.role == 'student' ? userdata.status : "",
                acadYear: userdata.role == 'student' ? userdata.acadYear : "",
                file: payload.info.myFiles,
                Certificate: payload.info.certificate,
                experiense: payload.info.experience,
                languages: payload.info.language,
                recommendation: userdata.recommendation,
                skills: payload.info.skills,
                volunteer: payload.info.volunteer,
            };

            console.log(newProfileInfor);

            await db
                .collection("cv")
                .doc(payload.id)
                .update(newProfileInfor)
                .then(() => {
                    state.userProfile = newProfileInfor;
                    if (userdata.role == 'student') {
                        db.collection("users").doc(payload.id).update({
                            phoneNumber: payload.info.phone,
                            file: payload.info.myFiles,
                        });
                    }
                    else {
                        db.collection("users").doc(payload.id).update({
                            file: payload.info.myFiles,
                        });
                    }
                });
        },
    },
    actions: {
        async getUserCv(context: any, payload: any) {
            await db
                .collection("cv")
                .doc(payload)
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data();
                    // state.userInfo = document
                    context.commit("setUser", document);
                });
        },

        async editUserCv(context: any, payload: any) {
            await context.commit("editUserInfo", payload);
        },
        async addRecommand(context: any, payload: any) {
            let newRecommand = {
                description: payload.recomandation,
                RecommandBy: {
                    firstName: payload.user.firstName,
                    file: payload.user.file,
                    lastName: payload.user.lastName,
                    major: payload.user.major,
                    collage: payload.user.collage,
                },
            };

            await db
                .collection("cv")
                .doc(payload.userData.id)
                .update({
                    recommendation:
                        firebase.firestore.FieldValue.arrayUnion(newRecommand),
                });
            location.reload();
        },
    },
};
