import { Button, Breadrumb } from '@/atoms/'

export const Promotions = () => {
  return (
    <div className='w-full p-10'>
      <div className='flex'>
        <Button title={`Web app`} />
        <Button title={`Application Validation`} />
      </div>
      <h1 className='font-bold text-xl'>Promotions</h1>
      <Breadrumb />
      <div className="bg-white w-full">

      </div>
      <Button title={`Add a subscription`} />
    </div>
  );
}
