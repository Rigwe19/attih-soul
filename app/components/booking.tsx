import React, { useState } from 'react';
import Button from './button';
import { cn } from './utils';
import { Portal } from 'react-portal';
import BookModal from './book-modal';

type Props = {
    className?: string
    buttonClassName?: string
}
const Booking: React.FC<Props> = ({ buttonClassName, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={cn("flex flex-col items-center justify-center md:p-8 p-4 space-y-8 bg-[#1E1E1E99]", className)}>
            <div className="max-w-[536px] flex flex-col items-center gap-[14px]">
                <h2 className="text-3xl font-bold text-center uppercase md:text-[27px] text-xl font-medium leading-5 tracking-[2px] md:leading-[32px] md:tracking-[4.21px]">Bookings and Inquiries</h2>
                <p className="text-[15.36px] leading-[18px] tracking-[2px] md:tracking-[4.21px] text-center max-w-2xl">
                    In order to book me for an event, fill out the contact form and I will contact you shortly
                </p>
            </div>

            <Button
                onClick={() => setIsOpen(true)}
                className={cn("bg-transparent border border-white text-white w-[214px] p-[8.4px]", buttonClassName)}
            >
                Book Now
            </Button>
            <Portal>
                <BookModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </Portal>
        </div>
    );
};

export default Booking;