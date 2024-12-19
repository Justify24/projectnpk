<?php

namespace App\Http\Controllers;

use App\Models\User;
// use Illuminate\Container\Attributes\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Exception;

class AuthController extends Controller
{
    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function register(Request $request)
    {
        try {
            // Validasi input
            $validated = $request->validate([
                'email' => 'required|email|unique:users,email',  // Validasi email
                'password' => 'required|string|min:6',  // Validasi password
                'name' => 'required|string|max:100',  // Validasi nama pengguna
                'address' => 'nullable|string',  // Validasi alamat (opsional)
                'role' => 'nullable|string|max:20',  // Validasi role (opsional)
            ]);

            // Set default role jika tidak dikirimkan
            $validated['role'] = $validated['role'] ?? 'user';  // Default role = 'user'

            // Encrypt password sebelum disimpan
            $validated['password'] = Hash::make($validated['password']);

            // Pemetaan nama_pengguna ke name (jika perlu disesuaikan)
            $validated['nama_pengguna'] = $validated['name'];  // Pemetaan nama_pengguna ke name
            // $validated['alamat'] = $validated['address'];  // Pemetaan alamat ke address

            // Hapus kolom yang tidak perlu untuk database
            unset($validated['name'], $validated['address']);  // Hapus name dan address setelah pemetaan
            // unset($validated['name'], $validated['address']);  // Hapus name dan address setelah pemetaan

            // Buat user baru
            $user = User::create($validated);

            // Respons sukses jika user berhasil dibuat
            return response()->json([
                'message' => 'User berhasil dibuat.',
                'data' => $user,
            ], 201);
        } catch (ValidationException $e) {
            // Menangani error validasi
            return response()->json([
                'message' => 'Terjadi kesalahan validasi.',
                'errors' => $e->errors(),
            ], 422);
        } catch (Exception $e) {
            // Menangani error umum lainnya
            return response()->json([
                'message' => 'Terjadi kesalahan saat mendaftar.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // Dalam controller login
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();  // Mendapatkan user yang terautentikasi
            $token = $user->createToken('auth_token')->plainTextToken; // Jika menggunakan Laravel Sanctum atau Passport

            return response()->json([
                'data' => [
                    'token' => $token,
                    'user' => $user
                ]
            ], 200);
        }

        return response()->json(['message' => 'Unauthorized'], 401);
    }

    public function logout(Request $request)
    {
        try {
            // Mendapatkan pengguna yang sedang login
            $user = $request->user(); // Akan mengembalikan user berdasarkan token yang valid

            // Cek apakah pengguna memiliki token
            if ($user->tokens->isEmpty()) {
                return response()->json([
                    'message' => 'Tidak ada sesi aktif untuk keluar.',
                ], 400); // 400 Bad Request jika tidak ada token aktif
            }

            // Menghapus semua token untuk pengguna
            $user->tokens()->delete();

            return response()->json([
                'message' => 'Logout berhasil.',
            ]);
        } catch (\Exception $e) {
            // Menangani error
            return response()->json([
                'message' => 'Terjadi kesalahan saat logout.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}


    /**
     * Logout a user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    // public function logout(Request $request)
    // {
    //     Auth::logout(); // Logout pengguna
    //     return response()->json(['message' => 'Logged out successfully'], 200);
    // }

//     public function login(Request $request)
//     {
//         // Validasi input
//         $request->validate([
//             'email' => 'required|email',
//             'password' => 'required',
//         ]);

//         // Cek apakah kredensial valid
//         if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
//             // Ambil data pengguna yang terautentikasi
//             $user = Auth::user();

//             // Simpan user ke session
//             session(['user' => $user]);

//             return response()->json([
//                 'message' => 'Login successful!',
//                 'user' => $user
//             ], 200);
//         }

//         return response()->json(['message' => 'Invalid credentials'], 401);
//     }

//     public function logout()
//     {
//         // Hapus data user dari session
//         session()->forget('user');
//         session()->flush();  // Menghapus semua session

//         return response()->json(['message' => 'Successfully logged out']);
//     }

//     public function user()
//     {
//         $user = session('user');

//         if ($user) {
//             return response()->json(['user' => $user]);
//         }

//         return response()->json(['message' => 'User not logged in'], 401);
//     }

    



//     public function checkSession()
//     {
//         $user = session('user');
//         if ($user) {
//             return response()->json(['user' => $user]);
//         }
//         return response()->json(['message' => 'Not logged in'], 401);
//     }
// }




   







    /**
     * Login a user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function login(Request $request)
    // {
    //     try {
    //         // Validasi input
    //         $validated = $request->validate([
    //             'email' => 'required|email',
    //             'password' => 'required|string',
    //         ]);

    //         // Cek kredensial (email dan password)
    //         if (Auth::attempt(['email' => $validated['email'], 'password' => $validated['password']])) {
    //             // Mendapatkan pengguna yang sedang login
    //             $user = Auth::user();

    //             // Membuat token autentikasi
    //             $token = $user->createToken('auth_token')->plainTextToken;

    //             // Mengembalikan response sukses dengan data pengguna dan token
    //             return response()->json([
    //                 'message' => 'Login berhasil.',
    //                 'data' => [
    //                     'user' => $user,
    //                     'token' => $token,
    //                 ],
    //             ]);
    //         }

    //         // Jika login gagal
    //         return response()->json([
    //             'message' => 'Email atau password tidak valid.',
    //         ], 401);
    //     } catch (ValidationException $e) {
    //         // Menangani error validasi
    //         return response()->json([
    //             'message' => 'Terjadi kesalahan validasi.',
    //             'errors' => $e->errors(),
    //         ], 422);
    //     } catch (\Exception $e) {
    //         // Menangani error umum
    //         return response()->json([
    //             'message' => 'Terjadi kesalahan saat login.',
    //             'error' => $e->getMessage(),
    //         ], 500);
    //     }
    // }

    // public function login(Request $request)
    // {
    //     try {
    //         // Validasi input
    //         $validated = $request->validate([
    //             'email' => 'required|email',
    //             'password' => 'required|string',
    //         ]);

    //         // Cek kredensial (email dan password)
    //         if (Auth::attempt(['email' => $validated['email'], 'password' => $validated['password']])) {
    //             // Mendapatkan pengguna yang sedang login
    //             $user = Auth::user();

    //             // Membuat token autentikasi menggunakan Sanctum
    //             $token = $user->createToken('auth_token')->plainTextToken;

    //             // Mengembalikan response sukses dengan data pengguna dan token
    //             return response()->json([
    //                 'message' => 'Login berhasil.',
    //                 'data' => [
    //                     'user' => $user,
    //                     'token' => $token,
    //                 ],
    //             ]);
    //         }

    //         // Jika login gagal
    //         return response()->json([
    //             'message' => 'Email atau password tidak valid.',
    //         ], 401);
    //     } catch (ValidationException $e) {
    //         // Menangani error validasi
    //         return response()->json([
    //             'message' => 'Terjadi kesalahan validasi.',
    //             'errors' => $e->errors(),
    //         ], 422);
    //     } catch (\Exception $e) {
    //         // Menangani error umum
    //         return response()->json([
    //             'message' => 'Terjadi kesalahan saat login.',
    //             'error' => $e->getMessage(),
    //         ], 500);
    //     }
    // }
