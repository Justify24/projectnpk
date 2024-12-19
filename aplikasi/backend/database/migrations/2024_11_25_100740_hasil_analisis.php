<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('hasil_analisis', function (Blueprint $table) {
            $table->id('id_hasil_analisis'); // Primary key
            $table->foreignId('id_monitoring_sensor')->constrained('monitoring_sensor')->onDelete('cascade');
            $table->string('pupuk_1', 50)->nullable(); // Nama pupuk 1
            $table->string('pupuk_2', 50)->nullable(); // Nama pupuk 2
            $table->string('pupuk_3', 50)->nullable(); // Nama pupuk 3
            $table->string('jenis_tanah', 100); // Jenis tanah
            $table->float('jumlah_pupuk_1')->nullable(); // Jumlah pupuk 1
            $table->integer('total_harga_pupuk1')->nullable(); // Total harga pupuk 1
            $table->float('jumlah_pupuk_2')->nullable(); // Jumlah pupuk 2
            $table->integer('total_harga_pupuk2')->nullable(); // Total harga pupuk 2
            $table->float('jumlah_pupuk_3')->nullable(); // Jumlah pupuk 3
            $table->integer('total_harga_pupuk3')->nullable(); // Total harga pupuk 3
            $table->integer('total_harga')->nullable(); // Total keseluruhan harga
            $table->string('pupuk_tambahan', 50)->nullable(); // Nama pupuk tambahan
            $table->float('jumlah_pupuk_tambahan')->nullable(); // Jumlah pupuk tambahan
            $table->timestamps(); // Timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('hasil_analisis');
    }
};
