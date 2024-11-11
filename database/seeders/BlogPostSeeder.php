<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use App\Models\BlogCategory;

class BlogPostSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the blog posts images directory exists
        Storage::disk('public')->makeDirectory('images/blogposts');

        // Copy sample blog post image to storage
        $sourceDir = resource_path('images/blogposts');
        $targetDir = storage_path('app/public/');

        if (File::exists($sourceDir)) {
            File::copyDirectory($sourceDir, $targetDir);
        }

        $categoryIds = BlogCategory::pluck('id')->toArray();

        $posts = [
            [
                'title' => 'Empowering Communities Through Local Initiatives',
                'content' => "Local initiatives play a vital role in community development. They bring people together, address specific needs, and create lasting positive change. Through grassroots efforts, communities can build resilience and create sustainable solutions.\n\nWhen local residents come together to tackle challenges, they often find innovative approaches that work best for their unique situation. This bottom-up approach ensures that solutions are culturally appropriate and have community buy-in.\n\nSuccessful community initiatives often start small but can grow to have significant impact. They may begin with a single project, like a community garden or youth program, and expand as more people get involved and see the benefits.",
                'excerpt' => 'Exploring how local initiatives strengthen communities and create positive change through grassroots efforts and collaboration.',
                'slug' => 'empowering-communities-local-initiatives-1',
                'blog_category_id' => $categoryIds[0],
                'publication_date' => '2023-10-15',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2023-10-15',
                'updated_at' => '2023-10-15',
                'tags' => [1, 3, 4]
            ],
            [
                'title' => 'Sustainable Development in Urban Areas',
                'content' => "Urban sustainability is becoming increasingly important as cities continue to grow. Smart planning and green initiatives can help create more livable urban environments.\n\nKey aspects include renewable energy adoption, efficient public transportation, and green building practices. These elements work together to reduce environmental impact while improving quality of life.\n\nCommunity involvement is essential for successful urban sustainability projects. When residents participate in planning and implementation, initiatives are more likely to succeed and create lasting positive change.",
                'excerpt' => 'Examining sustainable development strategies for growing urban areas and the importance of community participation.',
                'slug' => 'sustainable-development-urban-areas-1',
                'blog_category_id' => $categoryIds[1],
                'publication_date' => '2023-11-01',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2023-11-01',
                'updated_at' => '2023-11-01',
                'tags' => [2, 4, 5]
            ],
            [
                'title' => 'Building Strong Community Partnerships',
                'content' => "Effective partnerships are the foundation of successful community development. When organizations work together, they can achieve more than working alone.\n\nPartnerships can take many forms, from formal agreements between institutions to informal collaborations among community groups. The key is finding common ground and shared objectives.\n\nSuccessful partnerships require clear communication, mutual respect, and a commitment to shared goals. When these elements are present, partnerships can create lasting positive change in communities.",
                'excerpt' => 'Understanding the importance of partnerships in community development and strategies for building effective collaborations.',
                'slug' => 'building-strong-community-partnerships-1',
                'blog_category_id' => $categoryIds[2],
                'publication_date' => '2023-11-15',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2023-11-15',
                'updated_at' => '2023-11-15',
                'tags' => [1, 2, 3, 5]
            ],
            [
                'title' => 'Innovation in Environmental Conservation',
                'content' => "Modern technology is revolutionizing how we approach environmental conservation. From satellite monitoring to AI-powered wildlife tracking, new tools are enhancing our ability to protect natural resources.\n\nThese innovations allow conservationists to collect and analyze data more effectively, leading to better-informed decisions and more targeted conservation efforts.\n\nCommunity involvement remains crucial, with technology making it easier for citizens to participate in conservation efforts through mobile apps and citizen science initiatives.",
                'excerpt' => 'Exploring how modern technology and innovation are transforming environmental conservation efforts.',
                'slug' => 'innovation-environmental-conservation-1',
                'blog_category_id' => $categoryIds[1],
                'publication_date' => '2023-12-01',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2023-12-01',
                'updated_at' => '2023-12-01',
                'tags' => [2, 4, 5]
            ],
            [
                'title' => 'Digital Inclusion in Modern Communities',
                'content' => "Digital inclusion is becoming increasingly important in today's connected world. Ensuring everyone has access to technology and digital literacy skills is crucial for community development.\n\nPrograms that provide technology access and training can help bridge the digital divide and create more opportunities for all community members.\n\nSuccessful digital inclusion initiatives often combine hardware access with educational support and ongoing community engagement.",
                'excerpt' => 'Examining strategies for promoting digital inclusion and bridging the technology gap in communities.',
                'slug' => 'digital-inclusion-modern-communities-1',
                'blog_category_id' => $categoryIds[2],
                'publication_date' => '2024-01-15',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-01-15',
                'updated_at' => '2024-01-15',
                'tags' => [1, 3, 5]
            ],
            [
                'title' => 'Youth Leadership in Community Development',
                'content' => "Engaging young people in community leadership roles creates lasting positive change. When youth are empowered to take initiative, they bring fresh perspectives and energy to community challenges.\n\nSuccessful youth leadership programs provide mentorship, practical experience, and real responsibility. This combination helps develop confident, capable community leaders.\n\nMany communities find that youth-led initiatives often address previously overlooked issues and create innovative solutions that benefit all age groups.",
                'excerpt' => 'Exploring the impact of youth leadership programs and their role in shaping community development.',
                'slug' => 'youth-leadership-community-development-1',
                'blog_category_id' => $categoryIds[0],
                'publication_date' => '2024-01-30',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-01-30',
                'updated_at' => '2024-01-30',
                'tags' => [1, 3, 4]
            ],
            [
                'title' => 'Green Infrastructure Solutions',
                'content' => "Green infrastructure combines natural processes with urban planning to create sustainable cities. From rain gardens to urban forests, these solutions provide multiple benefits to communities.\n\nEffective green infrastructure can improve air quality, reduce urban heat islands, and manage stormwater naturally. These systems often cost less than traditional infrastructure while providing additional environmental benefits.\n\nSuccessful implementation requires careful planning and community support, but the long-term benefits make it a worthwhile investment.",
                'excerpt' => 'Examining the benefits and implementation of green infrastructure in urban environments.',
                'slug' => 'green-infrastructure-solutions-1',
                'blog_category_id' => $categoryIds[1],
                'publication_date' => '2024-02-15',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-02-15',
                'updated_at' => '2024-02-15',
                'tags' => [2, 4, 5]
            ],
            [
                'title' => 'Cultural Preservation in Modern Cities',
                'content' => "Preserving cultural heritage while embracing urban development is a crucial challenge for modern cities. Successful approaches balance progress with tradition.\n\nCommunity-led preservation efforts often prove most effective, as they incorporate local knowledge and values. Digital technologies now offer new ways to document and share cultural heritage.\n\nIntegrating cultural preservation into urban planning helps maintain community identity while allowing for necessary growth and development.",
                'excerpt' => 'Investigating strategies for preserving cultural heritage in rapidly developing urban areas.',
                'slug' => 'cultural-preservation-modern-cities-1',
                'blog_category_id' => $categoryIds[2],
                'publication_date' => '2024-03-01',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-03-01',
                'updated_at' => '2024-03-01',
                'tags' => [1, 2, 5]
            ],
            [
                'title' => 'Social Innovation in Healthcare Access',
                'content' => "Innovative approaches to healthcare access are transforming community well-being. Mobile clinics, telehealth services, and community health workers are making healthcare more accessible.\n\nTechnology plays a crucial role in these innovations, but the human element remains essential. Successful programs combine digital solutions with personal connection.\n\nCommunity-based healthcare initiatives often lead to better health outcomes and more sustainable healthcare systems.",
                'excerpt' => 'Analyzing innovative solutions for improving healthcare access in communities.',
                'slug' => 'social-innovation-healthcare-access-1',
                'blog_category_id' => $categoryIds[0],
                'publication_date' => '2024-03-15',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-03-15',
                'updated_at' => '2024-03-15',
                'tags' => [3, 4, 5]
            ],
            [
                'title' => 'Urban Agriculture Initiatives',
                'content' => "Urban agriculture is revolutionizing how cities approach food security and community development. From rooftop gardens to community farms, these initiatives create multiple benefits.\n\nBeyond providing fresh food, urban agriculture projects often become community hubs that foster education and social connection. They can also help reduce urban heat islands and improve biodiversity.\n\nSuccessful programs often integrate with local schools and community organizations to maximize their impact.",
                'excerpt' => 'Exploring the growth and impact of urban agriculture in modern cities.',
                'slug' => 'urban-agriculture-initiatives-1',
                'blog_category_id' => $categoryIds[1],
                'publication_date' => '2024-03-30',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-03-30',
                'updated_at' => '2024-03-30',
                'tags' => [2, 3, 4]
            ],
            [
                'title' => 'Digital Inclusion in Modern Communities',
                'content' => "Digital inclusion is becoming increasingly important in today's connected world. Ensuring everyone has access to technology and digital literacy skills is crucial for community development.\n\nPrograms that provide technology access and training can help bridge the digital divide and create more opportunities for all community members.\n\nSuccessful digital inclusion initiatives often combine hardware access with educational support and ongoing community engagement.",
                'excerpt' => 'Examining strategies for promoting digital inclusion and bridging the technology gap in communities.',
                'slug' => 'digital-inclusion-modern-communities-2',
                'blog_category_id' => $categoryIds[2],
                'publication_date' => '2024-01-15',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-01-15',
                'updated_at' => '2024-01-15',
                'tags' => [1, 3, 5]
            ],
            [
                'title' => 'Youth Leadership in Community Development',
                'content' => "Engaging young people in community leadership roles creates lasting positive change. When youth are empowered to take initiative, they bring fresh perspectives and energy to community challenges.\n\nSuccessful youth leadership programs provide mentorship, practical experience, and real responsibility. This combination helps develop confident, capable community leaders.\n\nMany communities find that youth-led initiatives often address previously overlooked issues and create innovative solutions that benefit all age groups.",
                'excerpt' => 'Exploring the impact of youth leadership programs and their role in shaping community development.',
                'slug' => 'youth-leadership-community-development-2',
                'blog_category_id' => $categoryIds[0],
                'publication_date' => '2024-01-30',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-01-30',
                'updated_at' => '2024-01-30',
                'tags' => [1, 3, 4]
            ],
            [
                'title' => 'Green Infrastructure Solutions',
                'content' => "Green infrastructure combines natural processes with urban planning to create sustainable cities. From rain gardens to urban forests, these solutions provide multiple benefits to communities.\n\nEffective green infrastructure can improve air quality, reduce urban heat islands, and manage stormwater naturally. These systems often cost less than traditional infrastructure while providing additional environmental benefits.\n\nSuccessful implementation requires careful planning and community support, but the long-term benefits make it a worthwhile investment.",
                'excerpt' => 'Examining the benefits and implementation of green infrastructure in urban environments.',
                'slug' => 'green-infrastructure-solutions-2',
                'blog_category_id' => $categoryIds[1],
                'publication_date' => '2024-02-15',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-02-15',
                'updated_at' => '2024-02-15',
                'tags' => [2, 4, 5]
            ],
            [
                'title' => 'Cultural Preservation in Modern Cities',
                'content' => "Preserving cultural heritage while embracing urban development is a crucial challenge for modern cities. Successful approaches balance progress with tradition.\n\nCommunity-led preservation efforts often prove most effective, as they incorporate local knowledge and values. Digital technologies now offer new ways to document and share cultural heritage.\n\nIntegrating cultural preservation into urban planning helps maintain community identity while allowing for necessary growth and development.",
                'excerpt' => 'Investigating strategies for preserving cultural heritage in rapidly developing urban areas.',
                'slug' => 'cultural-preservation-modern-cities-2',
                'blog_category_id' => $categoryIds[2],
                'publication_date' => '2024-03-01',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-03-01',
                'updated_at' => '2024-03-01',
                'tags' => [1, 2, 5]
            ],
            [
                'title' => 'Social Innovation in Healthcare Access',
                'content' => "Innovative approaches to healthcare access are transforming community well-being. Mobile clinics, telehealth services, and community health workers are making healthcare more accessible.\n\nTechnology plays a crucial role in these innovations, but the human element remains essential. Successful programs combine digital solutions with personal connection.\n\nCommunity-based healthcare initiatives often lead to better health outcomes and more sustainable healthcare systems.",
                'excerpt' => 'Analyzing innovative solutions for improving healthcare access in communities.',
                'slug' => 'social-innovation-healthcare-access-2',
                'blog_category_id' => $categoryIds[0],
                'publication_date' => '2024-03-15',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-03-15',
                'updated_at' => '2024-03-15',
                'tags' => [3, 4, 5]
            ],
            [
                'title' => 'Urban Agriculture Initiatives',
                'content' => "Urban agriculture is revolutionizing how cities approach food security and community development. From rooftop gardens to community farms, these initiatives create multiple benefits.\n\nBeyond providing fresh food, urban agriculture projects often become community hubs that foster education and social connection. They can also help reduce urban heat islands and improve biodiversity.\n\nSuccessful programs often integrate with local schools and community organizations to maximize their impact.",
                'excerpt' => 'Exploring the growth and impact of urban agriculture in modern cities.',
                'slug' => 'urban-agriculture-initiatives-2',
                'blog_category_id' => $categoryIds[1],
                'publication_date' => '2024-03-30',
                'featured_image' => '43234423423.png',
                'status' => 'published',
                'created_at' => '2024-03-30',
                'updated_at' => '2024-03-30',
                'tags' => [2, 3, 4]
            ],
        ];

        foreach ($posts as $postData) {
            $tags = $postData['tags'];
            unset($postData['tags']);

            $post = BlogPost::create($postData);
            $post->tags()->attach($tags);
        }
    }
}
