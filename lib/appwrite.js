import { Account, Avatars, Client, Databases } from 'react-native-appwrite';
export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6914b794002c81f42800')
    .setPlatform('com.punith.learn-react-native')
;

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)