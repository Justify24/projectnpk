<?php

namespace App\Http\Controllers;

use App\Models\LokasiModel;
use Illuminate\Http\Request;

class LokasiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lokasi = LokasiModel::all();
        return response()->json($lokasi);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'provinsi' => 'required|string|max:100',
            'kabupaten' => 'required|string|max:100',
            'status_p' => 'required|string|size:1',
            'status_k' => 'required|string|size:1',
        ]);

        $lokasi = LokasiModel::create($validated);

        return response()->json([
            'message' => 'Lokasi berhasil dibuat.',
            'data' => $lokasi,
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lokasi = LokasiModel::find($id);
        if (!$lokasi) {
            return response()->json(['message' => 'Lokasi tidak ditemukan.'], 404);
        }

        return response()->json($lokasi);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $lokasi = LokasiModel::find($id);
        if (!$lokasi) {
            return response()->json(['message' => 'Lokasi tidak ditemukan.'], 404);
        }

        $validated = $request->validate([
            'provinsi' => 'string|max:100',
            'kabupaten' => 'string|max:100',
            'status_p' => 'string|size:1',
            'status_k' => 'string|size:1',
        ]);

        $lokasi->update($validated);

        return response()->json([
            'message' => 'Lokasi berhasil diperbarui.',
            'data' => $lokasi,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $lokasi = LokasiModel::find($id);
        if (!$lokasi) {
            return response()->json(['message' => 'Lokasi tidak ditemukan.'], 404);
        }

        $lokasi->delete();

        return response()->json(['message' => 'Lokasi berhasil dihapus.']);
    }
}
