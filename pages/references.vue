<template>
    <div class="mb-6 pb-6">
        <div id="references" class="column mt-6 pt-6">
            <div class="columns is-centered is-multiline">
                <div v-for="reference in references" :key="reference._id" class="column is-one-third">
                    <Card :data="reference" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            references: [
                {
                    _id: 1,
                    photo: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
                    description: "sddsds"
                },
                {
                    _id: 2,
                    photo: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1600",
                    description: "sddsds"
                },
                {
                    _id: 3,
                    photo: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600",
                    description: "sddsds"
                },
                {
                    _id: 4,
                    photo: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600",
                    description: "sddsds"
                },
            ]
        }
    },
}
</script>