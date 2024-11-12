<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'tag',
        'img',
        'title',
        'subtitle',
        'cost',
        'content',
        'thumbnail',
        'gallery_id'
    ];

    protected $appends = ['image_url', 'thumbnail_url'];

    public function getImageUrlAttribute()
    {
        return $this->img ? Storage::url($this->img) : null;
    }

    public function getThumbnailUrlAttribute()
    {
        return $this->thumbnail ? Storage::url($this->thumbnail) : null;
    }

    public function gallery(): BelongsTo
    {
        return $this->belongsTo(Gallery::class);
    }
}
