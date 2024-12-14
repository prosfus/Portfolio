import EmailItem from "./components/EmailItem";

function Email({ auto }: { auto: boolean }) {
  return <EmailItem auto={auto} />;
}

export default Email;
