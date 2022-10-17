export default ({ store, redirect }) => {
    if (!store.state.admin.auth) {
        return redirect({ name: 'sign-in' })
    }
}