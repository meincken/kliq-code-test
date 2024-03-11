import { Button, Breadrumb } from '@/atoms/'
import { Table } from '@/components'

export const Promotions = () => {
  return (
    <div className='w-full p-10'>
      <div className='flex mb-10'>
        <Button color={`primary`}>
          Web app
          <svg className='ml-1.5' xmlns="http://www.w3.org/2000/svg" width="19" height="20" fill="none"><g clip-path="url(#a)"><path fill="#fff" fill-rule="evenodd" d="M9.429 18.643a8.643 8.643 0 1 0 0-17.286 8.643 8.643 0 0 0 0 17.286ZM7.642 3.156A7.078 7.078 0 0 0 2.4 9.214h3.14a12.808 12.808 0 0 1 2.102-6.058Zm3.574 0a12.808 12.808 0 0 1 2.102 6.058h3.139a7.078 7.078 0 0 0-5.242-6.058Zm.525 6.058c-.198-2.132-1-4.163-2.312-5.853a11.236 11.236 0 0 0-2.312 5.853h4.624Zm-4.624 1.572h4.624c-.198 2.132-1 4.162-2.312 5.853a11.236 11.236 0 0 1-2.312-5.853Zm-1.578 0H2.4a7.078 7.078 0 0 0 5.242 6.058 12.808 12.808 0 0 1-2.103-6.058Zm5.677 6.058a12.808 12.808 0 0 0 2.102-6.058h3.139a7.078 7.078 0 0 1-5.242 6.058Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .571h18.857v18.857H0z"/></clipPath></defs></svg>
        </Button>
        <Button color={`secondary`}>
          Application Validation
          <svg className='ml-1.5' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.85718 9L12.8572 15L18.8572 9" stroke="#181A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Button>
      </div>
      <h1 className='font-bold text-xl'>Promotions</h1>
      <Breadrumb />
      <div className="bg-white w-full mb-4 p-6">
        <Table />
      </div>
      <Button color={`primary`}>Add a subscription</Button>
    </div>
  );
}
