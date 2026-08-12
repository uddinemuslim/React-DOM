import { config } from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{}

const service = new Service;
export default service;

class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectID)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}) {
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseID, 
                config.appWriteCollectionID, 
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }

            )
        } catch (error) {
            console.log(error)
        }
    }

    async updatePost(slug, {title,  content, featuredImage, status}) {

    }

}