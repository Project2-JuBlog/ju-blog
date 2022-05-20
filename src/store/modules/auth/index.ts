export default {
    namespaced: true,
    state: {
        user: {
            name: "Rawan Abdullah",
            email: "roa0183927@ju.edu.jo",
            image: "rawanimage.png",
            role: "company"


        }
    },
    getters: {
        user(state: any) {
            return state.user

        }
    },
    mutations: {},
    actions: {},
}