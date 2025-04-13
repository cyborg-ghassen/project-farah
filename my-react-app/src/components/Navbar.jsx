// src/components/Navbar.jsx
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <h1 className="text-lg font-bold text-blue-600"></h1>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="size-6" aria-hidden="true" />
            </button>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex items-center justify-center rounded-full bg-white p-1 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <span className="sr-only">Open user menu</span>
                  <UserIcon className="size-6" aria-hidden="true" />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                {['Your Profile', 'Settings', 'Sign out'].map((item) => (
                  <MenuItem key={item}>
                    {({ focus }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-gray-700 ${focus && 'bg-gray-100'}`}
                      >
                        {item}
                      </a>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden" />
    </Disclosure>
  );
}
