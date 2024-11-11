<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Storage;
use App\Models\BlogCategory;
use App\Models\Tag;

class BlogPostSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the blog posts images directory exists
        Storage::disk('public')->makeDirectory('images/blogposts');

        // Copy sample blog post image to storage
        $sourceDir = resource_path('images/blogposts');
        $targetDir = storage_path('app/public/');

        if (File::exists($sourceDir)) {
            File::copyDirectory($sourceDir, $targetDir);
        }

        $faker = Faker::create();
        $categoryIds = BlogCategory::pluck('id')->toArray();
        $tagIds = Tag::pluck('id')->toArray();

        for ($i = 0; $i < 30; $i++) {
            $post = BlogPost::create([
                'title' => $faker->sentence(rand(4, 8)),
                'content' => $faker->paragraphs(rand(3, 7), true),
                'excerpt' => $faker->paragraph(),
                'slug' => $faker->slug(),
                'blog_category_id' => $faker->randomElement($categoryIds),
                'publication_date' => $faker->dateTimeBetween('-1 year', 'now'),
                'featured_image' => '43234423423.png',
                'status' => $faker->randomElement(['draft', 'published']),
                'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
                'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
            ]);

            // Attach 2-5 random tags to each post
            $post->tags()->attach(
                $faker->randomElements(
                    $tagIds,
                    rand(2, 5)
                )
            );
        }
    }
}
