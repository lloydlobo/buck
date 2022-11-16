import bcryptjs from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '../../../models/User';
import db from '../../../utils/db';

function callback() {
    return {
        async jwt({ token, user }: any) {
            if (user?._id) token._id = user._id;
            if (user?.isAdmin) token.isAdmin = user.isAdmin;
            return token;
        },

        async session({ session, token }: any) {
            if (token?._id) session.user._id = token._id;
            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
            return session;
        },
    };
}

const credProvider = [
    CredentialsProvider({
        async authorize(credentials) {
            await db.connect();
            const user = await User.findOne({
                email: credentials?.email,
            });
            await db.disconnect();

            const hasAuthorizedPassword = bcryptjs.compareSync(
                credentials?.password,
                user.password
            );

            if (user && hasAuthorizedPassword) {
                return {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    image: 'f',
                    isAdmin: user.isAdmin,
                };
            }

            throw new Error('Invalid email or password');
        },
    }),
];

export default NextAuth({
    session: { strategy: 'jwt' },
    callbacks: callback(),
    providers: credProvider,
});

type CredentialsMongoDB = {
    _id: any;
    name: any;
    email: any;
    image: string;
    isAdmin: any;
};

// https://next-auth.js.org/getting-started/example
// export const authOptions = {
//     // Configure one or more authentication providers
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID!,
//             clientSecret: process.env.GITHUB_SECRET!,
//         }),
//         // ...add more providers here
//         EmailProvider({
//             server: process.env.MAIL_SERVER,
//             from: 'NextAuth.js <no-reply@example.com>',
//         }),
//     ],
// };
//
// export default NextAuth(authOptions);
// export default NextAuth({
//     providers: [
//         // OAuth authentication providers...
//         // AppleProvider({
//         //     clientId: process.env.APPLE_ID,
//         //     clientSecret: process.env.APPLE_SECRET,
//         // }),
//         // FacebookProvider({
//         //     clientId: process.env.FACEBOOK_ID,
//         //     clientSecret: process.env.FACEBOOK_SECRET,
//         // }),
//         // GoogleProvider({
//         //     clientId: process.env.GOOGLE_ID,
//         //     clientSecret: process.env.GOOGLE_SECRET,
//         // }),
//         // Passwordless / email sign in
//         EmailProvider({
//             server: process.env.MAIL_SERVER,
//             from: 'NextAuth.js <no-reply@example.com>',
//         }),
//     ],
// });
