import Link from 'next/link';
import Clock from 'react-live-clock';
import Image from 'next/image';
import { useRouter } from 'next/router'
export default function useNavBar() {
  const Router = useRouter();
  const ip = require('ip').address()
  return (
    <>
      <nav className="bg-zinc-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center text-center sm:items-stretch sm:justify-start">
              <div
                className="flex flex-shrink-0 items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-300">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/"
                      className="duration-300 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Image
                        src="/favicon.png"
                        height={40}
                        width={40}
                        alt="back to home page"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-shrink-0 items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-300">
              <Clock
                format={'h:mm:ss A - MMMM DD YYYY (ZZ)'}
                ticking={true}
              />
            </div>
            {process.env.NODE_ENV === "development" && (
              <div
                className="flex flex-shrink-0 items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-300">
                development build / {ip} / ({ip}:3000{Router.pathname})
              </div>
            )}
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href="/"
              className="duration-300 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <Image
                src="/favicon.png"
                height={40}
                width={40}
                alt="back to home page"
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}