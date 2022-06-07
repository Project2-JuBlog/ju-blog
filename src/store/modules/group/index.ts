import axios from "../../../axios";
import router from "../../../router";
import db from "../../../firebase";
import firebase from "firebase/compat/app";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {
  namespaced: true,
  state: {
    groups: [],
    group: {},
    collage: [],
    major: [],
    savedpost: [],
    loading: false
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

    loading(state: any) { return state.loading }
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
      let id = "_" + Math.random().toString(36).substr(2, 9);
      let newPost = {
        groupId: state.group.id,
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
          status: payload.userInfo.role == 'student' ? payload.userInfo.status : payload.userInfo.role,
        },
      };
      console.log(payload.files.name);
      if (payload.files.length !== 0) {
        console.log("GD");
        const metadata = {
          contentType: payload.files.type,
        };
        const storage = getStorage();
        const imageRef = ref(storage, 'images/' + payload.files.name);
        await uploadBytesResumable(imageRef, payload.files, metadata).then(async (snapshot) => {
          await getDownloadURL(snapshot.ref).then((url) => {
            console.log('File metadata:', snapshot.metadata);
            let file: any = {
              url: url.toString(),
              type: snapshot.metadata.contentType,
              name: snapshot.metadata.name
            }
            newPost.file = file;
            console.log(file);
          });
        });
      }
      await db
        .collection("groups")
        .doc(payload.groupId.toString())
        .update({
          posts: firebase.firestore.FieldValue.arrayUnion(newPost)
        });
      await state.group.posts.push(newPost)
    },

    async AddJobpost(state: any, payload: any) {
      const posts = state.group.posts;
      let id = "_" + Math.random().toString(36).substr(2, 9);
      console.log(payload);
      console.log(posts);
      console.log(state.group.id);

      let newPost = {
        groupId: state.group.id,
        createdAt: payload.createdAt.toString(),
        likes: [],
        id: id.toString(),
        user: {
          fname: payload.user.firstName,
          id: payload.user.id,
          image: "",
          lname: payload.user.lastName,
        },
        job: payload.post

      };
      posts.push(newPost);
      await db
        .collection("groups")
        .doc(state.group.id)
        .update({ posts: posts });
    },
    async AddComment(state: any, payload: any) {
      let id = "_" + Math.random().toString(36).substr(2, 9);

      const comment = [];
      const allComments = payload.comments;
      if (!payload.comments) {
        let newComment = {
          content: payload.content,
          likes: 0,
          id: id.toString(),
          user: {
            fname: payload.userInfo.firstName,
            id: payload.userInfo.id,
            file: payload.userInfo.file,
            lname: payload.userInfo.lastName,
          },
        };
        comment.push(newComment);
        await db
          .collection("comments")
          .doc(payload.postId)
          .set({ comment: comment });
      } else {
        let newComment = {
          content: payload.content,
          likes: 0,
          id: id.toString(),
          user: {
            fname: payload.userInfo.firstName,
            id: payload.userInfo.id,
            file: payload.userInfo.file,
            lname: payload.userInfo.lastName,
          },
        };
        allComments.push(newComment);
        await db
          .collection("comments")
          .doc(payload.postId)
          .set({ comment: allComments });
      }
    },
    async savedPost(state: any, payload: any) {
      state.savedpost = payload;
    },
    loadingS(state: any, payload: any) { state.loading = payload }
  },
  actions: {
    async getGroup(context: any, payload: any) {
      await db
        .collection("groups")
        .doc(payload)
        .get()
        .then((snapshot: any) => {
          const document: any = snapshot.data();
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

          context.commit("setmajor", document);
        });
    },
    async Addpost(context: any, payload: any) {
      context.commit('loadingS', true);
      await context.commit("Addpost", payload);
      context.commit('loadingS', false);

    },
    async Addjobpost(context: any, payload: any) {
      context.commit("AddJobpost", payload);
    },
    async Addcomments(context: any, payload: any) {
      context.commit("AddComment", payload);
    },
    async savedpost(context: any, payload: any) {
      let allSaved: any = [];
      if (payload.savedpost) {
        allSaved = payload.savedpost;
      } else {
        allSaved = [];
      }

      allSaved.push(payload.post);
      await db
        .collection("savedpost")
        .doc(payload.user.id)
        .set({ posts: allSaved })
        .then(() => {
          context.commit("savedPost", allSaved);
        });
    },
    async getSaved(context: any, payload: any) {
      let id = payload;

      await db
        .collection("savedpost")
        .doc(id)
        .get()
        .then((snapshot: any) => {
          const document: any = snapshot.data()?.posts;

          context.commit("savedPost", document);
        });
    },
    async Removesavedpost(context: any, payload: any) {
      let allSaved = payload.savedpost;
      const index = allSaved.findIndex(
        (post: any) => post.id == payload.post.id
      );
      allSaved.splice(index, 1);
      await db
        .collection("savedpost")
        .doc(payload.user.id)
        .update({ posts: allSaved })
        .then(() => {
          context.commit("savedPost", allSaved);
        });
    },

    async likePost(context: any, payload: any) {

      let allpost = payload.posts;

      const index = allpost.findIndex((post: any) => post.id == payload.postId);
      let currentPost = allpost[index];
      let currentlikes = currentPost?.likes;
      currentlikes.push({
        firstName: payload.user.firstName,
        lastName: payload.user.lastName,
        id: payload.user.id,
        file: payload.user.file,
      });
      currentPost = { ...currentPost, likes: currentlikes };

      allpost[index] = currentPost;

      await db
        .collection("groups")
        .doc(payload.groupId.toString())
        .update({ posts: allpost })

    },
    async removelikePost(context: any, payload: any) {
      let allpost = payload.posts;
      const index = allpost.findIndex((post: any) => post.id == payload.postId);
      let currentPost = allpost[index];
      let currentlikes = currentPost.likes;
      const indexLikes = currentlikes.findIndex(
        (like: any) => like.id == payload.user.id
      );

      currentlikes.splice(indexLikes, 1);
      currentPost = { ...currentPost, likes: currentlikes };

      allpost[index] = currentPost;

      await db
        .collection("groups")
        .doc(payload.groupId.toString())
        .update({ posts: allpost });
    },
  },
};
