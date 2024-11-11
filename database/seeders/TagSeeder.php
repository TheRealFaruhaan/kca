<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TagSeeder extends Seeder
{
    public function run(): void
    {
        $tags = [
            'PHP',
            'Laravel',
            'Vue.js',
            'JavaScript',
            'Design',
            'API',
            'Mobile',
            'Web Development',
            'Tutorial',
            'Tips',
            'Best Practices',
            'How-to',
            'Review',
            'Guide',
            'News'
        ];

        foreach ($tags as $tag) {
            Tag::create([
                'name' => $tag,
                'slug' => Str::slug($tag),
            ]);
        }
    }
}
