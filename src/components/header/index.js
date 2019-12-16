import Link from "next/link";
import CartIcon from "../cart-icon";
import Nav from "../nav";
import "./styles.scss";

export default () => {
  return (
    <div className="header">
      <Link href="/">UNDEFINED</Link>
      <div className="right">
        <CartIcon />
      </div>
    </div>
  );
};
