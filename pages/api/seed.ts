import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/User';
import { data } from '../../utils/data/data';
import db from '../../utils/db';

// https://tecadmin.net/install-mongodb-on-fedora/
type Data = {
    message: string;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse<Data>) => {
    await db.connect();
    // Delete all previous users in user collection models.
    await User.deleteMany();
    // Add sample users.
    await User.insertMany(data.users);

    res.send({ message: 'seeded successfully' });
};

// Uncaught TypeError: resolver is not a function at Object.apiResolver.
// https://stackoverflow.com/questions/60242181/typeerror-resolver-is-not-a-function
export default handler;
