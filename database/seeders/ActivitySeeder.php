<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class ActivitySeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the images directory exists in public storage
        // Storage::disk('public')->makeDirectory('images');

        // Copy images from resources to storage
        $sourceDir = resource_path('images/activities');
        $targetDir = storage_path('app/public/');

        if (File::exists($sourceDir)) {
            File::copyDirectory($sourceDir, $targetDir);
        }

        $activities = [
            [
                'title' => 'International Airport',
                'img' => 'Project1.png',  // Store only the relative path
                'subtitle' => 'Development in progress in collaboration with the local council',
                'tag' => 'Rahfathi',
                'cost' => '75000000',
                'content' => 'Details about the International Airport project...'
            ],
            [
                'title' => 'Community Center',
                'img' => 'Project2.png',
                'subtitle' => 'Development completed in July 2024',
                'tag' => 'Komandoo',
                'cost' => '4500',
                'content' => 'Details about the Community Center project...'
            ],
            [
                'title' => 'Electrician Course',
                'img' => 'Project3.png',
                'subtitle' => 'Conducted 1 day course in April 2024 with 10 participants',
                'tag' => 'Male',
                'cost' => '5500',
                'content' => 'Details about the Electrician Course...'
            ],
            [
                'title' => 'Road Name Boards',
                'img' => 'Project2.png',
                'subtitle' => 'Project completed in August 2024 with 150+ Road Name Boards',
                'tag' => 'Komandoo',
                'cost' => '5000',
                'content' => 'Details about the Road Name Boards project...'
            ],
        ];

        foreach ($activities as $activity) {
            Activity::create($activity);
        }
    }
}
