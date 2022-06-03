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
            await payload.groups.map((group: any) => {

                db.collection("groups")
                    .doc(group.id)
                    .get()
                    .then((snapshot: any) => {
                        const document: any = snapshot.data();
                        let post: any = document.posts;
                        if (post.length > 3) {
                            for (let i = 0; i < 3; i++) {
                                const random = Math.floor(Math.random() * post.length);
                                postFeed.push(post[random]);

                                context.commit("setGroupPost", postFeed);
                            }
                        }
                    });
            });
        },
    },
};
