import { SubmitButton } from '../../../button/SubmitButton';
import { singOutAction } from '../auth.actions';

export const SignOutButton = () => {
  return (
    <form action={singOutAction}>
      <SubmitButton variant="primary">Sign Out</SubmitButton>
    </form>
  );
};

SignOutButton.displayName = 'SignOutButton';
