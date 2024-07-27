import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox type="greeting" title="Welcome " user="John Doe" subtext="This is a sample greeting" />
        <TotalBalanceBox accounts={[]} totalBanks={0} totalCurrentBalance={1000000} />
      </div>
    </section>
  );
};

export default Home;