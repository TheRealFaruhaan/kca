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
            [
                'name' => 'Technology',
                'description' => 'Explore the latest tech trends, digital innovations, and their impact on society.',
            ],
            [
                'name' => 'Travel',
                'description' => 'Discover destinations, travel tips, and cultural experiences from around the world.',
            ],
            [
                'name' => 'Lifestyle',
                'description' => 'Tips and insights for better living, personal development, and work-life balance.',
            ],
            [
                'name' => 'Food',
                'description' => 'Culinary adventures, recipes, restaurant reviews, and food culture stories.',
            ],
            [
                'name' => 'Business',
                'description' => 'Business strategies, entrepreneurship insights, and market analysis.',
            ],
            [
                'name' => 'Health',
                'description' => 'Health tips, wellness advice, fitness guidance, and medical insights.',
            ],
            [
                'name' => 'Fashion',
                'description' => 'Style trends, fashion news, beauty tips, and industry insights.',
            ],
        ];

        foreach ($categories as $category) {
            BlogCategory::create([
                'name' => $category['name'],
                'slug' => Str::slug($category['name']),
                'description' => $category['description'],
            ]);
        }
    }
}
