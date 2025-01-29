import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBookings } from '../../services/apiBookings';

export function useBookings() {
  // const { bookingId } = useParams();

  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });

  return { isPending, error, bookings };
}
