import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Teddy',
            email: 'teddy@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
        {
            name: 'Lisa',
            email: 'lisa@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    buckets: [
        {
            name: 'Rent',
            slug: 'rent',
            category: '',
            image: '',
            budgeted: 2000,
            available: 1000,
            description: 'Rent money',
        },
        {
            name: 'Food',
            slug: 'food',
            category: '',
            image: '',
            available: 4000,
            budgeted: 4000,
            description: 'Monthly food',
        },
    ]

}

export default data
