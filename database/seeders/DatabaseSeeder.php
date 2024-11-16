<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            ActivitySeeder::class,
            TeamMemberSeeder::class,
            TestimonialSeeder::class,
            BlogCategorySeeder::class,
            TagSeeder::class,
            BlogPostSeeder::class,
            GallerySeeder::class,
            EntitySeeder::class,
            ActivityEventSeeder::class,
        ]);
    }
}
