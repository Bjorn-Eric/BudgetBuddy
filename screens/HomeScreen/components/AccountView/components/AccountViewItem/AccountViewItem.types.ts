export type AccountViewProps = {
  accounts: Account[];
};

type Account = {
  id: string;
  name: string;
  balance: number;
  currency: string;
};
