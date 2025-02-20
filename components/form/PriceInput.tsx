import { Prisma } from '@prisma/client';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const name = Prisma.PropertyScalarFieldEnum.price;
// const name = 'price';

type FormInputProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor='price' className='capitalize'>
        {' '}
        Price ($)
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
