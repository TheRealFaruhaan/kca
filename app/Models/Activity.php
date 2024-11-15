<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

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
        'gallery_id',
        'start_date',
        'end_date',
        'slug',
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

    public function entities(): BelongsToMany
    {
        return $this->belongsToMany(Entity::class)
            ->withTimestamps();
    }

    public function events()
    {
        return $this->hasMany(ActivityEvent::class)->orderBy('event_date');
    }

    public function galleries()
    {
        return $this->belongsToMany(Gallery::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($activity) {
            if (! $activity->slug) {
                $activity->slug = Str::slug($activity->title);
            }
        });

        static::updating(function ($activity) {
            if ($activity->isDirty('title') && ! $activity->isDirty('slug')) {
                $activity->slug = Str::slug($activity->title);
            }
        });
    }
}
