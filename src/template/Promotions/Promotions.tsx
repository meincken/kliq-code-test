import { Button, Breadrumb } from '@/atoms/'

export const Promotions = () => {
  return (
    <div className='w-full p-10'>
      <Button title={`Web app`} />
      <Button title={`Application Validation`} />
      <h1>Promotions</h1>
      <Breadrumb />
      <div className="bg-white w-full">

      </div>
      <Button title={`Add a subscription`} />
    </div>
  );
}