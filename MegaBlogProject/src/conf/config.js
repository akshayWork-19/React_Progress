const config = {
  appwrite_url: String(import.meta.env.VITE_APPWRITE_URL),
  appwrite_project_id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwrite_database_id: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwrite_table_id: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
  appwrite_bucket_id: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appwrite_project_name: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME),
  tinymce_KEY: String(import.meta.env.VITE_TINY_MCE_KEY)
}
console.log(config.appwrite_url, config.appwrite_project_id);

export default config;