import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";
import firebase from "firebase/compat/app";

export default {
    namespaced: true,
    state: {
        friends: [],
        request: [],
        sent: [],
    },
    getters: {
        friends(state: any) {
            return state.friends;
        },
        request(state: any) {
            return state.request;
        },
        sent(state: any) {
            return state.sent;
        },
    },
    mutations: {
        async setFreinedRequest(state: any, payload: any) {
            let sendData = {
                fname: payload.myUser.firstName,
                id: payload.myUser.id,
                lname: payload.myUser.lastName,
                file: payload.myUser.file,
            };
            await db
                .collection("friend")
                .doc(payload.frinedUser.id)
                .set(
                    {
                        request: firebase.firestore.FieldValue.arrayUnion(sendData),
                    },
                    { merge: true }
                );
            state.sent.push(sendData);
        },
        async setMysend(state: any, payload: any) {
            db.collection("friend")
                .doc(payload.myUser.id)
                .set(
                    {
                        send: firebase.firestore.FieldValue.arrayUnion({
                            fname: payload.frinedUser.firstName,
                            id: payload.frinedUser.id,
                            lname: payload.frinedUser.lastName,
                            file: payload.frinedUser.file,
                        }),
                    },
                    { merge: true }
                );
        },

        setSend(state: any, payload: any) {
            state.sent = payload
        },
        setRequest(state: any, payload: any) {
            state.request = payload
        },
        setfriends(state: any, payload: any) {
            state.friends = payload
        }
    },
    actions: {

        async addFrined(context: any, payload: any) {
            await context.commit("setFreinedRequest", payload);
            await context.commit("setMysend", payload);
        },
        async getFreindData(context: any, payload: any) {
            await db
                .collection("friend")
                .doc(payload)
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data();
                    console.log(document);

                    context.commit("setSend", document?.send);
                    context.commit("setRequest", document?.request);
                    context.commit("setfriends", document?.friends);
                });
        },
    },
};
