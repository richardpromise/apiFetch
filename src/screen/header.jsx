export default function Header() {
  return (
    <section>
      <nav className="flex px-40 bg-black justify-between w-full items-center h-[100px]">
        <div className="text-white capitalize font-bold">my web page</div>
        <div className="flex gap-4 text-white">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">About </div>
          <div className="cursor-pointer">Contact</div>
        </div>
      </nav>
    </section>
  );
}
