import React from 'react';
import { Building2, Video, Monitor, Network, Zap, MoreHorizontal } from 'lucide-react';

const BarangContent = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] w-full mt-10">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">Daftar Barang per Kategori</h2>
    <div className="w-full max-w-5xl space-y-12">
      {/* Ruang Kelas */}
      <div id="ruang-kelas">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-7 h-7 text-blue-700" />
          <span className="text-2xl font-bold text-blue-700">Ruang Kelas</span>
        </div>
        <table className="w-full bg-white rounded-xl shadow mb-6">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="py-2 px-4 text-left w-20">Foto</th>
              <th className="py-2 px-4 text-left">Nama Barang</th>
              <th className="py-2 px-4 text-center">Jumlah</th>
              <th className="py-2 px-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan AA 204</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung AA</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan AA 205</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung AA</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan AA 206</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung AA</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan AA 207</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung AA</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan AA 210</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung AA</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan AA 211</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung AA</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan AA 213</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung AA</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan GSG 301</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung GSG</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan GSG 302</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung GSG</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan GSG 303</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung GSG</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan GSG 304</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung GSG</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan GSG 305</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung GSG</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan GSG 306</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung GSG</td>
            </tr><tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Ruangan GSG 307</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Ruang belajar Gedung GSG</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Peralatan AV */}
      <div id="peralatan-av">
        <div className="flex items-center gap-3 mb-2">
          <Video className="w-7 h-7 text-blue-700" />
          <span className="text-2xl font-bold text-blue-700">Peralatan AV</span>
        </div>
        <table className="w-full bg-white rounded-xl shadow mb-6">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="py-2 px-4 text-left w-20">Foto</th>
              <th className="py-2 px-4 text-left">Nama Barang</th>
              <th className="py-2 px-4 text-center">Jumlah</th>
              <th className="py-2 px-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Proyektor</td>
              <td className="py-2 px-4 text-gray-900 text-center">5</td>
              <td className="py-2 px-4 text-gray-900 text-left">Proyektor Epson</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Speaker</td>
              <td className="py-2 px-4 text-gray-900 text-center">3</td>
              <td className="py-2 px-4 text-gray-900 text-left">Speaker portable</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Microphone</td>
              <td className="py-2 px-4 text-gray-900 text-center">4</td>
              <td className="py-2 px-4 text-gray-900 text-left">Mic wireless</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Perangkat Komputer */}
      <div id="perangkat-komputer">
        <div className="flex items-center gap-3 mb-2">
          <Monitor className="w-7 h-7 text-blue-700" />
          <span className="text-2xl font-bold text-blue-700">Perangkat Komputer</span>
        </div>
        <table className="w-full bg-white rounded-xl shadow mb-6">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="py-2 px-4 text-left w-20">Foto</th>
              <th className="py-2 px-4 text-left">Nama Barang</th>
              <th className="py-2 px-4 text-center">Jumlah</th>
              <th className="py-2 px-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">PC</td>
              <td className="py-2 px-4 text-gray-900 text-center">10</td>
              <td className="py-2 px-4 text-gray-900 text-left">PC Lab Komputer</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Monitor</td>
              <td className="py-2 px-4 text-gray-900 text-center">10</td>
              <td className="py-2 px-4 text-gray-900 text-left">Monitor 24 inch</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Keyboard</td>
              <td className="py-2 px-4 text-gray-900 text-center">10</td>
              <td className="py-2 px-4 text-gray-900 text-left">keyboard</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Mouse</td>
              <td className="py-2 px-4 text-gray-900 text-center">10</td>
              <td className="py-2 px-4 text-gray-900 text-left">mouse</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Peralatan Jaringan */}
      <div id="peralatan-jaringan">
        <div className="flex items-center gap-3 mb-2">
          <Network className="w-7 h-7 text-blue-700" />
          <span className="text-2xl font-bold text-blue-700">Peralatan Jaringan</span>
        </div>
        <table className="w-full bg-white rounded-xl shadow mb-6">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="py-2 px-4 text-left w-20">Foto</th>
              <th className="py-2 px-4 text-left">Nama Barang</th>
              <th className="py-2 px-4 text-center">Jumlah</th>
              <th className="py-2 px-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Router</td>
              <td className="py-2 px-4 text-gray-900 text-center">3</td>
              <td className="py-2 px-4 text-gray-900 text-left">Router Mikrotik</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Switch</td>
              <td className="py-2 px-4 text-gray-900 text-center">2</td>
              <td className="py-2 px-4 text-gray-900 text-left">Switch 24 port</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Kabel UTP</td>
              <td className="py-2 px-4 text-gray-900 text-center">3</td>
              <td className="py-2 px-4 text-gray-900 text-left">Kabel jaringan</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Peralatan Listrik */}
      <div id="peralatan-listrik">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-7 h-7 text-blue-700" />
          <span className="text-2xl font-bold text-blue-700">Peralatan Listrik</span>
        </div>
        <table className="w-full bg-white rounded-xl shadow mb-6">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="py-2 px-4 text-left w-20">Foto</th>
              <th className="py-2 px-4 text-left">Nama Barang</th>
              <th className="py-2 px-4 text-center">Jumlah</th>
              <th className="py-2 px-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Stop Kontak</td>
              <td className="py-2 px-4 text-gray-900 text-center">8</td>
              <td className="py-2 px-4 text-gray-900 text-left">Stop kontak panjang</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Kabel Roll</td>
              <td className="py-2 px-4 text-gray-900 text-center">4</td>
              <td className="py-2 px-4 text-gray-900 text-left">Kabel roll 10 meter</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Lampu</td>
              <td className="py-2 px-4 text-gray-900 text-center">10</td>
              <td className="py-2 px-4 text-gray-900 text-left">Lampu LED</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Lainnya */}
      <div id="lainnya">
        <div className="flex items-center gap-3 mb-2">
          <MoreHorizontal className="w-7 h-7 text-blue-700" />
          <span className="text-2xl font-bold text-blue-700">Lainnya</span>
        </div>
        <table className="w-full bg-white rounded-xl shadow mb-6">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="py-2 px-4 text-left w-20">Foto</th>
              <th className="py-2 px-4 text-left">Nama Barang</th>
              <th className="py-2 px-4 text-center">Jumlah</th>
              <th className="py-2 px-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Papan Pengumuman</td>
              <td className="py-2 px-4 text-gray-900 text-center">2</td>
              <td className="py-2 px-4 text-gray-900 text-left">Papan pengumuman umum</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                {/* Template foto 4x3 landscape */}
                <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/barang-default.png"
                    alt="Foto Barang"
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </td>
              <td className="py-2 px-4 text-gray-900">Dispenser</td>
              <td className="py-2 px-4 text-gray-900 text-center">1</td>
              <td className="py-2 px-4 text-gray-900 text-left">Dispenser air minum</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default BarangContent;