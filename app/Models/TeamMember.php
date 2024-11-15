<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class TeamMember extends Model
{
    protected $fillable = [
        'name',
        'role',
        'image',
        'thumbnail_image',
        'description',
        'facebook_url',
        'twitter_url',
        'instagram_url',
        'order',
        'is_active'
    ];

    protected $appends = ['image_url', 'thumbnail_image_url'];

    public function getImageUrlAttribute()
    {
        return $this->image ? Storage::url($this->image) : null;
    }

    public function getThumbnailImageUrlAttribute()
    {
        return $this->thumbnail_image ? Storage::url($this->thumbnail_image) : null;
    }
}
