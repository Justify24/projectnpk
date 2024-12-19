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
        Schema::create('monitoring_sensor', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_lokasi')->constrained('lokasi')->onDelete('cascade');
            $table->foreignId('id_data_sensor')->constrained('data_sensor')->onDelete('cascade');
            
            $table->string('nama_lahan', 100)->comment('Nama lahan'); // Kolom untuk nama lahan
            $table->float('luas_lahan')->comment('Luas lahan dalam hektar'); // Kolom untuk luas lahan
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('monitoring_sensor');
    }
};
