<?php

namespace App\Http\Controllers;

use App\Models\DataalatModel;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class DataAlatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dataAlat = DataalatModel::all();
        return response()->json($dataAlat);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'link_thinger' => 'required|string|max:255',
                'token_thinger' => 'required|string',
                'user_id' => 'required|integer|exists:users,id',
            ]);

            $dataAlat = DataalatModel::create($validated);

            return response()->json([
                'message' => 'Data alat berhasil dibuat.',
                'data' => $dataAlat,
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Data yang diberikan tidak valid.',
                'errors' => $e->errors()
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
        $dataAlat = DataalatModel::find($id);
        if (!$dataAlat) {
            return response()->json(['message' => 'Data alat tidak ditemukan.'], 404);
        }

        return response()->json($dataAlat);
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
        $dataAlat = DataalatModel::find($id);
        if (!$dataAlat) {
            return response()->json(['message' => 'Data alat tidak ditemukan.'], 404);
        }

        $validated = $request->validate([
            'link_thinger' => 'string|max:255',
            'user_id' => 'integer|exists:users,id',
        ]);

        $dataAlat->update($validated);

        return response()->json([
            'message' => 'Data alat berhasil diperbarui.',
            'data' => $dataAlat,
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
        $dataAlat = DataalatModel::find($id);
        if (!$dataAlat) {
            return response()->json(['message' => 'Data alat tidak ditemukan.'], 404);
        }

        $dataAlat->delete();

        return response()->json(['message' => 'Data alat berhasil dihapus.']);
    }
}
