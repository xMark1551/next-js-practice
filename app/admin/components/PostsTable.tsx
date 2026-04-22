"use client";

import { deletePostAction } from "../action/post.action";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import type { postsModel } from "@/generated/prisma/models/posts";

const PostsTable = ({ posts }: { posts: postsModel[] }) => {
  const handleEdit = async (id: number) => {};

  return (
    <div>
      PostsTable
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.content}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">{item.created_at.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <div className="space-x-2">
                  <Button variant={"secondary"} onClick={() => handleEdit(item.id)}>
                    Edit
                  </Button>
                  <Button onClick={() => deletePostAction(item.id)}> Delete </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
