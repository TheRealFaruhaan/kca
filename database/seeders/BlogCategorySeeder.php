<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BlogCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Technology',
            'Travel',
            'Lifestyle',
            'Food',
            'Business',
            'Health',
            'Fashion',
        ];

        foreach ($categories as $category) {
            BlogCategory::create([
                'name' => $category,
                'slug' => Str::slug($category),
                'description' => fake()->sentence(),
            ]);
        }
    }
}
