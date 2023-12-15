import { Fragment } from 'react'
import {
    BellIcon,
    ChevronDownIcon,
    HandThumbUpIcon,
    InboxArrowDownIcon,
    MagnifyingGlassIcon,
    TagIcon,
    UsersIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className='flex flex-row h-screen bg-slate-200'>
        {/* Side Bar */}
        <div className='basis-1/4'>
            <div className='mx-2 my-6'>
                <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    <div className="mb-2 p-4">
                        <Typography variant="h5" color="blue-gray">
                            Sidebar
                        </Typography>
                    </div>
                    <List>
                        <ListItem>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            E-Commerce
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Inbox
                            <ListItemSuffix>
                                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Profile
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Settings
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Log Out
                        </ListItem>
                    </List>
                </Card>
            </div>
        </div>
        {/* Main Dashboard */}
        <div className="basis-3/4 mt-10 mx-10 lg:flex lg:justify-between">
            <div className='w-full'>
                <div className='w-full flex flex-row'>
                    <div className="min-w-0 my-10 flex-1 md:my-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Dashboard
                        </h2>
                    </div>
                    <div className="mt-5 flex items-center lg:ml-4 lg:mt-0">
                        <span className="sm:ml-3 inline-flex items-baseline">
                        <div className="mx-2 flex items-center rounded-full bg-zinc-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                            <label htmlFor="price" className="block mx-2 text-sm font-medium leading-6 text-gray-900">
                            <MagnifyingGlassIcon className='h-6 w-6' area-aria-hidden="true"/>
                            </label>
                            <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 px-2 bg-transparent text-gray-900 ring-transparent placeholder:text-gray-400 focus:border-none focus:ring-0 focus:ring-transparent focus:outline-0 sm:text-sm sm:leading-6"
                            placeholder="Search Here"
                            />
                        </div>
                        </span>
                        <span className="hidden sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-full bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                            >
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        </span>

                        <span className="ml-3 hidden sm:block">
                        <Menu as="div" className="relative ml-3">
                                <div>
                                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                </Menu.Button>
                                </div>
                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                        <a
                                            href={item.href}
                                            className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                        )}
                                    </Menu.Item>
                                    ))}
                                </Menu.Items>
                                </Transition>
                            </Menu>
                        </span>


                        {/* Dropdown */}
                        <Menu as="div" className="relative ml-3 sm:hidden">
                        <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                            More
                            <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    href="/"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Notifications
                                </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    href="/"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    User
                                </a>
                                )}
                            </Menu.Item>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </div>
                </div>
                {/* Grid */}
                <div className='my-8'>
                    <div class="grid grid-cols-4 gap-4 mt-10 mx-0">
                        <div className='bg-white px-2 py-2 rounded-lg drop-shadow-xl'>
                            <div class="in-rev py-2 px-2">
                                <InboxArrowDownIcon className='h-8 w-8'/>
                                <dt class="text-sm py-2">Overdue invoices</dt>
                                <div className='flex justify-between items-center'>
                                    <dd class="text-2xl">$12,787.00</dd>
                                    <dd class="text-sm text-green-400 bg-green-100 px-2 py-1 rounded-full">+54.02%</dd>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white px-2 py-2 rounded-lg drop-shadow-xl'>
                            <div class="in-rev py-2 px-2">
                                <TagIcon className='h-8 w-8'/>
                                <dt class="text-sm py-2">Overdue invoices</dt>
                                <div className='flex justify-between items-center'>
                                    <dd class="text-2xl">$12,787.00</dd>
                                    <dd class="text-sm text-green-400 bg-green-100 px-2 py-1 rounded-full">+54.02%</dd>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white px-2 py-2 rounded-lg drop-shadow-xl'>
                            <div class="in-rev py-2 px-2">
                                <HandThumbUpIcon className='h-8 w-8'/>
                                <dt class="text-sm py-2">Overdue invoices</dt>
                                <div className='flex justify-between items-center'>
                                    <dd class="text-2xl">$12,787.00</dd>
                                    <dd class="text-sm text-green-400 bg-green-100 px-2 py-1 rounded-full">+54.02%</dd>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white px-2 py-2 rounded-lg drop-shadow-xl'>
                            <div class="in-rev py-2 px-2">
                                <UsersIcon className='h-8 w-8'/>
                                <dt class="text-sm py-2">Overdue invoices</dt>
                                <div className='flex justify-between items-center'>
                                    <dd class="text-2xl">$12,787.00</dd>
                                    <dd class="text-sm text-green-400 bg-green-100 px-2 py-1 rounded-full">+54.02%</dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Chart */}
                <div className='my-10'>
                    <div className='bg-white px-2 py-2 rounded-lg drop-shadow-xl'>
                        <div class="in-rev py-2 px-2">
                            <dt class="text-2xl font-bold pt-1">Activities</dt>
                            <div className='flex justify-between items-center'>
                                <dd class="text-sm">May - June 2021</dd>
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-between items-center mx-4'>
                                        <dd class="text-sm text-green-900 bg-red-600 h-2 w-2 rounded-full mx-2"></dd>
                                        Guest
                                    </div>
                                    <div className='flex justify-between items-center mx-4'>
                                        <dd class="text-sm text-green-900 bg-green-500 h-2 w-2 rounded-full mx-2"></dd>
                                        User
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                                  
                </div>
                {/* Chart */}
                <div className='my-10'>
                    <div className='grid grid-cols-2 gap-2 mt-10 mx-0px-2 py-2 rounded-lg drop-shadow-xl'>
                        <div class="in-rev py-2 px-10 bg-white rounded-lg drop-shadow-xl">
                            <div className='flex justify-between items-center'>
                                <dt class="text-2xl font-bold pt-1">Top Products</dt>
                                <dd class="text-sm">May - June 2021</dd>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-between items-center'>
                                    Chart
                                </div>
                                <div className='flex flex-col items-left mx-6 my-2'>
                                    <div className='flex justify-start items-start'>
                                        <dd class="text-sm text-green-900 bg-green-500 h-2 w-2 rounded-full mx-2 my-2"></dd>
                                        <div className='flex flex-col'>
                                            <dd>Basic Tees</dd>
                                            <dd>55%</dd>
                                        </div>
                                    </div>
                                    <div className='flex justify-start items-start'>
                                        <dd class="text-sm text-green-900 bg-green-500 h-2 w-2 rounded-full mx-2 my-2"></dd>
                                        <div className='flex flex-col'>
                                            <dd>Custome Short Pants</dd>
                                            <dd>31%</dd>
                                        </div>
                                    </div>
                                    <div className='flex justify-start items-start'>
                                        <dd class="text-sm text-green-900 bg-green-500 h-2 w-2 rounded-full mx-2 my-2"></dd>
                                        <div className='flex flex-col'>
                                            <dd>Super Hoodies</dd>
                                            <dd>14%</dd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="in-rev py-2 px-10 bg-white rounded-lg drop-shadow-xl">
                            <dt class="text-2xl font-bold pt-1">Activities</dt>
                            <div className='flex justify-between items-center'>
                                <dd class="text-sm">May - June 2021</dd>
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-between items-center mx-4'>
                                        <dd class="text-sm text-green-900 bg-red-600 h-2 w-2 rounded-full mx-2"></dd>
                                        Guest
                                    </div>
                                    <div className='flex justify-between items-center mx-4'>
                                        <dd class="text-sm text-green-900 bg-green-500 h-2 w-2 rounded-full mx-2"></dd>
                                        User
                                        <dd class="text-sm text-green-900 bg-green-500 h-2 w-2 rounded-full mx-2"></dd>
                                        User
                                        <dd class="text-sm text-green-900 bg-green-500 h-2 w-2 rounded-full mx-2"></dd>
                                        User
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                                  
                </div>
            </div>
        </div>
    </div>
  )
}
