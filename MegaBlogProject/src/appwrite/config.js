import conf from '../conf/config.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwrite_url)
      .setProject(conf.appwrite_project_id);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
  }

  async createDocument({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id, slug,
        {
          title, content, featuredImage, status, userId
        })
    } catch (error) {
      console.error("Appwrite Service error :: createPost :: error", error.message);
      return false;
    }
  }

  async updateDocument(slug, { updatedTitle, updatedContent, updatedfeaturedImage, updatedStatus }) {
    try {
      return await this.databases.updateDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        slug,
        { title: updatedTitle, content: updatedContent, featureImage: updatedfeaturedImage, status: updatedStatus },
      )
    } catch (error) {
      console.error("Appwrite Service error :: updatePost :: error", error.message);
      return false;

    }
  }

  async deleteDocument(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        slug
      )
      return true;
    } catch (error) {
      console.error("Appwrite Service error :: deletePost :: error", error.message);
      return false;
    }
  }

  async getDocument(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        slug
      )
      return true;
    } catch (error) {
      console.error("Appwrite Service error :: getPost :: error", error.message);
      return false;
    }
  }

  async listDocuments(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        queries,
      )
      return true;
    } catch (error) {
      console.error("Appwrite Service error :: getPosts :: error", error.message);
      return false;
    }
  }


  //file uploading/deleting service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile({
        bucketId: conf.appwrite_bucket_id,
        fileId: ID.unique(),
        file: file
      })
    } catch (error) {
      console.error("Appwrite Service error :: getPost :: error", error.message);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile({
        bucketId: conf.appwrite_bucket_id,
        fileId: fileId
      })
      return true;
    } catch (error) {
      console.error("Appwrite Service error :: getPost :: error", error.message);
      return false;
    }
  }

  getFilePreview(fileId) {
    console.log(fileId);
    return this.bucket.getFileView({
      bucketId: conf.appwrite_bucket_id,
      fileId: fileId,
    })
  }


};

const service = new Service();
export default service;