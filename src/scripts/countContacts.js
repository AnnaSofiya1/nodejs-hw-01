import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        const totalContacts = contacts.length;
        return `Total number of contacts: ${totalContacts}`;
    } catch (error) {
        console.error('Error calculating contacts', error);
    }
};

console.log(await countContacts());