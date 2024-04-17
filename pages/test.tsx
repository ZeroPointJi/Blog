type Type = {
  amount: string | number;
};
const record = {
  amount: 123.11
} satisfies Type;

export default function Timer() {
  console.log(record.amount);
  return <>你好</>;
}
