import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p className="">DashBoard(protected)</p>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </>
  );
};

export default DashboardPage;
