<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mahasiswa;

class MahasiswaController extends Controller
{
    public function index()
    {
        $mahasiswas = Mahasiswa::all();

        return response()->json([
            'success' => true,
            'data' => $mahasiswas
        ]);
    }

    public function store(Request $request)
    {
        $mahasiswa = new Mahasiswa();
        $mahasiswa->nama = $request->nama;
        $mahasiswa->nim = $request->nim;
        $mahasiswa->nilai_quis = $request->nilai_quis;
        $mahasiswa->nilai_tugas = $request->nilai_tugas;
        $mahasiswa->nilai_absensi = $request->nilai_absensi;
        $mahasiswa->nilai_praktek = $request->nilai_praktek;
        $mahasiswa->nilai_uas = $request->nilai_uas;
        $mahasiswa->save();

        return response()->json([
            'success' => true,
            'message' => 'Mahasiswa created successfully'
        ]);
    }

    public function show($id)
    {
        $mahasiswa = Mahasiswa::find($id);

        if (!$mahasiswa) {
            return response()->json([
                'success' => false,
                'message' => 'Mahasiswa not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $mahasiswa
        ]);
    }

    public function update(Request $request, $id)
    {
        $mahasiswa = Mahasiswa::find($id);

        if (!$mahasiswa) {
            return response()->json([
                'success' => false,
                'message' => 'Mahasiswa not found'
            ], 404);
        }

        $mahasiswa->nama = $request->nama;
        $mahasiswa->nim = $request->nim;
        $mahasiswa->nilai_quis = $request->nilai_quis;
        $mahasiswa->nilai_tugas = $request->nilai_tugas;
        $mahasiswa->nilai_absensi = $request->nilai_absensi;
        $mahasiswa->nilai_praktek = $request->nilai_praktek;
        $mahasiswa->nilai_uas = $request->nilai_uas;
        $mahasiswa->save();

        return response()->json([
            'success' => true,
            'message' => 'Mahasiswa updated successfully'
        ]);
    }

    public function destroy($id)
    {
        $mahasiswa = Mahasiswa::find($id);

        if (!$mahasiswa) {
            return response()->json([
                'success' => false,
                'message' => 'Mahasiswa not found'
            ], 404);
        }

        $mahasiswa->delete();

        return response()->json([
            'success' => true,
            'message' => 'Mahasiswa deleted successfully'
        ]);
    }
}