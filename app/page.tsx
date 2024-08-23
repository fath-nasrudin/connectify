import AddPost from '@/components/AddPost';
import Feed from '@/components/Feed';
import Leftbar from '@/components/leftbar/Leftbar';
import Rightbar from '@/components/Rightbar';
import Stories from '@/components/Stories';

export default function Home() {
  return (
    <div className="pt-6 flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <Leftbar type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <Rightbar />
      </div>
    </div>
  );
}
