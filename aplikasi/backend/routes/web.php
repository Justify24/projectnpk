<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\DataAlatController;

Route::prefix('data-alat')->group(function () {
    Route::get('/', [DataAlatController::class, 'index']); // Mendapatkan semua data alat
    Route::post('/create', [DataAlatController::class, 'store']); // Menyimpan data alat baru
    Route::get('/show/{id}', [DataAlatController::class, 'show']); // Menampilkan satu data alat berdasarkan ID
    Route::put('{id}', [DataAlatController::class, 'update']); // Memperbarui data alat berdasarkan ID
    Route::delete('{id}', [DataAlatController::class, 'destroy']); // Menghapus data alat berdasarkan ID
});


use App\Http\Controllers\DataSensorController;

Route::get('data-sensor', [DataSensorController::class, 'index']);
Route::post('data-sensor', [DataSensorController::class, 'store']);
Route::get('data-sensor/{id}', [DataSensorController::class, 'show']);
Route::put('data-sensor/{id}', [DataSensorController::class, 'update']);
Route::delete('data-sensor/{id}', [DataSensorController::class, 'destroy']);


use App\Http\Controllers\HasilAnalisisController;

Route::apiResource('hasil-analisis', HasilAnalisisController::class);

use App\Http\Controllers\LokasiController;

Route::apiResource('lokasi', LokasiController::class);

use App\Http\Controllers\PupukController;

Route::apiResource('pupuk', PupukController::class);

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});


