<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Intervention\Image\Laravel\Facades\Image;
use App\Models\Gallery;

class ActivitySeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the images directory exists in public storage
        Storage::disk('public')->makeDirectory('images/activities/original');
        Storage::disk('public')->makeDirectory('images/activities/thumbnails');
        // Copy images from resources to storage
        $sourceDir = resource_path('images/activities');
        $originalDir = storage_path('app/public/images/activities/original');
        $thumbnailDir = storage_path('app/public/images/activities/thumbnails');

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
                $image->scaleDown(width: 350)
                    ->toJpeg(quality: 80)
                    ->save($thumbnailDir . '/' . $filename . '.jpg');
            }
        }

        $activities = [
            [
                'title' => 'International Airport',
                'img' => 'images/activities/original/Project1.jpg',  // Store only the relative path
                'thumbnail' => 'images/activities/thumbnails/Project1.jpg',
                'subtitle' => 'Development in progress in collaboration with the local council',
                'tag' => 'Rahfathi',
                'cost' => '75000000',
                'content' => 'Details about the International Airport project...'
            ],
            [
                'title' => 'Community Center',
                'img' => 'images/activities/original/Project2.jpg',
                'thumbnail' => 'images/activities/thumbnails/Project2.jpg',
                'subtitle' => 'Development completed in July 2024',
                'tag' => 'Komandoo',
                'cost' => '4500',
                'content' => 'Details about the Community Center project...'
            ],
            [
                'title' => 'Electrician Course',
                'img' => 'images/activities/original/Project3.jpg',
                'thumbnail' => 'images/activities/thumbnails/Project3.jpg',
                'subtitle' => 'Conducted 1 day course in April 2024 with 10 participants',
                'tag' => 'Male',
                'cost' => '5500',
                'content' => 'Details about the Electrician Course...'
            ],
            [
                'title' => 'Road Name Boards',
                'img' => 'images/activities/original/Project4.jpg',
                'thumbnail' => 'images/activities/thumbnails/Project4.jpg',
                'subtitle' => 'Project completed in August 2024 with 150+ Road Name Boards',
                'tag' => 'Komandoo',
                'cost' => '5000',
                'content' => 'Details about the Road Name Boards project...'
            ],
            [
                'title' => 'Notebooks Donation',
                'img' => 'images/activities/original/Project2.jpg',
                'thumbnail' => 'images/activities/thumbnails/Project2.jpg',
                'subtitle' => 'Project completed in August 2024 with 150+ Books Donated',
                'tag' => 'Komandoo',
                'cost' => '5000',
                'content' => 'Details about the Books Donation project...'
            ],
        ];

        foreach ($activities as $activityData) {
            $activity = Activity::create($activityData);

            // Attach 1-3 random galleries to each activity
            $galleryIds = Gallery::inRandomOrder()
                ->take(rand(1, 3))
                ->pluck('id');

            $activity->galleries()->attach($galleryIds);
        }
    }
}
