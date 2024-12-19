<?php

namespace App\Http\Controllers;

use App\Models\HasilAnalisisModel;
use Illuminate\Http\Request;

class HasilAnalisisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $hasilAnalisis = HasilAnalisisModel::all();
        return response()->json($hasilAnalisis);
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
            'id_monitoring_sensor' => 'required|integer|exists:monitoring_sensor,id',
            'pupuk_1' => 'nullable|string|max:50',
            'pupuk_2' => 'nullable|string|max:50',
            'pupuk_3' => 'nullable|string|max:50',
            'jenis_tanah' => 'required|string|max:100',
            'jumlah_pupuk_1' => 'nullable|numeric',
            'total_harga_pupuk1' => 'nullable|integer',
            'jumlah_pupuk_2' => 'nullable|numeric',
            'total_harga_pupuk2' => 'nullable|integer',
            'jumlah_pupuk_3' => 'nullable|numeric',
            'total_harga_pupuk3' => 'nullable|integer',
            'total_harga' => 'nullable|integer',
            'pupuk_tambahan' => 'nullable|string|max:50',
            'jumlah_pupuk_tambahan' => 'nullable|numeric',
        ]);

        $hasilAnalisis = HasilAnalisisModel::create($validated);

        return response()->json([
            'message' => 'Hasil analisis berhasil dibuat.',
            'data' => $hasilAnalisis,
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
        $hasilAnalisis = HasilAnalisisModel::find($id);
        if (!$hasilAnalisis) {
            return response()->json(['message' => 'Hasil analisis tidak ditemukan.'], 404);
        }

        return response()->json($hasilAnalisis);
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
        $hasilAnalisis = HasilAnalisisModel::find($id);
        if (!$hasilAnalisis) {
            return response()->json(['message' => 'Hasil analisis tidak ditemukan.'], 404);
        }

        $validated = $request->validate([
            'id_monitoring_sensor' => 'integer|exists:monitoring_sensor,id',
            'pupuk_1' => 'nullable|string|max:50',
            'pupuk_2' => 'nullable|string|max:50',
            'pupuk_3' => 'nullable|string|max:50',
            'jenis_tanah' => 'string|max:100',
            'jumlah_pupuk_1' => 'nullable|numeric',
            'total_harga_pupuk1' => 'nullable|integer',
            'jumlah_pupuk_2' => 'nullable|numeric',
            'total_harga_pupuk2' => 'nullable|integer',
            'jumlah_pupuk_3' => 'nullable|numeric',
            'total_harga_pupuk3' => 'nullable|integer',
            'total_harga' => 'nullable|integer',
            'pupuk_tambahan' => 'nullable|string|max:50',
            'jumlah_pupuk_tambahan' => 'nullable|numeric',
        ]);

        $hasilAnalisis->update($validated);

        return response()->json([
            'message' => 'Hasil analisis berhasil diperbarui.',
            'data' => $hasilAnalisis,
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
        $hasilAnalisis = HasilAnalisisModel::find($id);
        if (!$hasilAnalisis) {
            return response()->json(['message' => 'Hasil analisis tidak ditemukan.'], 404);
        }

        $hasilAnalisis->delete();

        return response()->json(['message' => 'Hasil analisis berhasil dihapus.']);
    }
}
