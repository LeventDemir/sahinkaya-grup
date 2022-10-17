<template>
    <div class="column">
        <form @submit.prevent>
            <div class="field">
                <div class="control has-icons-left">
                    <input v-model="admin.username" class="input is-rounded" type="text" placeholder="Kullanıcı adı"
                        required />
                    <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <div class="control has-icons-left">
                    <input v-model="admin.password" class="input is-rounded" type="password" placeholder="Şifre"
                        required />
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-lock"></i>
                    </span>
                </div>
            </div>

            <br />

            <div class="has-text-centered">
                <button class="button is-info is-rounded is-outlined">Giriş Yap</button>
            </div>
        </form>
    </div>
</template>
    
    
<script>
export default {
    data() {
        return {
            admin: {
                username: null,
                password: null,
            },
        };
    },
};
</script>