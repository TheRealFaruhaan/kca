<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class GalleryPost extends Model
{
    protected $fillable = [
        'gallery_id',
        'title',
        'description',
        'image_path',
        'thumbnail_image',
        'sort_order'
    ];

    protected $appends = ['image_path_url', 'thumbnail_image_url'];

    // Get featured image URL
    public function getImagePathUrlAttribute()
    {
        return $this->image_path ? Storage::url($this->image_path) : null;
    }

    public function getThumbnailImageUrlAttribute()
    {
        return $this->thumbnail_image ? Storage::url($this->thumbnail_image) : null;
    }

    public function gallery(): BelongsTo
    {
        return $this->belongsTo(Gallery::class);
    }
}
