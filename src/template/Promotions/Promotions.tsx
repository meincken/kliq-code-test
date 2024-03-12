import { Button, Breadrumb } from '@/atoms/'
import { ButtonGroupTop, ButtonGroupTable } from '@/components';
import { Table } from '@/clientcomponent/Table'

export const Promotions = () => {
  return (
    <div className='w-full p-10'>
      <div className='flex mb-10'>
      <ButtonGroupTop />
      </div>
      <h2 className='font-bold text-2xl mb-4'>Promotions</h2>
      <Breadrumb />
      <div className="bg-white w-full mb-4 p-6">
        <ButtonGroupTable />
        <hr />
        <Table />
      </div>
      <Button color={`primary`}>Add a subscription</Button>
    </div>
  );
}
