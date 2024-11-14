<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('activity_entity', function (Blueprint $table) {
            $table->id();
            $table->foreignId('activity_id')->constrained()->onDelete('cascade');
            $table->foreignId('entity_id')->constrained()->onDelete('cascade');
            $table->timestamps();

            // Prevent duplicate relationships
            $table->unique(['activity_id', 'entity_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activity_entity');
    }
};
