import Hero from "./Hero";
import Summary from "./Summary";
import Plan from "./Plan";
import PaymentBtn from "./PaymentBtn";
import CancelLink from "./CancelLink";

const Order = () => (
  <main className="main">
    <Hero />
    <Summary />
    <Plan />
    <PaymentBtn />
    <CancelLink />
  </main>
);

export default Order;