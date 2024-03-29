import { Button } from '@/atoms/'

export const ButtonGroupTop = () => {
  return (
    <>
      <Button color={`primary`}>
        Web app
        <svg className='ml-1.5' xmlns="http://www.w3.org/2000/svg" width="19" height="20" fill="none"><g clipPath="url(#a)"><path fill="#fff" fillRule="evenodd" d="M9.429 18.643a8.643 8.643 0 1 0 0-17.286 8.643 8.643 0 0 0 0 17.286ZM7.642 3.156A7.078 7.078 0 0 0 2.4 9.214h3.14a12.808 12.808 0 0 1 2.102-6.058Zm3.574 0a12.808 12.808 0 0 1 2.102 6.058h3.139a7.078 7.078 0 0 0-5.242-6.058Zm.525 6.058c-.198-2.132-1-4.163-2.312-5.853a11.236 11.236 0 0 0-2.312 5.853h4.624Zm-4.624 1.572h4.624c-.198 2.132-1 4.162-2.312 5.853a11.236 11.236 0 0 1-2.312-5.853Zm-1.578 0H2.4a7.078 7.078 0 0 0 5.242 6.058 12.808 12.808 0 0 1-2.103-6.058Zm5.677 6.058a12.808 12.808 0 0 0 2.102-6.058h3.139a7.078 7.078 0 0 1-5.242 6.058Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .571h18.857v18.857H0z"/></clipPath></defs></svg>
      </Button>
      <Button color={`secondary`}>
        Application Validation
        <svg className='ml-1.5' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.85718 9L12.8572 15L18.8572 9" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
    </>
  )
}

export const ButtonGroupTable = () => {
  return (
    <>
      <div className='flex mb-10 justify-end'>
        <Button color={`icon`}>
          <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path stroke="#131313" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m13 13-2.333-2.333m1.666-4A5.667 5.667 0 1 1 1 6.667a5.667 5.667 0 0 1 11.333 0Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" fill="none"><path stroke="#181A1D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M3 5h8M1 1h12M5 9h4"/></svg>
        </Button>
        <Button color={`icon`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="none"><path stroke="#181A1D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M10.333.667v10.666m0 0L7.667 8.667m2.666 2.666L13 8.667m-9.333 2.666V.667m0 0L1 3.333M3.667.667l2.666 2.666"/></svg>
        </Button>
      </div>
    </>
  )
}
