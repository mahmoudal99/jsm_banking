import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: 'John', lastName: 'Doe', email: "mahmoud.al808@gmail.com"};  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome " user="John Doe" subtext="This is a sample greeting" />
          <TotalBalanceBox accounts={[]} totalBanks={0} totalCurrentBalance={1000000} />
        </header>
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 12000}, {currentBalance: 12500}]} />
    </section>
  );
};

export default Home;