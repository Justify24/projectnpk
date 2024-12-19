<?php

namespace App\Http\Controllers;

use App\Models\DatasensorModel;
use Illuminate\Http\Request;

class DataSensorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dataSensor = DatasensorModel::all();
        return response()->json($dataSensor);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    // Coba untuk validasi dan simpan data
    try {
        // Validasi input data
        $validated = $request->validate([
            'ph' => 'required|numeric',
            'fosfor' => 'required|integer',
            'kalium' => 'required|integer',
            'moisture' => 'required|numeric',
            'suhu' => 'required|numeric',
            'natrium' => 'required|numeric',
        ]);

        // Jika validasi berhasil, buat data sensor baru
        $dataSensor = DatasensorModel::create($validated);

        // Kembalikan respons jika data berhasil disimpan
        return response()->json([
            'message' => 'Data sensor berhasil dibuat.',
            'data' => $dataSensor,
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        // Jika ada error validasi, kita tangkap dan tampilkan pesan error-nya
        return response()->json([
            'message' => 'Validation failed.',
            'errors' => $e->errors(), // Menampilkan detail error validasi
        ], 422);
    }
}


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $dataSensor = DatasensorModel::find($id);
        if (!$dataSensor) {
            return response()->json(['message' => 'Data sensor tidak ditemukan.'], 404);
        }

        return response()->json($dataSensor);
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
        $dataSensor = DatasensorModel::find($id);
        if (!$dataSensor) {
            return response()->json(['message' => 'Data sensor tidak ditemukan.'], 404);
        }

        $validated = $request->validate([
            'ph' => 'numeric',
            'fosfor' => 'integer',
            'kalium' => 'integer',
            'moisture' => 'numeric',
            'suhu' => 'numeric',
            'natrium' => 'numeric',
        ]);

        $dataSensor->update($validated);

        return response()->json([
            'message' => 'Data sensor berhasil diperbarui.',
            'data' => $dataSensor,
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
        $dataSensor = DatasensorModel::find($id);
        if (!$dataSensor) {
            return response()->json(['message' => 'Data sensor tidak ditemukan.'], 404);
        }

        $dataSensor->delete();

        return response()->json(['message' => 'Data sensor berhasil dihapus.']);
    }
}
