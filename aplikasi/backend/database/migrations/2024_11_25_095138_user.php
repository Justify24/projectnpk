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
        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->string('email', 50);
            $table->string('password');
            $table->string('nama_perusahaan', 100)->nullable();
            $table->text('alamat')->nullable();
            $table->string('role', 20);
            $table->string('nama_pengguna', 30);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user');
    }
};
