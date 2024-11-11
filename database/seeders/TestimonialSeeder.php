<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the testimonials images directory exists
        Storage::disk('public')->makeDirectory('images/testimonials');

        // Copy images from resources to storage
        $sourceDir = resource_path('images/testimonials');
        $targetDir = storage_path('app/public/');

        if (File::exists($sourceDir)) {
            File::copyDirectory($sourceDir, $targetDir);
        }

        $testimonials = [
            [
                'name' => 'Sarah Johnson',
                'role' => 'Community Member',
                'image' => 'testimonial1.png',
                'quote' => 'The impact that this alliance has had on our community is immeasurable. They truly care about making a difference.',
                'rating' => 5,
                'order' => 1,
            ],
            [
                'name' => 'Michael Chen',
                'role' => 'Student Developer',
                'image' => 'testimonial2.png',
                'quote' => 'The mentorship and guidance I received through this program helped launch my career in tech. Forever grateful!',
                'rating' => 5,
                'order' => 2,
            ],
            [
                'name' => 'Emily Rodriguez',
                'role' => 'Project Lead',
                'image' => 'testimonial3.png',
                'quote' => 'Working with this organization has opened so many doors for underrepresented groups in tech. Their commitment to diversity is outstanding.',
                'rating' => 5,
                'order' => 3,
            ],
            [
                'name' => 'David Kim',
                'role' => 'Bootcamp Graduate',
                'image' => 'testimonial4.png',
                'quote' => 'The hands-on experience and supportive community were exactly what I needed to transition into tech. Highly recommend!',
                'rating' => 4,
                'order' => 4,
            ],
            [
                'name' => 'Priya Patel',
                'role' => 'Tech Mentor',
                'image' => 'testimonial5.png',
                'quote' => 'Being able to give back to the community while helping others grow in their tech journey has been incredibly rewarding.',
                'rating' => 5,
                'order' => 5,
            ],
            [
                'name' => 'James Wilson',
                'role' => 'Career Switcher',
                'image' => 'testimonial6.png',
                'quote' => 'The resources and support provided made my transition into tech so much smoother. I couldn\'t have done it without them.',
                'rating' => 5,
                'order' => 6,
            ],
            [
                'name' => 'Maria Garcia',
                'role' => 'Workshop Participant',
                'image' => 'testimonial7.png',
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
