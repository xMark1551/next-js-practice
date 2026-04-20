import AddPostModal from "./components/AddPostModal";

export type Posts = {
  title: string;
  description: string;
};

const page = () => {
  return (
    <div className="p-20 space-y-6">
      <h1>Post</h1>
      <AddPostModal />
    </div>
  );
};

export default page;
