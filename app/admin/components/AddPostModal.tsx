"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createPostAction } from "../action/post.action";
import type { postsModel } from "@/generated/prisma/models";

type CreatePost = Omit<postsModel, "id" | "created_at" | "image" | "content" | "status"> & {
  image?: File | null;
  description: string;
};

const INITIAL_POSTS: CreatePost = {
  title: "",
  description: "",
  image: null,
};

const AddPostModal = () => {
  const [postObj, setPostObj] = useState<CreatePost>(INITIAL_POSTS);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", postObj.title);
    formData.append("description", postObj.description);
    if (postObj.image) {
      formData.append("image", postObj.image);
    }

    await createPostAction(formData);

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Post</DialogTitle>
            <DialogDescription>Add a new post</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-field-username">Title</FieldLabel>
              <Input
                id="input-field-username"
                type="text"
                placeholder="Enter your username"
                value={postObj.title}
                onChange={(e) => {
                  setPostObj({ ...postObj, title: e.target.value });
                }}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="input-field-description">Description</FieldLabel>
              <Input
                id="input-field-username"
                type="text"
                placeholder="Enter your username"
                value={postObj.description}
                onChange={(e) => {
                  setPostObj({ ...postObj, description: e.target.value });
                }}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="input-field-description">Image</FieldLabel>
              <Input
                id="input-field-username"
                type="file"
                placeholder="Enter your username"
                onChange={(e) => {
                  setPostObj({ ...postObj, image: e.target.files?.[0] });
                }}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostModal;
