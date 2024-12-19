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
        Schema::create('data_sensor', function (Blueprint $table) {
            $table->id();
            $table->float('ph');
            $table->integer('fosfor');
            $table->integer('kalium');
            $table->float('moisture');
            $table->float('suhu');
            $table->float('natrium');
            $table->timestamp('waktuambil');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('data_sensor');
    }

};
