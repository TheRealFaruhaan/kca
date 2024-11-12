<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;

class GallerySeeder extends Seeder
{
    public function run()
    {
        // Ensure directories exist
        Storage::disk('public')->makeDirectory('images/galleries/original');
        Storage::disk('public')->makeDirectory('images/galleries/thumbnails');

        $sourceDir = resource_path('images/galleries');
        $originalDir = storage_path('app/public/images/galleries/original');
        $thumbnailDir = storage_path('app/public/images/galleries/thumbnails');

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
                $image->scaleDown(width: 600)
                    ->toJpeg(quality: 80)
                    ->save($thumbnailDir . '/' . $filename . '.jpg');
            }
        }

        $gallery = Gallery::create([
            'title' => 'Community Events 2023',
            'slug' => 'community-events-2023',
            'description' => 'Highlights from our community events and activities throughout 2023, showcasing the vibrant spirit of Komandoo.',
            'featured_image' => 'images/galleries/original/gallery-photo.jpg',
            'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
            'status' => 'published',
        ]);

        $posts = [
            [
                'title' => 'Annual Beach Cleanup',
                'description' => 'Community members coming together for our annual beach cleanup initiative.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 1,
            ],
            [
                'title' => 'Youth Sports Tournament',
                'description' => 'Local youth participating in our annual sports competition.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 2,
            ],
            [
                'title' => 'Cultural Festival',
                'description' => 'Celebrating our rich cultural heritage through traditional performances.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 3,
            ],
            [
                'title' => 'Education Workshop',
                'description' => 'Community learning session focused on digital literacy.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 4,
            ],
            [
                'title' => 'Tree Planting Day',
                'description' => 'Environmental conservation initiative with local schools.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 5,
            ],
            [
                'title' => 'Community Feast',
                'description' => 'Annual gathering bringing together all community members.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 6,
            ],
            [
                'title' => 'Local Art Exhibition',
                'description' => 'Showcasing talented local artists and their unique perspectives of island life.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 7,
            ],
            [
                'title' => 'Marine Conservation Day',
                'description' => 'Community efforts to protect our coral reefs and marine ecosystems.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 8,
            ],
            [
                'title' => 'Island Music Festival',
                'description' => 'Annual celebration of traditional and modern Maldivian music.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 9,
            ],
            [
                'title' => 'Sustainable Fishing Workshop',
                'description' => 'Teaching sustainable fishing practices to preserve marine resources.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 10,
            ],
            [
                'title' => 'Youth Leadership Summit',
                'description' => 'Empowering young leaders to drive positive change in their communities.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 11,
            ],
            [
                'title' => 'Traditional Craft Fair',
                'description' => 'Celebrating and preserving traditional Maldivian craftsmanship.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 12,
            ],
            [
                'title' => 'Community Health Camp',
                'description' => 'Free health checkups and wellness education for all residents.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 13,
            ],
            [
                'title' => 'Coral Restoration Project',
                'description' => 'Community initiative to restore damaged coral reefs.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 14,
            ],
            [
                'title' => 'Island Clean Energy Forum',
                'description' => 'Discussing sustainable energy solutions for island communities.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 15,
            ],
            [
                'title' => 'Women Entrepreneurs Meet',
                'description' => 'Celebrating and supporting local women entrepreneurs.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 16,
            ],
            [
                'title' => 'Traditional Dance Workshop',
                'description' => 'Teaching young generations traditional Maldivian dance forms.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 17,
            ],
            [
                'title' => 'Waste Management Drive',
                'description' => 'Community initiative for better waste management practices.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 18,
            ],
            [
                'title' => 'Senior Citizens Day',
                'description' => 'Honoring and celebrating our community elders.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 19,
            ],
            [
                'title' => 'Island Sports Day',
                'description' => 'Annual sports competition bringing together all age groups.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 20,
            ],
            [
                'title' => 'Marine Biology Workshop',
                'description' => 'Educational session about local marine ecosystems.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 21,
            ],
            [
                'title' => 'Local Food Festival',
                'description' => 'Celebrating traditional Maldivian cuisine and cooking methods.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 22,
            ],
            [
                'title' => 'Digital Skills Workshop',
                'description' => 'Teaching essential digital skills to community members.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 23,
            ],
            [
                'title' => 'Mangrove Conservation Day',
                'description' => 'Protecting and restoring local mangrove ecosystems.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 24,
            ],
            [
                'title' => 'Youth Innovation Fair',
                'description' => 'Showcasing innovative projects by local youth.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 25,
            ],
            [
                'title' => 'Island Heritage Day',
                'description' => 'Celebrating the rich cultural heritage of Komandoo.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 26,
            ],
            [
                'title' => 'Community Garden Project',
                'description' => 'Initiative to create sustainable community gardens.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 27,
            ],
            [
                'title' => 'Ocean Safety Workshop',
                'description' => 'Teaching water safety and rescue techniques.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 28,
            ],
            [
                'title' => 'Island Tech Meetup',
                'description' => 'Bringing together tech enthusiasts and professionals.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 29,
            ],
            [
                'title' => 'Sustainable Tourism Forum',
                'description' => 'Discussing responsible tourism practices.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 30,
            ],
            [
                'title' => 'Children\'s Art Day',
                'description' => 'Creative activities and art exhibitions for young artists.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 31,
            ],
            [
                'title' => 'Island Fitness Challenge',
                'description' => 'Community fitness event promoting healthy lifestyle.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 32,
            ],
            [
                'title' => 'Traditional Medicine Workshop',
                'description' => 'Learning about traditional healing practices.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 33,
            ],
            [
                'title' => 'Renewable Energy Exhibition',
                'description' => 'Showcasing sustainable energy solutions for islands.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 34,
            ],
            [
                'title' => 'Island Photography Contest',
                'description' => 'Annual competition celebrating island beauty through photography.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 35,
            ],
            [
                'title' => 'Marine Debris Collection',
                'description' => 'Community effort to clean our ocean and beaches.',
                'image_path' => 'images/galleries/original/gallery-photo.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/gallery-photo.jpg',
                'sort_order' => 36,
            ],
        ];

        foreach ($posts as $post) {
            $filename = pathinfo($post['image_path'], PATHINFO_FILENAME);
            $gallery->posts()->create([
                'title' => $post['title'],
                'description' => $post['description'],
                'image_path' => 'images/galleries/original/' . $filename . '.jpg',
                'thumbnail_image' => 'images/galleries/thumbnails/' . $filename . '.jpg',
                'sort_order' => $post['sort_order'],
            ]);
        }
    }
}
