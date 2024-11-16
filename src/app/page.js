import Footer from '@/components/Footer'
import Pagination from '@/components/Pagination'
import Quote from '@/components/Quote'
import Image from 'next/image'
import Searchinput from './search/Searchinput'

export default function Home() {
  return (
    <main className='h-full'>
     
     <Quote/>
     <Pagination/>
    </main>
  )
}
