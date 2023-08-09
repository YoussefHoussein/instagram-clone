<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->integer('user_id');
            $table->timestamps();
        });
        Schema::create('followings', function (Blueprint $table) {
            $table->id();
            $table->integer('follower_id');
            $table->integer('followed_id');
            $table->timestamps();
        });
        Schema::create('likes', function (Blueprint $table) {
            $table->id();
            $table->integer('post_id');
            $table->integer('liker_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('all_tables');
    }
};
