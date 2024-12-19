<?php

namespace App\Http\Controllers;

use App\Models\PupukModel;
use Illuminate\Http\Request;

class PupukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pupuk = PupukModel::all();
        return response()->json($pupuk);
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
            'nama_pupuk' => 'required|string|max:20',
            'jenis' => 'required|string|max:30',
            'takaran_pupuk' => 'required|numeric',
            'harga' => 'required|integer',
        ]);

        $pupuk = PupukModel::create($validated);

        return response()->json([
            'message' => 'Data pupuk berhasil dibuat.',
            'data' => $pupuk,
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
        $pupuk = PupukModel::find($id);
        if (!$pupuk) {
            return response()->json(['message' => 'Data pupuk tidak ditemukan.'], 404);
        }

        return response()->json($pupuk);
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
        $pupuk = PupukModel::find($id);
        if (!$pupuk) {
            return response()->json(['message' => 'Data pupuk tidak ditemukan.'], 404);
        }

        $validated = $request->validate([
            'nama_pupuk' => 'string|max:20',
            'jenis' => 'string|max:30',
            'takaran_pupuk' => 'numeric',
            'harga' => 'integer',
        ]);

        $pupuk->update($validated);

        return response()->json([
            'message' => 'Data pupuk berhasil diperbarui.',
            'data' => $pupuk,
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
        $pupuk = PupukModel::find($id);
        if (!$pupuk) {
            return response()->json(['message' => 'Data pupuk tidak ditemukan.'], 404);
        }

        $pupuk->delete();

        return response()->json(['message' => 'Data pupuk berhasil dihapus.']);
    }
}
