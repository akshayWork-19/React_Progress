import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RTE, Select } from '../index';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || '',
      content: post?.content || '',
      status: post?.status || 'active'
    },
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);


  const submit = async (data) => {
    // const userId = userData?.$id;
    // if (!userId) {
    //   return;
    // }

    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updateDocument(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      console.log(userData);

      if (file) {
        console.log("file uploaded")
        const fileId = file.$id;
        data.featuredImage = fileId;
        console.log("this done")
        console.log(userData.$id);
        const dbPost = await appwriteService.createDocument({ ...data, userId: userData.$id });
        console.log("this not done")

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";

  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title, { shouldValidate: true }))
      }
    });

    return () => subscription.unsubscribe();

  }, [watch, slugTransform, setValue]);
  return (
    // Form container: Dark background (gray-800), subtle border, light text
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl max-w-6xl mx-auto my-10 text-gray-200">
      <div className="md:w-2/3 w-full px-4 mb-4 md:mb-0">
        <Input
          label="Title :" // Label text color is controlled by the Input component's CSS now
          placeholder="Title"
          className="mb-6"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :" // Label text color is controlled by the Input component's CSS now
          placeholder="Slug"
          className="mb-6"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="md:w-1/3 w-full px-4 border-l border-gray-700/50">
        <Input
          label="featuredImage :" // Label text color is controlled by the Input component's CSS now
          type="file"
          // 🎨 ADDED cursor-pointer
          className="mb-6 hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          // Image preview container: Darker background (gray-700), subtle border
          <div className="w-full mb-6 p-2 border border-gray-600 rounded-lg shadow-inner bg-gray-700 hover:bg-gray-600/70 transition-colors duration-200 cursor-pointer"> {/* Added hover effect and cursor to preview */}
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg w-full h-auto object-cover border border-gray-700 shadow-md transform hover:scale-[1.01] transition duration-300 ease-in-out"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status" // Label text color is controlled by the Select component's CSS now
          className="mb-6"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          // Ensure button colors are aligned with the theme (using indigo for update/submit)
          bgColor={post ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-600 hover:bg-indigo-700"}
          className="w-full font-semibold text-lg py-3 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 mt-4"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm