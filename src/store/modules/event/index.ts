import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";
import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
                .then((snapshot) => {
                    const document = snapshot.data();
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
            const metadata = {
                contentType: payload.event.myFiles.type,
            };
            let link = "";
            let eventGeneral = {
                title: payload.event.title,
                type: payload.event.type,
                location: payload.event.location,
                url: payload.event.url,
                date: payload.event.date,
                group: payload.event.group,
                myFiles: link,
                about: payload.event.about

            }
            const storage = getStorage();
            const imageRef = ref(storage, 'images/' + payload.event.myFiles.name);
            await uploadBytesResumable(imageRef, payload.event.myFiles, metadata).then((snapshot) => {
                console.log('Uploaded', snapshot.totalBytes, 'bytes.');
                console.log('File metadata:', snapshot.metadata);
                getDownloadURL(snapshot.ref).then((url) => {
                    eventGeneral.myFiles = url.toString();
                });
            }).catch((error) => {
                console.error('Upload failed', error);
            });

            console.log(eventGeneral.myFiles);

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
                    console.log(eventGeneral);
                    let generalEvent = {
                        event: eventGeneral,
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
                .then((snapshot) => {
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
