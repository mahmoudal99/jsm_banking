'use client'
import CountUp from "react-countup";

export default function AnimatedCounter({ amount } : { amount: number } ) {
  return (
    <div>
      <CountUp end={amount} prefix="$" duration={2.5} separator="," decimals={2} />
    </div>
  );
}