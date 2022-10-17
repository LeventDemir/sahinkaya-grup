<template>
    <div class="mb-6">
        <nuxt-link :to="{ name: 'dashboard-create-reference' }"
            class="button is-success is-rounded is-outlined is-fullwidth">
            Referans ekle</nuxt-link>

        <div id="references" class="column mt-6 pt-6">
            <div class="columns is-centered is-multiline">
                <div v-for="reference in this.$store.getters['reference/getReferences']" :key="reference._id" class="column is-one-third">
                    <Card :data="reference" type="admin" />
                </div>
            </div>
        </div>
    </div>
</template>

