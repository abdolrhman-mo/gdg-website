import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <Image
              src="/images/logo.png"
              alt="GDG Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-google-gray">
              &copy; {new Date().getFullYear()} GDG on Campus ECU. All rights reserved.
            </p>
            <p className="text-google-gray-light text-sm">
              埃及中国大学 GDG 校园 © {new Date().getFullYear()} 版权所有
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}