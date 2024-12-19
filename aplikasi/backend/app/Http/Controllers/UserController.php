<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

// class UserController extends Controller
// {
//     /**
//      * Get authenticated user data.
//      *
//      * @return \Illuminate\Http\JsonResponse
//      */
//     public function getUserData(Request $request)
//     {
//         // Memastikan pengguna terautentikasi
//         if (Auth::check()) {
//             // Mengembalikan data pengguna yang sedang login
//             return response()->json(Auth::user(), 200);
//         }

//         // Jika pengguna tidak terautentikasi
//         return response()->json(['error' => 'Unauthorized'], 401);
//     }
// }

// class UserController extends Controller
// {
//     public function getUserData(Request $request)
//     {
//         // Cek apakah pengguna terautentikasi menggunakan session
//         if (Auth::check()) {
//             return response()->json(Auth::user(), 200);  // Mengembalikan data pengguna
//         }

//         return response()->json(['error' => 'Unauthorized'], 401);  // Jika tidak valid
//     }

//     public function user($id)
//     {
//         // Cek apakah sesi pengguna tersedia
//         $currentUser = session('user');

//         // Pastikan pengguna sudah login dan ID yang diminta sesuai dengan ID sesi pengguna
//         if ($currentUser && $currentUser->id == $id) {
//             // Ambil data pengguna berdasarkan ID
//             $user = User::find($id);

//             // Jika pengguna ditemukan, kembalikan data pengguna
//             if ($user) {
//                 return response()->json(['user' => $user]);
//             }

//             // Jika pengguna tidak ditemukan
//             return response()->json(['message' => 'User not found'], 404);
//         }

//         // Jika tidak ada sesi pengguna atau ID tidak cocok
//         return response()->json(['message' => 'User not logged in or invalid ID'], 401);
//     }
// }
