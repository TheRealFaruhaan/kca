<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the team members images directory exists
        Storage::disk('public')->makeDirectory('images/team');

        // Copy images from resources to storage
        $sourceDir = resource_path('images/team');
        $targetDir = storage_path('app/public/');

        if (File::exists($sourceDir)) {
            File::copyDirectory($sourceDir, $targetDir);
        }

        $teamMembers = [
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'member1.png',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'member2.png',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'member3.png',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'member4.png',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'member5.png',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
        ];

        foreach ($teamMembers as $member) {
            TeamMember::create($member);
        }
    }
}
