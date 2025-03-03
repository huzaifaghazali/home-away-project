'use client';

import { useFormStatus } from 'react-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { SignInButton } from '@clerk/nextjs';
import { ReloadIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export const SubmitButton = ({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='p-2 cursor-pointer'
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};
