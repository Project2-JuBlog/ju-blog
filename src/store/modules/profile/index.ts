import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";

export default {
    namespaced: true,
    state: {
        userProfile: {}
    },
    getters: {
        userProfile(state: any) {
            return state.userProfile
        }

    },
    mutations: {
        setUser(state: any, payload: any) {
            state.userProfile = payload;

        },
        async editUserInfo(state: any, payload: any) {

            let userdata = state.userProfile;
            console.log(userdata);
            let newProfileInfor = {
                id: userdata.id,
                role: userdata.role,
                firstName: userdata.firstName,
                lastName: userdata.lastName,
                phoneNumber: payload.info.phone,
                email: userdata.email,
                collage: userdata.collage,
                major: userdata.major,
                gradYear: userdata.gradYear,
                status: userdata.status,
                acadYear: userdata.acadYear,
                file: payload.info.myFiles,
                Certificate: payload.info.certificate,
                experiense: payload.info.experience,
                languages: payload.info.language,
                recommendation: userdata.recommendation,
                skills: payload.info.skills,
                volunteer: payload.info.volunteer
            }
            console.log(newProfileInfor);

            await db
                .collection("cv")
                .doc(payload.id)
                .update(newProfileInfor)
                .then(() => {
                    state.userProfile = newProfileInfor;
                    db.collection("users").doc(payload.id).update({
                        phoneNumber: payload.info.phone,
                        file: payload.info.myFiles,

                    })
                });
        }

    },
    actions: {
        async getUserCv(context: any, payload: any) {

            await db
                .collection("cv")
                .doc(payload)
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data();
                    console.log(document);
                    // state.userInfo = document
                    context.commit('setUser', document)
                });

        },

        async editUserCv(context: any, payload: any) {

            await context.commit('editUserInfo', payload)




        }


    },
};
