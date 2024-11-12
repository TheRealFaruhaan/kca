<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'category',
        'excerpt',
        'tags',
        'featured_image',
        'thumbnail_image',
        'publication_date',
        'slug',
        'status'
    ];

    protected $casts = [
        'tags' => 'array',
        'publication_date' => 'datetime',
    ];

    protected $appends = ['featured_image_url', 'thumbnail_image_url'];

    // Auto-generate slug when title is set
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    // Get featured image URL
    public function getFeaturedImageUrlAttribute()
    {
        return $this->featured_image ? Storage::url($this->featured_image) : null;
    }

    // Get thumbnail image URL
    public function getThumbnailImageUrlAttribute()
    {
        return $this->thumbnail_image ? Storage::url($this->thumbnail_image) : null;
    }

    // Get excerpt or generate from content
    public function getExcerptAttribute($value)
    {
        if ($value) {
            return $value;
        }

        return Str::limit(strip_tags($this->content), 150);
    }

    // Scope for published posts
    public function scopePublished($query)
    {
        return $query->where('status', 'published')
            ->where('publication_date', '<=', now());
    }

    // Scope for posts by category
    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    // Scope for posts with tag
    public function scopeWithTag($query, $tag)
    {
        return $query->where('tags', 'like', "%$tag%");
    }

    // Add these relationships to your BlogPost model
    public function category()
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
