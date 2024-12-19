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
    Schema::create('data_alat', function (Blueprint $table) {
        $table->id('id_alat');
        $table->string('link_thinger', 255);
        $table->foreignId('user_id')->constrained('user')->onDelete('cascade');
        $table->timestamps();
    });
}

public function down()
{
    Schema::dropIfExists('data_alat');
}


};
