import {Flag} from 'lucide-react'
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';

export function NotFoundPage() {
  return (
      <div className="mx-auto grid h-screen place-items-center px-8 text-center">
        <div>
          <Flag fill='black' className="mx-auto h-20 w-20" />
          <h1
            color="blue-gray"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          >
            Error 404 <br /> It looks like something went wrong.
          </h1>
          <h2 className="mx-auto mb-14 mt-8 text-[18px] font-normal text-gray-500 md:max-w-sm">
            Don&apos;t worry, our team is already on it.Please try refreshing
            the page or come back later.
          </h2>
         <Link to={'/'}>
            <Button className="w-full bg-black px-4 uppercase text-white hover:bg-black/75 md:w-[8rem]">
              back home
            </Button>
         </Link>
        </div>
      </div>
  );
}

export default NotFoundPage;