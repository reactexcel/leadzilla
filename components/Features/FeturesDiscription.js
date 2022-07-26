import Image from 'next/image';
import Header from '../header';

const FeaturesDiscription = () => {
  return (
    <div className='bg-yellow-bg pb-20'>
      <Header/>
      <div className='w-10/12 py-2 px-4 m-auto'>
        <div className='pt-20 sm:pt-4 md:pt-8 text-lg sm:text-xs sm:font-semibold font-bold sm:text-justify md:text-justify'>
          <div>
            <span> I’m sure you have searched online for </span>
            <span className=''>“how to find phone numbers from LinkedIn” </span>
            <div>
              <span>tried tools that gave you junk data. </span>
              <span className=''>
                Or maybe you tried to find email addresses of a{' '}
              </span>
            </div>
            <div>
              <span className=''>
                business owner from their website and only got the
              </span>
              <span className='text-blue-500  pr-2'> contact@example.com</span>
              address or
            </div>
            <div>
              <span className='text-blue-500  pr-2'> info@example.com</span>
              <span> address, which no one really checks for email.</span>
              <span className=''> Or maybe you have a</span>
            </div>
          </div>
          <span className=''>
            {' '}
            contact data platform in place but can’t seem to get any qualified
            leads.
          </span>
        </div>
        <div className='flex pl-28 sm:pl-0 md:pl-0'>
          <div className='pt-4 md:hidden sm:hidden'>
            <Image
              src='/assets/arrowpricingpage.svg'
              alt=''
              width='300px'
              height='400px'
            />
          </div>
          <div
            className='font-black pl-10 sm:pl-0 md:pl-0 pt-20 md:pt-8 sm:pt-4 font-gilroybold sm:text-xl md:text-2xl text-5xl text-justify'
            // style={{ fontSize: '42px' }}
          >
            <div>
              That’s where{' '}
              <span className='text-blue-500'>
                Leadzilla steps in and gives you the accurate, verified email
                addresses and phone numbers of the potential customers{' '}
              </span>
              you desperately want to get in touch with.{' '}
            </div>
            <div className='sm:mt-4 md:mt-4 sm:pb-10'>
              And that’s not all,{' '}
              <span className='text-blue-500'>
                it uses industry-leading AI to write personalized emails to
                them.
              </span>
            </div>
          </div>
        </div>
        <div className='-mt-2 text-right sm:hidden md:hidden'>
          <Image src='/assets/btmarrowpricing.svg' alt='' width='90px' height='100px' />
        </div>
      </div>
    </div>
  );
};
export default FeaturesDiscription;
