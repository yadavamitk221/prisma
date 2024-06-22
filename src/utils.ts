import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://learnPostgress_owner:OytprVS45Yeu@ep-misty-dew-a5pyhan2.us-east-2.aws.neon.tech/learnPostgress?sslmode=require");
    await client.connect();
    return client;
}