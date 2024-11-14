<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Entity extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'logo',
        'thumbnail_logo',
        'website_url',
        'email',
        'phone',
        'address',
        'social_media',
        'order',
        'is_active'
    ];

    protected $casts = [
        'social_media' => 'array',
        'is_active' => 'boolean',
    ];

    protected $appends = ['logo_url', 'thumbnail_logo_url'];

    public function getLogoUrlAttribute()
    {
        return $this->logo ? Storage::url($this->logo) : null;
    }

    public function getThumbnailLogoUrlAttribute()
    {
        return $this->thumbnail_logo ? Storage::url($this->thumbnail_logo) : null;
    }

    // Relationships
    public function activities(): BelongsToMany
    {
        return $this->belongsToMany(Activity::class)
            ->withTimestamps();
    }

    public function galleries(): HasMany
    {
        return $this->hasMany(Gallery::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }
}
