import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from 'react-hook-form';
import config from '../conf/config';

export default function RTE({ name, control, label, defaultValue = "" }) {
  const placeholderText = "Start typing your content here... ✍️";
  const initialContent = defaultValue || placeholderText;
  let isPlaceholderSet = !defaultValue;

  const handleFocus = (editor) => {
    if (isPlaceholderSet && editor.getContent({ format: 'text' }).trim() === placeholderText) {
      editor.setContent('');
      isPlaceholderSet = false;
    }
  };

  const handleChange = (content, onChange) => {
    onChange(content);
    if (content === '') {
      isPlaceholderSet = true;
    }
  };

  return (
    <div className='w-full'>
      {/* Label styling: Light text color and bold font for high contrast */}
      {label && <label className='inline-block mb-1 pl-1 text-lg font-medium text-gray-200'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={config.tinymce_KEY}
            initialValue={initialContent}
            init={{
              height: 500,
              menubar: true,

              // TinyMCE Dark Theme Configuration:
              skin: "oxide-dark",
              content_css: "dark",
              content_style: `body { 
                                font-family:Helvetica,Arial,sans-serif; 
                                font-size:16px; 
                                background-color: #1f2937; 
                                color: #f3f4f6; 
                                padding: 15px; 
                                ${!defaultValue && 'color: #9ca3af; '} 
                            }`,

              // 🚀 ADDED 'codesample' plugin and button to the toolbar
              plugins: [
                "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
                "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                "insertdatetime", "media", "table", "wordcount",
                "codesample" // <-- 1. ADD THIS PLUGIN
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | codesample", // <-- 2. ADD 'codesample' BUTTON

            }}
            onFocus={(e) => handleFocus(e.target)}
            onEditorChange={(content) => handleChange(content, onChange)}
          />
        )}
      />
    </div>
  );
}