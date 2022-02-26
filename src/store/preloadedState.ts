const preloadedState = {
    users: {
        ids: [1, 2, 3],
        entities: {
            1: {
                id: 1,
                name: 'Vlad',
                posts: [1],
                subscribes: [2],
                subscribers: [2, 3]
            },
            2: {
                id: 2,
                name: 'Alena',
                posts: [2],
                subscribes: [1,3],
                subscribers: [1]
            },
            3: {
                id: 3,
                name: 'Andrew',
                posts: [3],
                subscribes: [1],
                subscribers: [2]
            }
        }
    },
    posts: {
        ids: [1, 2, 3],
        entities: {
            1: {
                id: 1,
                author: 1,
                text: 'Lorem ipsum',
                likes: [1, 2],
                createdAt: "1645808742097"
            },
            2: {
                id: 2,
                author: 2,
                text: 'Lorem ipsum',
                likes: [1, 3],
                createdAt: "1645809712661"
            },
            3: {
                id: 3,
                author: 3,
                text: 'Lorem ipsum',
                likes: [1, 2, 3],
                createdAt: "1645809730917"
            }
        }
    }
}
export default preloadedState