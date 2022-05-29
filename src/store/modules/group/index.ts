import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";

export default {
    namespaced: true,
    state: {
        groups: [],
        group: {},
        collage: [],
        major: [],
        savedpost: []
    },
    getters: {
        groups(state: any) {
            return state.groups;
        },
        group(state: any) {
            return state.group;
        },
        collage(state: any) {
            return state.collage;
        },
        major(state: any) {
            return state.major;
        },
        savedpost(state: any) {
            return state.savedpost;
        },

    },
    mutations: {
        setGroup(state: any, payload: any) {
            state.group = payload;
        },
        setcollage(state: any, payload: any) {
            state.collage = payload;
        },
        setmajor(state: any, payload: any) {
            state.major = payload;
        },
        async Addpost(state: any, payload: any) {
            const posts = state.group.posts;
            let id = '_' + Math.random().toString(36).substr(2, 9);

            let newPost = {
                content: payload.content,
                createdAt: payload.createdAt.toString(),
                file: "",
                likes: [],
                id: id.toString(),
                user: {
                    fname: payload.userInfo.firstName,
                    id: payload.userInfo.id,
                    image: "",
                    lname: payload.userInfo.lastName,
                    status: payload.userInfo.status,
                },
            };

            posts.push(newPost);


            await db
                .collection("groups")
                .doc(payload.groupId.toString())
                .update({ posts: posts })
                .then(() => {
                    console.log("user updated!");
                });
        },
        async AddComment(state: any, payload: any) {
            let id = '_' + Math.random().toString(36).substr(2, 9);

            const comment = []
            const allComments = payload.comments;
            if (!payload.comments) {
                console.log("jj");
                let newComment = {
                    content: payload.content,
                    likes: 0,
                    id: id.toString(),
                    user: {
                        fname: payload.userInfo.firstName,
                        id: payload.userInfo.id,
                        image: "",
                        lname: payload.userInfo.lastName,
                    },
                };
                comment.push(newComment)
                await db
                    .collection("comments")
                    .doc(payload.postId)
                    .set({ comment: comment })
                    .then(() => {
                        console.log("comment updated!");
                    });
            } else {
                console.log("Ss");
                let newComment = {
                    content: payload.content,
                    likes: 0,
                    id: id.toString(),
                    user: {
                        fname: payload.userInfo.firstName,
                        id: payload.userInfo.id,
                        image: "",
                        lname: payload.userInfo.lastName,
                    },
                };
                allComments.push(newComment);
                await db
                    .collection("comments")
                    .doc(payload.postId).set({ comment: allComments })
                    .then(() => {
                        console.log("comment updated!");
                    });
            }







        },
        async savedPost(state: any, payload: any) {
            state.savedpost = payload
        }


    },
    actions: {
        async getGroup(context: any, payload: any) {
            await db
                .collection("groups")
                .doc(payload)
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data();
                    console.log(document);
                    // state.userInfo = document
                    context.commit("setGroup", document);
                });
        },
        async setCollage(context: any, payload: any) {
            await db
                .collection("collage")
                .doc("aqH6JH6nK3YWrqZmpsiI")
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data().collage;
                    context.commit("setcollage", document);
                });
        },

        async setMajor(context: any, payload: any) {
            await db
                .collection("major")
                .doc("JHLG1M8mvDIcwnCSkQ8L")
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data().major.filter((item: any) => {
                        return item.collageId == payload;
                    });
                    console.log(document);

                    context.commit("setmajor", document);
                });
        },
        async Addpost(context: any, payload: any) {
            context.commit("Addpost", payload);
        },
        async Addcomments(context: any, payload: any) {
            context.commit("AddComment", payload);

        },
        async savedpost(context: any, payload: any) {
            let allSaved: any = [];
            if (payload.savedpost) { allSaved = payload.savedpost; }
            else {
                allSaved = []
            }
            console.log(allSaved);

            allSaved.push(payload.post)
            await db
                .collection("savedpost")
                .doc(payload.user.id)
                .set({ posts: allSaved })
                .then(() => {
                    context.commit("savedPost", allSaved)
                });
        },
        async getSaved(context: any, payload: any) {
            let id = payload;
            console.log(id);

            await db
                .collection("savedpost")
                .doc(id)
                .get()
                .then((snapshot: any) => {
                    const document: any = snapshot.data()?.posts;
                    console.log(document);

                    context.commit("savedPost", document)
                });


        },
        async Removesavedpost(context: any, payload: any) {
            let allSaved = payload.savedpost;
            console.log(allSaved);
            const index = allSaved.findIndex((post: any) => post.id == payload.post.id)
            allSaved.splice(index, 1)
            await db
                .collection("savedpost")
                .doc(payload.user.id)
                .update({ posts: allSaved })
                .then(() => {
                    context.commit("savedPost", allSaved)
                });
        },

        async likePost(context: any, payload: any) {
            console.log(payload);
            console.log("asdd");

            let allpost = payload.posts;
            console.log(allpost);

            const index = allpost.findIndex((post: any) => post.id == payload.postId)
            let currentPost = allpost[index]
            let currentlikes = currentPost?.likes;
            currentlikes.push({
                firstName: payload.user.firstName,
                lastName: payload.user.lastName,
                id: payload.user.id,
                file: payload.user.file
            });
            currentPost = { ...currentPost, likes: currentlikes }

            allpost[index] = currentPost;

            await db
                .collection("groups")
                .doc(payload.groupId.toString())
                .update({ posts: allpost })
                .then(() => {
                    console.log("likes updated!");
                });

        },
        async removelikePost(context: any, payload: any) {
            console.log(payload);

            let allpost = payload.posts;
            const index = allpost.findIndex((post: any) => post.id == payload.postId)
            let currentPost = allpost[index]
            let currentlikes = currentPost.likes;
            const indexLikes = currentlikes.findIndex((like: any) => like.id == payload.user.id)

            currentlikes.splice(indexLikes, 1);
            currentPost = { ...currentPost, likes: currentlikes }

            allpost[index] = currentPost;

            await db
                .collection("groups")
                .doc(payload.groupId.toString())
                .update({ posts: allpost })
                .then(() => {
                    console.log("likes updated!");
                });

        }
    },
};
