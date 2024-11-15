<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('tag');
            $table->string('img');
            $table->string('title');
            $table->string('subtitle');
            $table->string('thumbnail');
            $table->string('cost');
            $table->text('content');
            $table->date('start_date')->default(now());
            $table->date('end_date')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
