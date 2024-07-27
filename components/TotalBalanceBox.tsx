import { formatAmount } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";

export default function TotalBalanceBox({ accounts = [], totalBanks = 0, totalCurrentBalance = 0 } : TotlaBalanceBoxProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
            Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
            <p className="total-balance-label">
                Total Current Balance   
            </p>
            <p className="total-balance-amount flex-center">
                <AnimatedCounter amount={totalCurrentBalance} />
            </p>
        </div>
      </div>
    </section>
  );
}   