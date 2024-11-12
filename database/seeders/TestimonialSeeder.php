<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Intervention\Image\Laravel\Facades\Image;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the images directory exists in public storage
        Storage::disk('public')->makeDirectory('images/testimonials/original');
        Storage::disk('public')->makeDirectory('images/testimonials/thumbnails');
        // Copy images from resources to storage
        $sourceDir = resource_path('images/testimonials');
        $originalDir = storage_path('app/public/images/testimonials/original');
        $thumbnailDir = storage_path('app/public/images/testimonials/thumbnails');

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
                $image->scaleDown(width: 100)
                    ->toJpeg(quality: 80)
                    ->save($thumbnailDir . '/' . $filename . '.jpg');
            }
        }

        $testimonials = [
            [
                'name' => 'Sarah Johnson',
                'role' => 'Community Member',
                'image' => 'images/testimonials/original/testimonial1.jpg',
                'thumbnail_image' => 'images/testimonials/thumbnails/testimonial1.jpg',
                'quote' => 'The impact that this alliance has had on our community is immeasurable. They truly care about making a difference.',
                'rating' => 5,
                'order' => 1,
            ],
            [
                'name' => 'Michael Chen',
                'role' => 'Student Developer',
                'image' => 'images/testimonials/original/testimonial2.jpg',
                'thumbnail_image' => 'images/testimonials/thumbnails/testimonial2.jpg',
                'quote' => 'The mentorship and guidance I received through this program helped launch my career in tech. Forever grateful!',
                'rating' => 5,
                'order' => 2,
            ],
            [
                'name' => 'Emily Rodriguez',
                'role' => 'Project Lead',
                'image' => 'images/testimonials/original/testimonial3.jpg',
                'thumbnail_image' => 'images/testimonials/thumbnails/testimonial3.jpg',
                'quote' => 'Working with this organization has opened so many doors for underrepresented groups in tech. Their commitment to diversity is outstanding.',
                'rating' => 5,
                'order' => 3,
            ],
            [
                'name' => 'David Kim',
                'role' => 'Bootcamp Graduate',
                'image' => 'images/testimonials/original/testimonial4.jpg',
                'thumbnail_image' => 'images/testimonials/thumbnails/testimonial4.jpg',
                'quote' => 'The hands-on experience and supportive community were exactly what I needed to transition into tech. Highly recommend!',
                'rating' => 4,
                'order' => 4,
            ],
            [
                'name' => 'Priya Patel',
                'role' => 'Tech Mentor',
                'image' => 'images/testimonials/original/testimonial5.jpg',
                'thumbnail_image' => 'images/testimonials/thumbnails/testimonial5.jpg',
                'quote' => 'Being able to give back to the community while helping others grow in their tech journey has been incredibly rewarding.',
                'rating' => 5,
                'order' => 5,
            ],
            [
                'name' => 'James Wilson',
                'role' => 'Career Switcher',
                'image' => 'images/testimonials/original/testimonial6.jpg',
                'thumbnail_image' => 'images/testimonials/thumbnails/testimonial6.jpg',
                'quote' => 'The resources and support provided made my transition into tech so much smoother. I couldn\'t have done it without them.',
                'rating' => 5,
                'order' => 6,
            ],
            [
                'name' => 'Maria Garcia',
                'role' => 'Workshop Participant',
                'image' => 'images/testimonials/original/testimonial7.jpg',
                'thumbnail_image' => 'images/testimonials/thumbnails/testimonial7.jpg',
                'quote' => 'The workshops are incredibly well-organized and informative. I learned so much in such a short time!',
                'rating' => 4,
                'order' => 7,
            ],
            // Add more testimonials as needed
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}
