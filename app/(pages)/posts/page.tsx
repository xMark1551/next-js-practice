import { Button } from "@/components/ui/button";
import Link from "next/link";

const Posts = () => {
  return (
    <div>
      <Link href="/">Back</Link>
      Posts
      <Button variant={"destructive"} size={"xs"}>
        Button
      </Button>
    </div>
  );
};

export default Posts;
