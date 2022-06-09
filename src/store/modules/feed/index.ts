import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";
import firebase from "firebase/compat/app";

export default {
    namespaced: true,
    state: {
        groupPost: [] as any,
    },
    getters: {
        groupPost(state: any) {
            return state.groupPost;
        },
    },
    mutations: {
        setGroupPost(state: any, payload: any) {
            state.groupPost = payload;
        },
    },
    actions: {
        async getGroupPost(context: any, payload: any) {
            let postFeed = [] as any;
            console.log(payload);

            await payload?.groups?.map((group: any) => {

                db.collection("groups")
                    .doc(group.id)
                    .get()
                    .then((snapshot: any) => {
                        const document: any = snapshot.data();

                        let post: any = document.posts;
                        console.log("immm");

                        for (let i = 0; i < 3; i++) {
                            const random = Math.floor(Math.random() * post.length);
                            postFeed.push(post[random]);
                            console.log(postFeed);

                            context.commit("setGroupPost", postFeed);

                        }
                    });
            });
        },
    },
};
