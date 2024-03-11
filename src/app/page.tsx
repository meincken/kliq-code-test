import { Aside, Promotions } from '@/template'
import { Icons } from '@/atoms'

export default function Home() {
  return (
    <main className='flex'>
      <Aside />
      <Promotions />
      <Icons />
    </main>
  );
}
