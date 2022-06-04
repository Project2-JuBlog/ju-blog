import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";
import firebase from "firebase/compat/app";
import { collection, query, where, getDocs } from "firebase/firestore";
import { contains } from "@firebase/util";

export default {
    namespaced: true,
    state: {
        searchResult: [] as any,
    },
    getters: {
        searchResult(state: any) {
            return state.searchResult;
        },
    },
    mutations: {
        setSearchResult(state: any, payload: any) {
            state.searchResult = payload;
        },
    },
    actions: {
        async getSearchResult(context: any, payload: any) {

            console.log(payload);

            const q = await db.collection("cv").where("skills", 'array-contains', payload);
            let users = [] as any;
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc: any) => {
                users.push(doc.data());
            });
            context.commit('setSearchResult', users)


            // db.collection("groups")
            //     .doc(group.id)
            //     .get()
            //     .then((snapshot: any) => {
            //         const document: any = snapshot.data();
            //         let post: any = document.posts;
            //         if (post.length > 3) {
            //             for (let i = 0; i < 3; i++) {
            //                 const random = Math.floor(Math.random() * post.length);
            //                 postFeed.push(post[random]);

            //                 context.commit("setGroupPost", postFeed);
            //             }
            //         }

        },
    },
};
