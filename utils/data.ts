import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        // {
        //     name: 'Teddy',
        //     email: 'teddy@example.com',
        //     password: bcrypt.hashSync('123456'),
        //     isAdmin: false,
        // },
        // {
        //     name: 'Lisa',
        //     email: 'lisa@example.com',
        //     password: bcrypt.hashSync('123456'),
        //     isAdmin: false,
        // },
    ],
    // https://bank.codes/iban/structure/germany/
    //  Octal literals are not available when targeting ECMAScript 5 and higher.
    // Use the syntax '0o532013000'. typescript (1085).
    // Note: a - alphabets (letters only), c - characters (letters & numbers), n - numbers (numbers only)
    // 2a 2n 8n 10n => DE 89 37040044 0532013000
    accounts: [
        {
            name: 'Bank of Westeros',
            type: 'savings',
            bank: {
                country: 'DE',
                ibanChecksum: 89,
                blz: 37040044,
                accountNumber: 0o532_013_000, // 0_532_013_000
            }
        },
        {
            name: 'Bank of Dodge',
            type: 'checking',
            bank: {
                country: 'DE',
                ibanChecksum: 89,
                blz: 37040044,
                accountNumber: 0o532_013_000, // 0_532_013_000
            }
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

export { data }
