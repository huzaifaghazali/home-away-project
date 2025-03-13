'use client';
import { useEffect } from 'react';

import { useProperty } from '@/utils/store';
import { Booking } from '@/utils/types';
import BookingCalendar from './BookingCalendar';
import BookingContainer from './BookingContainer';

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

function BookingWrapper({ propertyId, price, bookings }: BookingWrapperProps) {
  return (
    <>
      <BookingContainer />
      <BookingCalendar />
    </>
  );
}

export default BookingWrapper;
