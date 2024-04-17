import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string | undefined }) {
  const date = dateString ? parseISO(dateString) : '';
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
