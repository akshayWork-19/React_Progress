import conf from '../../conf/config.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
  client = new Client();
  Databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwrite_url)
      .setProject(conf.appwrite_project_id);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument({
        databaseId: conf.appwrite_database_id,
        tableId: conf.appwrite_table_id,
        rowId: slug,
        data: { "title": title, "content": content, "featuredImage": featuredImage, "status": status },
      })
    } catch (error) {
      console.error("Appwrite Service error :: createPost :: error", error.message);
      return false;

    }
  }

  async updatePost(slug, { updatedTitle, updatedContent, updatedfeaturedImage, updatedStatus }) {
    try {
      return await tables.updateRow({
        databaseId: conf.appwrite_database_id,
        tableId: conf.appwrite_table_id,
        rowId: slug,
        data: { "title": updatedTitle, "content": updatedContent, "featuredImage": updatedfeaturedImage, "status": updatedStatus },
      })
    } catch (error) {
      console.error("Appwrite Service error :: updatePost :: error", error.message);
      return false;

    }
  }

  async deletePost(slug) {
    try {
      await this.tables.deleteRow({
        databaseId: conf.appwrite_database_id,
        tableId: conf.appwrite_table_id,
        rowId: slug
      })
      return true;
    } catch (error) {
      console.error("Appwrite Service error :: deletePost :: error", error.message);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.tables.getRow({
        databaseId: conf.appwrite_database_id,
        tableId: conf.appwrite_table_id,
        rowId: slug
      })
      return true;
    } catch (error) {
      console.error("Appwrite Service error :: getPost :: error", error.message);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.tables.getRow({
        databaseId: conf.appwrite_database_id,
        tableId: conf.appwrite_table_id,
        queries: queries,
      })
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
    return this.bucket.getFilePreview({
      bucketId: conf.appwrite_bucket_id,
      fileId: fileId,

    })

  }


};

const service = new Service();
export default service;