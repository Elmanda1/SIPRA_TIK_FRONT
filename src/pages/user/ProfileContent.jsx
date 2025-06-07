import React, { useState } from 'react';
import profileImg from '../../assets/profile.jpg';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const ProfileContent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center w-full min-h-[80vh] py-10 overflow-y-auto">
      <div className='flex flex-row items-start justify-start w-full max-w-4xl'>
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800">My Profile</h2>
      </div>
      <div className="bg-white/30 bg-opacity-50 backdrop-blur-sm border rounded-xl shadow-sm w-full max-w-4xl p-8 ">
        {/* Header */}
        <div className="flex items-center border-b pb-4 mb-6 ml-6">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mr-4 overflow-hidden">
            <img
              src={profileImg}
              alt="Profile"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>
          <div>
            <div className="font-bold text-2xl text-gray-900">Muhammad Rafif Dwarka</div>
            <div className="text-lg text-gray-600">2407411078</div>
            <div className="text-lg text-gray-600">TI 2C</div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="border rounded-xl p-6 mb-8 bg-white">
          <div className=" text-xl font-semibold text-gray-700 mb-4">Personal Information
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8">
            <div className='text-lg text-black'>
              <span className=" font-semibold">First name</span><br />
              Muhammad Rafif
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Last name</span><br />
              Dwiarka
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Phone</span><br />
              0821-1302-0861
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Program Studi</span><br />
              Sarjana Terapan - Teknik Informatika
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Role</span><br />
              Mahasiswa
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Alamat</span><br />
              Puri Depok mas blok L no 15
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Kota</span><br />
              Depok
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Provinsi</span><br />
              Jawa Barat
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="border rounded-xl p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className=" text-xl font-semibold text-gray-700">Account Information</span>
            <button
              className="text-sm text-gray-600 border mr-3 px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-1 focus:outline-none bg-white"
              onClick={() => navigate('/forgotpassword')}
              type="button"
            >
              Forgot Password
            </button>
          </div>
          <div className='grid gap-x-5 gap-y-8'>
            <div className="text-lg mb-2 text-black">
              <span className="font-semibold">Email</span><br />
              Muhammad.Rafif.Dwarka.tik24@stu.pnj.ac.id
            </div>
            <div className="text-lg text-black flex items-center gap-2">
              <div>
                <span className="font-semibold">Password</span><br />
                <span className='flex flex-row items-center'>
                  {showPassword ? 'user123' : '●●●●●●●●●'}
                  <button
                    type="button"
                    className="ml-2 px-2 py-1 text-sm border rounded hover:bg-gray-100 flex items-center"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                    tabIndex={0}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;