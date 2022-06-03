import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";
import firebase from "firebase/compat/app";

export default {
    namespaced: true,
    state: {
        eventTo: {},
        generalEvent: {},
    },
    getters: {
        eventTo(state: any) {
            return state.eventTo;
        },
        generalEvent(state: any) {
            return state.generalEvent;
        },
    },
    mutations: {
        setEvent(state: any, payload: any) {
            state.eventTo = payload;
        },
        setGeneralEvent(state: any, payload: any) {
            state.generalEvent = payload;
        },
    },
    actions: {
        async getEvent(context: any, payload: any) {
            await db
                .collection("eventToDo")
                .doc(payload)
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data();
                    context.commit("setEvent", document?.events);
                });
        },
        async SetEvent(context: any, payload: any) {
            await db
                .collection("eventToDo")
                .doc(payload.user.id)
                .set(
                    {
                        events: firebase.firestore.FieldValue.arrayUnion(payload.newEvent),
                    },
                    { merge: true }
                )
                .then(() => {
                    context.dispatch("getEvent", payload.user.id);
                });
        },
        async AddGeneralEvent(context: any, payload: any) {
            let id = "_" + Math.random().toString(36).substr(2, 9);
            let createdBy = {
                id: payload.user.id,
                firstName: payload.user.firstName,
                lastName: payload.user.lastName,
            };
            let eventGroup = {
                date: payload.event.date,
                id: id,
                name: payload.event.title,
                createdBy: createdBy,
            };
            await db
                .collection("groups")
                .doc(payload.event.group)
                .set(
                    {
                        events: firebase.firestore.FieldValue.arrayUnion(eventGroup),
                    },
                    { merge: true }
                )
                .then(async () => {
                    let generalEvent = {
                        event: payload.event,
                        createdBy: createdBy,
                        enrolls: [],
                    };

                    await db
                        .collection("GeneralEvent")
                        .doc(id)
                        .set(generalEvent, { merge: true });
                });
            context.dispatch("SetEvent", {
                newEvent: {
                    title: payload.event.title,
                    startDate: payload.event.date,
                    endDate: payload.event.date,
                    backgroundColor: "#FF0000",
                },
                user: payload.user
            })

        },
        async getGernralEvent(context: any, payload: any) {
            await db
                .collection("GeneralEvent")
                .doc(payload)
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data();
                    context.commit("setGeneralEvent", document);
                });

        },

        async enrollEvent(context: any, payload: any) {
            //

            await db
                .collection("GeneralEvent")
                .doc(payload.eventId)
                .set(
                    {
                        enrolls: firebase.firestore.FieldValue.arrayUnion({
                            firstName: payload.user.firstName,
                            lastName: payload.user.lastName,
                            id: payload.user.id,
                            file: payload.user.file,
                        }),
                    },
                    { merge: true }
                );
            context.dispatch("SetEvent", {
                newEvent: {
                    title: payload.event.event.title,
                    startDate: payload.event.event.date,
                    endDate: payload.event.event.date,
                    backgroundColor: "#FF0000",
                },
                user: payload.user
            })
        },
    },
};
