import AddPostModal from "./components/AddPostModal";
import PostsTable from "./components/PostsTable";
import { getPosts } from "@/lib/services/post.service";

const Page = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <h1>Post</h1>
      <AddPostModal />
      <PostsTable posts={posts} />
    </div>
  );
};

export default Page;
