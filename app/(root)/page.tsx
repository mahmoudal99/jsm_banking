import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome " user={loggedIn?.name} subtext="This is a sample greeting" />
          <TotalBalanceBox accounts={[]} totalBanks={0} totalCurrentBalance={1000000} />
        </header>
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 12000}, {currentBalance: 12500}]} />
    </section>
  );
};

export default Home;