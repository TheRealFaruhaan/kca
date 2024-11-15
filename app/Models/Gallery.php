<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Gallery extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'featured_image',
        'thumbnail_image',
        'status'
    ];

    protected $appends = ['featured_image_url', 'thumbnail_image_url'];

    // Get featured image URL
    public function getFeaturedImageUrlAttribute()
    {
        return $this->featured_image ? Storage::url($this->featured_image) : null;
    }

    public function getThumbnailImageUrlAttribute()
    {
        return $this->thumbnail_image ? Storage::url($this->thumbnail_image) : null;
    }

    public function posts(): HasMany
    {
        return $this->hasMany(GalleryPost::class)->orderBy('sort_order');
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function activities()
    {
        return $this->belongsToMany(Activity::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($gallery) {
            if (! $gallery->slug) {
                $gallery->slug = Str::slug($gallery->title);
            }
        });

        static::updating(function ($gallery) {
            if ($gallery->isDirty('title') && ! $gallery->isDirty('slug')) {
                $gallery->slug = Str::slug($gallery->title);
            }
        });
    }
}
