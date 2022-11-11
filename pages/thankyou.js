import { useRouter } from "next/router";

const ThankYou = (props) => {
  const router = useRouter();

  const transactionId = router.query['id'];

  return transactionId;
};

export default ThankYou;
