export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }) {
        let token = null

        if (req.headers.cookie) {
            const isItMoreThanOne = await req.headers.cookie.search(";")

            if (isItMoreThanOne > -1) {
                const cookies = await req.headers.cookie.split("; ")
                const tokenIndex = await cookies.findIndex(index => index.substr(0, 5) == 'token')

                if (tokenIndex > -1) token = await cookies[tokenIndex].substr(6)
            } else token = await req.headers.cookie.substr(6)
        }

        await commit('admin/setToken', token)
        await dispatch('admin/isAuth')
    }
}