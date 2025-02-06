import { SignOutButton } from '@clerk/nextjs';
import {} from '../ui/toast';
import { useToast } from '@/hooks/use-toast';

function SignOutLink() {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: 'You have been signed out.' });
  };
  return (
    <SignOutButton>
      <button className='w-full text-left' onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
