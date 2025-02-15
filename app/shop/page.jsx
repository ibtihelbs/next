import Image from "next/image";
const page = () => {
  return (
    <div>
      <h1>shop</h1>
      <div className="w-1/2 bg-pink-500 relative h-80">
        <Image src={"./next.svg"} alt="next logo by ibs" fill />
      </div>
    </div>
  );
};

export default page;
