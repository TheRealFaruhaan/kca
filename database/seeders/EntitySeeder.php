<?php

namespace Database\Seeders;

use App\Models\Entity;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Intervention\Image\Laravel\Facades\Image;

class EntitySeeder extends Seeder
{
    public function run(): void
    {
        // Ensure directories exist
        Storage::disk('public')->makeDirectory('images/entities/logos/original');
        Storage::disk('public')->makeDirectory('images/entities/logos/thumbnails');

        // Copy sample logos if they exist
        $sourceDir = resource_path('images/entities');
        $originalDir = storage_path('app/public/images/entities/logos/original');
        $thumbnailDir = storage_path('app/public/images/entities/logos/thumbnails');

        if (File::exists($sourceDir)) {
            $files = File::files($sourceDir);
            foreach ($files as $file) {
                $filename = pathinfo($file->getFilename(), PATHINFO_FILENAME);
                $extension = strtolower(pathinfo($file->getFilename(), PATHINFO_EXTENSION));

                if ($extension === 'svg') {
                    // For SVG files, just copy the original file to both directories
                    File::copy(
                        $file->getPathname(),
                        $originalDir . '/' . $filename . '.svg'
                    );
                    File::copy(
                        $file->getPathname(),
                        $thumbnailDir . '/' . $filename . '.svg'
                    );
                } else {
                    // For other image types, process with Intervention Image
                    $image = Image::read($file->getPathname());

                    // Save original with original format
                    $image->scaleDown(width: 800)
                        ->save(
                            $originalDir . '/' . $filename . '.' . $extension,
                            quality: 85
                        );

                    // Create and save thumbnail with original format
                    $image->scaleDown(width: 200)
                        ->save(
                            $thumbnailDir . '/' . $filename . '.' . $extension,
                            quality: 80
                        );
                }
            }
        }

        $entities = [
            [
                'name' => 'Local Youth Council',
                'description' => 'Representing and empowering young voices in our community.',
                'logo' => 'images/entities/logos/original/EntityLogo.jpg',
                'thumbnail_logo' => 'images/entities/logos/thumbnails/EntityLogo.jpg',
                'website_url' => 'https://youthcouncil.example.com',
                'email' => 'contact@youthcouncil.example.com',
                'social_media' => [
                    'facebook' => 'https://facebook.com/youthcouncil',
                    'instagram' => 'https://instagram.com/youthcouncil'
                ],
                'order' => 1,
            ],
            [
                'name' => 'Ali Hussain',
                'description' => "Dedicated to preserving and protecting our island's natural resources.",
                'order' => 2,
            ],
            [
                'name' => 'Cultural Heritage Foundation',
                'description' => 'Preserving and promoting our rich cultural heritage for future generations.',
                'logo' => 'images/entities/logos/original/EntityLogo.png',
                'thumbnail_logo' => 'images/entities/logos/thumbnails/EntityLogo.png',
                'website_url' => 'https://heritage.example.com',
                'email' => 'contact@heritage.example.com',
                'social_media' => [
                    'instagram' => 'https://instagram.com/heritage',
                    'youtube' => 'https://youtube.com/heritage'
                ],
                'order' => 3,
            ],
            [
                'name' => "Women's Empowerment Network",
                'description' => 'Supporting and empowering women through education, business, and leadership initiatives.',
                'logo' => 'images/entities/logos/original/EntityLogo.jpg',
                'thumbnail_logo' => 'images/entities/logos/thumbnails/EntityLogo.jpg',
                'website_url' => 'https://womensnetwork.example.com',
                'email' => 'info@womensnetwork.example.com',
                'social_media' => [
                    'facebook' => 'https://facebook.com/womensnetwork',
                    'linkedin' => 'https://linkedin.com/company/womensnetwork'
                ],
                'order' => 4,
            ],
            [
                'name' => 'Marine Conservation Alliance',
                'description' => 'Working to protect our marine ecosystems and promote sustainable fishing practices.',
                'logo' => 'images/entities/logos/original/EntityLogo.svg',
                'thumbnail_logo' => 'images/entities/logos/thumbnails/EntityLogo.svg',
                'website_url' => 'https://marine-alliance.example.com',
                'email' => 'contact@marine-alliance.example.com',
                'social_media' => [
                    'instagram' => 'https://instagram.com/marinealliance',
                    'twitter' => 'https://twitter.com/marinealliance'
                ],
                'order' => 5,
            ],
            [
                'name' => 'Education Development Trust',
                'description' => 'Enhancing educational opportunities and promoting academic excellence in our community.',
                'logo' => 'images/entities/logos/original/EntityLogo.png',
                'thumbnail_logo' => 'images/entities/logos/thumbnails/EntityLogo.png',
                'website_url' => 'https://edu-trust.example.com',
                'email' => 'info@edu-trust.example.com',
                'social_media' => [
                    'facebook' => 'https://facebook.com/edutrust',
                    'youtube' => 'https://youtube.com/edutrust'
                ],
                'order' => 6,
            ],
            [
                'name' => 'Small Business Association',
                'description' => 'Supporting local entrepreneurs and promoting sustainable economic development.',
                'logo' => 'images/entities/logos/original/EntityLogo.jpg',
                'thumbnail_logo' => 'images/entities/logos/thumbnails/EntityLogo.jpg',
                'website_url' => 'https://business-assoc.example.com',
                'email' => 'contact@business-assoc.example.com',
                'social_media' => [
                    'linkedin' => 'https://linkedin.com/company/businessassoc',
                    'twitter' => 'https://twitter.com/businessassoc'
                ],
                'order' => 7,
            ],
            [
                'name' => 'Sports Development Council',
                'description' => 'Promoting sports excellence and healthy lifestyle through various athletic programs.',
                'logo' => 'images/entities/logos/original/EntityLogo.svg',
                'thumbnail_logo' => 'images/entities/logos/thumbnails/EntityLogo.svg',
                'website_url' => 'https://sports-council.example.com',
                'email' => 'info@sports-council.example.com',
                'social_media' => [
                    'instagram' => 'https://instagram.com/sportscouncil',
                    'facebook' => 'https://facebook.com/sportscouncil'
                ],
                'order' => 8,
            ],
            [
                'name' => 'Digital Innovation Hub',
                'description' => 'Fostering technological innovation and digital literacy in our community.',
                'logo' => 'images/entities/logos/original/EntityLogo.png',
                'thumbnail_logo' => 'images/entities/logos/thumbnails/EntityLogo.png',
                'website_url' => 'https://innovation-hub.example.com',
                'email' => 'contact@innovation-hub.example.com',
                'social_media' => [
                    'twitter' => 'https://twitter.com/innovationhub',
                    'github' => 'https://github.com/innovationhub'
                ],
                'order' => 9,
            ]
        ];

        foreach ($entities as $entityData) {
            $entityData['slug'] = Str::slug($entityData['name']);
            $entity = Entity::create($entityData);

            // Attach random number of activities (between 2 and 5) to each entity
            $activityIds = \App\Models\Activity::inRandomOrder()
                ->take(rand(2, 5))
                ->pluck('id');

            $entity->activities()->attach($activityIds);
        }
    }
}
