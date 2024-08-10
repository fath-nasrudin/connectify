export default function Home() {
  return (
    <div className="pt-6 flex gap-6">
      <div className="hidden xl:block w-[20%]">Left Menu</div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">Center</div>
      <div className="hidden lg:block w-[30%]">Right Menu</div>
    </div>
  );
}
