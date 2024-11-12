<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Intervention\Image\Laravel\Facades\Image;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the images directory exists in public storage
        Storage::disk('public')->makeDirectory('images/team/original');
        Storage::disk('public')->makeDirectory('images/team/thumbnails');
        // Copy images from resources to storage
        $sourceDir = resource_path('images/team');
        $originalDir = storage_path('app/public/images/team/original');
        $thumbnailDir = storage_path('app/public/images/team/thumbnails');

        if (File::exists($sourceDir)) {
            $files = File::files($sourceDir);
            foreach ($files as $file) {
                $filename = pathinfo($file->getFilename(), PATHINFO_FILENAME);

                // Create image instance
                $image = Image::read($file->getPathname());

                // Save original (with basic optimization)
                $image->scaleDown(width: 1920)
                    ->toJpeg(quality: 85)
                    ->save($originalDir . '/' . $filename . '.jpg');

                // Create and save thumbnail
                $image->scaleDown(width: 500)
                    ->toJpeg(quality: 80)
                    ->save($thumbnailDir . '/' . $filename . '.jpg');
            }
        }

        $teamMembers = [
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'images/team/original/member1.jpg',
                'thumbnail_image' => 'images/team/thumbnails/member1.jpg',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'images/team/original/member2.jpg',
                'thumbnail_image' => 'images/team/thumbnails/member2.jpg',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'images/team/original/member3.jpg',
                'thumbnail_image' => 'images/team/thumbnails/member3.jpg',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'images/team/original/member4.jpg',
                'thumbnail_image' => 'images/team/thumbnails/member4.jpg',
                'description' => 'Lorem ipsum dolor sit amet',
                'facebook_url' => 'https://facebook.com',
                'twitter_url' => 'https://twitter.com',
                'instagram_url' => 'https://instagram.com',
                'order' => 1,
            ],
            [
                'name' => 'John Doe',
                'role' => 'President',
                'image' => 'images/team/original/member5.jpg',
                'thumbnail_image' => 'images/team/thumbnails/member5.jpg',
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
