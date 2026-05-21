"use client"
import React from 'react'
import { authClient } from "@/lib/auth-client" 
import Image from 'next/image'
import UpdateUser from '@/components/ui/UpdateUser'


const ProfilePage = () => {
  const { 
    data: session, 
    isPending, 
    error 
  } = authClient.useSession() 

  const UserData = session?.user;

  // 1. Render a clean loading spinner while checking the authentication status
  if (isPending) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // 2. Fallback check if a user attempts to view this page without being logged in
  if (!UserData) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <p className="text-xl font-semibold text-error">Access Denied. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center mb-20 px-4">
      <div className="shadow-xl bg-base-100 card text-center w-full max-w-sm p-8 border border-base-content/20 rounded-2xl">
        
        {/* Profile Avatar Container */}
        {UserData?.image ? (
          <div className="border-3 border-blue-600 mx-auto w-fit rounded-full p-1 bg-white mb-4 shadow-sm">
            <Image
              src={UserData.image}
              alt={`${UserData.name}'s profile avatar`}
              width={150}
              height={150}
              className="rounded-full w-[100px] h-[100px] object-cover"
              priority
            />
          </div>
        ) : (
          // Fallback placeholder avatar if user doesn't have an image path saved
          <div className="w-[100px] h-[100px] rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-sm">
            {UserData.name?.charAt(0).toUpperCase()}
          </div>
        )}

        {/* User Info Details */}
        <h2 className="text-2xl font-bold text-base-content">{UserData?.name}</h2>
        <p className="text-sm text-base-content/60 mt-1 mb-6">{UserData?.email}</p>
        
        <div className="text-center border-t border-base-content/10 pt-4">
          <UpdateUser />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;