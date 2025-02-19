/* eslint-disable @next/next/no-img-element */
import { MessageSquare, Share2, Star } from 'lucide-react';
import React from 'react';
import { FaEarthAmericas } from 'react-icons/fa6';
import { MdCampaign } from 'react-icons/md';
import Container from "~/_components/Container";

const Profile = () => {
    return (
        <Container>
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-bgPrimary rounded-lg shadow-lg overflow-hidden">
                    {/* Profile Header */}
                    <div className="relative">
                        {/* Banner Image */}
                        <div className="h-48 bg-gray-200">
                            <img 
                                src="/images/profile-cover.png" 
                                alt="Forest banner" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Profile Info */}
                        <div className="flex items-end space-x-4 px-6 -mb-20 relative">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-bgPrimary -mt-16">
                                <img 
                                    src="/images/edit-profile.png" 
                                    alt="Stanford logo" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 pb-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-2xl font-bold">Stanford University</h1>
                                        <p className="text-gray-600">@stanford</p>
                                    </div>
                                    <button className="bg-primary2 text-white px-6 py-1 rounded-md flex items-center gap-2">
                                    <MdCampaign size={18} />Campaign
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="px-6 pt-24 border-b">
                        <nav className="flex space-x-8">
                            <a href="#" className="border-b-2 border-blue-600 pb-4 text-blue-600 font-medium">Post</a>
                            <a href="#" className="pb-4 text-gray-500">Course</a>
                            <a href="#" className="pb-4 text-gray-500">Videos</a>
                            <a href="#" className="pb-4 text-gray-500">Images</a>
                        </nav>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                        <div className="border rounded-lg p-4 mb-4">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <img 
                                        src="/images/edit-profile.png" 
                                        alt="Profile picture" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h2 className="font-medium">Stanford University</h2>
                                    <p className="text-gray-500 text-xs lg:text-sm flex gap-2 items-center">5h. <FaEarthAmericas /></p>
                                </div>
                            </div>
                            
                            <p className="mb-4">
                                We consulted five design experts and tested gear in a 275-square-foot apartment to find the 
                                best multifunctional decor to maximize space in a tiny bedroom.
                            </p>

                            {/* Shelf Image */}
                            <div className="rounded-lg overflow-hidden mb-4">
                                <img 
                                    src="/images/post.png" 
                                    alt="Minimalist shelf design" 
                                    className="w-full object-cover"
                                />
                            </div>

                            {/* Interaction Buttons */}
                            <div className="flex items-center justify-between text-gray-500">
                                <div className="flex items-center space-x-2">
                                    <button className="flex items-center space-x-1">
                                    <Star className="text-blue-500 w-4 h-4 lg:w-5 lg:h-5" />
                                        <span>You & 5 others</span>
                                    </button>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center space-x-1">
                                    <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5" />
                                        <span>Comment</span>
                                    </button>
                                    <button className="flex items-center space-x-1">
                                    <Share2 className="w-4 h-4 lg:w-5 lg:h-5" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Profile;