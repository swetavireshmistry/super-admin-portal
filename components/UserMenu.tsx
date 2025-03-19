"use client";

import React from 'react';
// import { createClient } from 'apps/super-admin/utils/supabase/client';
import { Button } from 'flowbite-react';

interface Props {
    username: string
}

const UserMenu: React.FC<Props> = ({ username }) => {
    // const supabase = createClient();
    const handleSignOut = () => {
        // supabase.auth.signOut();
        console.log("sign out");
    }
    return (
        <>
            <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src="/docs/images/people/profile-picture-5.jpg" alt="User dropdown" />
            <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{username}</div>
                    {/* <div className="font-medium truncate">name@flowbite.com</div> */}
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div className="py-1">
                    <Button onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Button>
                </div>
            </div>
        </>
    )
}

export default UserMenu;