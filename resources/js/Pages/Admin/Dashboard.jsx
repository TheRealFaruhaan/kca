import { CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline"
import AuthenticatedLayout from "@/Pages/Admin/Layouts/AuthenticatedLayout"
import { Head } from '@inertiajs/react';
import SideDialog from "./Components/SideDialog";
import { useState } from "react";
import { Button } from "@headlessui/react";

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

const breadcrumbs = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const [sideEditFormOpen, setSideEditFormOpen] = useState(false)
    const [sideEditFormContent, setSideEditFormContent] = useState(sampleFormContent())
    const [sideEditFormTitle, setSideEditFormTitle] = useState("Edit Job")

    return (
        <>
            <Head title="Dashboard" />
            <AuthenticatedLayout navigation={navigation} breadcrumbs={breadcrumbs}>
                <h1 className="text-2xl font-bold">Dashboard</h1>

                <Button as="button" onClick={() => setSideEditFormOpen(true)}>
                    Open Form
                </Button>

                {/* EDIT FORM DIALOG */}
                <SideDialog dialogOpen={sideEditFormOpen} setDialogOpen={setSideEditFormOpen} dialogTitle={sideEditFormTitle}>
                    {sideEditFormContent}
                </SideDialog>
            </AuthenticatedLayout>
        </>
    )
}

export function sampleFormContent() {
    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
            <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="janesmith"
                                autoComplete="username"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                        About
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            defaultValue={''}
                        />
                    </div>
                    <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
                </div>

                <div className="col-span-full">
                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                        Last Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
