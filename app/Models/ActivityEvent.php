<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ActivityEvent extends Model
{
    protected $fillable = [
        'activity_id',
        'title',
        'description',
        'event_date'
    ];

    protected $casts = [
        'event_date' => 'datetime'
    ];

    public function activity(): BelongsTo
    {
        return $this->belongsTo(Activity::class);
    }
}
