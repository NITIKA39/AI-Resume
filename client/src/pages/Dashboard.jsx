import React, { useState, useEffect } from "react";
import { PlusIcon, UploadCloudIcon, FilePenLineIcon, TrashIcon, PencilIcon, XIcon, UploadCloud} from 'lucide-react'
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from 'react-router-dom'

const Dashboard = () =>{

    const colors = ["#9333ea","#d97706", "#dc2626", "#0284c7", "#16a34a"]
    
    const [allResumes, setAllResumes] = useState([])
    // adding pop up for creating resume
    const [showCreateResume, setShowCreateResume] = useState(false)
    // adding pop up for upload resume 
    const [showUploadRsume, setShowUploadResume] = useState(false)
    // to store the title of the resume
    const [title, setTitle] = useState('')
    const [resume, setResume] = useState(null)
    //can edit the title of resume
    const [editResumeId, setEditResumeId] = useState('')

    const navigate = useNavigate()
    
    const loadAllResumes = async () =>{
        setAllResumes(dummyResumeData)
    }

    //after submitting we have to hide the pop up of title
    const createResume = async(event) =>{
        event.preventDefault()
        setShowCreateResume(false)
        //navigate the user to builder page so they can build resume after giving title
        navigate(`/app/builder/resume123`)
    }

    // upload resume pop up func
    const uploadResume = async(event) =>{
        event.preventDefault()
        setShowUploadResume(false)
        navigate(`/app/builder/resume123`)
    }

    //edit func so can edit title of exiting resume available on website
    const editTitle = async(event) =>{
        event.preventDefault()
    }

    //func for deleting exisiting resume
    const deleteResume = async(resumeID) =>{
        const confirm = window.confirm('Are you sure you want to delete this resume?')
        //will remove that resume id 
        if(confirm){
            setAllResumes(prev => prev.filter(resume=> resume._id !== resumeID))
        }
    }

    useEffect(()=>{
        loadAllResumes()
    },[])
    return(
        <div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, Joe Doe</p>
                
                {/* we added onclick fun so it can show create resume title button when user is using that field Note:it is for create resume fun*/}
                <div className='flex gap-4'>
                    <button onClick={()=> setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-1g gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover: shadow-lg ansition-all duration-300 cursor-pointer'>
                        <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full'/>
                        <p className="text-sm group-hover:text-indigo-600 transistion-all duration-300">Create Resume</p>
                    </button>

                    {/* we adding onclick fun so it can show upload button when user is using that field Note:it is for upload existing section*/}
                    <button onClick={()=>setShowUploadResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-1g gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover: shadow-lg ansition-all duration-300 cursor-pointer'>
                        <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full'/>
                        <p className="text-sm group-hover:text-purple-600 transistion-all duration-300">Upload Existing Resume</p>
                    </button>
                </div>

{/* to spearete existing resume from tools */}
                <hr className="border-slate-300 my-6 sm:w-[305px]"/>

                <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
                    {allResumes.map((resume, index)=>{
                        const baseColor = colors[index % colors.length];
                        return(
                            // adding navigate fun for user to open resume which was built on our website
                            <button key={index} onClick={()=> navigate(`/app/builder/${resume._id}`)} className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duartion-300 cursor-pointer" style={{background: `linear-gradient(135deg, ${baseColor}10,${baseColor}40)`,borderColor:`${baseColor}40`}}>
                                <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all" styl={{color: baseColor}}/>
                                <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{color: baseColor}}>{resume.title}</p>
                                <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center" style={{color:baseColor + '90'}}>
                                    Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                                </p>
                                <div onClick={e=>e.stopPropagation()} className="absolute top-1 right-1 group-hover:flex items-center hidden">
                                    <TrashIcon onClick={()=>deleteResume(resume._id)} className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"/>
                                    <PencilIcon onClick={()=> {setEditResumeId(resume._id); setTitle(resume.title)}} className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"/>
                                </div>
                            </button>
                        )
                    })}
                </div>

                {showCreateResume && (
                    <form onSubmit={createResume} onClick={()=> setShowCreateResume(false)} action="" className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
                        <div onClick={e=> e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
                            <h2 className="text-xl font-bold mb-4">Create a Resume</h2>

                            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter resume title" className="w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600" required/>

                            <button className="w-full py-2 bg-indigo-600 text-white rounded hover:b-indigo-700 transition-colors">Create Resume</button>

                            <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={()=> {setShowCreateResume(false); setTitle('')}}/>
                        </div>
                    </form>
                )}

                {showUploadRsume && (
                    <form onSubmit={uploadResume} onClick={()=> setShowUploadResume(false)} action="" className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
                        <div onClick={e=> e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
                            <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

                            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter resume title" className="w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600" required/>

                            <div>
                                <label htmlFor="resume-input" className="block text-sm text-slate-700">
                                    Select resume file
                                    <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-indigo-500 hover:text-indigo-700 cursor-pointer transition-colors">
                                        {resume ?(
                                         <p className="text-indigio-700">{resume.name}</p>  
                                        ): (
                                            <>
                                            <UploadCloud className="size-14 stroke-1"/>
                                            <p>Upload resume</p>
                                            </>
                                        )}
                                    </div>
                                </label>
                                {/* user can upload pdf of their resume through upload action Note: it can only accept pdf */}
                                <input type="file" id="resume-input" accept=".pdf" hidden onChange={(e)=> setResume(e.target.files[0])}/>
                            </div>

                            <button className="w-full py-2 bg-indigo-600 text-white rounded hover:b-indigo-700 transition-colors">Upload Resume</button>

                            <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={()=> {setShowUploadResume(false); setTitle('')}}/>
                        </div>
                    </form>
                )
                }

{/* func to edit title of existing resume which was created by our website */}
                {editResumeId && (
                    <form onSubmit={editTitle} onClick={()=> setEditResumeId('')} action="" className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
                        <div onClick={e=> e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
                            <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>

                            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter resume title" className="w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600" required/>

                            <button className="w-full py-2 bg-indigo-600 text-white rounded hover:b-indigo-700 transition-colors">Update</button>

                            <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={()=> {setEditResumeId(''); setTitle('')}}/>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Dashboard