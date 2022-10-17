const cookies = require('js-cookie')


export const state = () => ({
    token: null,
    auth: null
})

export const getters = {
    getToken(state) {
        return state.token
    },
    getAuth(state) {
        return state.auth
    }
}

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setAuth(state, auth) {
        state.auth = auth
    }
}

export const actions = {
    signIn({ commit, dispatch }, admin) {
        this.$axios.post('/admin/sign-in', admin).then(response => {
            if (response.data.token) {
                // set token to cookies
                cookies.set('token', response.data.token)
                // set token to vuex
                commit('setToken', response.data.token)
                // set auth to Vuex 
                commit('setAuth', true)

                // send success notification
                this.$toast.global.success("Giriş Yapıldı")

                // redicect to home page
                this.$router.push({ name: 'index' })
                // send error notification
            } else this.$toast.global.error("Kullanıcı adı yada şifre yanlış")
        })
    },
    signOut({ getters, commit }) {
        this.$axios.post('/admin/sign-out', { token: getters.getToken })
            .then(response => {
                if (response.data.success) {
                    // delete token from cookies
                    cookies.remove('token')
                    //delete token from vuex
                    commit('setToken', null)
                    // delete auth from vuex
                    commit('setAuth', null)

                    // send success notification
                    this.$toast.global.success("Çıkış Yapıldı")

                    // redicect to home page
                    this.$router.push({ name: 'index' })
                } else this.$toast.global.error("Hata")
            })
    },
    isAuth({ getters, commit }) {
        return this.$axios.get('/admin/is-auth', { params: { token: getters.getToken } })
            .then(response => commit('setAuth', response.data.auth || false))
    }
}