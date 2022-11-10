import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'; // uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// https://bank.codes/iban/structure/germany/
//  Octal literals are not available when targeting ECMAScript 5 and higher.
// Use the syntax '0o532013000'. typescript (1085).
// Note: a - alphabets (letters only), c - characters (letters & numbers), n - numbers (numbers only)
// 2a 2n 8n 10n => DE 89 37040044 0532013000
const data = {
    users: [
        {
            id: 1,
            uuid: uuidv4(),
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
    ],
    accounts: [
        {
            id: 1,
            uuid: uuidv4(),
            name: 'Bank of Westeros',
            type: 'savings',
            bank: {
                country: 'DE',
                ibanChecksum: 89,
                blz: 37040044,
                accountNumber: 0o532_013_000, // 0_532_013_000
            },
            in: 500,
            out: 1000,
            balance: 1000,
            notes: 'This is westeros bank.',
        },
        {
            id: 2,
            uuid: uuidv4(),
            name: 'Bank of Dodge',
            type: 'checking',
            bank: {
                country: 'US',
                ibanChecksum: 88,
                blz: 37040043,
                accountNumber: 0o531_013_000, // 0_532_013_000
            },
            in: 500,
            out: 1000,
            balance: 1000,
            notes: 'This is westeros bank.',
        },
        {
            id: 3,
            uuid: uuidv4(),
            name: 'Bank of Digital',
            type: 'creditCard',
            bank: {
                country: 'IN',
                ibanChecksum: 90,
                blz: 37040043,
                accountNumber: 0o533_013_000, // 0_532_013_000
            },
            in: 500,
            out: 1000,
            balance: 1000,
            notes: 'This is westeros bank.',
        },
    ],
    buckets: [
        {
            id: 1,
            uuid: uuidv4(),
            name: 'Rent/Mortgage',
            slug: 'rent',
            group: 'needs',
            image: '',
            budgeted: 2000,
            available: 1000,
            description: 'Rent money',
        },
        {
            id: 2,
            uuid: uuidv4(),
            name: 'Food',
            slug: 'food',
            group: '',
            image: '',
            available: 4000,
            budgeted: 4000,
            description: 'Monthly food',
        },
        {
            id: 3,
            uuid: uuidv4(),
            name: 'Personal Loan Payment',
            slug: 'personal-loan-payment',
            group: 'debt',
            image: '',
            available: 4000,
            budgeted: 4000,
            description: 'Monthly loan debt payment',
        },
        {
            id: 4,
            uuid: uuidv4(),
            name: 'Life Insurance',
            slug: 'life-insurance',
            group: 'preparation',
            image: '',
            available: 4000,
            budgeted: 4000,
            description: 'Life insurance preparation',
        },
        {
            id: 4,
            uuid: uuidv4(),
            name: 'Internet',
            slug: 'internet',
            group: 'wants',
            image: '',
            available: 4000,
            budgeted: 4000,
            description: 'Wants internet expenses',
        },
        {
            id: 5,
            uuid: uuidv4(),
            name: 'Copilot License',
            slug: 'copilot-license',
            group: 'Misc',
            image: '',
            available: 4000,
            budgeted: 4000,
            description: 'Miscellaneous expense copilot for programming',
        },
    ]

}

export { data }
