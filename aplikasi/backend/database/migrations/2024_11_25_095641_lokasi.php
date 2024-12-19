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

        Schema::create('lokasi', function (Blueprint $table) {

            $table->id(); // Primary key

            $table->string('provinsi', 100); // Kolom untuk provinsi

            $table->string('kabupaten', 100); // Kolom untuk kabupaten

            $table->string('status_p', 1); // Kolom untuk fosfor

            $table->string('status_k', 1); // Kolom untuk kalium
 

        });

    }



    public function down()

    {

        Schema::dropIfExists('lokasi');

    }

};
