import { format } from 'date-fns';

export default function Date({ dateString }: { dateString: string | undefined }) {
  const date = dateString || '';
  return <time dateTime={date}>{format(date, 'yyyy年MM月dd日')}</time>;
}
