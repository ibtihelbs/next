import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-2 p-4 justify-end">
      <Link href={"/"}> home </Link>
      <Link href={"/blog"}> blog </Link>
      <Link href={"/shop"} className="px-2 py-1 rounded-full bg-red-500">
        {" "}
        shop{" "}
      </Link>
    </nav>
  );
};

export default Nav;
