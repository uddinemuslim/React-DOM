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
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseID,
                config.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: Update Post :: error", error )
        }
    }

    async deletePost (slug) {
        try {
            return await this.databases.deleteDocument(
                config.appWriteDatabaseID,
                config.appWriteCollectionID,
                {
                    slug
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: deletePost  :: error", error)
        }
    }

}