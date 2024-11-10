<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Storage;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'tag',
        'img',
        'title',
        'subtitle',
        'cost',
        'content'
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return $this->img ? Storage::url($this->img) : null;
    }
}
