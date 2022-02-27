const preloadedState = {
    users: {
        ids: ['d9760016-f3f4-4037-a2fc-064fa209ae71',
            '8fdaf800-5e5b-4a3d-a61a-92441a5e5915',
            '26dfa986-dc57-4832-8bdc-eb3c2491deb6'
        ],
        entities: {
            'd9760016-f3f4-4037-a2fc-064fa209ae71': {
                id: 'd9760016-f3f4-4037-a2fc-064fa209ae71',
                name: 'Vlad',
                posts: ['804b7b22-f4d4-4ba5-a79c-9ea5c9dbc99d'],
                subscribes: ['8fdaf800-5e5b-4a3d-a61a-92441a5e5915'],
                subscribers: ['8fdaf800-5e5b-4a3d-a61a-92441a5e5915',
                    '26dfa986-dc57-4832-8bdc-eb3c2491deb6'
                ]
            },
            '8fdaf800-5e5b-4a3d-a61a-92441a5e5915': {
                id: '8fdaf800-5e5b-4a3d-a61a-92441a5e5915',
                name: 'Alena',
                posts: ['3835ff8b-51e2-4b94-a5f8-d6907f22749f'],
                subscribes: ['d9760016-f3f4-4037-a2fc-064fa209ae71',
                    '26dfa986-dc57-4832-8bdc-eb3c2491deb6'
                ],
                subscribers: ['d9760016-f3f4-4037-a2fc-064fa209ae71']
            },
            '26dfa986-dc57-4832-8bdc-eb3c2491deb6': {
                id: '26dfa986-dc57-4832-8bdc-eb3c2491deb6',
                name: 'Andrew',
                posts: ['646db963-579f-407c-a5a6-ec2b9fc65df0',
                    '78419d8b-8da1-4d8d-9d47-80f5ea60dd99'
                ],
                subscribes: ['d9760016-f3f4-4037-a2fc-064fa209ae71'],
                subscribers: ['8fdaf800-5e5b-4a3d-a61a-92441a5e5915']
            }
        }
    },
    posts: {
        ids: ['78419d8b-8da1-4d8d-9d47-80f5ea60dd99',
            '646db963-579f-407c-a5a6-ec2b9fc65df0',
            '3835ff8b-51e2-4b94-a5f8-d6907f22749f',
            '804b7b22-f4d4-4ba5-a79c-9ea5c9dbc99d',
        ],
        entities: {
            '78419d8b-8da1-4d8d-9d47-80f5ea60dd99': {
                id: '78419d8b-8da1-4d8d-9d47-80f5ea60dd99',
                author: '26dfa986-dc57-4832-8bdc-eb3c2491deb6',
                text: 'Новый пост',
                likes: ['d9760016-f3f4-4037-a2fc-064fa209ae71',
                    '8fdaf800-5e5b-4a3d-a61a-92441a5e5915',
                    '26dfa986-dc57-4832-8bdc-eb3c2491deb6'
                ],
                createdAt: "1645893038675"
            },
            '646db963-579f-407c-a5a6-ec2b9fc65df0': {
                id: '646db963-579f-407c-a5a6-ec2b9fc65df0',
                author: '26dfa986-dc57-4832-8bdc-eb3c2491deb6',
                text: 'Lorem ipsum',
                likes: ['8fdaf800-5e5b-4a3d-a61a-92441a5e5915',
                    '26dfa986-dc57-4832-8bdc-eb3c2491deb6'
                ],
                createdAt: "1645809730917"
            },
            '3835ff8b-51e2-4b94-a5f8-d6907f22749f': {
                id: '3835ff8b-51e2-4b94-a5f8-d6907f22749f',
                author: '8fdaf800-5e5b-4a3d-a61a-92441a5e5915',
                text: 'Lorem ipsum',
                likes: ['d9760016-f3f4-4037-a2fc-064fa209ae71',
                    '26dfa986-dc57-4832-8bdc-eb3c2491deb6'
                ],
                createdAt: "1645809712661"
            },
            '804b7b22-f4d4-4ba5-a79c-9ea5c9dbc99d': {
                id: '804b7b22-f4d4-4ba5-a79c-9ea5c9dbc99d',
                author: 'd9760016-f3f4-4037-a2fc-064fa209ae71',
                text: 'Lorem ipsum',
                likes: ['d9760016-f3f4-4037-a2fc-064fa209ae71',
                    '8fdaf800-5e5b-4a3d-a61a-92441a5e5915'
                ],
                createdAt: "1645808742097"
            },
        }
    }
}
export default preloadedState