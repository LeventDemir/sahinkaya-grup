<template>
    <div class="card">
        <nuxt-link :to="{ name: 'reference-id', params: { id: data._id } }" class="card-image is-clickable" tag="div">
            <figure class="image is-4by3">
                <img :src="data.photo" alt="Placeholder image" />
            </figure>
        </nuxt-link>

        <div class="card-content">
            <div class="content pb-4">
                <span class="card-behavior">
                    {{ data.description }}
                </span>

                <nuxt-link :to="{ name: 'reference-id', params: { id: data._id } }"
                    class="is-pulled-right has-text-info">
                    daha fazla
                </nuxt-link>
            </div>
        </div>

        <footer v-if="type == 'admin'" class="card-footer">
            <nuxt-link :to="{ name: 'dashboard-update-reference-id',params: { id: data._id }}"
                class="card-footer-item has-text-success" tag="a">
                Güncelle
            </nuxt-link>

            <a @click="$store.dispatch('reference/delete', data._id)" class="card-footer-item has-text-danger">Sil</a>
        </footer>
    </div>
</template>
  
  
<script>
export default {
    name: "dashboard",
    props: {
        data: {
            type: Object,
            required: true,
        },
        type: String,
    },
};
</script>