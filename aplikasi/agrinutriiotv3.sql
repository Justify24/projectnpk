-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 23 Des 2024 pada 04.37
-- Versi server: 8.0.30
-- Versi PHP: 8.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agrinutriiotv3`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_alat`
--

CREATE TABLE `data_alat` (
  `id_alat` bigint UNSIGNED NOT NULL,
  `link_thinger` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token_thinger` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `data_alat`
--

INSERT INTO `data_alat` (`id_alat`, `link_thinger`, `token_thinger`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'https://backend.thinger.io/v3/users/Justify24/devices/Serial_ThingerIoT_AgrinutriIoT_1/resources/Dataku', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJkZXYiOiJTZXJpYWxfVGhpbmdlcklvVF9BZ3JpbnV0cmlJb1RfMSIsImlhdCI6MTczMjczNDAzMiwianRpIjoiNjc0NzZDNiODMxNGFlMGRkZWQ4Iiwic3ZyIjoiYXAtc291dGhlYXN0LmF3cy50aGluZ2VyLmlvIiwidXNyIjoiSnVzdGlmeTI0In0fDjX47FiyVixITMDsGHxl5u1t8giKluWOD', 13, '2024-11-27 12:18:28', '2024-11-27 12:18:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_sensor`
--

CREATE TABLE `data_sensor` (
  `id` bigint UNSIGNED NOT NULL,
  `ph` double NOT NULL,
  `fosfor` int NOT NULL,
  `kalium` int NOT NULL,
  `moisture` double NOT NULL,
  `suhu` double NOT NULL,
  `natrium` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `data_sensor`
--

INSERT INTO `data_sensor` (`id`, `ph`, `fosfor`, `kalium`, `moisture`, `suhu`, `natrium`, `created_at`, `updated_at`) VALUES
(1, 7.5, 10, 12, 25.4, 22.5, 5, '2024-11-27 13:38:46', '2024-11-27 13:38:46'),
(2, 7.5, 10, 12, 25.4, 22.5, 5, '2024-11-27 13:46:21', '2024-11-27 13:46:21'),
(3, 7.5, 10, 12, 25.4, 22.5, 5, '2024-11-27 13:55:28', '2024-11-27 13:55:28'),
(4, 7.5, 10, 12, 25.4, 22.5, 5, '2024-11-27 13:56:33', '2024-11-27 13:56:33'),
(5, 10, 10, 12, 25.4, 22.5, 5, '2024-11-27 13:57:07', '2024-11-27 13:57:07'),
(6, 4, 0, 0, 0, 30, 0, '2024-11-27 14:02:10', '2024-11-27 14:02:10'),
(7, 3, 0, 0, 0, 25.200000762939, 0, '2024-11-27 18:53:03', '2024-11-27 18:53:03'),
(8, 3, 0, 0, 0, 25.200000762939, 0, '2024-11-27 19:47:12', '2024-11-27 19:47:12'),
(9, 7.4000000953674, 86, 79, 2.7000000476837, 22.60000038147, 17, '2024-11-27 19:57:27', '2024-11-27 19:57:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `hasil_analisis`
--

CREATE TABLE `hasil_analisis` (
  `id_hasil_analisis` bigint UNSIGNED NOT NULL,
  `id_monitoring_sensor` bigint UNSIGNED NOT NULL,
  `pupuk_1` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pupuk_2` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pupuk_3` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jenis_tanah` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jumlah_pupuk_1` double DEFAULT NULL,
  `total_harga_pupuk1` int DEFAULT NULL,
  `jumlah_pupuk_2` double DEFAULT NULL,
  `total_harga_pupuk2` int DEFAULT NULL,
  `jumlah_pupuk_3` double DEFAULT NULL,
  `total_harga_pupuk3` int DEFAULT NULL,
  `total_harga` int DEFAULT NULL,
  `pupuk_tambahan` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jumlah_pupuk_tambahan` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `lokasi`
--

CREATE TABLE `lokasi` (
  `id` bigint UNSIGNED NOT NULL,
  `provinsi` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kabupaten` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_p` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_k` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_11_25_095138_user', 1),
(5, '2024_11_25_095412_pupuk', 1),
(6, '2024_11_25_095641_lokasi', 1),
(7, '2024_11_25_100352_data_sensor', 1),
(8, '2024_11_25_100607_monitoring_sensor', 1),
(9, '2024_11_25_100701_data_alat', 1),
(10, '2024_11_25_100740_hasil_analisis', 1),
(11, '2024_11_27_070455_create_personal_access_tokens_table', 2),
(12, '2024_11_27_074416_make_nama_pengguna_nullable', 3),
(13, '2024_11_27_075707_change_nama_pengguna_nullable_in_users_table', 3),
(14, '2024_11_27_080626_add_name_to_users_table', 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `monitoring_sensor`
--

CREATE TABLE `monitoring_sensor` (
  `id` bigint UNSIGNED NOT NULL,
  `id_lokasi` bigint UNSIGNED NOT NULL,
  `id_data_sensor` bigint UNSIGNED NOT NULL,
  `nama_lahan` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Nama lahan',
  `luas_lahan` double NOT NULL COMMENT 'Luas lahan dalam hektar',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(11, 'App\\Models\\User', 10, 'auth_token', 'd698d6b7374590ed6619b1c6c6f24a56abdf726b5d68d8999476654e628357f8', '[\"*\"]', NULL, NULL, '2024-11-27 03:30:00', '2024-11-27 03:30:00'),
(12, 'App\\Models\\User', 1, 'auth_token', 'fcd7dc8fff9f94f1cf2075f35c1639f73765445a9ee16e96fad35a8c05a28ea7', '[\"*\"]', NULL, NULL, '2024-11-27 03:55:41', '2024-11-27 03:55:41'),
(13, 'App\\Models\\User', 10, 'auth_token', '27dfbaa2a5abde231e36032d7d8b27764c9a8acb505da488495fb94aca9d3ea0', '[\"*\"]', NULL, NULL, '2024-11-27 03:58:33', '2024-11-27 03:58:33'),
(14, 'App\\Models\\User', 10, 'auth_token', 'a2c5a825489fdcd761dc7bb1eb2603c95d720cc200332e35a8ee8b8695d99742', '[\"*\"]', NULL, NULL, '2024-11-27 03:58:52', '2024-11-27 03:58:52'),
(15, 'App\\Models\\User', 10, 'auth_token', '0b2336b7b27a1def3befb3a3b2027b11407776bdc562bc2622fd8013bb313a3b', '[\"*\"]', NULL, NULL, '2024-11-27 04:00:29', '2024-11-27 04:00:29'),
(16, 'App\\Models\\User', 1, 'auth_token', 'a9014aabe33a8f01dd3d92f3e1c564e79774ffc8f33bd76526844f336289add2', '[\"*\"]', '2024-11-27 04:18:12', NULL, '2024-11-27 04:06:38', '2024-11-27 04:18:12'),
(17, 'App\\Models\\User', 10, 'auth_token', '28abb75544f5834ffb53bb764223c24f8b39681c952f0443a09f2ac80f12313d', '[\"*\"]', NULL, NULL, '2024-11-27 04:08:55', '2024-11-27 04:08:55'),
(18, 'App\\Models\\User', 10, 'auth_token', '0637f99a685ac355c0b2651bf967fc020a895bf1fe369f2572f4514c1b23f9ac', '[\"*\"]', '2024-11-27 04:13:51', NULL, '2024-11-27 04:11:20', '2024-11-27 04:13:51'),
(19, 'App\\Models\\User', 10, 'auth_token', '523d6c62e5f7c9a05b8b128512aefad29eb4da8ebf5ed50c264ac5b69d747fde', '[\"*\"]', '2024-11-27 04:20:52', NULL, '2024-11-27 04:14:04', '2024-11-27 04:20:52'),
(20, 'App\\Models\\User', 10, 'auth_token', '95958cbd3e3ed552bb5a3c0f9ea958207aa8c7f130f85471a979715696976947', '[\"*\"]', NULL, NULL, '2024-11-27 04:25:21', '2024-11-27 04:25:21'),
(21, 'App\\Models\\User', 10, 'auth_token', '8c91e10e4d6604c875c75dd74054860194f46c0e9472f809cc60945d72431806', '[\"*\"]', NULL, NULL, '2024-11-27 04:30:57', '2024-11-27 04:30:57'),
(22, 'App\\Models\\User', 1, 'auth_token', '9096cb0fcf6fdc2e0c3481a9282124ca50900ac4ed5a32b0036498fd5557289b', '[\"*\"]', NULL, NULL, '2024-11-27 04:40:19', '2024-11-27 04:40:19'),
(23, 'App\\Models\\User', 10, 'auth_token', '9b554512d8184f7689e0a76aa4a4ed2244ba7525b2314ea12dd18dd2b8628cca', '[\"*\"]', NULL, NULL, '2024-11-27 04:40:30', '2024-11-27 04:40:30'),
(40, 'App\\Models\\User', 13, 'auth_token', '759021dc0b20d8bdf81d89dcdcbf28a46cf644b76e68960d04fd332c321ec2f7', '[\"*\"]', NULL, NULL, '2024-11-27 19:59:15', '2024-11-27 19:59:15'),
(41, 'App\\Models\\User', 13, 'auth_token', '4dc97c9a030a3cb2bd7a626fcee2563484214038bc581a1457210c4329ff94ec', '[\"*\"]', NULL, NULL, '2024-11-28 19:45:57', '2024-11-28 19:45:57'),
(42, 'App\\Models\\User', 12, 'auth_token', '0ed9f74e5f9cee0f902096849d41e839569177a681d634fc23665a0979f4ca17', '[\"*\"]', NULL, NULL, '2024-12-10 18:20:36', '2024-12-10 18:20:36'),
(43, 'App\\Models\\User', 12, 'auth_token', 'bb7aa9061b45de0f73ed2610cdb5ac948cc8c879fdc33b2f407c7fdcdefd51e4', '[\"*\"]', NULL, NULL, '2024-12-11 21:33:44', '2024-12-11 21:33:44'),
(44, 'App\\Models\\User', 13, 'auth_token', 'ab41a391b651061f59b64050e58126ddde0eaa0bdf203b48feeea6650e92c91d', '[\"*\"]', NULL, NULL, '2024-12-15 23:18:58', '2024-12-15 23:18:58');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pupuk`
--

CREATE TABLE `pupuk` (
  `id` bigint UNSIGNED NOT NULL,
  `nama_pupuk` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenis` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `takaran_pupuk` double NOT NULL,
  `harga` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('1QcOCXz8Z1NYghrAkOGXK9LiePpFxO8DLujHOz5i', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOXhiaVlyZlJDREhKWDJidGlLaVZLb2twSjZuMVcxWHZFYWtCbnFEUSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732707393),
('3H6KtAFfYexirvkRLUJSVUmlM8JbpyJRgrFFRWXR', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaVlsQWlvb01rSVY0NTgyZ2JFS0hTRThPN09GWVlxVjdRajdsMGVseiI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732705113),
('5mvEerPwUy1ELk0DDaLe36PJ9MVzOjYzMWzDTGi9', 1, '127.0.0.1', 'curl/8.9.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibmlESk45M2xDekllcU9peTVDelY0S3NkZk1GT1ByWmFoTDJBb1p4YyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706293),
('68E6ZhAny76ZiysKNqz9b4gx2Cu5XiHs6EfcJfKi', NULL, '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/131.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiOUVqQTNPdW9hajhSTnFldHhQM2pxRHVTQVJOWEY5QmZPNWlVS2g5WCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732700347),
('6uw3Pk0NYhOhAlJjJkaGsVXs8LxZINrZ95eir43G', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMWJNdXpFRG42UnZOZG1BelNVbG4wYTBuWDBLT21pcDJJcGZiWGw4ayI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732701778),
('7g6PC3SJBVILwFQWJdEtIwkeQBc6RwFZjMWOCiVn', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoienJmdWRyUFdMMllWYW0yTHZjNm92b1RER3VwQXVMU3hGbHVpRk1FRCI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732707057),
('9JhLlYOdamqx4tLujTDXdNMPRucoui9XoqBuN6WV', NULL, '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/131.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibU9NVFVhQ2oxN2QzeVVzMzFqMGM1VURDaEIycENQUGRCRHQwdjllQSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732700040),
('ACchnWXizwxqGzuw2hFr1J2gQM9c6BNNjMg3GHib', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWFNWc01CSHJvTk9GRlM5bjN0eVFLb0JwdmR0YUsxSTFVWVpHOGJIViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702590),
('b9MHRofs63uAj2D0C8rvDVr1hUmnyB34NN4ORSxH', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVWFkTGxIYTQ0NktUY0kzS0s5dVAya29CTkQzUzJudXBPRlJJOFlCTyI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732705735),
('bYipcpu6S9nTwCmYj3I0XZIwsSkYcyhZGhXK7cO8', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU1pzWmlZS3JndHhZeFoxd3ZQTDRyN1p4NUtOU3ZSWkdGbzBCR2lteCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706045),
('cPt30MRC47Si8CMioU84tGlhUf6hFbPRCC92Jrl1', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicTZaQ0tNU2UxZGY0ZDZnUEM3WUlVbG9YWjdQV2xjOVRCUXF5bmJLNyI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732706044),
('ctVc1vvj89D0yKAxjXiQkri2nHOtcYXVpObGdfMh', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMHIwSVlEV2J4dUlYYk1QVFA1RFc0cWhjTVU4Slg1b2x0SEhnWG95MSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702132),
('DV9EqknQax5N6cSQIXBVTd4oWvw46KdjvR367oTn', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZng4RG9VMWRoTUJ6aVoyTDNUYkltTERUSVFXeWNORHdEQkJFOGV2UyI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732703229),
('EFebthaR81hyNRGlPYOp7e9nuOWWqWs5oSsA7o6z', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZnhKUk9sdWJTYmRuYWVyM1BIUVFtT1RscGlEOU13TlNVVXFCVnFtUyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702334),
('FlBcmOJcX5HlTidAC7WkavvKmdRm3PVoIb2ppwnb', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMVJWUFBRY1dzanNiUHBiZlhPYlRZSEVMSllvYTZwazUwZG9TT00zdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706172),
('fY4SSBAEsv2Px66MPSX3yrQnPYHNiHWIyOy43dZV', NULL, '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/131.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiS1V1TXpyVnFtZE9xQzlYcnM0UkF0dlFhM0l2aHFIRWxJT1pDZUM0TCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732700526),
('HDkEk1IKwDIXlTjisDKZ7nnzKMpZlguRwAvAL9p4', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNkMwWWRvUksxbTFLNzlWNmx0ejhqYkdGdHozMG5hUk0yemtpN3cxOSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732701291),
('heyBcHRW3Jg1IJ98JCSMEjbu49yfMHk1Dnzf0ZA3', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidmR2WjRxbUFKZU9ibzVjNU02b2ZTYldTU2tpcjZ5WDFFdmtsUWhsbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706028),
('hQAw8PnLkvrCoHo4Z7ngnonwbmnYmXLicbk7tZIa', NULL, '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/131.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoid1dWdHM1eVl2MDFHQTJEajJzRXZNbEowVTRRd0dNdEZSYmpxWm41WiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732700305),
('i9iZ5PExJRZz1998j1pYiBZFfXwAnq0dXgfjIJJn', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNTBXaWdKSDl2em50Sk5odjdoZGc5TTAzb2lybjM1Y290RjdaQlF0QiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732701761),
('JBgwuAtR8JPr9G2EQjdclofWRa1Gu0aHIgWPn4DV', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWkpJQ2lZNXA3TkhKNU9yOERCMzE0R2lJTVpuUUlTT3B3WWJmTWs5MiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706032),
('JrllrtI4016wNwesrHpZkRcwk2o4HfR1q4oRbiOF', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ1JJZXhJeXBleEVrcEFtdlVXS051Qm1RbGc2eGlHNEk2SUpGelBxRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702323),
('KzUj0I861PvmFxpmKQ8SRHtQevtGPJYwDRSaNhzJ', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUVpBRDBJVUdaeVI5aG5KM2JMRFFOcUM2RzI5QmhUbWwzUlFvajFNQiI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732705132),
('lAsfwXc6XaMfOtCXMiNHUdo9CV2a6Fibg4m3vsmb', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaWRHQUVkWWZocnh6R09idlM1cE5MWkZ6aG9rc0ZzdFlCQXU0bXY4NCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706022),
('lB9ovzsX9VTb9ZGbELPDoRV3q8bIHbTQoh1iuIlU', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRVFwR1Nla1J1QjYxQk94TGFoS2JNRVpHcWh1YnBCQk5tc05uVjc4OCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706451),
('LL9rdzyioSPV3Mcj3FcbZLL5FSSEIR38RtdhFEPt', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiamIzenhSVHJEbDNlWFh2VnhoQ2l2ZFRKSVg5MDRnVnBJaDRxMUxjRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702590),
('Loy9u5tbaVr6KiDlc2MatzsisLNMUO5MR2q76Rvr', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY2V4VGhidzN0ejlQdlpjVEZYNmNmT2JPdkVOM0NOdm95aENFUXRNcCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702307),
('lXfKyly71fGOQTlhYGTbr8djJCdR3ZCNOWnPOKx4', 1, '127.0.0.1', 'PostmanRuntime/7.42.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiSUczbVRyU2Q0VWpmS3Q1dkwxNFlsOXNsNTJ6NUlkdzNhbmE3SEphSSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7fQ==', 1732707619),
('mjQAMvxwlva756E6nO3gvk1JoUc2CWxZQOrsUAdY', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNmNMeE9jNjBPdFc4a05tUzNSSkhIWlVyUjVTSWRpUlA4WWN2VzJyQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732705918),
('mrCcfXkVxcLArHqpBDJmLNuZt4JsKIgQsJKysfCA', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNlBmOEdJM2dKTkE2RURmYVF1aEdnVzBid25UQkkzZkkwUnhYYURYRSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732701098),
('PG0HnI8d6ZuLVhgPynn9CtasBVOFH9ngzbZ3G2jO', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT3NjekVldmh2VFBNY0JSak52ajJCeGN3aXA1VHpHMHRxSm9tMmRMNSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702694),
('PVI7HO8CLy2b2SSYoSlff3tiYCvL2NkfFgXnO1Sv', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZXowMzE4M1R5aHBvcWN4bWxIZ01HYUNscU9NVllWNVNZb2JMYmlYVSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732703374),
('QHswqbLww7gTqziOh31iuJ1VISqLngcySiQpGK1i', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ2RCRkdPODVlTHppSXROcnZPT0doS2d6VGdtU2NsYWh3V3BtaXUwWiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702323),
('qHzgdpNmAk5ZXewuEcGlrHsqHTOHs285sJvbVc9E', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUHJ6V0ptc21mVHZLeUFxMXBFMGJmbG84ZVNwMDA1YnVtakVGVzhLNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706045),
('qSpA3x1KnWGLrxGTdHYdf050StTXxCWuJeDmRqvs', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTHk4eWdIU2xCdG1QMktmOE80TU9DbUQ1OVR6Wm5WT0Q0elQ0RkVLOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706029),
('rAxnuTwHG81oR3RwedexwL61Tg3OMgl7Q4Yy0xOo', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR2hmTVhFUlpuMlNZdWFtclgzTWdLNFhyc2MyQlZaVGw3TWZtRmhwbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706168),
('RccwtjN7XTRZUqJhN81BEdf3AbYAvDPNLPAyAURd', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN3F5SzN3VUZ2dTJJaGhPS1luM2ozNTgxRzI3UlA0NTR0WE9TbG9BcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702305),
('rGj6uvK6NP5Zl4stpccWbTEPCcmoC7i6eLFhtTaF', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTW9KenJRNUlibXRUdzV4d3VJdWlnMWFaNVFoRW9XUlA4NTlRZWJ1VyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706172),
('S7lCk7srQsG5oTl6QQ4S3sNVbMEK6GxeYFUw2kyE', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNXFnd2ljN25vME5MV1AxTDdPZVgxR1ZYRjVnSGVNSHpUZ084dWVWeiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732705918),
('SvCImbOqUqmhjvL7iykRUITEe9RYphQzcILRkWop', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUzhLV242ZTFzZERvaUhpVU9FcU9LNDdvejFIYmFRT2Qwc1NoUU9oOCI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732703400),
('tAgYNcS39JGK5tORZisVImynn2ADiTLSzen2uph7', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMXZYWTZ2Nm1nSFRoZW1IRE91MERNUGYzcHRoMlN3VmFYcTF4Njc1MiI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732706721),
('tls88y0sUtpl955xBuqeWkyCwuh2MrFgoCdKsyJE', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidmJRazFsUUdIYnZrMlBYcXBzc0VsMTBldUlJb2pob0FxUlkzWUdjVyI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732707385),
('tRdwAVXhMJm5OXnOzFDcQ0SLEPVKN8qHBT5yPvXx', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaE9GMEU1QmpYdG01bmNRdTMxN2ptbDB3d1NYNkxoaE56ZXpBQXZvdCI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732705229),
('VPpwn2LtdLIxXSl5yh3Avsb1qItWkssenGRNLHep', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibWxpV2E2ZXlOZ0ZtZ1RHcDhNeTZTaGZZRXZrV01RRmh6eklrR2RyTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706031),
('Wi0ByitOVL1jFV6mldA3Iv3yODX6BFBzGY6PNbK4', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiOWJWVTlPN2E5amR6bEVwWjM0VjRVN0pyZ0s4WXZDQkd3WDB0UnpSNiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732701113),
('wimBPqL41tHuEKNsPgpa8ERQwc2NYYV5z8u9S46g', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYmdmM0ducTlaRGlldEdpSXdURU1PdzVmeWdZYWxoYUNtZHdIT1lUMSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732705880),
('wns1xkNisjx9WhuwBPCJ2hWqEXetFxgywwQO18Cf', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidDJndVdrZlJkeDhQZHdjc3FnVm5PMHduSWluRTNJVVpFTVF4eTlPNCI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702333),
('Wv9sERJCTjXWOmrar4t1M6uREOGybOzOSnxTVQdE', 10, '127.0.0.1', 'curl/8.9.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieE0xWUk1N3RKMTB5N3plc0tqd0dKWGp2Q05nZTVQd21HMVQ1c0dxbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706271),
('YD6n7B0j40LEFdRPL4g0EWYxakZC7uP6yKtaVJ3k', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoic0hFWmxYSVRPZGRWd3ozbTY5bkJMUnBGZXVyUWVZRTRaY2cxNkFEVCI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732707630),
('yezTxmWft1Kmd9CDBA8stOS2ksH7A0Wa40b8XrBM', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRWcxMjJUZXJmc3BXOHZQMlQwNmdob0xna1piVHhBMDFFbjNWU3FZRCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702306),
('YfkoWv79EkZ5tEvin4z1Ih4SV6eVS3DedkNNVwpr', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZWxkWWZvY3pZYXVTTG9EOEFtcmU0dEFtSkRpT0NIcG1lUHF4c2ZYSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732702334),
('ywrBJ1h3sjUqAD3M5a8XlZy2SEMubNDTNyhJPaFn', 10, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Edg/131.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS2FSQ2tCQWNwS0pXbGJHSlM1RGVKcFZXRlV2SUtpcUt5WDh5UlRUcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1732706452);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_perusahaan` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci,
  `role` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_pengguna` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `nama_perusahaan`, `alamat`, `role`, `nama_pengguna`, `remember_token`, `created_at`, `updated_at`) VALUES
(12, 'halo1@example.com', '$2y$12$btSyctvH34ia3Qc5lBiiqenrHfAk5pdGyI0vce77El/w4Al8EECNm', NULL, NULL, 'user', 'John Doe', NULL, '2024-11-27 07:01:46', '2024-11-27 07:01:46'),
(13, 'idnhalolearn@gmail.com', '$2y$12$JrEMHRbDmg0Dsq1eGaFXze979BMrWUBnCbBCaFEoxii9YqJe9lUxS', NULL, NULL, 'user', 'Muhammad Farhan', NULL, '2024-11-27 08:17:31', '2024-11-27 08:17:31');

-- --------------------------------------------------------

--
-- Struktur dari tabel `usersss`
--

CREATE TABLE `usersss` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `data_alat`
--
ALTER TABLE `data_alat`
  ADD PRIMARY KEY (`id_alat`),
  ADD KEY `data_alat_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `data_sensor`
--
ALTER TABLE `data_sensor`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `hasil_analisis`
--
ALTER TABLE `hasil_analisis`
  ADD PRIMARY KEY (`id_hasil_analisis`),
  ADD KEY `hasil_analisis_id_monitoring_sensor_foreign` (`id_monitoring_sensor`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `monitoring_sensor`
--
ALTER TABLE `monitoring_sensor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `monitoring_sensor_id_lokasi_foreign` (`id_lokasi`),
  ADD KEY `monitoring_sensor_id_data_sensor_foreign` (`id_data_sensor`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `pupuk`
--
ALTER TABLE `pupuk`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `usersss`
--
ALTER TABLE `usersss`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_alat`
--
ALTER TABLE `data_alat`
  MODIFY `id_alat` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `data_sensor`
--
ALTER TABLE `data_sensor`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `hasil_analisis`
--
ALTER TABLE `hasil_analisis`
  MODIFY `id_hasil_analisis` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `monitoring_sensor`
--
ALTER TABLE `monitoring_sensor`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT untuk tabel `pupuk`
--
ALTER TABLE `pupuk`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `usersss`
--
ALTER TABLE `usersss`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `data_alat`
--
ALTER TABLE `data_alat`
  ADD CONSTRAINT `data_alat_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `hasil_analisis`
--
ALTER TABLE `hasil_analisis`
  ADD CONSTRAINT `hasil_analisis_id_monitoring_sensor_foreign` FOREIGN KEY (`id_monitoring_sensor`) REFERENCES `monitoring_sensor` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `monitoring_sensor`
--
ALTER TABLE `monitoring_sensor`
  ADD CONSTRAINT `monitoring_sensor_id_data_sensor_foreign` FOREIGN KEY (`id_data_sensor`) REFERENCES `data_sensor` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `monitoring_sensor_id_lokasi_foreign` FOREIGN KEY (`id_lokasi`) REFERENCES `lokasi` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
