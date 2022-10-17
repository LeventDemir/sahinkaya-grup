export const state = () => ({
    homePageReferences: [
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
    ],
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
        {
            _id: 5,
            photo: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
            description: "sddsds"
        },
    ]
})

export const getters = {
    getHomePageReferences(state) {
        return state.homePageReferences
    },
    getReferences(state) {
        return state.references
    }
}