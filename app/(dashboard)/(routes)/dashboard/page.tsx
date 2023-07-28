import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p className="text-6xl text-green-600">DashBoard(protected)</p>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default DashboardPage;
