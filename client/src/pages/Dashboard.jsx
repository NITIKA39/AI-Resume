import React from "react";
import { PlusIcon, UploadCloudIcon } from 'lucide-react'

const Dashboard = () =>{
    return(
        <div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, Joe Doe</p>
                
                <div className='flex gap-4'>
                    <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-1g gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover: shadow-lg ansition-all duration-300 cursor-pointer'>
                        <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full'/>
                        <p className="text-sm group-hover:text-indigo-600 transistion-all duration-300">Create Resume</p>
                    </button>

                    <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-1g gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover: shadow-lg ansition-all duration-300 cursor-pointer'>
                        <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full'/>
                        <p className="text-sm group-hover:text-purple-600 transistion-all duration-300">Upload Existing Resume</p>
                    </button>
                </div>

{/* to spearete existing resume from tools */}
                <hr className="border-slate-300 my-6 sm:w-[305px]"/>
            </div>
        </div>
    )
}

export default Dashboard