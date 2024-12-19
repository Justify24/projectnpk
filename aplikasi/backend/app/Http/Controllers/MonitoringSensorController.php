<?php

namespace App\Http\Controllers;

use App\Models\MonitoringSensorModel;
use Illuminate\Http\Request;

class MonitoringSensorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $monitoringSensor = MonitoringSensorModel::all();
        return response()->json($monitoringSensor);
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
            'id_lokasi' => 'required|integer|exists:lokasi,id',
            'id_data_sensor' => 'required|integer|exists:data_sensor,id',
            'nama_lahan' => 'required|string|max:100',
            'luas_lahan' => 'required|numeric',
        ]);

        $monitoringSensor = MonitoringSensorModel::create($validated);

        return response()->json([
            'message' => 'Data monitoring sensor berhasil dibuat.',
            'data' => $monitoringSensor,
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
        $monitoringSensor = MonitoringSensorModel::find($id);
        if (!$monitoringSensor) {
            return response()->json(['message' => 'Data monitoring sensor tidak ditemukan.'], 404);
        }

        return response()->json($monitoringSensor);
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
        $monitoringSensor = MonitoringSensorModel::find($id);
        if (!$monitoringSensor) {
            return response()->json(['message' => 'Data monitoring sensor tidak ditemukan.'], 404);
        }

        $validated = $request->validate([
            'id_lokasi' => 'integer|exists:lokasi,id',
            'id_data_sensor' => 'integer|exists:data_sensor,id',
            'nama_lahan' => 'string|max:100',
            'luas_lahan' => 'numeric',
        ]);

        $monitoringSensor->update($validated);

        return response()->json([
            'message' => 'Data monitoring sensor berhasil diperbarui.',
            'data' => $monitoringSensor,
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
        $monitoringSensor = MonitoringSensorModel::find($id);
        if (!$monitoringSensor) {
            return response()->json(['message' => 'Data monitoring sensor tidak ditemukan.'], 404);
        }

        $monitoringSensor->delete();

        return response()->json(['message' => 'Data monitoring sensor berhasil dihapus.']);
    }
}
