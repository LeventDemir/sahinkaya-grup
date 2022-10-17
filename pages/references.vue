<template>
    <div class="mb-6 pb-6">
        <div id="references" class="column mt-6 pt-6">
            <div class="columns is-centered is-multiline">
                <div v-for="reference in this.$store.getters['reference/getReferences']" :key="reference._id" class="column is-one-third">
                    <Card :data="reference" />
                </div>
            </div>
        </div>
    </div>
</template>